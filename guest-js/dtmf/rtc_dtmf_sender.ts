import TauriRTCDTMFToneChangeEvent from "./rtc_dtmf_tone_change_event";

export default class TauriRTCDtmfSender extends EventTarget {
    private _canInsertDTMF : boolean = true;
    private _toneBuffer : string = "";
    
    get canInsertDTMF(): boolean {
        return this._canInsertDTMF;
    }
    
    get toneBuffer(): string {
        return this._toneBuffer;
    }

    private _emitToneChange(tone: string) {
        const event = new TauriRTCDTMFToneChangeEvent("tonechange", {
            tone
        });

        // Fire event
        this.dispatchEvent(event);

        // Call property listener if exists
        if (typeof this.ontonechange === "function") {
            this.ontonechange(event);
        }
    }


    // Methods
    // -------
    public insertDTMF(tones: string, duration?: number, interToneGap?: number): void {
        if (this._canInsertDTMF === false) {
            throw new DOMException("InvalidStateError");
        }
        if (!/^[0-9A-D#*,]*$/.test(tones)) {
            throw new DOMException("InvalidCharacterError");
        }

        this._toneBuffer = tones;

        // 1) Emit event for each tone (like real WebRTC)
        // ---------------------------------------------
        for (const tone of tones) {
            this._toneBuffer = this._toneBuffer.substring(1); // shift buffer
            this._emitToneChange(tone);
        }

        // 2) Emit "empty string" event when completed — WebRTC compatible
        // ---------------------------------------------------------------
        this._emitToneChange("");

        //invoke
    }

    // Events
    // ------
    ontonechange: ((ev: TauriRTCDTMFToneChangeEvent) => void) | null = null;
}