export default class TauriRTCPeerConnectionIceEvent {
    private _candidate: RTCIceCandidate | null = null; // RTCCandidate
    get candidate(): RTCIceCandidate | null {
        return this._candidate;
    }

    constructor() {

    }
}