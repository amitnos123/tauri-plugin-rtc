/**
 * Interface describing initialization data for a TauriRTCError.
 */
export interface TauriRTCErrorInit extends EventInit {
  /**
   * A string describing the type of WebRTC error.
   * Example: "data-channel-failure", "sdp-syntax-error", "dtls-failure".
   */
  errorDetail: string;

  /**
   * Optional SCTP cause code (used for data channel errors).
   * Typically a numeric code indicating the SCTP-level error.
   */
  sctpCauseCode?: number;

  /**
   * Optional HTTP status code (for ICE/STUN/TURN request failures).
   * Provides additional debugging information when the failure involves network requests.
   */
  httpRequestStatusCode?: number;

  /**
   * Optional DTLS alert code received.
   * Used in lower-level transport errors.
   */
  receivedAlert?: number;

  /**
   * Optional DTLS alert code sent.
   * Used in lower-level transport errors.
   */
  sentAlert?: number;
}

/**
 * Represents a WebRTC-style error for Tauri RTC.
 * Extends DOMException for compatibility with Web APIs.
 */
export default class TauriRTCError extends DOMException {
  /** A string describing the type of WebRTC error. */
  readonly errorDetail: string;

  /** Optional SCTP cause code (used for data channel errors). */
  readonly sctpCauseCode?: number;

  /** Optional HTTP status code (for ICE/STUN/TURN failures). */
  readonly httpRequestStatusCode?: number;

  /** Optional DTLS alert code received. */
  readonly receivedAlert?: number;

  /** Optional DTLS alert code sent. */
  readonly sentAlert?: number;

  /**
   * Creates a new TauriRTCError.
   * @param init Initialization object containing structured error information.
   * @param message Optional human-readable message describing the error.
   */
  constructor(init: TauriRTCErrorInit, message?: string) {
    super(message ?? "", "RTCError");

    // Ensure correct prototype chain
    Object.setPrototypeOf(this, TauriRTCError.prototype);

    this.errorDetail = init.errorDetail;
    this.sctpCauseCode = init.sctpCauseCode;
    this.httpRequestStatusCode = init.httpRequestStatusCode;
    this.receivedAlert = init.receivedAlert;
    this.sentAlert = init.sentAlert;
  }
}
