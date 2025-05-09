import { JL } from 'jsnlog';
import { ComponentDefinition } from "../api/component/Component";
import { Printable, PrintProps } from '../api/component/Printable';
import { PropertyType } from '../api/property/PropertyType';
import { ComponentEvents } from "../event/ComponentEvents";
import { ComponentSessionState, ViewDefinition, ViewSessionState, SubscriptionHandler, PlainObject } from '../perspective-client';
import { PropertyTree } from '../props/PropertyTree';
import { AbstractUIElementStore } from "./AbstractUIElementStore";
import { ComponentDefaultsStore } from "./ComponentDefaultsStore";
import { ComponentStore } from './ComponentStore';
import { ComponentStoreLoader } from "./ComponentStoreLoader";
import { EventFiredPayload, PageStore, SyncRequest } from './PageStore';
export interface OutputListener {
    (outputName: string, outputValue: any): void;
}
export declare enum ViewStoreState {
    loading = "loading",
    accessDenied = "accessDenied",
    dockOffsetChanged = "dockOffsetChanged"
}
export declare class ViewStore extends AbstractUIElementStore implements Printable {
    page: PageStore;
    instanceId: string;
    resourcePath: string;
    /** Contains the resource paths of ancestors as well as this store's resource path. */
    resourcePaths: Array<string>;
    mountPath: string;
    birthDate: number;
    def: ViewDefinition | undefined;
    initialParams: PlainObject | undefined | null;
    running: boolean;
    root?: ComponentStore;
    private inputNames;
    private outputNames;
    props: PropertyTree;
    params: PropertyTree;
    _oldParams: any;
    custom: PropertyTree;
    dirtyProps: Map<string, PropertyTree>;
    outputDisposer: (() => any) | null;
    private sessionState;
    viewLoadedFromSessionState: boolean;
    componentEvents: ComponentEvents;
    accessDenied: boolean;
    dockOffsetState?: boolean;
    private subscriptionMap;
    readonly subscribe: SubscriptionHandler;
    private notify;
    /** User-configurable setting for whether input params are merged or overwritten */
    private inputBehavior;
    constructor(page: PageStore, resourcePath: string, mountPath: string, def: ViewDefinition | undefined, params: PlainObject | null, sessionState?: ViewSessionState, parent?: ComponentStore);
    requestPrint(props?: PrintProps): void;
    set dockOffsetChanged(newState: boolean);
    get dockOffsetChanged(): boolean;
    setAccessDenied(accessDenied: boolean): void;
    initRoot(loader: ComponentStoreLoader): Promise<ComponentStore>;
    get view(): ViewStore;
    get children(): Array<ComponentStore>;
    get log(): JL.JSNLogLogger;
    hasInput(name: string): boolean;
    readInputs(): PlainObject;
    /**
     * Updates all input parameters (if any) in the given params object.
     * @param params
     * @param oldParams
     */
    writeInputs(params: PlainObject): void;
    /**
     *  Creates an instance of a component store.
     * @param {ComponentDefinition} def definition of component store to create
     * @param {ComponentStore} parent the parent of the component, null if view's root container
     * @param {PlainObject} position the position object
     * @param {Array<number>} addressPath index path from root container to this component
     * @param {ComponentSessionState} sessionState possible state object, used to set values when component may be
     *                                getting recreated for an existing session
     * @returns {ComponentStore}
     * @private
     */
    _newComponentStore(def: ComponentDefinition, parent: ComponentStore | null, addressPath: Array<number>, // component id, like [0,5]
    sessionState?: ComponentSessionState): ComponentStore;
    /** Sets a function that will be called with (outputName, outputValue) each time a defined output value changes */
    setOutputListener(outputListener: OutputListener): void;
    startup(): void;
    shutdown(): void;
    _disposeOutputListener(): void;
    /** True if this view store actually represents a view that was found in the project config */
    get isValid(): ComponentDefinition | undefined;
    get defaultsStore(): ComponentDefaultsStore;
    updateOnReconnect(updates: PlainObject): void;
    /**
     * Called by PageStore when it receives client value updates. The updates object will have keys
     * that are component mount paths, which we will chop into an array and feed to the root container to dispatch.
     */
    applyPropertyUpdates(updates: PlainObject): void;
    /**
     * Called when an event is fired on the gateway that has client-scoped actions.
     */
    dispatchEvent(payload: EventFiredPayload): void;
    /**
     * Called by any of this view's component children when one of their properties has been written to from something
     * initiated by the client.
     */
    onPropChange(componentPath: string, propType: PropertyType, dataModel: PropertyTree): void;
    prepareSyncRequest(syncRequest: SyncRequest): void;
    clearSyncedModels(): void;
    isDirty(): boolean;
}
