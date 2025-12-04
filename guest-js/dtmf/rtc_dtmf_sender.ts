export default class TauriRTCDtmfSender {
    private _canInsertDTMF : boolean = false;
    private _toneBuffer : string = "";
    
    get canInsertDTMF(): boolean {
        return this._canInsertDTMF;
    }
    
    get toneBuffer(): string {
        return this._toneBuffer;
    }

    constructor() {
        
    }

    // Methods
    // -------
    // insertDTMF()

    // Events
    // ------
    // tonechange
}