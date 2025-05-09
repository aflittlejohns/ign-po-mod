import { ActionFactory } from "../perspective-client";
export type FullscreenActionType = "Enter" | "Exit" | "Toggle";
export type FullscreenElementType = "View" | "Page";
export interface FullscreenActionConfig {
    action: FullscreenActionType;
    type: FullscreenElementType;
}
export declare const FullscreenAction: ActionFactory<FullscreenActionConfig>;
