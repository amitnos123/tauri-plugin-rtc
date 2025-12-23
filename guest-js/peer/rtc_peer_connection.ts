import TauriRTCSessionDescription from "../rtc_session_description";
import TauriRTCIdentityAssertion from "../rtc_identity_assertion"
import TauriRTCSctpTransport from "../rtc_sctp_transport";
import TauriRTCCertificate from "../rtc_certificate";
import { TauriRTCIceConnectionState, TauriRTCSignalingState, TaurRTCIceGatheringState } from ".";
import { TauriRTCBundlePolicy, TauriRTCIceTransportPolicy, TauriRTCRtcpMuxPolicy } from '../peer';
import { TauriRTCIceServer } from '../ice';

interface TauriRTCConfiguration {
    bundlePolicy?: TauriRTCBundlePolicy;
    certificates?: TauriRTCCertificate[];
    iceCandidatePoolSize?: number;
    iceServers?: TauriRTCIceServer[];
    iceTransportPolicy?: TauriRTCIceTransportPolicy;
    rtcpMuxPolicy?: TauriRTCRtcpMuxPolicy;
}

export default class TauriRTCPeerConnection extends EventTarget {
    
    private _localDescription: TauriRTCSessionDescription | null = null;
    get localDescription(): TauriRTCSessionDescription | null {
        if (this._localDescription !== null)
            return this._localDescription;

        return this._currentLocalDescription;
    }

    private _currentLocalDescription: TauriRTCSessionDescription | null = null;
    get currentLocalDescription(): TauriRTCSessionDescription | null {
        return this._currentLocalDescription;
    }

    private _pendingLocalDescription: TauriRTCSessionDescription | null = null;
    get pendingLocalDescription(): TauriRTCSessionDescription | null {
        return this._pendingLocalDescription;
    }

    private _remoteDescription: TauriRTCSessionDescription | null = null;
    get remoteDescription(): TauriRTCSessionDescription | null {
        if (this._remoteDescription !== null)
            return this._remoteDescription;

        return this._currentRemoteDescription;
    }

    private _currentRemoteDescription: TauriRTCSessionDescription | null = null;
    get currentRemoteDescription(): TauriRTCSessionDescription | null {
        return this._currentRemoteDescription;
    }

    private _pendingRemoteDescription: TauriRTCSessionDescription | null = null;
    get pendingRemoteDescription(): TauriRTCSessionDescription | null {
        return this._pendingRemoteDescription;
    }

    private _signalingState!: TauriRTCSignalingState;
    get signalingState(): TauriRTCSignalingState {
        return this._signalingState;
    }

    private _iceGatheringState: TaurRTCIceGatheringState = TaurRTCIceGatheringState.new;
    get iceGatheringState(): TaurRTCIceGatheringState {
        return this._iceGatheringState;
    }

    private _iceConnectionState: TauriRTCIceConnectionState = TauriRTCIceConnectionState.new;
    get iceConnectionState(): TauriRTCIceConnectionState {
        return this._iceConnectionState;
    }

    private _connectionState: TauriRTCIceConnectionState = TauriRTCIceConnectionState.closed;
    get ConnectionState(): TauriRTCIceConnectionState {
        return this._connectionState;
    }
    
    private _peerIdentity!: Promise<TauriRTCIdentityAssertion>;
    get peerIdentity(): Promise<TauriRTCIdentityAssertion> {
        return this._peerIdentity;
    }

    private _sctp!: TauriRTCSctpTransport;
    get sctp(): TauriRTCSctpTransport {
        return this._sctp;
    }

    private _canTrickleIceCandidates: boolean | null = null;
    get canTrickleIceCandidates(): boolean | null {
        return this._canTrickleIceCandidates;
    }
    
    private configuration: TauriRTCConfiguration = {};

    static async generateCertificate(): Promise<TauriRTCCertificate> {
        
    }

    constructor(configuration: TauriRTCConfiguration = {}) {
        super();
        try {
            // 3. Let connection have a [[DocumentOrigin]] internal slot, initialized to the relevant settings object's origin.

            // 5. If the certificates value in configuration is non-empty, run the following steps for each certificate in certificates:
            if (configuration.certificates !== undefined) {
                // TODO
            } else {
                // Else, generate one or more new RTCCertificate instances with this RTCPeerConnection instance and store them.
                // This MAY happen asynchronously and the value of certificates remains undefined for the subsequent steps.
                // As noted in Section 4.3.2.3 of [RFC8826], WebRTC utilizes self-signed rather than Public Key Infrastructure (PKI) certificates,
                // so that the expiration check is to ensure that keys are not used indefinitely and additional certificate checks are unnecessary.
            }

            // 7. Initialize connection's ICE Agent.

            this.configuration = configuration;
            

            // 9. Let connection have an [[IsClosed]] internal slot, initialized to false.
            // 10. Let connection have a [[NegotiationNeeded]] internal slot, initialized to false.
            // 11. Let connection have an [[SctpTransport]] internal slot, initialized to null.
            // 12. Let connection have a [[DataChannels]] internal slot, initialized to an empty ordered set.
            // 13. Let connection have an [[Operations]] internal slot, representing an operations chain, initialized to an empty list.
            // 14. Let connection have a [[UpdateNegotiationNeededFlagOnEmptyChain]] internal slot, initialized to false.
            // 15. Let connection have an [[LastCreatedOffer]] internal slot, initialized to "".
            // 16. Let connection have an [[LastCreatedAnswer]] internal slot, initialized to "".
            // 17. Let connection have an [[EarlyCandidates]] internal slot, initialized to an empty list.
            // 18. Let connection have an [[SignalingState]] internal slot, initialized to "stable".
            // 19. Let connection have an [[IceConnectionState]] internal slot, initialized to "new".
            // 20. Let connection have an [[IceGatheringState]] internal slot, initialized to "new".
            // 21. Let connection have an [[ConnectionState]] internal slot, initialized to "new".
            // 22. Let connection have a [[PendingLocalDescription]] internal slot, initialized to null.
            // 23. Let connection have a [[CurrentLocalDescription]] internal slot, initialized to null.
            // 24. Let connection have a [[PendingRemoteDescription]] internal slot, initialized to null.
            // 25. Let connection have a [[CurrentRemoteDescription]] internal slot, initialized to null.
            // 26. Let connection have a [[LocalIceCredentialsToReplace]] internal slot, initialized to an empty set.
            // 27. Return connection.

        } catch (error: unknown) {
            let message;
            if (error instanceof Error) {
                message = error.message;
            } else if (typeof error === "string") {
                message = error;
            } else {
                message = undefined;
            }

            throw new DOMException(message, "UnknownError");
        }
    }

    // Methods
    // -------
    // addIceCandidate()
    // addTrack()
    // addTransceiver()
    // close()
    // createAnswer()
    // createDataChannel()
    // createOffer()
    // getConfiguration()
    // getIdentityAssertion()
    // getReceivers()
    // getSenders()
    // getStats()
    // getTransceivers()
    // removeTrack()
    // restartIce()
    // setConfiguration()
    // setIdentityProvider()
    // setLocalDescription()
    // setRemoteDescription()

    // Events
    // ------
    // connectionstatechange
    // datachannel
    // icecandidate
    // icecandidateerror
    // iceconnectionstatechange
    // icegatheringstatechange
    // negotiationneeded
    // signalingstatechange
    // track
}