import { ActionDefinition, PlainObject } from '../perspective-client';
import { AbstractUIElementStore } from '../stores/AbstractUIElementStore';
import { MountStore } from '../stores/MountStore';
export declare enum AlterDockActionDisplayConfig {
    VISIBLE = "visible",
    ON_DEMAND = "onDemand",
    AUTO = "auto"
}
export declare enum AlterDockActionContentConfig {
    PUSH = "push",
    COVER = "cover",
    AUTO = "auto"
}
export declare enum AlterDockActionAnchorConfig {
    FIXED = "fixed",
    SCROLLABLE = "scrollable"
}
export declare enum AlterDockActionHandleConfig {
    SHOW = "show",
    HIDE = "hide",
    AUTO_HIDE = "autoHide"
}
export interface AlterDockActionConfigWrapper {
    id: string;
    config: AlterDockActionConfig;
}
export interface AlterDockActionConfig {
    id: string;
    view?: string;
    viewParams?: PlainObject;
    display?: AlterDockActionDisplayConfig;
    resizable?: boolean;
    modal?: boolean;
    content?: AlterDockActionContentConfig;
    size?: number;
    autoBreakpoint?: number;
    anchor?: AlterDockActionAnchorConfig;
    handle?: AlterDockActionHandleConfig;
    handleIcon?: string;
}
/**
 * Search for the dock by its ID.  If it exists, update the `mountedDockConfig` in the MountStore
 * and rebuild the docks.
 * @param config
 * @param mounts
 */
export declare function updateDockConfig(config: AlterDockActionConfig, mounts: MountStore): void;
/**
 *
 */
export declare const AlterDockAction: {
    type: string;
    create(component: AbstractUIElementStore, def: ActionDefinition<AlterDockActionConfig>): (event: any) => void;
};
