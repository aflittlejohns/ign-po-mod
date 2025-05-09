import { History } from 'history';
import { IObservableValue } from 'mobx';
import { ClientStore } from './ClientStore';
import { ObservableProjectDefinition } from './ResourceStore';
import { StatusPages } from './status/StatusPages';
import { DockActionConfig } from '../action/DockAction';
import { PopupActionConfig } from '../action/PopupAction';
import { DockedViewDefinition, DockPosition, DocksDefinition, DocksDefinitionCornerPriority, PageDefinition, PagesDefinition, PlainObject } from '../perspective-client';
import React from 'react';
export interface UrlPart {
    param?: string;
    literal?: string;
}
export declare const dockedViewDefaults: Partial<DockedViewDefinition>;
export declare class MountedUrl {
    viewPath: string;
    mountPath: string;
    title: string;
    parts: Array<UrlPart>;
    expectedParams: Set<string>;
    constructor(url: string, mountConfig: PageDefinition);
    /**
     * Tests a URL string against this mounted URL. If the url matches, return value will be an object containing
     * any parameter names/values. Empty object if the url matches but there are no parameters specified.
     * If the url doesn't match, false is returned.
     */
    match(url: string): boolean | PlainObject;
    makeUrl(params: PlainObject): string;
}
export declare class CenterViewport {
    viewPath: string | null;
    pageTitle: string | null;
    viewParams: PlainObject;
    isDockResizing: boolean;
    mounts: Array<MountedUrl>;
    code: string;
    hasContent: boolean;
    updateDocks: (() => any) | undefined;
    history: History;
    constructor(history: History);
    init(config: ObservableProjectDefinition, updateDocks: () => any): void;
    updateMounts(config: PagesDefinition): void;
    sortMounts(): void;
    /**
     * Reacts to a new URL being pushed onto the history stack. Looks through the mounted url configuration
     * to figure out which view to mount and what the parameter values are.
     */
    onPathChanged(newPath: string): void;
    /**
     * Can by called by other parts of the API to navigate to a view with a given set of params. Navigating in this way
     * will change the primary view without changing the url path.
     */
    navigateToView(viewPath: string, viewParams?: PlainObject): void;
}
export declare class DockedViewport {
    mountStore: MountStore;
    position: DockPosition;
    code: string;
    currentViewIndex: IObservableValue<number>;
    expanded: boolean;
    focus: boolean;
    enableHandles: boolean;
    modallyActive: boolean;
    isResizing: boolean;
    _views: Array<DockedViewDefinition>;
    constructor(position: DockPosition, mounts: MountStore);
    setViews(): void;
    setActiveView(): void;
    configShouldExpand(): boolean;
    get cornerPriority(): DocksDefinitionCornerPriority.LeftRight | DocksDefinitionCornerPriority.TopBottom;
    get activeView(): DockedViewDefinition | undefined;
    get views(): Array<DockedViewDefinition>;
    adjustSize(size: number): void;
    expandDock(): void;
    focusDock(): void;
    unFocusDock(): void;
    get hasFocus(): boolean;
    expandWithConfig(config: DockActionConfig): void;
    collapseDock(): void;
    showToggleHandles(): void;
    hideToggleHandles(): void;
    get hasContent(): boolean;
}
export declare class PopupMount {
    style: React.CSSProperties;
    focus: boolean;
    stackingIndex: number;
    id: string;
    viewPath: string;
    viewParams: any;
    title: string;
    showCloseIcon: boolean;
    draggable: boolean;
    resizable: boolean;
    modal: boolean;
    overlayDismiss: boolean;
    overlayIndex: number;
    positionType: string;
    constructor(config: PopupActionConfig, mountStore: MountStore);
    setStackingIndex(index: number): void;
    get hasContent(): boolean;
}
export interface Offset {
    pixels: number;
    pushContent: boolean;
    isScrollable: boolean;
}
export declare class DockOffset {
    top: Offset;
    right: Offset;
    bottom: Offset;
    left: Offset;
}
export declare class MountStore {
    parent: ClientStore;
    center: CenterViewport;
    docks: Map<DockPosition, DockedViewport>;
    mountedDockConfig: DocksDefinition;
    dockOffset: DockOffset;
    activePopups: Array<PopupMount>;
    focusedPopupId: string | undefined;
    modalActive: boolean;
    appBarOpen: boolean;
    actionPanelOpen: boolean;
    appModalOpen: boolean;
    appModalContent: StatusPages;
    connectionBannerActive: boolean;
    dockOffsetChanged: boolean;
    unlicensedBannerActive: boolean;
    unlicensedModalOpen: boolean;
    constructor(store: ClientStore);
    listenForGatewayConnection(): void;
    /**
     * Called on initial load, when project updates or when center mount changes to set current dock configuration.
     */
    updateDockConfig(): void;
    /**
     * Pass in the view configuration to apply to one position of the docks that should be updated.
     * @param position
     * @param viewConfigs
     */
    updatePartialDockConfig(position: DockPosition, viewConfigs: Array<DockedViewDefinition>): void;
    /**
     *
     * @param expandCollapseDock
     */
    forceUpdateDockConfig(expandCollapseDock: boolean): void;
    navigateTo(viewPath: string, viewParams?: PlainObject): void;
    /**
     * If a mount-specific DockDefinition exists, merges its configuration with the global project DockDefinition.
     * Defaults to global definition for any properties not specified at mount level, but overrides with mount-specific
     * value when present.
     */
    getMountedDockConfig(project: ObservableProjectDefinition): DocksDefinition;
    /**
     * Matches the current mountPath to a configured project mount, allowing for urls with parameters.
     */
    matchMountPath(project: ObservableProjectDefinition): PageDefinition | undefined;
    updateDockOffset(position: DockPosition, size?: number): void;
    findDockByViewId(id: string): DockedViewport | undefined;
    setDockResize(resizing: boolean): void;
    activatePopup(config: PopupActionConfig): void;
    focusPopup(id: string): void;
    focusDock(position: DockPosition): void;
    closePopup(id: string): void;
    closeModal(): void;
    closeAppBar(): void;
    openAppBar(): void;
    closeActionPanel(): void;
    toggleActionPanel(): void;
    openAppModal(content?: StatusPages): void;
    setModalContent(content: StatusPages): void;
    closeAppModal(): void;
    openUnlicensedModal(): void;
    closeUnlicensedModal(): void;
}
