import moment from "moment";
import * as React from "react";
import { ComponentDefinition } from './api/component/Component';
import { PropertyTree } from './props/PropertyTree';
import { QualityCodeDef } from './props/QualityCode';
import { ClientStore } from './stores/ClientStore';
import { MobileInterface } from './stores/mobile/api/MobileInterface';
import { ConnectionStatus, NotificationType } from './stores/NotificationStore';
import { PendingUpdate } from './stores/ResourceStore';
import { NotLicensedReason } from "./stores/SystemStore";
import { RotationConfig } from "./util/css-transform-util";
import { makeLogger } from './util/logging';
import { Transform } from './util/transform-util';
import { GwDataSubmitter } from "./stores/native/api/NativeWebInterface";
import { WorkstationInterface } from "./stores/workstation/api/WorkstationInterface";
export { default as ReactResizeDetector, withResizeDetector } from 'react-resize-detector/build/withPolyfill';
export declare const ResizeObserverOptionBorderBox: ResizeObserverOptions;
export declare enum RefreshRate {
    SLOW = 100,
    STANDARD = 33.333333333333336
}
import '../scss/main.scss';
/**
 * Important. Needs to precede Client and I18n exports. Order matters.
 * Declares a Client Store React provider context that is used in app level
 * components for the primary reason (currently) to give our I18n component access to
 * the client store.
 */
