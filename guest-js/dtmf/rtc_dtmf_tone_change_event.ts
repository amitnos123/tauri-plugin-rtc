export interface TauriRTCDTMFToneChangeEventInit extends EventInit {
    tone: string;
}

export default class TauriRTCDTMFToneChangeEvent extends Event  {
    private _tone: string = "";

    constructor(type: string, eventInitDict: TauriRTCDTMFToneChangeEventInit) {
        super(type, eventInitDict);

        this._tone = eventInitDict.tone;
    }
}