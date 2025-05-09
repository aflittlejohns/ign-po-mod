[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/subscription/Subscription](../index.md) / createSubscriptionMap

# Variable: createSubscriptionMap()

> `const` **createSubscriptionMap**: (`stateEventNames?`, `anyChange?`, `customHandlers?`) => [`SubscriptionMap`](../type-aliases/SubscriptionMap.md)

Defined in: api/subscription/Subscription.d.ts:29

A utility function to use in junction with `subscriptionFactory`.  Creates a subscription map that can be passed
to the `subscriptionFactory` function. Provide an array of state event names which are used to create and map
subscriptions and notifications.

## Parameters

### stateEventNames?

`string`[]

### anyChange?

`boolean`

### customHandlers?

`Record`\<`string`, [`SubscriptionHandler`](../type-aliases/SubscriptionHandler.md)\>

## Returns

[`SubscriptionMap`](../type-aliases/SubscriptionMap.md)

SubscriptionMap - Returns a subscription map object to provide to a `subscriptionFactory`.
Important: It is expected that the factory function be provided a reference to this map.  This map should not be modified after it is
provided to the factory function.
