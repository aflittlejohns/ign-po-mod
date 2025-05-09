import * as React from 'react';
import { ComponentStore } from '../stores/ComponentStore';
import { PanelPosition } from './ComponentFlexOverlay';
export interface PopoverBodyItem {
    descriptor: string;
    content: string;
}
export interface PopoverCardData {
    title: string;
    icon: JSX.Element;
    bodySections: Array<PopoverBodyItem>;
    closeCallback(): void;
}
export interface ComponentPopoverProps {
    cards: Array<PopoverCardData>;
    component: ComponentStore;
    componentInstance: React.ReactInstance;
    panelPosition: PanelPosition;
    arrowStyle: React.CSSProperties;
}
export interface ComponentPopoverState {
    cardIndex: number;
    component: HTMLElement | Element | null;
}
export declare class ComponentPopover extends React.Component<ComponentPopoverProps, any> {
    state: ComponentPopoverState;
    constructor(props: ComponentPopoverProps);
    componentDidMount(): void;
    previousCard(): void;
    nextCard(): void;
    render(): React.ReactPortal | null;
}
