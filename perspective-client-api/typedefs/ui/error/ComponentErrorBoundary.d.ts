import * as React from "react";
import { ComponentProps, PlainObject } from "../../perspective-client";
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    oldProps: any;
}
export interface ComponentErrorBoundaryProps extends ComponentProps<PlainObject> {
    childRef?: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void);
}
export declare class ComponentErrorBoundary extends React.Component<ComponentErrorBoundaryProps, Readonly<ErrorBoundaryState>> {
    state: Readonly<ErrorBoundaryState>;
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    UNSAFE_componentWillReceiveProps(): void;
    render(): any;
}
export {};
