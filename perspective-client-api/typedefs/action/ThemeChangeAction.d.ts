import { ActionFactory } from '../api/action/ActionRegistry';
export interface ThemeChangeActionConfig {
    name: string;
}
export declare const ThemeChangeAction: ActionFactory<ThemeChangeActionConfig>;
