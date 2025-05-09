import { IReactionDisposer } from 'mobx';
import * as React from 'react';
import { ClientNotification, ClientStore, ClientStoreProviderContext, PropertyTree } from '../perspective-client';
import { MountStore } from '../stores/MountStore';
export interface BarColor {
    activeIconFill: string;
    inactiveIconFill: string;
    inactiveText: string;
}
export interface AppBarProps {
    mounts: MountStore;
    notifications: Array<ClientNotification>;
    gatewayName: string;
}
export interface AppBarState {
    aboutActive: boolean;
    togglePosition: string;
    iconPath: string;
}
export declare class AppBar extends React.Component<AppBarProps, AppBarState> {
    static contextType: React.Context<import("../perspective-client").Partial<ClientStore>>;
    context: React.ContextType<typeof ClientStoreProviderContext>;
    props: AppBarProps;
    state: AppBarState;
    barColors: BarColor;
    gatewayNameCharLimit: number;
    tooltip: HTMLElement | null;
    disposer: IReactionDisposer;
    sessionPropsDisposer: () => void;
    constructor(props: AppBarProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onSessionPropsChange(tree: PropertyTree): void;
    showTooltip(): void;
    hideTooltip(): void;
    openAppBar(): void;
    closeAppBar(): void;
    toggleAboutWindow(): void;
    setTooltipRef(ref: HTMLElement | null): void;
    renderAboutIcon(edition: string, aboutActiveClass: string): JSX.Element;
    render(): JSX.Element;
    createExitProjectButton(): JSX.Element;
    onExitTap(): void;
}
export declare function getNotificationIcons(notifications: Array<ClientNotification>, iconFill: string): {
    connectionIcon: undefined;
    updateIcon: undefined;
    timerIcon: undefined;
    tagIcon: undefined;
};
