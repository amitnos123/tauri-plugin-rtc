import { DTLSTransportState } from ".";
import TauriRTCIceTransport from "./ice/rtc_ice_transport";
import TauriRTCError from "./rtc_error";
import TauriRTCErrorEvent from "./rtc_error_event";

export default class TauriRTCDtlsTransport extends EventTarget {
    private _iceTransport!: TauriRTCIceTransport;
    private _state: DTLSTransportState = "new";

    get iceTransport(): TauriRTCIceTransport {
        return this._iceTransport;
    }

    get state(): DTLSTransportState {
        return this._state;
    }

    private _setState(newState: DTLSTransportState) {
        if (this._state === newState) return;
        this._state = newState;

        const ev = new Event("statechange");

        // Call attribute handler
        if (this.onstatechange) this.onstatechange(ev);

        // Fire event for addEventListener listeners
        this.dispatchEvent(ev);
    }

    private _emitError(errorMessage: string) {
        const errorObject = new TauriRTCError(
            { errorDetail: "dtls-failure" },
            errorMessage
        );
        
        const event = new TauriRTCErrorEvent("error", { error: errorObject });

        if (this.onerror) this.onerror(event);

        this.dispatchEvent(event);
    }

    // Methods
    //---------
    public getRemoteCertificates(): ArrayBuffer[] {
        //TODO: invoke from backend
    }

    /**
     * Fired when a DTLS-level error occurs.
     * @type {(ev: TauriRTCErrorEvent) => void}
     */
    onerror: ((ev: TauriRTCErrorEvent) => void) | null = null;

    /**
     * Fired when `state` transitions (new → connecting → connected → closed → failed).
     * @type {(ev: Event) => void}
     */
    onstatechange: ((ev: Event) => void) | null = null;
}