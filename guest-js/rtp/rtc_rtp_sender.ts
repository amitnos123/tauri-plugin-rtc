import { TauriRtcRtpCapabilities } from ".";
import TauriRTCDtmfSender from "../dtmf/rtc_dtmf_sender";
import TauriRTCDtlsTransport from "../rtc_dtls_transport";
import TauriRTCRTPScriptTransform from "./rtc_rtp_script_transform";

export default class TauriRTCRTPSender {
    private _dtmf!: TauriRTCDtmfSender;
    private _track!: MediaStreamTrack;
    private _transport!: TauriRTCDtlsTransport;

    get dtmf(): TauriRTCDtmfSender {
        return this._dtmf;
    }
    get track(): MediaStreamTrack {
        return this._track;
    }
    get transport(): TauriRTCDtlsTransport {
        return this._transport;
    }

    public transform!: TauriRTCRTPScriptTransform;

    public static getCapabilities(kind: "audio" | "video"): TauriRtcRtpCapabilities {
    
    }

    constructor() {

    }
    
    // Methods
    // -------
    // getParameters()
    // getStats()
    // setParameters()
    // setStreams()
    // replaceTrack()
}