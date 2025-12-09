import TauriRTCRTPScriptTransformer from "./rtp/rtc_rtp_script_transformer";

export default class TauriRTCTransformEvent {
    private _transformer!: TauriRTCRTPScriptTransformer;

    get transformer() : TauriRTCRTPScriptTransformer {
        return this._transformer;
    }
    
}