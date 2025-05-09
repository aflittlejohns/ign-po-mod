[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/AbstractUIElementStore](../index.md) / AbstractUIElementStore

# Class: `abstract` AbstractUIElementStore

Defined in: stores/AbstractUIElementStore.d.ts:8

Abstract superclass of ViewStore and ComponentStore

## Extended by

- [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)
- [`ViewStore`](../../ViewStore/classes/ViewStore.md)

## Constructors

### Constructor

> **new AbstractUIElementStore**(): `AbstractUIElementStore`

#### Returns

`AbstractUIElementStore`

## Properties

### addressPathString

> **addressPathString**: `string`

Defined in: stores/AbstractUIElementStore.d.ts:12

***

### parent

> **parent**: [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

Defined in: stores/AbstractUIElementStore.d.ts:10

## Accessors

### children

#### Get Signature

> **get** `abstract` **children**(): [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]

Defined in: stores/AbstractUIElementStore.d.ts:11

##### Returns

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]

***

### log

#### Get Signature

> **get** `abstract` **log**(): `JSNLogLogger`

Defined in: stores/AbstractUIElementStore.d.ts:13

##### Returns

`JSNLogLogger`

***

### view

#### Get Signature

> **get** `abstract` **view**(): [`ViewStore`](../../ViewStore/classes/ViewStore.md)

Defined in: stores/AbstractUIElementStore.d.ts:9

##### Returns

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

## Methods

### interpolate()

> **interpolate**(`obj`): `any`

Defined in: stores/AbstractUIElementStore.d.ts:25

Takes an string with embedded property references that must be surrounded with brackets, and looks up the
values referenced by the paths, and replaces them. For example, the input string "Mickey{this.props.rodentType}"
might evaluate to "MickeyMarmot"

#### Parameters

##### obj

`any`

#### Returns

`any`

***

### onEventFired()

> **onEventFired**(`eventType`, `eventName`, `event`): `void`

Defined in: stores/AbstractUIElementStore.d.ts:18

Called from the event collections when events from the browser are fired that have a gateway-scoped action
associated with them.

#### Parameters

##### eventType

[`EventGroupType`](../../../perspective-client/enumerations/EventGroupType.md)

##### eventName

`string`

##### event

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`
