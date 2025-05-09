[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/component/ComponentStoreDelegate](../index.md) / ComponentStoreDelegate

# Class: `abstract` ComponentStoreDelegate

Defined in: api/component/ComponentStoreDelegate.d.ts:7

ComponentStoreDelegate, mirrors ComponentModelDelegate on the Gateway side.
Used to communicate between front-end and backend component delegates via Websocket.

## Constructors

### Constructor

> **new ComponentStoreDelegate**(`component`): `ComponentStoreDelegate`

Defined in: api/component/ComponentStoreDelegate.d.ts:12

#### Parameters

##### component

[`AbstractUIElementStore`](../../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

#### Returns

`ComponentStoreDelegate`

## Properties

### component

> **component**: [`AbstractUIElementStore`](../../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

Defined in: api/component/ComponentStoreDelegate.d.ts:11

***

### notify

> `protected` **notify**: [`NotificationHandler`](../../../subscription/Subscription/type-aliases/NotificationHandler.md)

Defined in: api/component/ComponentStoreDelegate.d.ts:9

***

### subscribe

> **subscribe**: [`SubscriptionHandler`](../../../subscription/Subscription/type-aliases/SubscriptionHandler.md)

Defined in: api/component/ComponentStoreDelegate.d.ts:8

***

### subscriptionMap

> `protected` **subscriptionMap**: [`SubscriptionMap`](../../../subscription/Subscription/type-aliases/SubscriptionMap.md)

Defined in: api/component/ComponentStoreDelegate.d.ts:10

## Methods

### fireEvent()

> **fireEvent**(`eventName`, `eventObject`): `void`

Defined in: api/component/ComponentStoreDelegate.d.ts:25

When invoked will fire a 'model' event which will be received by
the equivalent delegate on the Gateway side, if implemented.

#### Parameters

##### eventName

`string`

```js
{string} - The name of the event to fire.
```

##### eventObject

[`JsObject`](../../../../perspective-client/type-aliases/JsObject.md)

`{JsObject}` - The event payload.

#### Returns

`void`

***

### handleEvent()

> `abstract` **handleEvent**(`eventName`, `eventObject`): `void`

Defined in: api/component/ComponentStoreDelegate.d.ts:33

Abstract method which will receive 'model' events from the
equivalent delegate on the Gateway side, if implemented.

#### Parameters

##### eventName

`string`

```js
{string} - The name of the event to handle.
```

##### eventObject

[`JsObject`](../../../../perspective-client/type-aliases/JsObject.md)

`{JsObject}` - The event payload.

#### Returns

`void`

***

### mapStateToProps()

> **mapStateToProps**(): [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)

Defined in: api/component/ComponentStoreDelegate.d.ts:17

Optionally override this in your delegate in order to map any delegate state
to the corresponding component's props in the component's ComponentStore.

#### Returns

[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)
