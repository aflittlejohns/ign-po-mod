import * as React from "react";
export interface ClosedProps {
    message?: string;
}
export declare abstract class Closed extends React.Component<ClosedProps> {
    protected abstract getNoun(): string;
    render(): JSX.Element;
}
export declare class SessionClosed extends Closed {
    protected getNoun(): string;
}
export declare class PageClosed extends Closed {
    protected getNoun(): string;
}
