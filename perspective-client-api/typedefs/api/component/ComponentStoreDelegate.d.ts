import { AbstractUIElementStore } from '../../stores/AbstractUIElementStore';
import { JsObject, PlainObject, SubscriptionHandler, NotificationHandler } from "../../perspective-client";
/**
 * ComponentStoreDelegate, mirrors ComponentModelDelegate on the Gateway side.
 * Used to communicate between front-end and backend component delegates via Websocket.
 */
export declare abstract class ComponentStoreDelegate {
    subscribe: SubscriptionHandler;
    protected notify: NotificationHandler;
    protected subscriptionMap: import("../subscription/Subscription").SubscriptionMap;
    component: AbstractUIElementStore;
    constructor(component: AbstractUIElementStore);
    /**
     * Optionally override this in your delegate in order to map any delegate state
     * to the corresponding component's props in the component's ComponentStore.
     */
    mapStateToProps(): PlainObject | undefined;
    /**
     * When invoked will fire a 'model' event which will be received by
     * the equivalent delegate on the Gateway side, if implemented.
     *
     * @param eventName {string} - The name of the event to fire.
     * @param eventObject {JsObject} - The event payload.
     */
    fireEvent(eventName: string, eventObject: JsObject): void;
    /**
     * Abstract method which will receive 'model' events from the
     * equivalent delegate on the Gateway side, if implemented.
     *
     * @param eventName {string} - The name of the event to handle.
     * @param eventObject {JsObject} - The event payload.
     */
    abstract handleEvent(eventName: string, eventObject: JsObject): void;
}
