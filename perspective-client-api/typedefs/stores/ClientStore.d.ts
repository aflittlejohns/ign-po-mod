import { History } from 'history';
import { AlterLoggingActionConfig } from '../action/AlterLoggingAction';
import { AlterDockActionConfigWrapper } from '../action/AlterDockAction';
import { DockActionConfig } from '../action/DockAction';
import { PopupActionConfig } from '../action/PopupAction';
import { ComponentStore, ClientActions, ClientSessionState, ClientStartResponse, ClientState, Peer, PlainObject, RedundancyStatus, SubscriptionHandler } from '../perspective-client';
import { PropertyTree } from "../props/PropertyTree";
import { AuthStore } from './AuthStore';
import { ChannelStore } from './ChannelStore';
import { ComponentDefaultsStore } from './ComponentDefaultsStore';
import { GeoLocationStore } from './GeoLocationStore';
import { InstrumentationStore } from './InstrumentationStore';
import { MobileInterface } from "./mobile/api/MobileInterface";
import { DeviceConnectData } from './mobile/MobileBridge';
import { MountStore } from './MountStore';
import { NotificationStore } from './NotificationStore';
import { PageStore } from './PageStore';
import { ResourceStore } from './ResourceStore';
import { StateWrapper } from './state/FiniteStateMachine';
import { SystemStore } from './SystemStore';
import { ClientIdleStore } from "./ClientIdleStore";
import { WorkstationBridge } from "./workstation/WorkstationBridge";
import { KeyEventStore } from "./KeyEventStore";
import { IconRenderersStore } from './IconRenderersStore';
export type NativeLifeCycleEvents = "window-ready" | "new" | "initializing" | "authenticating" | "connecting" | "loading" | "synchronizing" | "running-connected" | "running-disconnected" | "shutdown";
export interface ClientError {
    /** Description of what kind of error, or what the client was trying to do when the error happened */
    description: string;
    /** The actual error object, if any. */
    error?: Error;
}
export declare const IdGen: (seed?: any) => string;
export declare enum ClientScope {
    Client = "C",
    Designer = "D"
}
export declare enum NativeApplicationType {
    none = "none",
    ios = "ios",
    android = "android",
    workstation = "workstation"
}
export declare enum ClientStoreState {
    clientState = "clientState"
}
export declare enum PlatformEdition {
    MAKER = "maker",
    STANDARD = "standard",
    EDGE = "edge",
    CLOUD = "cloud"
}
export interface Flags {
    /** If true, views will load-ahead statically configured subviews */
    load_ahead: boolean | 'forced';
    /** If true, view loading will take priority over value update delivery */
    load_priority: boolean;
}
export declare function clearAutoIdpAuthAllowed(): void;
export declare function isAutoIdpAuthAllowed(): boolean;
export declare function setAutoIdpAuthAllowed(allowAutoIdpAuth: boolean): void;
/**
 * This is the ROOT store of the client.
 */
