import { ComponentStore } from '../stores/ComponentStore';
import { EventGroup } from "../perspective-client";
import { SyntheticEvent } from "react";
export type AddDomEventListener = (eventName: string, listener: (e: SyntheticEvent<any>) => void) => () => void;
export interface EventOptions {
    stopPropagation?: boolean;
    preventDefault?: boolean;
    enabled?: boolean;
    phase?: "capturing" | "bubbling";
}
interface DomEventsInterface {
    addListener: AddDomEventListener;
}
export type EventHandler = EventOptions & {
    (e: SyntheticEvent<any>): void;
    clientActions: Array<(event: any) => void>;
    gatewayActionRequired: boolean;
};
/**
 * An object whose keys are react-compatible event names, and whose values are event-handling callback
 * functions. This object is then stored as ComponentStore.events, and passed into each component definition
 * as props.events. Component implementations simply need to include this object in their top-level emitted
 * DOM in order to wire-up the user configured events, like this:
 * <div {...this.props.events}>
 */
export declare class DomEvents implements DomEventsInterface {
    component: ComponentStore;
    constructor(store: ComponentStore, domEventsDef: EventGroup | undefined);
    /**
     * Components might call this to add their own listeners to DOM events. They put it here rather than directly
     * on the DOM elements because if they did that, their listeners might be shadowed by the user's events, or
     * vice-versa.
     *
     * Returns a callback function that will remove the listener when invoked
     */
    addListener(eventName: string, listener: (e: SyntheticEvent<any>) => void): () => void;
    private _createDomAction;
    private registerHandler;
    private eventsEnabled;
    /**
     * Creates and returns a function that is intended to be the direct event handling callback attached to a react
     * event. It is instances of these functions which will make up the values attached to the keys of this
     * ComponentEvent object. These functions contain properties on them that help them dispatch the event to the
     * appropriate client or gateway scoped actions that are configured for this event.
     *
     * @param eventName The name of the event. Note, that this is the "pure" event name, not the react event name
     * which may have "Capture" appended to it depending on the action's configuration.
     * @param options configuration options for the new handler
     * @returns {Function|(function(this:DomEvents))}
     * @private
     */
    private _createEventHandler;
}
export {};
