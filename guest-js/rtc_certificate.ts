export interface TauriRTCDtlsFingerprint {
    algorithm: string;
    value: string;
}

// Data holding Class
// It is immutable from JS \ TS side
export default class TauriRTCCertificate {
    private _expires!: number
    private _fingerprints: TauriRTCDtlsFingerprint[] = [];
    
    public get expires() : number {
        return this._expires;
    }

    public getFingerprints(): TauriRTCDtlsFingerprint[] {
        return this._fingerprints;
    }
}

// Their serialization steps, given value and serialized, are:
// -----------------------------------------------------------
// Set serialized.[[Expires]] to the value of value.expires attribute.
// Set serialized.[[Certificate]] to a copy of the unstructured binary data in value.[[Certificate]].
// Set serialized.[[Origin]] to a copy of the unstructured binary data in value.[[Origin]].
// Set serialized.[[KeyingMaterialHandle]] to a serialization of the handle in value.[[KeyingMaterialHandle]] (not the private keying material itself).

// Their deserialization steps, given serialized and value, are:
// -----------------------------------------------------------
// Initialize value.expires attribute to contain serialized.[[Expires]].
// Set value.[[Certificate]] to a copy of serialized.[[Certificate]]
// Set value.[[Origin]] to a copy of serialized.[[Origin]]
// Set value.[[KeyingMaterialHandle]] to the private keying material handle resulting from deserializing serialized.[[KeyingMaterialHandle]]