import * as React from 'react';
import { ClientState } from '../../stores/state/ClientState';
export interface LoginTerminalProps {
    clientState: ClientState;
    coBrandingEnabled: boolean;
}
export declare class LoginTerminalPage extends React.Component<LoginTerminalProps, any> {
    render(): JSX.Element;
}
