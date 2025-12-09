import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event;
import TauriRTCErrorEvent from '../rtc_error_event';
import { TypedArray, UnlistenFn } from '..';

/**
 * TauriRTCDataChannel represents a WebRTC-style data channel for sending and receiving data.
 *
 * **Events:**
 * - `"open"` — Emitted when the channel becomes open and ready to send data.
 * - `"message"` — Emitted when a message is received. The event's `data` property contains the received data.
 * - `"close"` — Emitted when the channel is closed.
 * - `"closing"` — Emitted when the channel starts closing.
 * - `"error"` — Emitted if an error occurs (sending fails, closing fails, etc.).
 *
 * **Example:**
 * ```ts
 * const channel = new TauriRTCDataChannel();
 * channel.addEventListener("open", () => console.log("Channel opened"));
 * channel.addEventListener("message", (event) => console.log("Received:", event.data));
 * channel.addEventListener("close", () => console.log("Channel closed"));
 * channel.addEventListener("error", (event) => console.error("Error:", event.message));
 * ```
 */
export default class TauriRTCDataChannel extends EventTarget {
    private readonly BASE_TAURI_EVENT_NAME = `rtc://datachannel`;

    private _unlisten_open!: Promise<UnlistenFn>;
    private _unlisten_close!: Promise<UnlistenFn>;
    private _unlisten_error!: Promise<UnlistenFn>;
    private _unlisten_message!: Promise<UnlistenFn>;
    private _unlisten_bufferedamountlow!: Promise<UnlistenFn>;

    private _bufferedAmount: number = 0;
    private _id: number = -1;
    private _label: string = "";
    private _maxPacketLifeTime: number | null = null;
    private _maxRetransmits: number | null = null;
    private _negotiated: boolean = false;
    private _ordered: boolean = false;
    private _protocol: string = "";
    private _readyState: "connecting" | "open" | "closing" | "closed" = "closed";

    public binaryType: string = "";
    public bufferedAmountLowThreshold: number = 0;

    // -----------------------
    // Internal event dispatcher
    // -----------------------
    private _emit(eventName: string, event: Event) {
        // A) Dispatch to addEventListener listeners
        this.dispatchEvent(event);

        // B) Dispatch to onxxx property handler
        const handler = (this as any)[`on${eventName}`];
        if (typeof handler === "function") {
            handler.call(this, event);
        }
    }

    // -----------------------
    // Attach tauri backend events
    // -----------------------
    public setupBackendEvents() {
        // --- Open ---
        this._unlisten_open = listen(`${this.BASE_TAURI_EVENT_NAME}-open-${this._id}`, () => {
            this._readyState = "open";
            this._emit("open", new Event("open"));
        });

        // --- Close ---
        this._unlisten_close = listen(`${this.BASE_TAURI_EVENT_NAME}-close-${this._id}`, () => {
            this._readyState = "closed";
            this._emit("close", new Event("close"));
        });

        // --- Error ---
        this._unlisten_error = listen(`${this.BASE_TAURI_EVENT_NAME}-error-${this._id}`, (ev: { payload: { message: any; }; }) => {
            this._emit("error",
                new ErrorEvent("error", { message: ev.payload?.message ?? "Unknown error" })
            );
        });

        // --- Message ---
        this._unlisten_message = listen(`${this.BASE_TAURI_EVENT_NAME}-message-${this._id}`, (ev: { payload: { data: any; }; }) => {
            this._emit("message",
                new MessageEvent("message", { data: ev.payload?.data })
            );
        });

        // --- BufferedAmountLow ---
        this._unlisten_bufferedamountlow = listen(`${this.BASE_TAURI_EVENT_NAME}-bufferedamountlow-${this._id}`, () => {
            this._emit("bufferedamountlow", new Event("bufferedamountlow"));
        });
    }

    // Methods
    // -------

