import { RTCICEState } from ".";

export default class TauriRTCIceTransport {
    private _component: "RTP" | "RTSP" = "RTP";
    private _gatheringState: "new" | "gathering" | "complete" = "new";
    private _role: "controlling" | "controlled" = "controlling";
    private _state : RTCICEState = "new";

    // Methods
    // getLocalCandidates()
    // getLocalParameters()
    // getRemoteCandidates()
    // getRemoteParameters()
    // getSelectedCandidatePair()

    // Events
    // ------
    // gatheringstatechange
    // selectedcandidatepairchange
    // statechange
}