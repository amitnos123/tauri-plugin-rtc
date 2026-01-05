export interface TauriRTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}

export default class TauriRTCCertificate {
    private _expires!: number
    
    public get expires() : number {
        return this._expires;
    }

    public getFingerprints(): TauriRTCDtlsFingerprint[] {
        let rtn :TauriRTCDtlsFingerprint[] = [];
        return rtn;
    }
}