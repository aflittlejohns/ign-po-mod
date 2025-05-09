import { EventGroup, PlainObject } from '../perspective-client';
import { AbstractUIElementStore } from "../stores/AbstractUIElementStore";
import { EventGroupType } from "../perspective-client";
export declare class EventGroupActions {
    clientActions: Array<ClientAction>;
    gatewayActionRequired: boolean;
    constructor(gatewayActionRequired?: boolean, clientActions?: Array<ClientAction>);
}
export type ClientAction = ((event: any) => void);
export interface EventGroupActionCollection {
    [name: string]: EventGroupActions;
}
export type FireComponentEvent = (eventName: string, eventObject: PlainObject) => void;
export type RunClientAction = (type: EventGroupType | string, eventName: string, eventObject: PlainObject) => void;
export interface ComponentEventsInterface {
    fireComponentEvent: FireComponentEvent;
    runClientActions: RunClientAction;
}
/**
 * Holds the configured action instances for 'system' and 'component' event types.
 */
export declare class ComponentEvents implements ComponentEventsInterface {
    component: AbstractUIElementStore;
    private systemEventActions?;
    private componentEventActions?;
    constructor(component: AbstractUIElementStore, systemEvents: EventGroup | undefined, componentEvents?: EventGroup | undefined);
    /**
     * Called by component implementations when an event of their own design has happened. For example, the table
     * component might do some detection of when an individual table cell has been clicked, and then fire a
     * "tableCellClicked" event with an event object that described the cell's row, column, and data.
     */
    fireComponentEvent(eventName: string, eventObject: PlainObject): void;
    private eventsEnabled;
    /**
     * Called when an event was fired on the gateway and we are being notified of it.
     */
    runClientActions(type: EventGroupType | string, eventName: string, eventObject: PlainObject): void;
    private createActionCollection;
    private createAction;
}
