export default class TauriRTCIceTransport {
    private _component: "RTP" | "RTSP" = "RTP";
    private _gatheringState: "new" | "gathering" | "complete" = "new";
    private _role: "controlling" | "controlled" = "controlling";
    private _state : "new" | "checking" | "connected" | "completed" | "disconnected" | "failed" | "closed" = "new";

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