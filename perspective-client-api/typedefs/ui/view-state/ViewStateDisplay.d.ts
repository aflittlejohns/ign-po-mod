import * as React from 'react';
import { ElementDimensions } from "../../perspective-client";
export interface ViewStateProps {
    primaryMessage?: string;
    secondaryMessage?: string;
    icon?: JSX.Element;
}
export declare const fullSizeMinWidth: number;
export declare const fullSizeMinHeight: number;
export declare const midSizeMinWidth: number;
export declare const midSizeMinHeight: number;
export declare class ViewStateDisplay extends React.Component<ViewStateProps, ElementDimensions> {
    state: ElementDimensions;
    display: HTMLDivElement | undefined;
    constructor(props: ViewStateProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateDimensions(): void;
    isFullSize(): boolean;
    isMicro(): boolean;
    setDisplayRef(display: HTMLDivElement): void;
    render(): JSX.Element;
}
