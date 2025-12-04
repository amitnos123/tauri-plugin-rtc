import TauriRTCDtlsTransport from "../rtc_dtls_transport";
import TauriRTCRTPScriptTransform from "./rtc_rtp_script_transform";

export default class TauriRTCRTPReceiver {
    private _track: MediaStreamTrack;
    private _transport: TauriRTCDtlsTransport;

    get track(): MediaStreamTrack {
        return this._track;
    }
    get transport(): TauriRTCDtlsTransport {
        return this._transport;
    }

    public jitterBufferTarget: DOMHighResTimeStamp;
    public transform: TauriRTCRTPScriptTransform;

    public static getCapabilities() {

    }
    
    // Methods
    // -------
    // getContributingSources()
    // getParameters()
    // getStats()
    // getSynchronizationSources()
}