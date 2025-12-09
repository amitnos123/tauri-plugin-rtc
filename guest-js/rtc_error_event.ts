import TauriRTCError from "./rtc_error";

/**
 * Initialization object for a TauriRTCErrorEvent.
 */
export interface TauriRTCErrorEventInit extends EventInit {
  /** The TauriRTCError object associated with this event */
  error: TauriRTCError;
}

/**
 * Event representing a WebRTC-style error in Tauri.
 * Wraps a TauriRTCError instance for dispatching via EventTarget.
 */
export default class TauriRTCErrorEvent extends Event {
  /** The TauriRTCError associated with this event */
  private readonly _error: TauriRTCError;

  /**
   * Creates a new TauriRTCErrorEvent.
   * @param type The event type, usually "error".
   * @param eventInitDict Initialization dictionary containing the error and optional EventInit fields.
   */
  constructor(type: string, eventInitDict: TauriRTCErrorEventInit) {
    // Pass bubbles and cancelable from EventInit if provided
    super(type, eventInitDict);

    // Store the error
    this._error = eventInitDict.error;
  }

  /**
   * Returns the TauriRTCError object associated with this event.
   */
  get error(): TauriRTCError {
    return this._error;
  }
}
