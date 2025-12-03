import TauriRTCSessionDescription from "./rtc_session_description";
import TauriRTCIdentityAssertion from "./rtc_identity_assertion"
import TauriRTCSctpTransport from "./rtc_sctp_transport";
import TauriRTCCertificate from "./rtc_certificate";

export default class TauriRTCPeerConnection {
    
    private _canTrickleIceCandidates: boolean = false;
    private _canSendDataChannels: string = "";
    private _currentLocalDescription?: TauriRTCSessionDescription;
    private _currentRemoteDescription?: TauriRTCSessionDescription;
    private _iceConnectionState: string = "";
    private _iceGatheringState: string = "";
    private _localDescription?: TauriRTCSessionDescription;
    private _peerIdentity?: Promise<TauriRTCIdentityAssertion>;
    private _pendingLocalDescription?: TauriRTCSessionDescription;
    private _pendingRemoteDescription?: TauriRTCSessionDescription;
    private _remoteDescription?: TauriRTCSessionDescription;
    private _sctp?: TauriRTCSctpTransport;
    private _signalingState: string = "";

    get canTrickleIceCandidates(): boolean {
        return this._canTrickleIceCandidates;
    }
    get canSendDataChannels(): string {
        return this._canSendDataChannels;
    }
    get currentLocalDescription(): TauriRTCSessionDescription | undefined {
        return this._currentLocalDescription;
    }
    get currentRemoteDescription(): TauriRTCSessionDescription | undefined {
        return this._currentRemoteDescription;
    }
    get iceConnectionState(): string {
        return this._iceConnectionState;
    }
    get iceGatheringState(): string {
        return this._iceGatheringState;
    }
    get localDescription(): TauriRTCSessionDescription | undefined {
        return this._localDescription;
    }
    get pendingLocalDescription(): TauriRTCSessionDescription | undefined {
        return this._pendingLocalDescription;
    }
    get pendingRemoteDescription(): TauriRTCSessionDescription | undefined {
        return this._pendingRemoteDescription;
    }
    get peerIdentity(): Promise<TauriRTCIdentityAssertion> | undefined {
        return this._peerIdentity;
    }
    get remoteDescription(): TauriRTCSessionDescription | undefined {
        return this._remoteDescription;

    }
    get sctp(): TauriRTCSctpTransport | undefined {
        return this._sctp;
    }
    get signalingState(): string {
        return this._signalingState;
    }
     
    static async generateCertificate(): Promise<TauriRTCCertificate> {
        
    }


    constructor() {

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