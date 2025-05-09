import * as React from 'react';
import { PopupProps } from './Popup';
export interface ViewPopupProps extends Omit<PopupProps, "children"> {
    viewPath: string;
    viewParams?: any;
}
export interface ViewPopupState {
    isResized: boolean;
    params?: any;
}
export declare class ViewPopup extends React.Component<ViewPopupProps, ViewPopupState> {
    state: ViewPopupState;
    constructor(props: ViewPopupProps);
    onResize(): void;
    /**
     * Record any changes to in-out parameters so that we don't reset them when we re-render the view.
     * IGN-1518
     */
    onOutputChanged(name: string, value: any): void;
    render(): JSX.Element;
}