    /**
     * Closes the data channel.
     *
     * If the channel is already closed, this method does nothing.
     * Otherwise, it transitions the channel through the `"closing"` state to `"closed"`.
     * During the process, it emits lifecycle events to allow listeners to react to state changes.
     *
     * **Events emitted:**
     * - `"closing"` — emitted immediately when the close process starts.
     * - `"error"` — emitted if closing the channel fails for any reason.
     * - `"close"` — emitted when the channel has been successfully closed.
     *
     * **State transitions:**
     * - `"open"` or `"connecting"` → `"closing"` → `"closed"`
     *
     * @async
     * @returns {Promise<void>} Resolves once the channel has been fully closed.
     *
     * @example
     * ```ts
     * const channel = new TauriRTCDataChannel();
     * channel.addEventListener("close", () => console.log("Channel closed"));
     * await channel.close();
     * ```
     */
    public async close(): Promise<void> {
        if (this._readyState === "closed") return;
        
        this._readyState = "closing";
        this._emit("closing", new Event("closing"))
        
        try {
            // await invoke("datachannel_close", { id: this._id });
        }
        catch {
            this._emit("error", new ErrorEvent("datachannel_close_error"));
        }

        this._readyState = "closed";
        this._emit("close", new Event("close"));
    }

    /**
     * Sends data over the data channel.
     *
     * The data can be one of the following types:
     * - `string`
     * - `Blob`
     * - `ArrayBuffer`
     * - TypedArray (e.g., `Uint8Array`, `Float32Array`, etc.)
     * - `DataView`
     *
     * The method converts the data into an `ArrayBuffer` before sending it to the underlying transport.
     *
     * @async
     * @param {string | Blob | ArrayBuffer | TypedArray | DataView} data - The data to send.
     * @throws {DOMException} Throws `InvalidStateError` if the channel is not open.
     * @throws {TypeError} Throws if the data type is unsupported.
     *
     * **Events emitted:**
     * - `"error"` — emitted if sending fails for any reason.
     *
     * @example
     * ```ts
     * const channel = new TauriRTCDataChannel();
     * await channel.send("Hello, world!");
     * const buffer = new Uint8Array([1, 2, 3]);
     * await channel.send(buffer);
     * ```
     */
    public async send(data: string | Blob | ArrayBuffer | TypedArray | DataView): Promise<void> {
        if (this._readyState !== "open") {
            throw new DOMException("Cannot send because the DataChannel is not open", "InvalidStateError");
        }

        try {
            let payload: ArrayBuffer;

            if (typeof data === "string") {
                payload = new TextEncoder().encode(data).buffer;
            } else if (data instanceof ArrayBuffer) {
                payload = data;
            } else if (ArrayBuffer.isView(data)) {
                payload = data.buffer as ArrayBuffer;
            } else if (data instanceof DataView) {
                payload = data.buffer as ArrayBuffer;
            } else if (data instanceof Blob) {
                payload = await data.arrayBuffer();
            } else {
                throw new TypeError("Unsupported data type for DataChannel.send()");
            }

            // await invoke("datachannel_send", { id: this._id, data: payload });

        } catch (err: any) {
            // Emit error event like browsers
            this._emit("error", new ErrorEvent("error", { message: err?.message ?? "Failed to send data" }));
        }
    }

    // Events
    // ------
    // --- Event handler properties ---
    /**
     * Called when the data channel has been opened and is ready to send data.
     * @type {(ev: RTCDataChannelEvent) => void}
     */
    onopen: ((ev: RTCDataChannelEvent) => void) = (ev: RTCDataChannelEvent) => {};

    /**
     * Called when the data channel has fully closed.
     * @type {(ev: Event) => void}
     */
    onclose: ((ev: Event) => void) = (ev: Event) => {};

    /**
     * Called when the data channel is in the process of closing.
     * @type {(ev: Event) => void}
     */
    onclosing: ((ev: Event) => void) = (ev: Event) => {};

    /**
     * Called when an error occurs on the data channel.
     * @type {(ev: TauriRTCErrorEvent) => void}
     */
    onerror: ((ev: TauriRTCErrorEvent) => void) = (ev: TauriRTCErrorEvent) => {};

    /**
     * Called when a message is received from the remote peer.
     * The `data` property of the event contains the received message.
     * @type {(ev: MessageEvent) => void}
     */
    onmessage: ((ev: MessageEvent) => void) = (ev: MessageEvent) => {};

    /**
     * Called when the buffered amount of outgoing data drops below the threshold.
     * @type {(ev: Event) => void}
     */
    onbufferedamountlow: ((ev: Event) => void) = (ev: Event) => {};

}