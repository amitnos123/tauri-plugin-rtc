import TauriRTCRTPReceiver from "./rtc_rtp_receiver";
import TauriRTCRTPSender from "./rtc_rtp_receiver";

export default class TauriRTCRTPTransceiver {
    private _currentDirection: string | null = ""; 
    private _mid: string | null = ""; 
    private _receiver: TauriRTCRTPReceiver;
    private _sender:  TauriRTCRTPSender;
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

    constructor() {

    }

    // Methods
    // -------
    // setCodecPreferences()
    // stop()
}