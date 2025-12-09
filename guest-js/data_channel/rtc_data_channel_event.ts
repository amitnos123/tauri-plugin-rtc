import TauriRTCDataChannel from "./rtc_data_channel";

/**
 * Initialization object for a TauriRTCDataChannelEvent.
 */
export interface TauriRTCDataChannelEventInit extends EventInit {
  /** The TauriRTCDataChannel associated with this event */
  channel: TauriRTCDataChannel;
}

/**
 * Event representing a WebRTC-style data channel event in Tauri.
 * Wraps a TauriRTCDataChannel instance for dispatching via EventTarget.
 */
export default class TauriRTCDataChannelEvent extends Event {
  /** The TauriRTCDataChannel associated with this event */
  private readonly _channel: TauriRTCDataChannel;

  /**
   * Creates a new TauriRTCDataChannelEvent.
   * @param type The event type, e.g., "open", "message", "close".
   * @param eventInitDict Initialization dictionary containing the channel and optional EventInit fields.
   */
  constructor(type: string, eventInitDict: TauriRTCDataChannelEventInit) {
    // Pass bubbles and cancelable from EventInit if provided
    super(type, eventInitDict);

    // Assign the channel
    this._channel = eventInitDict.channel;
  }

  /**
   * Returns the TauriRTCDataChannel associated with this event.
   */
  get channel(): TauriRTCDataChannel {
    return this._channel;
  }
}
