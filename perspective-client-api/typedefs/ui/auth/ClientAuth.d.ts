/// <reference types="lodash" />
import * as React from "react";
import { ClientStore } from "../../stores/ClientStore";
import { ClientStoreProviderContext } from "../../perspective-client";
export declare enum PanelPosition {
    LEFT = "off-panel-left",
    DISPLAYED = "on-panel",
    RIGHT = "off-panel-right"
}
export interface AuthProps {
    store: ClientStore;
    projectName: string;
    projectTitle: string;
}
export interface AuthState {
    isLoading: boolean;
    smallLayout: boolean;
}
export declare class ClientAuth extends React.Component<AuthProps, AuthState> {
    static contextType: React.Context<import("../../perspective-client").Partial<ClientStore>>;
    context: React.ContextType<typeof ClientStoreProviderContext>;
    handleWindowResize: import("lodash").DebouncedFunc<() => void>;
    constructor(props: AuthProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onWindowResize(): void;
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>): void;
    login(): void;
    renderMessagePanel(): React.ReactElement<HTMLDivElement> | undefined;
    renderSecondaryMessage(): React.ReactElement<HTMLDivElement> | undefined;
    render(): JSX.Element;
}
