import { SctpTransportState } from ".";
import TauriRTCDtlsTransport from "./rtc_dtls_transport";

export default class TauriRTCSctpTransport extends EventTarget {
    private _maxChannels!: number;
    private _maxMessageSize!: number;
    private _state!: SctpTransportState;
    private _transport!: TauriRTCDtlsTransport;

    private _setState(newState: SctpTransportState) {
        if (this._state === newState) return;
        this._state = newState;

        const ev = new Event("statechange");

        // Call attribute handler
        if (this.onstatechange) this.onstatechange(ev);

        // Fire event for addEventListener listeners
        this.dispatchEvent(ev);
    }

    /**
     * Fired when `state` transitions (connecting → connected → closed).
     * @type {(ev: Event) => void}
     */
    onstatechange: ((ev: Event) => void) | null = null;
}