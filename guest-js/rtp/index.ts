export * from './rtc_inbound_rtp_stream_stats';
export * from './rtc_outbound_rtp_stream_stats';
export * from './rtc_remote_inbound_rtp_stream_stats';
export * from './rtc_remote_outbound_rtp_stream_stats';
export * from './rtc_rtp_receiver'
export * from './rtc_rtp_script_transform';
export * from './rtc_rtp_script_transformer';
export * from './rtc_rtp_sender';
export * from './rtc_rtp_transceiver';

export type TauriRtcRtpDirection = "sendrecv" | "sendonly" | "recvonly" | "inactive" | "stopped";


export interface TauriRtcRtpCodec {
    channels?: number;
    clockRate: number;
    mimeType: string;
    sdpFmtpLine?: string;
}

export interface TauriRtcRtpCapabilities {
    codecs: RTCRtpCodec[];
    headerExtensions: TauriRtcRtpHeaderExtensionCapability[];
}

export interface TauriRtcRtpHeaderExtensionCapability {
    uri: string;
}



export interface TauriRTCRtpSendParameters {
  transactionId?: string;
  codecs: RTCRtpCodecParameters[];
  headerExtensions: RTCRtpHeaderExtensionParameters[];
  encodings: RTCRtpEncodingParameters[];
  rtcp: {
    cname?: string;
    reducedSize?: boolean;
  };
}