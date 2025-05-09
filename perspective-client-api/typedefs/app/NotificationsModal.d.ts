import * as React from 'react';
import { ClientNotification } from '../perspective-client';
import { MountStore } from '../stores/MountStore';
import { ClientStore } from '../stores/ClientStore';
/**
 * The client popup notifications modal that displays at the top of a client session.
 * Example of notifications include connectivity issues and available updates.
 *
 * @prop client: ClientStore - Perspective client store.
 * @prop mounts: MountStore - Perspective mount store.
 * @prop notifications?: Array<ClientNotification> - The notifications to display.
 */
export declare class NotificationsModal extends React.Component<NotificationsModalProps, any> {
    render(): React.ReactElement<HTMLDivElement>;
}
interface NotificationsModalProps {
    client: ClientStore;
    mounts: MountStore;
    notifications?: Array<ClientNotification>;
}
export {};
