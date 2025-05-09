import * as React from 'react';
import { ComponentProps, PlainObject } from '../perspective-client';
import { QualityCode } from '../props/QualityCode';
import { ComponentStore, PComponent } from "../stores/ComponentStore";
import { PopoverCardData } from "./ComponentPopover";
export interface ComponentQualityFlexOverlayProps {
    ChildComponent?: PComponent;
    childProps?: ComponentProps<PlainObject>;
    store: ComponentStore;
    qualities: Map<string, QualityCode>;
    eventsEnabled: boolean;
}
interface ComponentQualityFlexOverlayState {
    hasQualityError: boolean;
    hasQualityPending: boolean;
    hasQualityUnknown: boolean;
    notices: Array<string>;
    message: QualityNotificationType | string;
    notificationType: QualityNotificationType;
    popoverVisible: boolean;
}
export declare enum QualityNotificationType {
    PENDING = "PENDING",
    ERROR = "ERROR",
    UNKNOWN = "UNKNOWN",
    MULTIPLE = "MULTIPLE",
    NONE = "NONE"
}
export declare class ComponentQualityFlexOverlay extends React.Component<ComponentQualityFlexOverlayProps, ComponentQualityFlexOverlayState> {
    constructor(props: ComponentQualityFlexOverlayProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: ComponentQualityFlexOverlayProps): void;
    renderHeaderContent(): React.ReactElement<HTMLElement> | undefined;
    renderIcons(): Array<React.ReactElement<HTMLElement>>;
    evalQualitiesAndUpdateState(qualities: Map<string, QualityCode>): void;
    showPopover(): void;
    hidePopover(): void;
    getPopoverCards(): Array<PopoverCardData>;
    disableTouchHandler(event: React.TouchEvent): void;
    renderMicroIcons(): Array<React.ReactElement<HTMLElement>>;
    getMicroFooterContent(): React.ReactElement<HTMLElement>;
    render(): JSX.Element;
}
export declare enum Theme {
    OVERLAY = "ia_qualityOverlay",
    FOOTER = "ia_qualityOverlay__footer",
    ICON_OUTLINE = "ia_qualityOverlay__icon__outline",
    ICON = "ia_qualityOverlay__icon"
}
export declare const errorIcon: React.ReactElement<HTMLElement>;
export declare const unknownIcon: React.ReactElement<HTMLElement>;
export declare const pendingIcon: React.ReactElement<HTMLElement>;
export declare const qualityIcons: {
    ERROR: React.ReactElement<HTMLElement, string | React.JSXElementConstructor<any>>;
    UNKNOWN: React.ReactElement<HTMLElement, string | React.JSXElementConstructor<any>>;
    PENDING: React.ReactElement<HTMLElement, string | React.JSXElementConstructor<any>>;
};
export {};