export declare class ClientStore {
    projectName: string;
    projectTitle: string;
    coBrandingEnabled: boolean | undefined;
    private _tabId;
    tabIdUrlSafe: string;
    sessionId?: string;
    activeContextMenuRef?: ComponentStore;
    private _token?;
    sessionClosedMessage?: string;
    pageClosedMessage?: string;
    loggedOutMessage?: string;
    private fsm;
    connection: ChannelStore;
    resources: ResourceStore;
    auth: AuthStore;
    page: PageStore;
    mounts: MountStore;
    defaultsStore: ComponentDefaultsStore;
    sessionState: ClientSessionState;
    system: SystemStore;
    notifications: NotificationStore;
    history: History;
    location: GeoLocationStore;
    instrumentation: InstrumentationStore;
    keyEvent?: KeyEventStore;
    idle?: ClientIdleStore;
    iconRendererStore: IconRenderersStore;
    error: ClientError | null;
    created: number | undefined;
    lastHelloCheck: number;
    deviceConnectData?: DeviceConnectData;
    private challengeTimeoutId?;
    private _redundancyStatus;
    protected stateReactionMap: Map<ClientState, Array<() => void>>;
    private simulatingLostConnection;
    static readonly DEVICE_ID_KEY: string;
    private _fullscreenTransition;
    bluetooth: PlainObject;
    deviceSettings: PlainObject;
    private subscriptionMap;
    readonly subscribe: SubscriptionHandler;
    private notify;
    private edition;
    flags: Flags;
    private autoIdpAuth?;
    private _autoIdpAuthAllowed;
    constructor(projectName: string, projectTitle: string, platformEdition: PlatformEdition, tabIdentifier?: string, coBrandingEnabled?: boolean);
    onFiniteStateChange(): void;
    get platformEdition(): PlatformEdition;
    get areActionsEligible(): boolean;
    get token(): string | undefined;
    set token(token: string | undefined);
    get tabId(): string;
    set tabId(tabId: string);
    get autoIdpAuthAllowed(): boolean;
    set autoIdpAuthAllowed(autoIdpAuthAllowed: boolean);
    private onStateChange;
    transition(action: ClientActions): void;
    /** Sets the error reason and transitions to the error state */
    fault(description: string, error?: Error): void;
    get state(): StateWrapper<ClientState>;
    get redundancyStatus(): RedundancyStatus | undefined;
    get workstation(): WorkstationBridge | null;
    getBasename(): string;
    newTabId(idToSet?: string, force?: boolean): string;
    static get nativeType(): NativeApplicationType;
    private initiateNative;
    private beginChallenge;
    private requestChallenge;
    /** Returns 'C' in the client, or 'D' in the designer */
    get scope(): ClientScope;
    get isClient(): boolean;
    get isDesigner(): boolean;
    get fullscreenInTransition(): boolean;
    setFullscreenTransition(): void;
    clearFullscreenTransition(): void;
    private onSessionInit;
    /**
     * Returns a unique deviceId, as pulled from localStorage or as created on demand.
     */
    protected onClientStart(json: ClientStartResponse): void;
    protected onKeepAlive(json: any): void;
    updateTitle(title: string, skipPropUpdate?: boolean): void;
    private onWorkstationAction;
    private onDeviceAction;
    /**
     * See {@link NavAction}
     */
    private onScriptNavigate;
    handleOpenPageInNewTab(page: string): void;
    /**
     * See {@link PopupAction}
     */
    onScriptPopup(config: PopupActionConfig): void;
    /**
     * See {@link DockAction}
     */
    onScriptDock(config: DockActionConfig): void;
    /**
     * See {@link AlterDockAction}
     * @param dockConfigWrapper
     */
    onScriptAlterDock(dockConfigWrapper: AlterDockActionConfigWrapper): void;
    onScriptTheme(config: any): void;
    onScriptAuthChallenge(config: any): void;
    onScriptLogin(config: any): void;
    onScriptLogout(config: any): void;
    onScriptDebug(config: any): void;
    onScriptRefresh(config: any): void;
    /**
     * config takes shape of:
     *  {  remoteLoggingEnabled?: boolean; logLevel?: string; }
     */
    onScriptAlterLogging(config: AlterLoggingActionConfig): void;
    private setRedundancyStatus;
    private onRedundancyChange;
    private setupMobileEvents;
    private setupWorkstationEvents;
    onRunningOrConnected(mobile: MobileInterface, func: (mobile: MobileInterface, props: PropertyTree) => void): void;
    sendBluetoothEvents(mobile: MobileInterface): void;
    sendDeviceSettings(mobile: MobileInterface): void;
    onSessionPropsChange(tree: PropertyTree): void;
    sessionPropsChangeDisposer: (() => any) | null;
    subscribeToSessionProps(): void;
    protected initHandlers(): void;
    protected initScriptHandlers(): void;
    private reload;
    protected fireSessionInit(): void;
    private synchronize;
    private resynchronize;
    private fireClientStart;
    writeSpecial(path: string, value: any): void;
    registerStateReaction(clientState: ClientState, newReaction: () => void): void;
    protected initFsm(): void;
    protected onNotAuthenticated(): void;
    protected initLifecycle(): void;
    submitChallenge(data: DeviceConnectData): void;
    protected scheduleNextHelloCheck(): void;
    private fireHello;
    browserData(): DeviceConnectData;
    getDeviceId(): string;
    setActiveContextMenuRef(store?: ComponentStore): void;
    getActiveContextMenuRef(): ComponentStore | undefined;
    private elapsedTimeSinceLastHelloCheck;
    private timeUntilNextHelloCheck;
    private onHelloFulfilled;
    private onHelloRejected;
    private static filterPeer;
    private static peerToUrl;
    private static peerUrlToPromise;
    private static redirectToPeerUrl;
    private static oneSuccess;
    private maybeRedirectToPeer;
    getPeer(): Peer | undefined;
    private endSimulatedLostConnection;
    /**
     * This is intended to be invoked from the browser dev console, for testing purposes, e.g.
     * __client.simulateLostConnection(20)
     */
    simulateLostConnection(timeInSeconds: number): void;
    protected initChannelStore(): void;
    protected initResourceStore(): void;
    protected initPageStore(): void;
    protected initMountStore(store: ClientStore): void;
    protected initDefaultsStore(): void;
    protected initAuthStore(): void;
    protected initSystemStore(): void;
    protected initNotificationStore(): void;
    protected initLocationStore(): void;
    protected initInstrumentationStore(): void;
    protected initIdleStore(): void;
    protected initKeyEventStore(): void;
    protected initIconRenderersStore(): void;
}
