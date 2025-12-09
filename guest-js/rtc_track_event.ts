import TauriRTCRTPReceiver from "./rtp/rtc_rtp_receiver";
import TauriRTCRTPTransceiver from "./rtp/rtc_rtp_transceiver";

interface TauriRTCDataChannelEventInit extends EventInit {
    receiver: TauriRTCRTPReceiver;
    stream?: MediaStream[];
    track: MediaStreamTrack;
    transceiver: TauriRTCRTPTransceiver;
}

export default class TauriRTCTrackEvent extends Event {
    private _receiver!: TauriRTCRTPReceiver;
    private _stream?: MediaStream[];
    private _track!: MediaStreamTrack;
    private _transceiver!: TauriRTCRTPTransceiver;

    get receiver() : TauriRTCRTPReceiver {
        return this._receiver;
    }

    get stream() : MediaStream[] | undefined {
        return this._stream;
    }

    get track() : MediaStreamTrack {
        return this._track;
    }

    get transceiver() : TauriRTCRTPTransceiver {
        return this._transceiver;
    }
    
    constructor(type: string, eventInitDict: TauriRTCDataChannelEventInit) {
        super(type, eventInitDict);

        this._receiver = eventInitDict.receiver;
        this._stream = eventInitDict.stream;
        this._track = eventInitDict.track;
        this._transceiver = eventInitDict.transceiver;
    }
}