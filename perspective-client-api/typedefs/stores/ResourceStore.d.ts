import { AxiosResponse } from 'axios';
import { JsObject, PagesDefinition, PropertyConfigCollection, SubscriptionHandler, ViewDefinition } from '../perspective-client';
import { ClientStore } from './ClientStore';
import { KeyEventConfigData } from "./KeyEventStore";
export interface SessionPropsDefinition {
    props?: {
        [key: string]: any;
    };
    custom?: {
        [key: string]: any;
    };
    propConfig: PropertyConfigCollection;
}
export declare enum IdleTimeoutAction {
    UserLogout = "UserLogout",
    CloseSession = "CloseSession"
}
export interface IdleTimeoutProps {
    isIdleTimeoutEnabled: boolean;
    idleMinutes: number;
    gracePeriod: number;
    gracePeriodMessage: string;
    timeoutAction: IdleTimeoutAction;
    isCustomLogout: boolean;
    logoutUrl: string;
}
export interface TranslationSettings {
    ignoreCapitalization: boolean;
    ignoreWhitespace: boolean;
    ignoreMarkup: boolean;
    ignorePunctuation: boolean;
}
export interface ProjectDefinition {
    name: string;
    title: string | null;
    description: string;
    lastModifiedBy: string;
    lastModified: number;
    views: {
        [viewPath: string]: ViewDefinition;
    };
    pageConfig: PagesDefinition;
    componentResources: Array<BrowserResource>;
    props: ProjectGeneralProps;
    sessionProps: SessionPropsDefinition;
    idleProps: IdleTimeoutProps;
    symbolProps: any;
    keyEvents: KeyEventConfigData;
}
export interface ProjectGeneralProps {
    updateMode: "Instant" | "Notify";
    updateMessage: string;
    updateTimeout: number;
    theme: string;
    locale: string;
    idp?: string;
}
export interface ProjectDiff extends ProjectDefinition {
    deletedViews: Array<string>;
}
interface ProjectResourceId {
    project: string;
    module: string;
    type: string;
    path: string;
}
interface ResourceSignature {
    resourceId: ProjectResourceId;
    signature: string;
}
interface EffectiveProjectSnapshot {
    projectName: string;
    parentProjects: Array<string>;
    projectManifest: {
        title: string;
        description: string;
        parent: string;
        enabled: boolean;
        inheritable: boolean;
    };
    signatures: Array<ResourceSignature>;
}
export interface PendingUpdate {
    lastModified: number;
    lastModifiedBy: string;
    updateMessage: string;
    updateTimeout: number;
}
export interface TranslationTerms {
    locale: string;
    terms: {
        [key: string]: string;
    } | null;
}
export type TranslationResourceListener = (locale: string) => void;
export type TranslationResourceDisposer = () => any;
export declare const adjustTerm: (term: string, locale: string, translationSettings: TranslationSettings) => string;
/**
 * Initial shape of what a component's browser resource (js, css, etc) dependency looks like.
 */
