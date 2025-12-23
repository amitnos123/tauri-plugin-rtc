export * from './rtc_peer_connection_ice_error_event';
export * from './rtc_peer_connection_ice_event';
export * from './rtc_peer_connection_stats';
export * from './rtc_peer_connection';

export type TauriRTCSignalingState = "closed" | "have-local-offer" | "have-local-pranswer" | "have-remote-offer" | "have-remote-pranswer" | "stable";

// Configuration

export enum TauriRTCIceTransportPolicy {
  "relay",
  "all"
};

export enum TauriRTCBundlePolicy {
  "balanced",
  "max-compat",
  "max-bundle"
};

export enum TauriRTCRtcpMuxPolicy {
  "require"
};

// States

export enum TaurRTCSignalingState {
  "stable",
  "have-local-offer",
  "have-remote-offer",
  "have-local-pranswer",
  "have-remote-pranswer",
  "closed"
};

export enum TaurRTCIceGatheringState {
  "new",
  "gathering",
  "complete"
};

export enum TauriRTCPeerConnectionState {
  "closed",
  "failed",
  "disconnected",
  "new",
  "connecting",
  "connected"
};

export enum TauriRTCIceConnectionState {
  "closed",
  "failed",
  "disconnected",
  "new",
  "checking",
  "completed",
  "connected"
};