import * as React from "react";
import { ClientError } from "../../stores/ClientStore";
export interface FatalErrorProps {
    error: ClientError | null;
}
export interface FatalErrorState {
    expanded: boolean;
    expandedHeight: number;
    reloadCount: number;
}
export declare class FatalError extends React.Component<FatalErrorProps, FatalErrorState> {
    detailBody: HTMLElement | null;
    collapsedHeight: number;
    reloadTimer: number;
    stackTraceDisplay: HTMLElement | null;
    tooltip: HTMLElement | null;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    copyToClipboard(): void;
    setTimer(): void;
    reload(): void;
    toggleExpansion(): void;
    setTooltip(ref: HTMLElement | null): void;
    setStackTraceDisplay(ref: HTMLElement | null): void;
    setDetailBody(ref: HTMLElement | null): void;
    render(): JSX.Element;
}
