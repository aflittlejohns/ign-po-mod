import * as React from 'react';
import { LayoutCallback, Size2d, StyleObject, PlainObject, PropertyTree } from '../perspective-client';
import { ClientStore } from '../stores/ClientStore';
import { ComponentStore } from '../stores/ComponentStore';
import { ViewStoreFuture } from '../stores/PageStore';
import { OutputListener, ViewStore } from '../stores/ViewStore';
export interface ViewProps {
    store: ClientStore;
    resourcePath: string;
    mountPath: string;
    /** Used to detect view cycles, for starters. */
    parent?: ComponentStore;
    params?: PlainObject;
    outputListener?: OutputListener;
    useDefaultWidth?: boolean;
    useDefaultHeight?: boolean;
    inactive?: boolean;
    useDefaultMinWidth?: boolean;
    useDefaultMinHeight?: boolean;
    rootStyle?: StyleObject;
    dockOffsetChanged?: boolean;
    onViewSizeChange?(size: Size2d): void;
    onViewStateChange?(state: ViewStateType): void;
}
export declare enum ViewStateType {
    NOT_FOUND = "notFound",
    NOT_SPECIFIED = "notSpecified",
    LOADING = "loading",
    ERROR = "error",
    ACCESS_DENIED = "access-denied",
    VALID = "valid"
}
export declare const viewStateMessage: {
    notFound: {
        primaryMessage: string;
        secondaryMessage: string;
        icon: JSX.Element;
    };
    notSpecified: {
        primaryMessage: string;
        secondaryMessage: string;
        icon: JSX.Element;
    };
    loading: {
        primaryMessage: string;
    };
    error: {
        primaryMessage: string;
        icon: JSX.Element;
    };
    "access-denied": {
        primaryMessage: string;
        secondaryMessage: string;
        icon: JSX.Element;
    };
};
export declare class View extends React.Component<ViewProps, Readonly<ViewState>> {
    state: Readonly<ViewState>;
    paramsDirty: boolean;
    styleDirty: boolean;
    private viewStore?;
    viewObserverDisposer: () => any;
    accessDeniedDisposer: (() => any) | undefined;
    private viewPropertyObserverDisposer;
    private previousDefaultSize;
    startInstance(): void;
    installViewStore(viewStore: ViewStore): void;
    onViewPropertiesChanged(props: PropertyTree): void;
    onAccessDenied(): void;
    onDockOffsetChanged(): void;
    onViewLoading(pctDone: number): void;
    stopInstance(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProp: ViewProps): void;
    /**
     * Anyone who mounts a view may pass values into it as an object property named "params". The values in this
     * object will be written to any defined inputs on the view.
     */
    UNSAFE_componentWillReceiveProps(nextProps: ViewProps): void;
    resetInstance(): void;
    getViewState(): ViewStateType;
    maybeUpdateViewState(): void;
    private fireOnStateChange;
    calculateLayout(): LayoutCallback;
    render(): JSX.Element | null;
    renderError(layout: LayoutCallback, message: string): JSX.Element;
    renderNotFound(layout: LayoutCallback): JSX.Element;
    renderNotSpecified(layout: LayoutCallback): JSX.Element;
    renderAccessDenied(layout: LayoutCallback): JSX.Element;
    renderLoading(layout: LayoutCallback): JSX.Element;
}
interface ViewState {
    loading?: ViewStoreFuture;
    loadPct: number;
    error: boolean;
    message: string;
    state: ViewStateType;
}
export {};
