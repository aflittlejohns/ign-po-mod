/// <reference types="react" />
import { PlatformEdition } from "../../stores/ClientStore";
export interface TerminalStateProps {
    children: JSX.Element | Array<JSX.Element>;
    className?: string;
}
export declare function TerminalStatePage(props: TerminalStateProps): JSX.Element;
export declare function TerminalStateFooter(props: {
    edition: PlatformEdition;
    coBrandingEnabled: boolean;
}): JSX.Element;
