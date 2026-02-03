export default class TauriRTCRTPScriptTransform {
    private _worker: Worker; // Thread for transformer
    private _port: MessagePort;

    get port(): MessagePort {
        return this._port;
    }

    constructor(worker: Worker, options: Object = {}, transfer: Transferable[] = []) {
        if (!worker || typeof (worker as any).postMessage !== "function") {
            throw new TypeError("Invalid worker passed to RTCRtpScriptTransform");
        }

        const channel = new MessageChannel();

        this._worker = worker;
        this._port = channel.port1;

        worker.postMessage(
            {
                type: "rtp-script-transform-init",
                options: options,
                port: channel.port2
            },
            [channel.port2, ...transfer]
        );
    }

    // Call when not in use to free up resources
    close() {
        if (this._port) {
            this._port.close();
            this._port = null!;
        }
    }
}