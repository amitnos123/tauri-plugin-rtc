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
    
    private _canTrickleIceCandidates: boolean = false;
    private _currentLocalDescription!: TauriRTCSessionDescription;
    private _currentRemoteDescription!: TauriRTCSessionDescription;
    private _iceConnectionState: TauriRTCIceConnectionState = TauriRTCIceConnectionState.closed;
    private _connectionState: TauriRTCIceConnectionState = TauriRTCIceConnectionState.closed;
    private _iceGatheringState: TaurRTCIceGatheringState = TaurRTCIceGatheringState.new;
    private _localDescription!: TauriRTCSessionDescription;
    private _peerIdentity!: Promise<TauriRTCIdentityAssertion>;
    private _pendingLocalDescription!: TauriRTCSessionDescription;
    private _pendingRemoteDescription!: TauriRTCSessionDescription;
    private _remoteDescription!: TauriRTCSessionDescription;
    private _sctp!: TauriRTCSctpTransport;
    private _signalingState!: TauriRTCSignalingState;

    get canTrickleIceCandidates(): boolean {
        return this._canTrickleIceCandidates;
    }
    get currentLocalDescription(): TauriRTCSessionDescription {
        return this._currentLocalDescription;
    }
    get currentRemoteDescription(): TauriRTCSessionDescription {
        return this._currentRemoteDescription;
    }
    get iceConnectionState(): TauriRTCIceConnectionState {
        return this._iceConnectionState;
    }
    get ConnectionState(): TauriRTCIceConnectionState {
        return this._connectionState;
    }
    get iceGatheringState(): TaurRTCIceGatheringState {
        return this._iceGatheringState;
    }
    get localDescription(): TauriRTCSessionDescription {
        return this._localDescription;
    }
    get pendingLocalDescription(): TauriRTCSessionDescription {
        return this._pendingLocalDescription;
    }
    get pendingRemoteDescription(): TauriRTCSessionDescription {
        return this._pendingRemoteDescription;
    }
    get peerIdentity(): Promise<TauriRTCIdentityAssertion> {
        return this._peerIdentity;
    }
    get remoteDescription(): TauriRTCSessionDescription {
        return this._remoteDescription;

    }
    get sctp(): TauriRTCSctpTransport {
        return this._sctp;
    }
    get signalingState(): TauriRTCSignalingState {
        return this._signalingState;
    }
     
    static async generateCertificate(): Promise<TauriRTCCertificate> {
        
    }

    constructor(configuration?: TauriRTCConfiguration) {
        super();
        if (configuration !== undefined) {
            
        }

        this.
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