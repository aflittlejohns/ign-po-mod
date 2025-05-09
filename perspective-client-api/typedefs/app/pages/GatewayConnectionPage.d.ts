/**
 * Page launched from the gateway item of the app modal panel and displays information about the gateway such as
 * connection quality, gateway name, redundancy status, etc.
 */
import * as React from 'react';
import 'moment-timezone';
import { NodeRole } from '../../perspective-client';
import { ClientStore } from '../../stores/ClientStore';
import { PropertyTree } from '../../props/PropertyTree';
interface GatewayConnectionPageState {
    sessionId: string;
    pageId: string;
}
export interface GatewayConnectionProps {
    client: ClientStore;
}
export declare class GatewayConnectionPage extends React.Component<GatewayConnectionProps, GatewayConnectionPageState> {
    state: GatewayConnectionPageState;
    constructor(props: GatewayConnectionProps);
    launchGateway(url: string | undefined): () => void;
    renderGatewayUrlDetail(url: string | undefined): JSX.Element;
    renderDetailRow(classes: string, label: string, data: string): JSX.Element;
    getGatewayDetails(): JSX.Element;
    onSessionPropsChange(tree: PropertyTree): void;
    onPagePropsChange(tree: PropertyTree): void;
    getGatewayHeader(role: NodeRole, backupActive: boolean): JSX.Element;
    render(): React.ReactElement<HTMLDivElement>;
}
export {};
