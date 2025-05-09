import * as React from 'react';
import { ClientScope } from '../perspective-client';
/**
 * A specific Modal Component used to render components that live inside of docks in the exact position
 * they appear in the dock, but portal'd out of the dock as a child of the document DOM element.
 */
export declare class DockModal extends React.Component<DockModalProps, any> {
    private component;
    private readonly mountStore;
    private rootModalComponentRef;
    constructor(props: DockModalProps);
    componentDidMount(): void;
    render(): React.ReactPortal | null;
}
export interface DockModalProps {
    children?: React.ReactNode;
    /** Add CSS classes to this component */
    className?: string;
    /** The ReactInstance used to create a DOM element to display inside of the modal */
    component: React.ReactInstance;
    /** The dock in which the ReactInstance component resides */
    dock: HTMLElement;
    /** A callback for when a click is discovered outside of the bounds of the inner content */
    onInnerContentOutOfBoundsClick: ((event: React.MouseEvent) => any);
    /** The render scope of this component */
    scope: ClientScope;
}
