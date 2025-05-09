import moment from 'moment';
import type { Moment } from 'moment';
import * as React from 'react';
import { ActionDenied, ClientNotification, ErrorMessagePayload } from '../perspective-client';
import { ConnectionStatus, NotificationStore, NotificationType } from '../stores/NotificationStore';
export interface NotificationProps {
    key: string;
    store: NotificationStore;
    notification: ClientNotification;
}
export declare class Notification extends React.Component<NotificationProps, any> {
    props: NotificationProps;
    private readonly ageCount;
    renderTime: Moment;
    constructor(props: NotificationProps);
    UNSAFE_componentWillReceiveProps(nextProps: NotificationProps): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    closeNotification(): void;
    replaceTokens(message: string, token: string, toReplace: string): Array<JSX.Element | string>;
    getUpdateMessage(): JSX.Element;
    getIdleMessage(): JSX.Element | null;
    getAuthChallengeBlockedMessage(): JSX.Element;
    getActionDenied(): ActionDenied | undefined;
    getErrorMessage(): ErrorMessagePayload | undefined;
    isLogin(): boolean | undefined;
    getBody(type: NotificationType, connectionStatus: ConnectionStatus | undefined, timestamp: moment.Moment): JSX.Element;
    private doAuthChallenge;
    getActions(type: NotificationType): JSX.Element | null | undefined;
    toggleExpansion(): void;
    getMobileNotificationBody(type: NotificationType, connectionStatus: ConnectionStatus | undefined, timestamp: moment.Moment): JSX.Element;
    render(): JSX.Element;
}
