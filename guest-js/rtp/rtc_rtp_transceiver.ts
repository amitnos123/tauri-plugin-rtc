import { TauriRtcRtpDirection, TauriRtcRtpCodec } from ".";
import TauriRTCPeerConnection from "../peer/rtc_peer_connection";
import TauriRTCRTPReceiver from "./rtc_rtp_receiver";
import TauriRTCRTPSender from "./rtc_rtp_receiver";


export default class TauriRTCRTPTransceiver {
    private _currentDirection: TauriRtcRtpDirection | null = null; 
    private _mid: string | null = ""; 
    private _receiver!: TauriRTCRTPReceiver;
    private _sender!:  TauriRTCRTPSender;
    private _pc!: TauriRTCPeerConnection; // Owner
    private _kind!: "audio" | "video"; // Kind of media, audio or video
    private _defaultPreferredCodecs: RTCRtpCodec[] = [];
    private _preferredCodecs!: RTCRtpCodec[];

    get currentDirection(): string | null {
        return this._currentDirection;
    }
    get mid(): string | null {
        return this._mid;
    }
    get receiver(): TauriRTCRTPReceiver {
        return this._receiver;
    }
    get sender(): TauriRTCRTPSender{
        return this._sender;
    }

    public direction: string = "";

    constructor(pc: TauriRTCPeerConnection, kind: "audio" | "video") {
        this._pc = pc;
        this._kind = kind;
        this._preferredCodecs = this._preferredCodecs = this._defaultPreferredCodecs.map(c => ({ ...c }));
    }

    // Methods
    // -------
    public setCodecPreferences(codecs: TauriRtcRtpCodec[]): void {
        if(codecs.length == 0) {
            this._preferredCodecs = this._preferredCodecs = this._defaultPreferredCodecs.map(c => ({ ...c }));
            return;
        }
        codecs = this.removeDuplicateCodecs(codecs);

        // Union of sender + receiver capabilities
        const codecCapabilities = [
            ...TauriRTCRTPReceiver.getCapabilities(this._kind).codecs,
            ...TauriRTCRTPSender.getCapabilities(this._kind).codecs
        ];
        this.validateCodecsAgainstCapabilities(codecs, codecCapabilities);
    }

    public stop(): void {
        if (this._pc.signalingState === "closed") {
            throw new DOMException("PeerConnection is closed", "InvalidStateError");
        }

        if (this._currentDirection === "stopped") {
            return;
        }

        this._currentDirection = "stopped";
    }

    private removeDuplicateCodecs(codecs: TauriRtcRtpCodec[]): TauriRtcRtpCodec[] {
        const seen = new Set<string>();

        return codecs.filter(codec => {
            const key = [
                codec.mimeType.toLowerCase(),
                codec.clockRate,
                codec.channels ?? 1,  // default to 1 if undefined
                codec.sdpFmtpLine ?? ""
            ].join("|");

            if (seen.has(key)) {
                return false; // duplicate, skip
            }

            seen.add(key);
            return true;
        });
    }

    private validateCodecsAgainstCapabilities(
        codecs: TauriRtcRtpCodec[],
        codecsCapabilities: TauriRtcRtpCodec[]
    ) {

        for (const codec of codecs) {
            const match = codecsCapabilities.some(c => 
                c.mimeType.toLowerCase() === codec.mimeType.toLowerCase() &&
                c.clockRate === codec.clockRate &&
                (c.channels ?? 1) === (codec.channels ?? 1)
            );

            if (!match) {
                throw new DOMException("InvalidModificationError");
            }
        }
    }

}