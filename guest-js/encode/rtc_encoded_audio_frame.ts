export interface TauriRTCEncodedAudioFrameMetadata {
    audioLevel?: number;
    captureTime: number;
    contributingSources?: number[];
    mimeType: string;
    payloadType: number;
    receiveTime?: number;
    rtpTimestamp: number;
    sequenceNumber: number;
    synchronizationSource: number;
}

export default class TauriRTCEncodedAudioFrame {
    public data : ArrayBuffer;
    private _metadata: TauriRTCEncodedAudioFrameMetadata;
    

    constructor(data: ArrayBuffer, metadata: TauriRTCEncodedAudioFrameMetadata) {
        this.data = data;
        this._metadata = metadata;
    }

    /**
     * Returns metadata about this encoded audio frame
     */
    public getMetadata(): TauriRTCEncodedAudioFrameMetadata {
        return { ...this._metadata }; // return a copy to prevent mutation
    }
}