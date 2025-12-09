export default class TauriRTCSessionDescription {
    private _type: string = "";
    private _sdp: string = "";

    get type(): string {
        return this._type;
    }
    get sdp(): string {
        return this._sdp;
    }

    /**
     * Returns a plain object suitable for JSON serialization.
     * This is automatically used by JSON.stringify().
     */
    public toJSON(): { type: string; sdp: string } {
        return {
            type: this._type,
            sdp: this._sdp,
        };
    }
}