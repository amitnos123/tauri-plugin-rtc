import { TauriRtcRtpCapabilities, TauriRTCRtpSendParameters } from ".";
import TauriRTCDtmfSender from "../dtmf/rtc_dtmf_sender";
import TauriRTCDtlsTransport from "../rtc_dtls_transport";
import TauriRTCStatsReport from "../rtc_stats_report";
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
        if (kind !== "audio" && kind !== "video") {
            throw new TypeError("Invalid media kind");
        }

        // TODO: Add Tauri's Capabilities can do.
        return {
            codecs: [],
            headerExtensions: []
        };
    }

    constructor() {

    }
    
    // Methods
    // -------
    public getParameters(): TauriRTCRtpSendParameters {
        // getParameters
        //     The getParameters() method returns the RTCRtpSender object's current parameters for how track is encoded and transmitted to a remote RTCRtpReceiver.

        //     When getParameters is called, the user agent MUST run the following steps:

        //     1. Let sender be the RTCRtpSender object on which the getter was invoked.

        //     2. If sender.[[LastReturnedParameters]] is not null, return sender.[[LastReturnedParameters]], and abort these steps.

        //     3. Let result be a new RTCRtpSendParameters dictionary constructed as follows:

        //         * transactionId is set to a new unique identifier.
        //         * encodings is set to the value of the [[SendEncodings]] internal slot.
        //         * The headerExtensions sequence is populated based on the header extensions that have been negotiated for sending.
        //         * codecs is set to the value of the [[SendCodecs]] internal slot.
        //         * rtcp.cname is set to the CNAME of the associated RTCPeerConnection. rtcp.reducedSize is set to true if reduced-size RTCP has been negotiated for sending, and false otherwise.
            
        //     4. Set sender.[[LastReturnedParameters]] to result.

        //     5. Queue a task that sets sender.[[LastReturnedParameters]] to null.

        //     6. Return result.

    }

    public async getStats(): Promise<TauriRTCStatsReport> {
        //back end trigger
    }
    public setParameters(): TauriRTCRtpSendParameters {
        //back end trigger
    }
    public setStreams(): undefined {
        //back end trigger
    }
    public async replaceTrack(track: MediaStreamTrack | null): Promise<void> {
        //back end trigger
    }
}