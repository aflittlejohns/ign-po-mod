import * as React from 'react';
import { ClientStoreProviderContext } from '../perspective-client';
import { ClientStore } from '../stores/ClientStore';
import { MountStore, PopupMount } from '../stores/MountStore';
export interface PanelRootProps {
    mounts: MountStore;
}
export interface PanelRootState {
    windowWidth: number;
    showFirstTimeMakerModal: boolean;
}
export interface CenterMountProps {
    mounts: MountStore;
    setRoot(root: HTMLElement | null): void;
    updateDimensions: () => any;
}
export interface MarginStyleObject {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export declare class Center extends React.Component<CenterMountProps, any> {
    center: HTMLDivElement | null;
    disableTransitions: boolean;
    constructor(props: CenterMountProps);
    componentDidMount(): void;
    onViewChange(): void;
    setCenterRef(center: HTMLDivElement | undefined | null): void;
    updatePageProps(width: number, height: number): void;
    render(): React.ReactElement<HTMLDivElement>;
}
export declare class PanelRoot extends React.Component<PanelRootProps, PanelRootState> {
    static contextType: React.Context<import("../perspective-client").Partial<ClientStore>>;
    context: React.ContextType<typeof ClientStoreProviderContext>;
    inactivityDuration: number;
    inactivityTimer: number | null;
    clientRoot: HTMLElement | null;
    clientRootHasListeners: boolean;
    windowHasResizeListener: boolean;
    centerRoot: HTMLElement | null;
    state: PanelRootState;
    constructor(props: PanelRootProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    initializeDocks(): void;
    addClientEventListeners(): void;
    removeClientEventListeners(): void;
    addWindowResizeListener(): void;
    removeWindowResizeListener(): void;
    listenForModal(): void;
    setCenterRoot(root: HTMLElement | null): void;
    positionDockOnResize(): void;
    updateCenterDimensions(): void;
    showHandles(): void;
    findActiveModal(): PopupMount | undefined;
    setClientRoot(ref: HTMLElement | null): void;
    handleMakerModalCloseClick(event: React.MouseEvent): void;
    render(): JSX.Element;
}
