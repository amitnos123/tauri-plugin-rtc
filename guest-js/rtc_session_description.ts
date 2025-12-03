export default class TauriRTCSessionDescription {
    private _type: string = "";
    private _sdp: string = "";

    get type(): string {
        return this._type;
    }
    get sdp(): string {
        return this._sdp;
    }

    constructor() {

    }

    public toJSON() {

    }
}