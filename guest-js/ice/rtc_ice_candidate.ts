export default class TauriRTCCandidate {
    private _address: string = "";
    private _candidate: string = "";
    private _component: string = "";
    private _foundation: string = "";;
    private _port: number = 0;
    private _priority: number = 0;
    private _protocol: "udp" | "tcp" = "udp";
    private _relatedAddress: string | null = "";
    private _relatedPort: number | null = 0;
    private _sdpMid: string | null = "";
    private _sdpMLineIndex: number | null = null;
    private _tcpType: string | null = "";
    private _type: string = "";
    private _usernameFragment: string = "";

    constructor() {

    }

    // Method
    // ------
    // toJSON()
}