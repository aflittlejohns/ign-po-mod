export type SubscriptionListener = () => any;
export type SubscriptionHandler = (fn: () => any, state?: string, options?: SubscriptionOptions) => (() => any) | undefined;
export type NotificationHandler = (state?: string) => void;
export interface SubscriptionOptions {
    disposeWhenTrue: boolean;
}
export interface SubscriptionFactory {
    subscribe: SubscriptionHandler;
    notify: NotificationHandler;
}
type SubscriptionMapListener = Array<SubscriptionListener | [SubscriptionListener, SubscriptionOptions]>;
export type SubscriptionMap = Record<string, SubscriptionMapListener | SubscriptionHandler>;
export declare const ANY_CHANGE_KEY: unique symbol;
/**
 * A utility function to use in junction with `subscriptionFactory`.  Creates a subscription map that can be passed
 * to the `subscriptionFactory` function. Provide an array of state event names which are used to create and map
 * subscriptions and notifications.
 *
 * @param stateEventNames: Array<string> - An array of subscription state event names used to map subscribers to notifiers.
 * @param anyChange: boolean - Specifies whether the subscription map should allow subscription to `any change`.
 * Meaning that subscribers or listeners do not need to specify particular interest in any one state change event. Defaults to true.
 * @param customHandlers?: Record<string, SubscriptionHandler> - Optional.  A map of SubscriptionHandlers to be notified instead of
 * creating an array of `SubscriptionListener`'s to notify.
 *
 * @returns SubscriptionMap - Returns a subscription map object to provide to a `subscriptionFactory`.
 * Important: It is expected that the factory function be provided a reference to this map.  This map should not be modified after it is
 * provided to the factory function.
 */
export declare const createSubscriptionMap: (stateEventNames?: Array<string>, anyChange?: boolean, customHandlers?: Record<string, SubscriptionHandler>) => SubscriptionMap;
/**
 * Creates a `SubscriptionFactory` object containing notification and subscription handlers built using
 * the provided subscription map object.
 *
 * The subscription map holds references to the listeners and handlers and as such should not be modified once provided.
 * Modifying the subscription map will likely result in memory leaks and errors.
 *
 * @param map: SubscriptionMap - The subscription map to build from.
 * @param ownerName: string - Owner name used for logging purposes to indicate failed subscriptions and notifications.
 *
 * @returns SubscriptionFactory - Returns a `SubscriptionFactory` object which contains `notify` and `subscribe` functions.
 * For example:
 *  {
 *    // A public function of the owner used to subscribe to changes in the owners or subscription factory creator's state.
 *    subscribe: (fn: Function, state?: string) => Function | undefined,
 *
 *    // Invoked by the owner or subscription factory creator to notify any listeners or handlers for given state change event.
 *    // If the map includes the special `anyChange` key.  Listeners that did not specify a state change event upon subscribing will also be notified.
 *    notify: (state?: string) => void
 *  }
 *
 * TODO: clean up any duplicate logic
 */
export declare const subscriptionFactory: (map: SubscriptionMap, ownerName: string) => SubscriptionFactory;
export {};
