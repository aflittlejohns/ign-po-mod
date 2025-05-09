import * as React from "react";
import { ClientStore } from '../../stores/ClientStore';
import { ClientState } from '../../stores/state/ClientState';
export interface ClientLoadingProps {
    store: ClientStore;
}
declare enum ProximityClass {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    OUT_OF_RANGE = "out-of-range"
}
export interface LoadingItemStyle {
    proximityClass: ProximityClass;
    yPosition: number;
}
type ClientLoadingState = ClientState.NEW | ClientState.INITIALIZING | ClientState.AUTHN | ClientState.CONNECTING | ClientState.LOADING | ClientState.SYNCHRONIZING | ClientState.RUNNING_CONNECTED;
export declare class ClientLoading extends React.Component<ClientLoadingProps, any> {
    clientLoadingStages: Array<ClientLoadingState>;
    getStageProximityClass(index: number, currentLoadingIndex: number, diff: number): ProximityClass;
    getStageYPosition(stage: ClientState, proximityClass: ProximityClass, diff: number): number;
    /**
     * Returns the styling that is applied to the rolling 'wheel' effect present in the client loading UI, whereby the
     * current loading stage message is in focus and centered, completed items are above and 'upcoming' loading stages
     * are below, with decreasing opacity as the completed/upcoming items are further from the current item.
     *
     * Only the previous 3 completed (if applicable) and upcoming 3 items are listed.
     * @param {ClientLoadingState} stage
     * @param {number} index
     * @param {Array<ClientState>} stages
     * @returns {{proximityClass: ProximityClass; yPosition: number}}
     */
    getWheelPositionStyles(stage: ClientLoadingState, index: number, stages: Array<ClientState>): LoadingItemStyle;
    getStageMessage(stage: ClientLoadingState): JSX.Element | string;
    renderMessages(): JSX.Element[];
    renderFooterLogo(): JSX.Element | null;
    render(): React.ReactElement<HTMLDivElement>;
}
export {};
