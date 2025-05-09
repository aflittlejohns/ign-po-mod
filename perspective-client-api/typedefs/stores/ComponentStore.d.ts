import { JL } from 'jsnlog';
import * as React from 'react';
import { ComponentDefinition, ComponentProps, Emitter } from '../api/component/Component';
import { Printable, PrintProps } from '../api/component/Printable';
import { ComponentMeta } from '../api/component/ComponentRegistry';
import { PropertyType } from '../api/property/PropertyType';
import { ComponentEvents } from '../event/ComponentEvents';
import { DomEvents } from '../event/DomEvents';
import { ClientStore, ComponentSessionState, ComponentStoreDelegate, JsObject, LayoutCallback, NotificationHandler, PlainObject, Point, PropertyConfigCollection, SubscriptionHandler } from '../perspective-client';
import { PropertyTree, UpdateObject } from '../props/PropertyTree';
import { QualityCode } from '../props/QualityCode';
import { NotFoundMeta } from '../ui/display/NotFound';
import { AbstractUIElementStore } from './AbstractUIElementStore';
import { ComponentLoadMonitor, ComponentStoreLoader } from './ComponentStoreLoader';
import { ViewStore } from './ViewStore';
export interface PropertyUpdateObject {
    props?: UpdateObject;
    meta?: UpdateObject;
    position?: UpdateObject;
    custom?: UpdateObject;
}
export interface ComponentMetaTooltipProps {
    enabled: boolean;
    width: number | string;
    text: string;
    style: React.CSSProperties;
    delay: number;
    sustain: number;
    location: string;
    tail: boolean;
}
export declare const EmptyLayoutCallback: LayoutCallback;
export declare const CloningLayoutCallback: LayoutCallback;
export type PComponent = React.ComponentClass<ComponentProps<PlainObject>> | React.FunctionComponent<ComponentProps<PlainObject>>;
type OverlayOptOutFilter = ((propsQ: Map<string, QualityCode>, propsConfig: PropertyConfigCollection | undefined) => Map<string, QualityCode>);
export declare enum ComponentStoreState {
    tooltip = "tooltip",
    ref = "ref",
    children = "children",
    contextMenu = "contextMenu"
}
export declare class ComponentStore extends AbstractUIElementStore implements Printable {
    view: ViewStore;
    viewMountPath: string;
    parent: ComponentStore | null;
    addressPath: Array<number>;
    path: string;
    def: ComponentDefinition;
    delegate: ComponentStoreDelegate | undefined;
    props: PropertyTree;
    meta: PropertyTree;
    _position?: PropertyTree;
    _custom?: PropertyTree;
    componentMeta: ComponentMeta;
    childComponents: Array<ComponentStore>;
    componentEvents: ComponentEvents;
    domEvents: DomEvents;
    Component: React.ComponentClass;
    tooltip: React.ReactPortal | undefined;
    componentTooltipFlag: boolean;
    contextMenu: React.ReactPortal | undefined;
    contextSubmenus: Array<any>;
    contextSubmenuPortal: React.ReactPortal | undefined;
    clientStore: ClientStore | undefined;
    sustain: any;
    delay: any;
    contextMenuDelay: any;
    _ref: Element;
    static readonly notFoundMeta: NotFoundMeta;
    private subscriptionMap;
    readonly subscribe: SubscriptionHandler;
    protected notify: NotificationHandler;
    constructor(view: ViewStore, parent: ComponentStore | null, def: ComponentDefinition, addressPath: Array<number>, // component id, like [0,5]
    sessionState?: ComponentSessionState);
    protected getPositionProps(): JsObject;
    get log(): JL.JSNLogLogger;
    get custom(): PropertyTree;
    get position(): PropertyTree;
    protected getMetaProps(): JsObject;
    protected getRawComponent(): PComponent;
    getComponent(): React.ComponentClass<any>;
    get isCoordContainerChild(): boolean;
    get isCoordContainer(): boolean;
    refCallback(ref: Element): void;
    emitterFactory(layout?: LayoutCallback, rotationEnabled?: boolean): Emitter;
    /**
     * Method that takes the style object being returned for emit(), and provides a central place to translate
     * meta properties into style properties.
     *
     * @param {React.CSSProperties} emitStyle the style object otherwise prepared to return from the emit()
     *     call.
     * @return {React.CSSProperties | void}
     */
    private translateMetaToStyle;
    private translateTransformsToStyle;
    protected buildComponent(Component: PComponent, overlayOptOut?: OverlayOptOutFilter): React.ComponentClass;
    /**
     * noop - overriden in DesignerComponentStore
     */
    updateMetaName(): void;
    /**
     * Provides a new map of component qualities that have not been configured to opt out of displaying a
     * quality overlay.
     *
     * @param propsQ {Map<string, QualityCode>} - A map of quality codes to filter.
     * @param propsConfig {PropertyConfigCollection | undefined} - A property config collection.
     * @return {Map<string, QualityCode} - Returns a map of quality codes that are not opted out.
     */
    overlayOptOut(propsQ: Map<string, QualityCode>, propsConfig: PropertyConfigCollection | undefined): Map<string, QualityCode>;
    /**
     *
     * @param loader The store loader to use
     * @param sessionState applied for a component model that already exists in the gateway.
     * @private
     */
    initChildren(loader: ComponentStoreLoader, sessionState?: ComponentSessionState): Promise<Array<ComponentStore>>;
    /**
     * Load-ahead is allowed for EmbeddedViews that have their view-path saved in props (meaning: probably not binding-
     * driven) and are pointing to views that exist.
     * @private
     */
    canLoadAhead(): boolean;
    loadAhead(loadMonitor: ComponentLoadMonitor): Promise<any>;
    onPropWrite(propType: PropertyType, dataModel: PropertyTree): void;
    /**
     * Check to see if the current component is a container.
     * @returns {boolean} Returns true if the component is a container, false otherwise.
     */
    isContainerComponent(): boolean;
    /**
     * Assigns all PropertyTypes to the given store
     * @param sessionState the existing state of a session, if it exists
     */
    assignPropsFromSession(sessionState?: ComponentSessionState): void;
    get children(): Array<ComponentStore>;
    assignOwnUpdates(updates: PropertyUpdateObject): void;
    get index(): number;
    updateOnReconnect(updates: PlainObject): void;
    /** Called either by my parent container or by the containing ViewStore (if this is a root container) */
    dispatchUpdates(componentPath: Array<number>, updates: PlainObject): void;
    handleInternalComponentEvent(eventName: string, eventObject: PlainObject): void;
    dispatchEvent(componentPath: Array<number>, eventType: string, eventName: string, eventObject: PlainObject): void;
    private isFocusableElement;
    private findFocusableElement;
    focus(): void;
    handleContextMenuEvent(event: React.MouseEvent): void;
    handleClickEvent(event: React.MouseEvent): void;
    maybeShowContextMenu(event: React.MouseEvent): void;
    stopEvent(event: React.MouseEvent): void;
    hideExistingContextMenuRef(): any;
    requestContextMenu(): void;
    private maybeShowContextSubmenu;
    private maybeRemoveContextSubmenu;
    maybeHideContextMenu(): void;
    hideContextMenu(): void;
    private maybeHideContextSubmenu;
    private hideContextSubmenu;
    private messageCallbackEvent;
    private methodCallbackEvent;
    private linkCallbackEvent;
    private mouseEnterEvent;
    private showContextMenu;
    private addSubmenu;
    private showContextSubmenu;
    private rerenderContextSubmenus;
    private getSubmenus;
    private getContextMenuProps;
    maybeShowTooltip(event: React.PointerEvent): void;
    rerenderTooltip(currTooltipProps: ComponentMetaTooltipProps): void;
    requestTooltip(): void;
    maybeHideTooltip(event: any): void;
    requestPrint(props?: PrintProps): void;
    showComponentTooltip(props: ComponentMetaTooltipProps, mouseEventCoordinates?: Point): void;
    showTooltip(text: string, location: Point): void;
    hideTooltip(): void;
    getTooltipProps(): ComponentMetaTooltipProps;
    /**
     * Returns the actual dom node represented by the react element if the reference exists.
     * @returns {Element | void}
     */
    get element(): Element | void;
    isRootContainer(): boolean;
    get uiOffset(): Point;
}
export interface HOCWrapperState extends Partial<ComponentProps<PlainObject>> {
    props: any;
    delegate: any;
    meta: any;
    position: any;
    custom: any;
    i18nStale: boolean;
    qualities: Map<string, QualityCode>;
    coOptQualities: Map<string, QualityCode>;
    showQualityOverlay?: boolean;
}
export declare enum ComponentInternalEventNames {
    REQUEST_FOCUS = "request-focus",
    REQUEST_TOOLTIP = "request-tooltip",
    REMOVE_TOOLTIP = "remove-tooltip",
    REQUEST_CONTEXT_MENU = "request-context-menu",
    REMOVE_CONTEXT_MENU = "remove-context-menu",
    REQUEST_PRINT = "request-print"
}
export {};
