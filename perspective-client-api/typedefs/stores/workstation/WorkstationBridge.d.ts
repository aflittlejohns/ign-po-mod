import { ClientActions, ClientError, MessageHandler, PlainObject } from '../../perspective-client';
import { ClientStore, NativeLifeCycleEvents } from '../ClientStore';
import { WorkstationDataGwSubmission, WorkstationDataItem, WorkstationDataSource } from './api/WorkstationDataSource';
import { WorkstationInterface } from './api/WorkstationInterface';
import { WebInterface } from './api/WebInterface';
import { GwDataSubmitter, LogLevel } from "../native/api/NativeWebInterface";
import { DeviceConnectData } from "../mobile/MobileBridge";
import { IObservableArray } from "mobx";
export declare class WebGwDataBridge implements GwDataSubmitter<WorkstationDataItem<PlainObject>> {
    readonly dataSources: Map<string, WorkstationDataSource<PlainObject, PlainObject>>;
    readonly submitter: DataSubmitter;
    constructor();
    private initDataSources;
    protected registerDataSource(source: WorkstationDataSource<PlainObject, PlainObject>): void;
    /**
     * Method called from the workstations's java code to submit data back to the client.  Ok to use from client
     * as well for actions that need to send data back to the gw.
     */
    submitData(result: WorkstationDataItem<PlainObject>): void;
}
export declare class WorkstationClientBridge extends WebGwDataBridge implements WebInterface {
    constructor(bridge?: WorkstationInterface);
    protected registerDataSource(source: WorkstationDataSource<PlainObject, PlainObject>): void;
    enableActions(): void;
    submitChallenge(data: string): void;
    submitDeviceConnect(data: DeviceConnectData): void;
    log(level: LogLevel, msg: string): void;
    submitClientAction(clientAction: ClientActions): void;
    submitLoggingLevel(level: LogLevel): void;
    enableFallbackRedirect(): void;
    setFallbackRedirectTimeout(timeRemaining: number): void;
}
export declare class WorkstationBridge implements WorkstationInterface {
    private readonly workstationClient;
    readonly handlers: Map<string, MessageHandler>;
    readonly bridgeHandlers: IObservableArray<string>;
    constructor(bridge: WorkstationInterface);
    private initializeClientHandlers;
    private registerClientHandler;
    initializeBridge(): void;
    /**
     * Registers a type handler from the bridge allowing workstation versions that differ from the gateway version
     * that the client is running from to support different scripts/actions.
     */
    private registerBridgeHandler;
    exit(): void;
    onError(error: ClientError): void;
    challenge(challenge: PlainObject): void;
    nativeSettings(settings: PlainObject): void;
    onLifecycleEvent(stage: NativeLifeCycleEvents): void;
    bridgeAction(payloadType: string, payloadConfig: PlainObject): void;
    launchAction(actionConfig: string): void;
}
/**
 * Shape of message posted to the gw when data originating from the Workstation
 */
export interface GwDataMessage {
    items: Array<WorkstationDataGwSubmission<PlainObject>>;
}
export declare enum WorkstationSubmissionCacheKey {
    Primary = "data.submitter.primary",
    Waiting = "data.submitter.waiting"
}
declare class DataSubmitter {
    readonly SUBMISSION_URL: string;
    readonly STORAGE_KEY = WorkstationSubmissionCacheKey.Primary;
    readonly WAITING_KEY = WorkstationSubmissionCacheKey.Waiting;
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
     * @param data the WorkstationDataItem to be sent to the gateway when in a connected state
     */
    submit(data: WorkstationDataGwSubmission<PlainObject>): void;
    /**
     * Should only be called from the Axios.post() response handler in submitToGateway(), in cases where the
     */
    private maybeMergeWaiting;
}
export {};
