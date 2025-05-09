import * as React from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';
import { DockedViewDefinition, Point } from '../perspective-client';
import { DockedViewport, DockOffset } from '../stores/MountStore';
import { ClientStore } from '../stores/ClientStore';
export declare enum DimensionConfig {
    WIDTH = "width",
    HEIGHT = "height"
}
export interface PanelProps {
    clientStore: ClientStore;
    dockStore: DockedViewport;
    dimension: DimensionConfig;
    offset: DockOffset;
    scrollBarSize: number;
}
export interface PanelState {
    dragging: boolean;
    scrollbars: {
        vertical: boolean;
        horizontal: boolean;
    };
    fullyCollapsed: boolean;
}
export interface DockDimensions {
    panelStyle: React.CSSProperties;
    toggleWrapperStyle: React.CSSProperties;
}
export declare const dockBorderSize: number;
export declare class DockedPanel extends React.Component<PanelProps, PanelState> {
    fullyCollapsedTimeout: undefined | number;
    state: PanelState;
    panel: HTMLElement | null;
    dragDelta: Point;
    dragPoint: Point;
    eventDidToggle: boolean;
    constructor(props: PanelProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    checkForFullyCollapsed(): void;
    cancelFullyCollapsedTimeout(): void;
    checkForScrollbars(): void;
    onDragStart(e: DraggableEvent, data: DraggableData): void;
    onDrag(e: DraggableEvent, data: DraggableData): void;
    onDragStop(e: DraggableEvent, data: DraggableData): void;
    onResizeStart(e: DraggableEvent, data: DraggableData): void;
    onResize(e: DraggableEvent, data: DraggableData): void;
    onResizeStop(event: DraggableEvent, data: DraggableData): void;
    togglePanel(element: HTMLElement): void;
    tryBubbleToViewIndex(element: HTMLElement): number;
    getResizeBorder(): JSX.Element;
    getToggleHandles(toggleWrapperStyle: React.CSSProperties): Array<JSX.Element>;
    getDimensions(activeView: DockedViewDefinition, dimension: DimensionConfig): DockDimensions;
    getFixedStyles(panelStyle: React.CSSProperties, vertScroll: number, horzScroll: number, bannerSize: number): DockDimensions;
    getScrollableStyles(panelStyle: React.CSSProperties, vertScroll: number): DockDimensions;
    private setPanel;
    onModalClick(event: React.MouseEvent<HTMLDivElement>): void;
    onDockMouseDown(): void;
    /**
     * Rendered with the docked panel instead of wrapping in the panel root
     * in order to enable css transitions.
     *
     */
    renderModal(): JSX.Element | undefined;
    render(): React.ReactNode;
}
export declare enum Theme {
    ROOT = "ia_dockedView",
    HANDLE = "ia_dockedView__handle",
    HANDLE_ICON = "ia_dockedView__handle__icon"
}
