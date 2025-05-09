import * as React from "react";
import { NotificationProps } from "./Notification";
interface MobileNotificationState {
    swipeStart: number;
    swipeOffset: number;
    isSwiping: boolean;
}
export declare class MobileNotification extends React.Component<NotificationProps, MobileNotificationState> {
    notificationRef: React.RefObject<HTMLDivElement>;
    timeout: number | undefined;
    state: {
        swipeStart: number;
        swipeOffset: number;
        isSwiping: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Start touch event for notification.
     * @param {MouseEvent | TouchEvent} event
     */
    onTouchStart(event: any): void;
    /**
     * Update position of notification, dismiss if we hit the threshold.
     * @param {MouseEvent | TouchEvent} event
     */
    onTouchMove(event: any): void;
    /**
     * Reset notification position if we do not reach the threshold, but end drag.
     * @param {MouseEvent | TouchEvent} event
     */
    onTouchEnd(event: any): void;
    render(): JSX.Element;
}
export {};
