import * as React from 'react';
/**
 * Simple application error boundary.  Wraps application related components
 * so that errors do not leak into the global scope and cause the entire application to
 * crash.
 *
 * @prop errorDisplay: React.ReactElement<HTMLElement> - A UI to render when error has been caught.
 * @prop errorMessage?: string - Optional.  Message to log to the console in event of error.
 */
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, {
    hasError: boolean;
}> {
    state: {
        hasError: boolean;
    };
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    render(): React.ReactNode;
}
interface ErrorBoundaryProps {
    children?: React.ReactNode;
    errorDisplay: React.ReactElement<HTMLElement>;
    errorMessage?: string;
}
export declare const defaultErrorStyle: React.CSSProperties;
export {};
