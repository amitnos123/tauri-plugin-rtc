export default class TauriRTCPeerConnectionIceErrorEvent {
    private _address: string | null = ""; 
    private _errorCode: number = 0;
    private _errorText: string = "";
    private _port: number = 0;
    private _url: string = "";
    get address(): string | null {
        return this._address;
    }
    get errorCode(): number {
        return this._errorCode;
    }
    get errorText(): string | null {
        return this._errorText;
    }
    get port(): number {
        return this._port;
    }
    get url(): string {
        return this._url;
    }

    constructor() {

    }
}