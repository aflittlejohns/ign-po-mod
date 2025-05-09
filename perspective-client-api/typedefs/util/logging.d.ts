import { JL } from 'jsnlog';
export type LogLevel = "all" | "debug" | "error" | "fatal" | "info" | "off" | "trace" | "warn";
export declare function getLogLevelNumber(logLevel: LogLevel): number;
export declare const ajaxAppender: JL.JSNLogAjaxAppender;
export declare const consoleAppender: JL.JSNLogConsoleAppender;
export { JL as makeLogger } from 'jsnlog';
export declare function enableRemoteLogging(enable: boolean): void;
export declare function setRootLogLevel(logLevel: LogLevel): void;
export declare function setConsoleLoggingLevel(logLevel: LogLevel): void;
/**
 * Set the remote logging level. Doesn't make any checks to confirm that remote logging is enabled, just sets the
 * level on the ajaxAppender.
 */
export declare function setRemoteLoggingLevel(logLevel: LogLevel): void;
