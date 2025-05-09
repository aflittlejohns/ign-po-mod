[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/subscription/Subscription](../index.md) / subscriptionFactory

# Variable: subscriptionFactory()

> `const` **subscriptionFactory**: (`map`, `ownerName`) => [`SubscriptionFactory`](../interfaces/SubscriptionFactory.md)

Defined in: api/subscription/Subscription.d.ts:53

Creates a `SubscriptionFactory` object containing notification and subscription handlers built using
the provided subscription map object.

The subscription map holds references to the listeners and handlers and as such should not be modified once provided.
Modifying the subscription map will likely result in memory leaks and errors.

## Parameters

### map

[`SubscriptionMap`](../type-aliases/SubscriptionMap.md)

### ownerName

`string`

## Returns

[`SubscriptionFactory`](../interfaces/SubscriptionFactory.md)

SubscriptionFactory - Returns a `SubscriptionFactory` object which contains `notify` and `subscribe` functions.
For example:
```js
 {
   // A public function of the owner used to subscribe to changes in the owners or subscription factory creator's state.
   subscribe: (fn: Function, state?: string) => Function | undefined,

   // Invoked by the owner or subscription factory creator to notify any listeners or handlers for given state change event.
   // If the map includes the special `anyChange` key.  Listeners that did not specify a state change event upon subscribing will also be notified.
   notify: (state?: string) => void
 }
```

TODO: clean up any duplicate logic
