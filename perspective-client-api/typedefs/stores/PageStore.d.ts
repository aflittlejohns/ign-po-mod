import { IObservableValue, ObservableMap } from 'mobx';
import { PropertyType } from "../api/property/PropertyType";
import { ComponentDefinition, EventGroupType, FileDownloadPayload, PlainObject, ViewDefinition, ViewSessionState } from '../perspective-client';
import { PropertyTree } from "../props/PropertyTree";
import { QualityCode } from "../props/QualityCode";
import { ClientStore } from './ClientStore';
import { ComponentStore } from "./ComponentStore";
import { ComponentLoadMonitor } from "./ComponentStoreLoader";
import { InstrumentationStore } from './InstrumentationStore';
import { SessionPropsDefinition } from "./ResourceStore";
import { ViewStore } from './ViewStore';
import { Printable, PrintProps } from '../api/component/Printable';
export interface SyncRequestMessage {
    sync: number;
    views: PlainObject;
    page: PlainObject;
    session: PlainObject;
    events: Array<EventFiredPayload>;
}
export declare class SyncRequest {
    syncNum: number;
    message: SyncRequestMessage;
    whenFinished: Array<() => any>;
    constructor(events: Array<EventFiredPayload>);
    /**
     * Adds dirty property values to this sync request.
     * @param viewId The instance id of the owning view
     * @param componentPath The component path, a combination of index path plus property type, like "0:5.props"
     * @param dirtyProps An object containing the dirty properties in the component. Keys are property paths,
     * values are the property values in simple unqualified JSON format.
     */
    addDirtyViewProps(viewId: string, componentPath: string, dirtyProps: PlainObject): void;
    addDirtyPageProps(path: string, dirtyProps: PlainObject): void;
    addDirtySessionProps(path: string, dirtyProps: PlainObject): void;
    addFinishCallback(callback: () => any): void;
    finished(): void;
}
export interface UpdatePayloadValues {
    views: {
        [viewId: string]: {
            [componentPath: string]: PlainObject;
        };
    };
    page: PlainObject;
    session: PlainObject;
}
/**
 * Shape of property update payload that is received through the message channel when the gateway has values to
 * update.
 */
export interface UpdatePayload {
    values: UpdatePayloadValues;
    sync: Array<number>;
}
export interface EventFiredPayload {
    view: string;
    component: string;
    eventType: EventGroupType;
    eventName: string;
    event: any;
}
interface FinishedNotifications {
    viewStore: ViewStore;
    onFinishedCallbacks: Array<(viewStore: ViewStore) => void>;
    isValid(): boolean;
}
/**
 * Handles sync messages that arrive for views that aren't running.
 */
interface MissingViewUpdates {
    accumulate(updates: PlainObject): void;
    apply(store: ViewStore): void;
}
/**
 * Encapsulates the logic of the cancelable loading of view stores. View stores can take some time to load, so this
 * allows for monitoring of load progress and for cancelation in the case where the view store is no longer needed,
 * for example a view that was mounted and then unmounted before the view store finished loading.
 */
export declare class ViewStoreFuture {
    /**
     * The viewStore that this future is working to prepare. Only legal to use this store after
     * finishedLoading becomes true
     */
    readonly viewStore: ViewStore;
    private loadMonitor?;
    /**
     * Valid flag indicates whether this future has been canceled or not, and thus if any future promise fulfillment
     * should be considered valid.
     */
    private valid;
    private loader?;
    finishedLoading: boolean;
    private onFinishedCallbacks;
    private onProgressCallback?;
    useBatchNotify: boolean;
    private tracer;
    private static TO_NOTIFY;
    private static BATCH_PROCESSOR_SCHEDULED;
    static batchNotify(notifications: FinishedNotifications): void;
    static batchProcess(): void;
    /**
     * @param viewStore The view store we are building
     * @param loadMonitor Load monitor for monitoring progress of children loading. If specified, it indicates that
     * this future is part of a load-ahead. If not specified, one will be created.
     */
    constructor(viewStore: ViewStore, loadMonitor?: ComponentLoadMonitor);
    get instrumentation(): InstrumentationStore;
    begin(): void;
    createLoadMonitor(): ComponentLoadMonitor;
    finished(): ViewStoreFuture;
    cancel(): void;
    /**
     * Register a callback to be invoked when this future is finished and has the ViewStore ready.
     */
    whenFinished(callback: (viewStore: ViewStore) => void): void;
    /**
     * Register a callback to be invoked periodically as the view is being loaded. Callback will be passed
     * the percentage of load completion, as a fraction 0.0 through 1.0
     */
    onProgress(callback: (pctDone: number) => void): void;
    /**
     * Counts the number of components in this view. Does a "deep-count" of components in sub-views that are referenced
     * by this view in a manner that will trigger load-ahead logic. See ComponentStore.tsx initChildren() for paired
     * load-ahead logic.
     */
    private countComponents;
}
/**
 * PageStore keeps track of the current active views, and is used to maintain the rolling instance id
 * as new views are loaded/reloaded and shut down.
 */
