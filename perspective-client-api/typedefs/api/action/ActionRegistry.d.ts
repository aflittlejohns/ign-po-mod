import { ActionDefinition } from '../../perspective-client';
import { AbstractUIElementStore } from "../../stores/AbstractUIElementStore";
export interface ActionFactory<C extends Record<string, any> = Record<string, any>> {
    type: string;
    create(store: AbstractUIElementStore, ActionDefinition: ActionDefinition<C>): (event: any) => void;
}
export declare class ActionRegistry {
    private static instance;
    private actions;
    private constructor();
    private registerAction;
    static register(action: ActionFactory): void;
    static get(actionType: string): ActionFactory | undefined;
    private static getInstance;
}