export declare const ClientStoreProviderContext: React.Context<Partial<ClientStore>>;
export { Client } from './app/Client';
export { ClientState } from './stores/state/ClientState';
export { ClientActions } from './stores/action/ClientActions';
export { ChannelStore } from './stores/ChannelStore';
export { ComponentPropertyError, PropertyTree, TypeCode } from "./props/PropertyTree";
export type { PropertyTreeChangeListener, PropertyTreeChangeListenerDisposer, PathPredicate } from './props/PropertyTree';
export { PropertyUtil } from "./props/PropertyUtil";
export { ConnectionStatus, NotificationType } from "./stores/NotificationStore";
export { ClientStore, ClientScope, NativeApplicationType, PlatformEdition } from './stores/ClientStore';
export { ComponentStore, ComponentStoreState } from './stores/ComponentStore';
export type { PComponent } from './stores/ComponentStore';
export { PageStore } from './stores/PageStore';
export type { UpdatePayload } from './stores/PageStore';
export { AbstractUIElementStore } from './stores/AbstractUIElementStore';
export { ViewStore } from './stores/ViewStore';
export type { OutputListener } from './stores/ViewStore';
export { NotLicensedReason } from './stores/SystemStore';
export { ActionRegistry } from "./api/action/ActionRegistry";
export type { ActionFactory } from "./api/action/ActionRegistry";
export { PropertyType } from './api/property/PropertyType';
export { Column, ColumnType, Dataset } from './props/Dataset';
export type { ColumnObject } from './props/Dataset';
export { QualifiedValue, QUALITY } from './props/QualifiedValue';
export { BAD, ERROR, getCodeName, getQualityFor, getFullName, GOOD, GOOD_LEGACY, GOOD_INITIAL, GOOD_PENDING, Level, NOT_FOUND, QualityCode, TRIAL_EXPIRED, UNCERTAIN } from './props/QualityCode';
export type { QualityCodeDef } from './props/QualityCode';
export { preloadIcons } from './ui/preloadIcons';
export { ViewStateDisplay } from './ui/view-state/ViewStateDisplay';
export { LoadingSpinner } from './ui/display/LoadingSpinner';
export { arrayMove, calcAngleDegrees, capitalizeEveryWord, convertReactCssToHyphen, deepClone, getDeep, deepFreeze, exitFullScreen, getFullScreenElement, getImageData, getPortalDestination, getRandomInt, getType, isArray, isBoolean, isDate, isUrlEncoded, isFunction, isMomentDate, isNullOrUndefined, isNumeric, isPrimaryMouseButton, isPrimitive, isPlainObject, isSimpleObject, isString, isStyleConfig, JsType, onload, OperatingSystem, parseColor, getPathDetails, requestFullScreen, requireNonNull, requireString, ROOT_PORTAL_DESTINATION, secondsToHms, wordsFromCamelCase } from './util/utils';
export type { Color, PortalDestinationMeta } from './util/utils';
export { ImageFilter, TintFilter } from './util/ImageFilter';
export { Style } from './util/Style';
export type { StyleProps } from './util/Style';
export { NumberFormat, NumberFormatType, } from './util/NumberFormat';
export type { NumberFormatOptions } from './util/NumberFormat';
export type { RotationConfig } from './util/css-transform-util';
export { CoordinateUtils } from './util/coordinate-util';
export { DateUtils } from './util/date-utils';
export { DomEvent } from './util/event-util';
export { PipeUtils } from './util/pipe-util';
export { resizeLoopGuard } from './util/resizeLoopGuard';
export { SVG_Utils } from './util/svg-util';
export { getMousePosition, getScreenPosition, getScreenCumulativeTransformation, getTouchPosition, isIdentity, isIdentityMatrix, PointTransform, PointsTransform, transformationsToTransformCss, tranformationsToTransformationMatrix } from './util/transform-util';
export type { Transform } from './util/transform-util';
export { ComponentDefaultsStore } from './stores/ComponentDefaultsStore';
export { enumerable } from './util/enumerable-decorator';
export { ComponentPath } from './util/ComponentPath';
export { layoutCallbackCreator } from './app/LayoutCallbackCreator';
export type { LayoutBuilder } from './app/LayoutCallbackCreator';
export { makeLogger };
export { View, ViewStateType } from './app/View';
export type { ViewProps } from './app/View';
export { IconRenderer } from './app/IconRenderer';
export type { IconRendererConfig } from './app/IconRenderer';
export { DockModal } from './app/DockModal';
export { Component, } from "./api/component/Component";
export type { ComponentDefinition, ComponentInstanceDef, ComponentProps, EmitProps, Emitter } from "./api/component/Component";
export { ComponentStoreDelegate } from './api/component/ComponentStoreDelegate';
export { I18n, i18n } from './api/component/I18n';
export type { I18nProps } from './api/component/I18n';
export { DomEvents } from './event/DomEvents';
export { ComponentEvents, EventGroupActions } from './event/ComponentEvents';
export type { ClientAction, EventGroupActionCollection } from './event/ComponentEvents';
export { ComponentRegistry } from './api/component/ComponentRegistry';
export type { ComponentMeta } from './api/component/ComponentRegistry';
export { ObservableProjectDefinition, ResourceStore } from "./stores/ResourceStore";
export type { PendingUpdate, ProjectDefinition, SessionPropsDefinition } from "./stores/ResourceStore";
export type { Location } from 'history';
export { ComponentModal, ComponentModalPlacement, ComponentModalAlign } from './app/ComponentModal';
export type { ComponentModalProps } from './app/ComponentModal';
export { SynchroComponentStoreLoader } from './stores/ComponentStoreLoader';
export type { ComponentStoreLoader } from './stores/ComponentStoreLoader';
export type { GeolocationProps } from './stores/GeoLocationStore';
export { Z_INDEX } from './ui/z-constants';
export { Theming } from './theming/Theme';
export { CFO_WRAPPER_CLASS } from './app/ComponentFlexOverlay';
export { createSubscriptionMap, subscriptionFactory, } from './api/subscription/Subscription';
export type { NotificationHandler, SubscriptionHandler, SubscriptionListener, SubscriptionMap } from './api/subscription/Subscription';
export interface Breakpoint {
    name: string;
    minWidth: number;
}
export interface FileDownloadPayload {
    url: string;
    filename: string;
}
export interface PagesDefinition {
    pages: {
        [mountUrl: string]: PageDefinition;
    };
    sharedDocks: DocksDefinition;
}
export interface PageDefinition {
    viewPath: string;
    title: string;
    docks: DocksDefinition;
}
export declare enum DocksDefinitionCornerPriority {
    LeftRight = "left-right",
    TopBottom = "top-bottom"
}
export interface DocksDefinition {
    showHandleDuration: number;
    cornerPriority: DocksDefinitionCornerPriority.LeftRight | DocksDefinitionCornerPriority.TopBottom;
    left: Array<DockedViewDefinition>;
    right: Array<DockedViewDefinition>;
    top: Array<DockedViewDefinition>;
    bottom: Array<DockedViewDefinition>;
}
export interface DockedViewDefinition {
    viewPath: string;
    viewParams: any;
    id?: string;
    size: number;
    iconUrl: string;
    modal: boolean;
    show: "visible" | "onDemand" | "auto";
    anchor?: "fixed" | "scrollable";
    content: "push" | "cover" | "auto";
    resizable: boolean;
    autoBreakpoint: number;
    handle?: "show" | "hide" | "autoHide";
}
export declare enum DockPosition {
    left = "left",
    right = "right",
    top = "top",
    bottom = "bottom"
}
export type Partial<T> = {
    [P in keyof T]?: T[P];
};
export declare enum PublicationMode {
    PUBLISHED = "Published",
    STAGING = "Staging"
}
export declare enum GatewayRole {
    INDEPENDENT = "independent",
    MASTER = "master",
    BACKUP = "backup"
}
export interface ClientNotification {
    type: NotificationType;
    timestamp: moment.Moment;
    showPopup: boolean;
    dismissed: boolean;
    isDismissable: boolean;
    connectionStatus?: ConnectionStatus;
    removeOnDismiss?: boolean;
}
export interface ConnectionState {
    host: string | undefined | null;
    isConnecting: boolean;
    isConnected: boolean;
    lastMessage?: Date;
    connectionFailure?: string;
}
export interface GatewayInfo {
    name: string;
    url?: string;
    timezone: string;
    ping?: number;
    gatewayTime: string;
    redundantRole: GatewayRole | null;
    redundantPartner?: GatewayInfo | null;
    ignitionVersion: string;
    isIndependent: boolean;
}
export interface ModuleInfo {
    name: string;
    license: string;
    status: string;
    version: string;
}
export interface MessageHandler {
    (payload: PlainObject): void;
}
export interface InstallReactionFunc {
    (data: PropertyTree): void;
}
export interface LayoutMeta {
    getLayoutType(): string;
    getLayoutClass(): typeof React.Component;
}
export interface LayoutCallback {
    style(style?: React.CSSProperties): React.CSSProperties;
    classes(classes?: Array<string>): Array<string>;
}
export interface Edges {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export interface Size2d {
    width: number;
    height: number;
}
export interface SizeObject {
    width: number | string;
    height: number | string;
    rotate?: RotationConfig;
}
export interface Point {
    x: number;
    y: number;
}
export type Rect = Point & Size2d;
export interface DetailedRectangle extends Rect {
    right: number;
    bottom: number;
    transform?: Transform;
}
export interface ElementPosition {
    left: number;
    top: number;
    right?: number;
    bottom?: number;
    relativeLocation?: string;
}
export type ElementDimensions = ElementPosition & Size2d;
export interface ClientSessionState {
    views: Array<ViewSessionState>;
}
export interface ComponentSessionState {
    id: string;
    props: PlainObject;
    position: PlainObject;
    meta: PlainObject;
    custom: PlainObject | null;
    children?: Array<ComponentSessionState>;
}
export interface ViewSessionState {
    instanceId: string;
    root: ComponentSessionState;
    props: PlainObject;
    params: PlainObject;
    custom: PlainObject;
}
export declare enum PermissionsType {
    AllOf = "AllOf",
    AnyOf = "AnyOf"
}
export interface SecurityLevelConfig {
    name: string;
    children: Array<SecurityLevelConfig>;
}
export interface PermissionsConfig {
    type?: PermissionsType;
    securityLevels?: Array<SecurityLevelConfig>;
}
export interface ViewDefinition {
    root: ComponentDefinition;
    props?: PlainObject;
    custom?: PlainObject;
    params?: PlainObject;
    propConfig?: PropertyConfigCollection;
    events?: EventConfig;
    permissions?: PermissionsConfig;
}
export interface BindingConfig {
    type: string;
    config: PlainObject;
    enabled?: boolean;
    overlayOptOut?: boolean;
    transforms?: Array<PlainObject>;
}
export interface PropertyChangeScriptConfig {
    script: string;
    enabled?: boolean;
}
export interface PropertyConfigCollection {
    [propertyKey: string]: PropertyConfig;
}
export declare enum PropertyAccess {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    PROTECTED = "PROTECTED",
    SYSTEM = "SYSTEM"
}
export interface PropertyConfig {
    binding?: BindingConfig;
    persistent?: boolean;
    paramDirection?: "input" | "output" | "inout";
    onChange?: PropertyChangeScriptConfig;
    access: PropertyAccess;
}
export interface EventConfig {
    dom?: EventGroup;
    component?: EventGroup;
    system?: EventGroup;
    model?: EventGroup;
}
export interface EventGroup {
    [eventName: string]: ActionDefinition<PlainObject> | Array<ActionDefinition<PlainObject>>;
}
export declare enum EventGroupType {
    COMPONENT = "component",
    COMPONENT_INTERNAL = "component-internal",
    DOM = "dom",
    MODEL = "model",
    SYSTEM = "system"
}
export interface ScriptConfig {
    customMethods?: Array<{
        name: string;
        params: Array<string>;
        script: string;
    }>;
    messageHandlers?: Array<{
        messageType: string;
        sessionScope: boolean;
        pageScope: boolean;
        viewScope: boolean;
        script: string;
    }>;
    extensionFunctions?: Array<{
        name: string;
        script: string;
        enabled: boolean;
    }>;
}
export interface CloseEventDefinition {
    codeDescription: string;
    codeMeaning: string;
}
export interface SocketInitResponse {
    closeEventDefinitions: string;
}
export interface SessionInitResponse {
    authenticated: boolean;
    sessionState?: ClientSessionState;
    gateway: GatewayStatus;
    error?: string;
    username?: string;
    roles?: Array<string>;
    pendingUpdate?: PendingUpdate;
    created: number;
}
export interface ClientStartResponse {
    sessionProps: {
        [key: string]: any;
    };
    sessionCustom: {
        [key: string]: any;
    };
    pageProps: {
        [key: string]: any;
    };
    created: number;
}
export interface LicenseState {
    permitted: boolean;
    trial: boolean;
    trialRemaining?: number;
    reason?: NotLicensedReason;
    isLegacyLicense: boolean;
}
export declare enum ActivityLevel {
    UNDECIDED = "Undecided",
    COLD = "Cold",
    WARM = "Warm",
    HOT = "Hot",
    ACTIVE = "Active"
}
export declare enum NodeRole {
    INDEPENDENT = "Independent",
    BACKUP = "Backup",
    MASTER = "Master",
    NONE = ""
}
export interface Peer {
    name?: string;
    address: string;
    http_port: number;
    https_port: number;
    activity_level: ActivityLevel;
    connected: boolean;
}
export interface RedundancyStatus {
    activity_level: ActivityLevel;
    role: NodeRole;
    peers: Array<Peer>;
}
export interface WebAuthUser {
    id: string;
    userName: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    roles?: Array<string>;
    timestamp: number;
}
export interface WebAuthStatus {
    authorized: boolean;
    authenticated: boolean;
    authenticationRequired: boolean;
    user?: WebAuthUser;
    securityLevels: Array<SecurityLevelConfig>;
    idp?: string;
}
export interface HelloResponse {
    created: number;
    webAuthStatus?: WebAuthStatus;
    newTabId?: boolean;
    license: LicenseState;
    redundancy: RedundancyStatus;
    runnable: boolean;
    sessionId?: string;
    sessionClosedMessage?: string;
    pageClosedMessage?: string;
    loggedOutMessage?: string;
    token?: string;
    activeTime?: number;
    autoIdpAuth?: boolean;
}
export interface GatewayStatus {
    name: string;
    gatewayTime: string;
    timezone: string;
    role: string;
}
export interface ViewStartPayload {
    resourcePath: string;
    mountPath: string;
    birthDate: number;
    params: PlainObject | undefined | null;
}
export interface ErrorMessagePayload {
    error: string;
    details: string;
}
export interface ActionDefinition<C extends PlainObject = PlainObject> {
    type: string;
    scope: "G" | "C";
    config: C;
    enabled?: boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    phase?: "bubbling" | "capturing";
}
export interface Coordinates {
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
}
export interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}
export interface ActionDenied {
    eventType: string;
    eventName: string;
    elementName: string;
}
export interface ViewDimensions extends Size2d {
    scrollTop: number;
    scrollLeft: number;
}
export interface PagePropsDimensions {
    enabled: boolean;
    viewport: Size2d;
    screen: Size2d;
    primaryView: ViewDimensions;
}
export { EncodedUtils } from "./util/encoding-util";
export type PlainObject = Record<string, any>;
export type ClientError = Error & {
    details?: string;
};
/**
 * Type declared for perspective component CSS Style objects, as used in the 'props' PropertyTree
 */
export type StyleObject = React.CSSProperties & {
    classes?: string | Array<string>;
};
export declare const WEB_INTERFACE: string;
export declare const DEFAULT_TIMEZONE = "";
export declare const DEFAULT_SIZE_2D: Size2d;
export declare const DEFAULT_VIEW_DIMENSIONS: ViewDimensions;
export declare const DEFAULT_PAGE_PROP_DIMENSIONS: PagePropsDimensions;
export type JsObject = {
    [key: string]: any;
    [key: number]: any;
};
declare global {
    interface Window {
        __qualityCodes?: Array<QualityCodeDef>;
        __client?: ClientStore;
        __mobileOs?: string;
        __webInterface: GwDataSubmitter<any>;
        __mobileInterface?: MobileInterface;
        __workstationInterface?: WorkstationInterface;
        __disableServiceWorker?: boolean;
        __wsMaxIdleTimeMs?: number;
        __wsIdleTimeIntervalMs?: number;
        __helloResponseTimeoutMs?: number;
    }
}
