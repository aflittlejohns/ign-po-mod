import * as React from 'react';
import { ComponentProps, ComponentStore, PComponent, PlainObject, Size2d } from '../perspective-client';
import { PopoverCardData } from "./ComponentPopover";
export type ComponentFlexOverlayStyles = {
    overlayStyles?: React.CSSProperties;
    headerStyles?: React.CSSProperties;
    footerStyles?: React.CSSProperties;
    bodyStyles?: React.CSSProperties;
};
export declare const CFO_WRAPPER_CLASS: string;
export type ComponentFlexOverlayClassNames = {
    overlayClassNames?: string;
    headerClassNames?: string;
    footerClassNames?: string;
    bodyClassNames?: string;
};
export interface ComponentFlexOverlayProps {
    ChildComponentToOverlay?: PComponent;
    childComponentToOverlapProps?: ComponentProps<PlainObject>;
    store: ComponentStore;
    eventsEnabled: boolean;
    inlineStyles?: ComponentFlexOverlayStyles;
    classNames?: ComponentFlexOverlayClassNames;
    headerContent?: React.ReactNode;
    bodyContent?: React.ReactNode;
    footerMessage: string;
    footerContent?: React.ReactNode;
    popoverData: Array<PopoverCardData> | undefined;
    onSizeChange?(size: Size2d): void;
}
export interface PanelPosition {
    left: number;
    top: number;
    width: number;
    maxHeight: number;
}
export interface PopoverPosition {
    panelPosition: PanelPosition;
    arrowStyle: React.CSSProperties;
}
/**
 * A reusable component overlay that renders as a flex container
 * containing header, body, and footer sections whose content is
 * provided by the implementor.
 */
export declare class ComponentFlexOverlay extends React.Component<ComponentFlexOverlayProps> {
    rootRef: HTMLDivElement;
    width: number;
    height: number;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<ComponentFlexOverlayProps>): void;
    componentWillUnmount(): void;
    rootRefCb(ref: HTMLDivElement): void;
    handleResize(width: number, height: number): void;
    handleParentElementScroll(event: Event): void;
    private maybeAdjustClassNames;
    renderOverlayContent(): JSX.Element;
    getPopoverPosition(): PopoverPosition;
    render(): JSX.Element;
}
