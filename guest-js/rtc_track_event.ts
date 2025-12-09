import TauriRTCRTPReceiver from "./rtp/rtc_rtp_receiver";
import TauriRTCRTPTransceiver from "./rtp/rtc_rtp_transceiver";

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
    
}