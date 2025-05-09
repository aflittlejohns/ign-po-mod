import { ActionFactory } from "../api/action/ActionRegistry";
import { LogLevel } from "../util/logging";
export interface AlterLoggingActionConfig {
    remoteLoggingEnabled?: boolean;
    logLevel?: LogLevel;
    remoteLogLevel?: LogLevel;
}
export declare const AlterLoggingAction: ActionFactory<AlterLoggingActionConfig>;
