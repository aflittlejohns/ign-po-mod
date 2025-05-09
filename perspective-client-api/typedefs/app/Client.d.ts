import * as React from 'react';
import { ClientStore, PlatformEdition } from '../stores/ClientStore';
export interface ClientProps {
    projectName: string;
    projectTitle: string;
    platformEdition: PlatformEdition;
    tabIdentifier?: string;
    coBrandingEnabled: boolean;
}
export declare class Client extends React.Component<ClientProps> {
    store: ClientStore;
    constructor(props: ClientProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Client;
