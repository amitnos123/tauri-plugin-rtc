export interface TauriRTCEncodedVideoFrameMetadata {
  contributingSources: number[];
  mimeType: string;
  payloadType: number;
  rtpTimestamp: number;
  synchronizationSource: number;
  dependencies: number[];
  frameId: number;
  width: number;
  height: number;
  spatialIndex: number;
  temporalIndex: number;
}

export default class TauriRTCEncodedVideoFrame {
    private _type!: "key" | "delta" | "empty";
    private _metadata: TauriRTCEncodedVideoFrameMetadata;

    get type() : "key" | "delta" | "empty" {
        return this._type;
    }

    public data: ArrayBuffer;

    constructor(data: ArrayBuffer, metadata: TauriRTCEncodedVideoFrameMetadata) {
        this.data = data;
        this._metadata = { ...metadata }; // make a copy to prevent mutation
    }

    /** Returns a copy of the metadata suitable for JSON serialization */
    public getMetadata(): TauriRTCEncodedVideoFrameMetadata {
        return { ...this._metadata };
    }
}