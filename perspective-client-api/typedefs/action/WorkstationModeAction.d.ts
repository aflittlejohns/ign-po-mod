import { ActionFactory } from "../perspective-client";
export type WorkstationModeActionType = "Windowed" | "Kiosk" | "Toggle";
export interface WorkstationModeActionConfig {
    mode: WorkstationModeActionType;
}
export declare const WorkstationModeAction: ActionFactory<WorkstationModeActionConfig>;
