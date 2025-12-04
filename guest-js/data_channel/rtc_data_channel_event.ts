import TauriRTCDataChannel from "./rtc_data_channel";

export default class TauriRTCDataChannelEvent {
    private _channel: TauriRTCDataChannel;

    get channel(): TauriRTCDataChannel {
        return this._channel;
    }
}