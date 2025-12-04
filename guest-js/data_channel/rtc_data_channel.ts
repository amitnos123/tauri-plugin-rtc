export default class TauriRTCDataChannel {
    private _bufferedAmount: number = 0;
    private _id: number = -1;
    private _label: string = "";
    private _maxPacketLifeTime: number | null = null;
    private _maxRetransmits: number | null = null;
    private _negotiated: boolean = false;
    private _ordered: boolean = false;
    private _protocol: string = "";
    private _readyState: "connecting" | "open" | "closing" | "closed" = "closed";

    public binaryType: string = "";
    public bufferedAmountLowThreshold: number = 0;

    // Methods
    // -------
    // close()
    // send()

    // Events
    // ------
    // bufferedamountlow
    // close
    // closing
    // error
    // message
    // open
}