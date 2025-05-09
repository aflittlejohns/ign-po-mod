import * as React from 'react';
import { ElementDimensions, Point } from '../../perspective-client';
import { DraggableData, DraggableCoreProps } from 'react-draggable';
import { ClientStore } from '../../stores/ClientStore';
export interface PopupProps {
    children?: React.ReactNode;
    id: string;
    title?: string;
    position?: ElementDimensions;
    positionType: string;
    showCloseIcon?: boolean;
    viewportBound?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    modal?: boolean;
    store: ClientStore;
    focus?: boolean;
    index: number;
    overlayIndex?: number;
    closePopup(id: string): void;
    focusPopup(id: string): void;
    overlayDismiss: boolean;
    onResize?(): void;
}
export interface PopupState {
    resizeZone: string;
    dragPoint: Point;
    handle: string;
    show: boolean;
    zIndex: number;
}
export declare class Popup extends React.Component<PopupProps, PopupState> {
    Z_INDEX_BASE_VALUE: number;
    state: PopupState;
    dragDelta: Point;
    initialDimensions: ElementDimensions;
    popupContainer: HTMLDivElement | null;
    constructor(props: PopupProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: PopupProps): void;
    updatePosition(): void;
    updateFocus(): void;
    maybeToggleDraggableState(): void;
    isInaccessible(popupDimensions: DOMRect): boolean;
    forceViewportBounds(location?: string): void;
    forceViewportBoundRelative(location: string): void;
    onDragStart(): void;
    onDrag(event: MouseEvent, data: DraggableData): void;
    onDragStop(): void;
    onResizeStart(e: any): void;
    onResize(e: any): void;
    onClose(): void;
    onFocus(): void;
    onKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
    getResizeIndicators(): JSX.Element;
    getStyle(): React.CSSProperties;
    setPopupRef(popup: HTMLDivElement | null): void;
    handleModalClick(): void;
    renderModal(): JSX.Element | undefined;
    render(): JSX.Element;
}
export declare const DraggableC: (props: Partial<DraggableCoreProps> & {
    children?: React.ReactNode;
}) => JSX.Element;