export declare class PageStore implements Printable {
    /** File Download */
    private fileDownloadInProgress;
    private fileDownloadPayloadQueue;
    parent: ClientStore;
    views: ObservableMap<string, ViewStore>;
    missingViewUpdates: Map<string, MissingViewUpdates>;
    dirtyViews: Set<ViewStore>;
    pendingSync: SyncRequest | null | undefined;
    eventsToSync: Array<EventFiredPayload>;
    private readonly sessionStateCache;
    pendingPropertyUpdates: Array<UpdatePayload>;
    sessionProps?: PropertyTree | undefined;
    sessionCustom?: PropertyTree | undefined;
    pageProps?: PropertyTree | undefined;
    _pageTitle: any;
    _appBarVisible: boolean;
    _theme: string;
    unsubPageProps: () => any;
    unsubSessionProps: () => any;
    constructor(parent: ClientStore);
    requestPrint(props?: PrintProps): void;
    get viewCount(): number;
    get viewLoadingCount(): number;
    get viewLoadedCount(): number;
    /** Called as part of the 'client-start' message */
    initSessionProps(props?: PlainObject, custom?: PlainObject, pageProps?: PlainObject, def?: SessionPropsDefinition): void;
    onPagePropsChange(tree: PropertyTree): void;
    onSessionPropsChange(tree: PropertyTree): void;
    reloadSymbolStyles(): void;
    static get gatewayAddress(): string;
    applySessionPropertyUpdates(sessionUpdates?: PlainObject): void;
    applyPagePropertyUpdates(pageUpdates: PlainObject): void;
    onPropWrite(propType: PropertyType, dataModel: PropertyTree): void;
    private onViewAccessDenied;
    onClientReconnect(updates: PlainObject): void;
    private downloadFile;
    onFileDownload(payload: FileDownloadPayload): void;
    /**
     * Any updates that come in while views are loading get stashed for later. Once the last view is finished
     * loading, its ViewStoreFuture will call back to this method to apply the stashed update(s) in the order
     * they were recevied.
     */
    applyPendingUpdates(): void;
    applyPropertyUpdates(payload: UpdatePayload): void;
    eventFiredFromGateway(payload: EventFiredPayload): void;
    onEventFired(event: EventFiredPayload): void;
    /**
     * We've received a 'session-init' message that contained the property structures of existing views.
     * We put these structures into a cache so that for the next 60 seconds, if these views are re-opened,
     * then they will be initialized with the state that already exists on the backend
     */
    initFromExistingState(views: Array<ViewSessionState>): void;
    /**
     * Sends a 're-sync-views' message that contains the views that are currently running along with their
     * input parameters and mount locations. This is sent when reconnecting to an existing session, so that
     * the backend can shut down any ViewModels it has running that aren't open anymore, and update any that are.
     */
    sendResynchronizeViews(): void;
    findView(resourcePath: string, mountPath: string): ViewStore | undefined;
    isOpen(resourcePath: string, mountPath: string): boolean;
    /**
     * Each View instance (View.tsx) will observe its own view path in this way. When the view config changes
     * (project updated), the View will stop and start itself, thus getting the new config from startView.
     */
    observeView(path: string, onViewChanged: () => any): () => any;
    static hasViewCycle(resourcePath: string, parent: ComponentStore): boolean;
    /**
     * Check if property updates have been made via the `client-value-update` event for the passed in viewId by
     * interrogating the `missingViewPropertyUpdates` Map. There is a small possibility that this can occur before
     * the view has started. If updates have been made, apply them to the passed in viewStore and remove the
     * viewId from the `missingViewPropertyUpdates` Map.
     * @param viewId
     * @param store
     */
    private maybeApplyMissingPropertyUpdates;
    /**
     * A special version of startView that is used in the load-ahead process. Returns a Promise<ViewStore>
     *     so that it can be called in an async function.
     */
    startViewLoadAhead(resourcePath: string, mountPath: string, params: PlainObject, parent: ComponentStore, loadMonitor: ComponentLoadMonitor): Promise<ViewStore>;
    /**
     * Called when a View starts up. Creates the store for the view. If the view doesn't exist, this will throw an
     * error.
     *
     * @param resourcePath Path of the resource in the project.
     * @param mountPath represents where in the visual hierarchy this view is mounted
     * @param params a map of key:value for the names of the parameters mapped to the value objects
     * @param parent optional parent store to check for view cycles
     * @param loadMonitor if this view is being loaded as part of a load-ahead optimization, this is the load monitor
     * for the top-most view in the load-ahead stack.
     * @returns {ViewStore} the new store for the requested view.
     */
    startView(resourcePath: string, mountPath: string, params: PlainObject, parent?: ComponentStore, loadMonitor?: ComponentLoadMonitor): ViewStoreFuture;
    _newViewStore(resourcePath: string, mountPath: string, definition: ViewDefinition | undefined, params: PlainObject, parent?: ComponentStore): ViewStore;
    _findViewDef(resourcePath: string): ViewDefinition | undefined;
    _isViewDefined(resourcePath: string): boolean;
    stopView(store: ViewStore): void;
    isLoadAheadSafe(parent: ComponentDefinition, child: ComponentDefinition, childIndex: number): boolean;
    /**
     * This is called by individual views as notification that a PropertyTree has been written to, and the view
     * now contains a dirty component and requires a sync.
     */
    onViewWrite(store: ViewStore): void;
    requestSync(): void;
    sync(): void;
    get qualityIssues(): Array<QualityCode>;
    get theme(): string;
    static instanceKeyFor(resourcePath: string | IObservableValue<string>, mountPath: string): string;
}
export {};
