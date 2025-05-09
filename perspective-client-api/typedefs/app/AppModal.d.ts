import * as React from 'react';
import { ClientStore } from "../stores/ClientStore";
import { MountStore } from "../stores/MountStore";
import { StatusPages } from '../stores/status/StatusPages';
import { PropertyTree } from '../perspective-client';
export interface AppModalProps {
    client: ClientStore;
    mounts: MountStore;
}
export interface AppModalState {
    title: string;
    viewPath: string;
}
export declare const whiteIconFill: string;
export declare const grayIconFill: string;
export declare class AppModal extends React.Component<AppModalProps, AppModalState> {
    wrapper: HTMLElement | null;
    pageBody: HTMLElement | null;
    swipeableActions: {
        updateHeight(): void;
    };
    sessionPropsDisposer: () => void;
    constructor(props: AppModalProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: AppModalProps): void;
    componentWillUnmount(): void;
    onSessionPropsChange(tree: PropertyTree): void;
    getNavbar(content: StatusPages): JSX.Element;
    navigate(e: React.SyntheticEvent<any>): void;
    onKeyDown(e: KeyboardEvent): void;
    updatePageIndex(index: number): void;
    private setPageBody;
    private setWrapper;
    static stopPropagation(e: React.SyntheticEvent<any>): void;
    actionCallback(actions: any): void;
    renderBody(): JSX.Element;
    render(): JSX.Element;
}
