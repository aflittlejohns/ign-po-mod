import { ActionFactory } from '../perspective-client';
export interface ConsoleLogActionConfig {
    message: string;
}
export declare const ConsoleLogAction: ActionFactory<ConsoleLogActionConfig>;
