import * as React from "react";
import { PlatformEdition } from "../../stores/ClientStore";
export interface LoggedOutProps {
    message?: string;
    edition?: PlatformEdition;
}
export declare class LoggedOut extends React.Component<LoggedOutProps> {
    render(): JSX.Element;
}
