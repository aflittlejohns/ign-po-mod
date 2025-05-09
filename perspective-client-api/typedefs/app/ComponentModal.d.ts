import * as React from 'react';
import { ClientScope, ClientStore, ElementPosition } from '../perspective-client';
import { MountStore } from '../stores/MountStore';
interface ComponentModalState {
    modalWidth: number;
    modalHeight: number;
    modalOffset: number;
    safeOffset: number;
}
/**
 * Perspective ComponentModal component.
 *
 * Will intelligently display in a position (below, above, left, or right) determined by the
 * the dimensions and positioning of the provided component/element, it's own dimensions, and the available space.
 * You can opt out of this intelligence if you'd like, and force the modals placement if you are confident.
 *
 * Will render its children as the content, hence can be used to wrap other components or JSX elements.
 *
 * Modals are tricky, especially in Perspective.  We use this thing everywhere.
 * If you change something here, make sure you check everything that uses this component, in various states and mounts.
 *
 * If you have a perspective component that uses this component modal, you may need to stop event propagation
 * on modal content interaction (i.e. button, input, etc) so that the perspective component does not also catch and handle the event.
 *
 * TODO: Eventually we will need to accommodate for the ability to provide different children depending on whether we are
 * rendering in large viewport mode (small modal with arrow) or small viewport mode (essentially the full screen modal).
 * I recommend either making use of a callback or adding something via props.
 */
export declare class ComponentModal extends React.Component<ComponentModalProps, ComponentModalState> {
    state: ComponentModalState;
    component: Element | Text | null;
    eventListener: EventListenerObject | null;
    largeViewModalRef: React.RefObject<HTMLDivElement>;
    mountStore: MountStore | undefined;
    scope: ClientScope;
    static contextType: React.Context<import("../perspective-client").Partial<ClientStore>>;
    private madeFit;
    vertScrollbarsPresent: boolean;
    horizScrollbarsPresent: boolean;
    constructor(props: ComponentModalProps);
    componentDidMount(): void;
    componentDidUpdate(prev: ComponentModalProps): void;
    componentWillUnmount(): void;
    smViewModalClickHandler(event: React.MouseEvent<HTMLDivElement>): void;
    fireOpened: boolean;
    onModalContentsResize(modalWidth: number, modalHeight: number): void;
    manageMadeFit(madeFit: boolean, position: ElementPosition, placement: ComponentModalPlacement, mxHeight?: number): number | undefined;
    firstLargeViewportModalResize: boolean;
    renderModal(isSmallViewport: boolean, position: ElementPosition, portalDestination: Element, inPopup: boolean, placement?: ComponentModalPlacement, maxHeight?: number): JSX.Element | null;
    render(): React.ReactPortal | null;
}
export interface ComponentModalProps {
    /** If set will attempt to align the component modal to the start, center, or end of the parent component */
    align?: ComponentModalAlign;
    children?: React.ReactNode;
    /** The node in which this modal is associated with, required in order to determine modal positioning. */
    component: React.ReactInstance;
    /** Optional property to add CSS classes to this component */
    className?: string;
    /** Optional.  If true, the modal will not attempt intelligent placement.  Defaults to false.  */
    confident?: boolean;
    /** Optional property to hide the arrow when displaying as a popover when rendered in the large viewport. */
    hideArrow?: boolean;
    /** Option property to ignore horizontal bounds */
    ignoreHorizontalBounds?: boolean;
    /** Optional property to specify a display offset to override the defaults */
    modalOffset?: number;
    /** A callback for when a click is discovered outside of the modals bounds */
    onModalOutOfBoundsClick: ((event: React.MouseEvent<HTMLDivElement>) => any);
    /** If provided, will attempt to place modal using the specified placement before attempting others. */
    placement?: ComponentModalPlacement | ComponentModalPlacement[];
    /** If provided, this element will be the place where the portal is rendered. */
    portalDestination?: HTMLElement;
    /** To show, or not to show the modal. */
    show: boolean;
    /** Optional property to apply CSSProperties to the component */
    style?: React.CSSProperties;
    /** If provided, determines if the component modal div itself is focusable. */
    isFocusable?: boolean;
    /** Optional blur event handler that captures on blur on the modal and its children. */
    onBlurCapture?: React.FocusEventHandler<HTMLDivElement>;
    /** Optional key event handler that captures key events on the modal and its children. */
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLDivElement>;
    /** Optional minimum height the modal will try to resize down to before attempting other placements. */
    minHeightFit?: number;
    /** Optional forward ref to the small viewport modal (NOT the overlay wrapper). */
    smallViewportForwardRef?: React.RefObject<HTMLDivElement>;
    /** Optional callback used to notify the parent that the modal was resized to fit the viewport */
    onResize?: onResizeCallback;
    /** Optional.  Callback notifying of first open with correct position and placement. */
    onOpen?(posAndPlc: BestPositionAndPlacement): void;
    /** Optional.  Callback notifying when the modal is considered closed (onmount or show=false). */
    onClosed?(): void;
}
export type onResizeCallback = () => void;
export interface ComponentModalPositions {
    above: ElementPosition;
    below: ElementPosition;
    left: ElementPosition;
    right: ElementPosition;
    center: ElementPosition;
}
export interface BestPositionAndPlacement {
    placement: ComponentModalPlacement;
    position?: ElementPosition;
    maxHeight?: number;
    madeFit: boolean;
}
/**
 * Component modal placement options.
 * Will place the rendered modal above, below, left, right
 * or center of the component.  Center is a weird option,
 * but we provided it anyways.  Specifying none means
 * that you want the modal to render as it would if there
 * wasn't enough space for the popout modal.
 */
export declare enum ComponentModalPlacement {
    ABOVE = "above",
    /** Determined internally based upon available space. */
    AUTO = "auto",
    BELOW = "below",
    CENTER = "center",
    RIGHT = "right",
    LEFT = "left",
    /** Will render small viewport or large size modal. */
    NONE = "none"
}
/**
 * Component modal alignment options.
 * Aligns the modal along the placement
 * axis. Center is used by default.
 */
export declare enum ComponentModalAlign {
    START = "start",
    CENTER = "center",
    END = "end",
    END_OUTSET = "end-outset",
    START_OUTSET = "start-outset"
}
export {};
