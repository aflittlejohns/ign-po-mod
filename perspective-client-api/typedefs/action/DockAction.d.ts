import { ViewVisibilityType } from './PopupAction';
import { ActionDefinition } from '../perspective-client';
import { AbstractUIElementStore } from '../stores/AbstractUIElementStore';
export interface DockActionConfig {
    id: string;
    type: ViewVisibilityType;
    viewParams?: any;
}
/**
 * Dock action - expands or collapses a docked view by id
 * type = "dock"
 * scope = "C"
 * config:
 *   type {"open" | "close" | "toggle"} - Determines which operation to apply on dock
 *   id {string} - unique docked view identity
 */
export declare const DockAction: {
    type: string;
    create(component: AbstractUIElementStore, def: ActionDefinition<DockActionConfig>): (event: any) => void;
};