export interface BrowserResource {
    name: string;
    path: string;
    type: "js" | "css" | "font" | "unknown";
    versionHash: string;
    dependencies: Array<string>;
}
export declare class ResourceStore {
    client: ClientStore;
    projectName: string;
    project: ObservableProjectDefinition | null;
    snapshot: EffectiveProjectSnapshot | null;
    styleHash: string | null;
    symbolStyleHash: string | null;
    /**
     * Flag which becomes true when the initial copy of the project is being downloaded.
     */
    loading: boolean;
    /**
     * Flag which becomes true when there is an update waiting for us on the gateway.
     */
    pendingUpdate: PendingUpdate | null;
    /**
     * Flag which becomes true when the client is currently downloading a project update.
     */
    loadingUpdate: boolean;
    updateStatusMessage: string;
    /**
     * When downloading an update, this number will be < 0 when the progress is unknown, and otherwise will indicate
     * the download progress as a number between 0 and 100
     */
    projectDownloadProgress: number;
    /**
     * ProjectConfigs are evaluated each time they are downloaded - whether a diff or a full project - to determine
     * any resources required by the Components in the project.  Each resources is collected through a http.get(),
     * and upon response completion, appended to the head of the dom.  When complete, the resource is added to this
     * Set, which is checked before subsequently downloading needed resources.
     */
    loadedResources: Set<string>;
    /**
     * This list contains all the resources which are required to be downloaded before the project can start up.  It is
     * populated based by looking through the ProjectConfig when a project or project diff is received.
     * This set of BrowserResources should be empty when the client is loaded and running.
     */
    requiredResources: Map<string, BrowserResource>;
    /**
     * Number of total initial required resources - for loading progress purposes
     */
    requiredResourceCount: number;
    translationResource: TranslationResource;
    resourceLoader: ResourceLoader;
    assetDigests: Map<string, string>;
    constructor(client: ClientStore);
    /**
     * Updates the local digest map, which should _always_ be the most current known digests available.  These values
     * will be checked and compared by the SVG_Utils when loading an SVG.  LocalStorage will hold
     * a similar map that resolves the digest of the _last fetched_ assets.  We populate this map initially by
     *
     *
     * injecting the asset digests into the initial client.html for the page.  This initial map is _not_ populated in
     * the designer.  The result is that the svg fetching logic will not find a digest for any library, so it will
     * fetch with cache-busting param when in the designer.  In the actual client, we'll check the digests in localStorage,
     * compare them to the digests in this store, and will only fetch new svg icon assets if:
     *
     * 1. we don't already have one in session storage
     * 2. we have one in session storage, but the asset digest in the resource store map is different than the digest in
     * the local store map
     * 3. session storage and/or local storage is not available, so we need to fetch
     * @param digests
     * @private
     */
    private updateAssetDigests;
    requestProject(): Promise<boolean>;
    fetchProject(): Promise<AxiosResponse>;
    /**
     * Called when we receive the 'project-update-ready' message from the gateway. Only happens if the project is
     * configured for "Notify" update mode.
     */
    onProjectUpdateReady(json: PendingUpdate): void;
    /**
     * Called by the UI when the user is ready to update. Bounces the update signal through the gateway so that all
     * open tabs update simultaneously.
     */
    updateProject(): void;
    /**
     * Called when we receive the 'update-project' message back from the gateway
     */
    onUpdateProjectNow(): void;
    private updateProjectStyles;
    private updateSymbolStyles;
    requestTheme(themeName: string): void;
    /**
     * Looks at the list of BrowserResource objects and adds any of them that are not already stored in the
     * `this.loadedResources` set into the `this.requiredResources` map.
     *
     * Also sets the `this.requiredResourceCount` field to the total number of resources that will need to be
     * loaded. See `ClientLoading.tsx#renderLoadingStage()`
     */
    private updateRequiredResources;
    private axiosConfig;
    get isProjectLoaded(): boolean;
    get resourcesLoaded(): boolean;
    get isStaging(): boolean;
    get isUpdateAvailable(): boolean;
    get translationSettings(): TranslationSettings;
    findView(path: string): ViewDefinition | undefined;
    observeView(path: string, onViewChanged: () => any): () => any;
    onBrowserResourceLoaded(resourceName: string): void;
}
declare class TranslationResource {
    private client;
    private init;
    private listeners;
    private translations;
    private filteredTranslations;
    translationSettings: TranslationSettings;
    private locale;
    constructor(client: ClientStore);
    subscribe: (listener: TranslationResourceListener) => TranslationResourceDisposer;
    notify: (locale: string) => void;
    getTranslations: (locale: string) => JsObject | undefined;
    getFilteredTranslations: (locale: string) => JsObject | undefined;
    private initOnce;
    private fetchTranslationsAndSettings;
    private fetchTranslations;
    handleTranslationsResponse(result: AxiosResponse<TranslationTerms>, locale: string): void;
    handleTranslationSettingsResponse(result: AxiosResponse<TranslationSettings>): void;
    /**
     * Provides some safety checks and adds the locale/translated terms to the observable map.
     * @param translations
     */
    private updateTranslations;
    /**
     * Apply the translation settings onto the keys of the translation map so we can do a mapping of terms to translations keys
     * @param translationMap - Translation map containing keys and translated terms
     */
    filterTranslationTerms(translationMap: JsObject): JsObject;
    private updateTranslationSettings;
}
export declare class ObservableProjectDefinition {
    name: string;
    title: string;
    description: string;
    lastModifiedBy: string;
    lastModified: number;
    views: Map<string, ViewDefinition>;
    pageConfig: PagesDefinition;
    props: ProjectGeneralProps;
    sessionProps: SessionPropsDefinition;
    idleProps: IdleTimeoutProps;
    symbolProps: any;
    keyEvents: KeyEventConfigData;
    private subscriptionMap;
    readonly subscribe: SubscriptionHandler;
    private notify;
    constructor(def: ProjectDefinition);
    /**
     * Called by ResourceStore.onUpdateProjectNow() after the diff of the project has been downloaded, it gets
     * sent to this method assuming it is an actual diff not a new copy of a project (i.e. matching uuids)
     */
    applyDiff(diff: ProjectDiff): void;
}
export declare function endsWith(str: string, suffix: string): boolean;
/**
 * This class wraps the functionality of:
 * 1. Fetching the resources (js and css) required by the project
 * 2. Attaching the resources to the page
 * 3. executing the progressWatcher() upon the completion of each resource being loaded.
 */
export declare class ResourceLoader {
    private headElement;
    private progressCallback;
    private progress;
    constructor(progressWatcher: (itemLoaded: string) => void);
    static withNoCache(filename: string): string;
    fetchResource(resource: BrowserResource): Promise<AxiosResponse>;
    /**
     * Updates the <link> element that loads the perspective named styles css.  If url is undefined and the route
     * substring is 'style-classes', calling this method will act to place the named style css at the end of the head
     * element in order to make sure it's last in the css cascade (so that it overrides default css).
     * @param url the url of the style classes, dynamically generated from the gateway.  May be undefined.
     * @param routeSubstring the path to the css resource
     */
    updateStyleLink(url?: string, routeSubstring?: string): void;
    updateSymbolsLink(url: string): void;
    updateThemeLink(theme: string): void;
    static buildResourceUri(resource: BrowserResource): string;
    loadStyle(resource: BrowserResource): Promise<string>;
    loadScript(resource: BrowserResource): Promise<string>;
    loadResources(toLoad: Array<BrowserResource>): Promise<boolean>;
}
export {};
