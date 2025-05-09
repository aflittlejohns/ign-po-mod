import { ClientError, PlainObject } from '../../perspective-client';
import { ClientStore, NativeLifeCycleEvents } from '../ClientStore';
import { MobileDataGwSubmission, MobileDataItem, MobileDataSource } from './api/MobileDataSource';
import { MobileInterface } from './api/MobileInterface';
import { WebInterface } from './api/WebInterface';
import { GwDataSubmitter, LogLevel } from "../native/api/NativeWebInterface";
export interface DeviceConnectData {
    challenge: string;
    deviceId: string;
    type: string;
    versionCode: number;
}
export declare class WebGwDataBridge implements GwDataSubmitter<MobileDataItem<PlainObject>> {
    readonly dataSources: Map<string, MobileDataSource<PlainObject, PlainObject>>;
    readonly submitter: DataSubmitter;
    constructor();
    private initDataSources;
    protected registerDataSource(source: MobileDataSource<PlainObject, PlainObject>): void;
    /**
     * Method called from the mobile device's native code to submit data back to the client.  Ok to use from client
     * as well for actions that need to send data back to the gw.
     */
    submitData(result: MobileDataItem<PlainObject>): void;
}
export declare class ClientBridge extends WebGwDataBridge implements WebInterface {
    constructor(iOsBridge?: MobileInterface);
    protected registerDataSource(source: MobileDataSource<PlainObject, PlainObject>): void;
    enableActions(): void;
    submitChallenge(data: string): void;
    submitDeviceConnect(data: DeviceConnectData): void;
    log(level: LogLevel, msg: string): void;
    enableFallbackRedirect(): void;
    setFallbackRedirectTimeout(timeRemaining: number): void;
}
declare class MobileBridgeEvent {
    type: string;
    payload: any;
    constructor(type: string, payload: any);
    stringify(): string;
}
declare class LifecycleEvent extends MobileBridgeEvent {
    constructor(event: string);
}
export interface IosEventBridge {
    postMessage(msg: string): void;
    postEvent(event: LifecycleEvent): void;
}
export declare class IosNativeBridge implements MobileInterface {
    private readonly nativeClient;
    constructor();
    onLifecycleEvent(stage: NativeLifeCycleEvents): void;
    launchAction(actionConfig: string): void;
    onBrowserReady(): void;
    onError(error: ClientError): void;
    onShutdown(): void;
    onWebAppRunning(): void;
    private postEvent;
    static exists(): boolean;
}
/**
 * Shape of message posted to the gw when data originating from the mobile device
 */
export interface GwDataMessage {
    items: Array<MobileDataGwSubmission<PlainObject>>;
}
export declare enum MobileSubmissionCacheKey {
    Primary = "data.submitter.primary",
    Waiting = "data.submitter.waiting"
}
declare class DataSubmitter {
    readonly SUBMISSION_URL: string;
    readonly STORAGE_KEY = MobileSubmissionCacheKey.Primary;
    readonly WAITING_KEY = MobileSubmissionCacheKey.Waiting;
    readonly client: ClientStore;
    private awaitingResponse;
    constructor(client: ClientStore);
    onReconnect(): void;
    /**
     * Returns the local storage cached string representing the json data that is being submitted to the GW.
     */
    private get stored();
    private get waiting();
    /**
     * Clears out the cache of data that has successfully been submitted.  If there is also items in the pending
     * localStore, it will remove them, place them in the primary cache, and then call submit on those items.
     */
    private clearStoredAndSubmitWaiting;
    /**
     * true when in a running connected state and there is no pending message being posted to the Gw
     */
    private get canSubmit();
    /**
     * Adds data items to the localStorage cache requested, first checking the cache for other items and if they
     * exist, appends the new items to the existing cache.
     */
    private static addToCache;
    /**
     * Posts data back to the gw to be forwarded to any appropriate handlers.  If the optional parameter message is
     * present, it will be sent to the GW.  Otherwise, we send the message by pulling info out of localStorage.
     *
     * NOTE THAT IF YOU CALL THIS AND PASS IN THE SUBMISSION, YOU SHOULD FIRST MAKE SURE YOU WRITE THE SUBMISSION TO
     * LOCAL STORAGE IN CASE THE SUBMISSION FAILS FOR SOME REASON
     *
     * @param submission if present, is the thing that will get sent to the gw.
     */
    private submitToGateway;
    /**
     * Call with a data item that is intended to be sent back to the gateway.
     * @param data the MobileDataItem to be sent to the gateway when in a connected state
     */
    submit(data?: MobileDataGwSubmission<PlainObject>): void;
    /**
     * Should only be called from the Axios.post() response handler in submitToGateway(), in cases where the
     */
    private maybeMergeWaiting;
}
export {};
