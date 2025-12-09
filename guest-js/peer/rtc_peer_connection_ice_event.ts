export interface TauriRTCPeerConnectionIceEventInit extends EventInit {
    candidate: RTCIceCandidate;
}

export default class TauriRTCPeerConnectionIceEvent extends Event {
    private _candidate!: RTCIceCandidate; // RTCCandidate

    get candidate(): RTCIceCandidate {
        return this._candidate;
    }

    constructor(type: string, eventInitDict: TauriRTCPeerConnectionIceEventInit) {
        super(type, eventInitDict);

        this._candidate = eventInitDict.candidate;
    }
}