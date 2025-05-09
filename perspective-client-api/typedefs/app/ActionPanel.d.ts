import * as React from 'react';
import { ClientNotification } from '../perspective-client';
import { ClientStore } from '../stores/ClientStore';
import { MountStore } from '../stores/MountStore';
import { ConnectionStatus, NotificationType } from '../stores/NotificationStore';
export interface ActionPanelProps {
    client: ClientStore;
    mounts: MountStore;
    notifications: Array<ClientNotification>;
}
export declare class ActionPanel extends React.Component<ActionPanelProps, any> {
    private static readonly IGNORED_NOTIFICATIONS;
    props: ActionPanelProps;
    notificationHeight: number;
    panelBodyHeight: number;
    panelOpenBottom: number;
    panelClosedBottom: number;
    overlay: HTMLElement | null;
    constructor(props: ActionPanelProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: ActionPanelProps): void;
    listenForPanelToggle(): void;
    openGatewayPage(): void;
    connectionSecurityTitle(isWss: boolean): string;
    connectionIcon(isWss: boolean): JSX.Element;
    logOut(): void;
    logIn(): void;
    setOverlayRef(ref: HTMLElement | null): void;
    renderAuthAction(authenticated: boolean): JSX.Element;
    renderPanelHeader(client: ClientStore, userName: string): JSX.Element;
    render(): JSX.Element;
}
export interface PanelItemProps {
    key: string;
    notification: ClientNotification | Partial<ClientNotification>;
    client: ClientStore;
    openAppModal(content?: any): any;
}
export interface PanelNotificationItem {
    icon?: JSX.Element;
    message: string;
    secondaryMessage?: string;
    gatewayRoleMessage?: string;
    actionButton?: JSX.Element;
    panelClass: string;
    onClick?(e: React.MouseEvent<HTMLElement>): void;
}
export declare class PanelItem extends React.Component<PanelItemProps, any> {
    getConnectionStatus(): ConnectionStatus;
    getPanelInfo(notification: ClientNotification | Partial<ClientNotification>): PanelNotificationItem;
    reportIssue(): void;
    updateProject(): void;
    openModal(): void;
    render(): JSX.Element;
}
export declare function getPanelContent(client: ClientStore, type: NotificationType | undefined, status: ConnectionStatus, gatewayName?: string): PanelNotificationItem;
