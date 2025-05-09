[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/PageStore](../index.md) / SyncRequest

# Class: SyncRequest

Defined in: stores/PageStore.d.ts:20

## Constructors

### Constructor

> **new SyncRequest**(`events`): `SyncRequest`

Defined in: stores/PageStore.d.ts:24

#### Parameters

##### events

[`EventFiredPayload`](../interfaces/EventFiredPayload.md)[]

#### Returns

`SyncRequest`

## Properties

### message

> **message**: [`SyncRequestMessage`](../interfaces/SyncRequestMessage.md)

Defined in: stores/PageStore.d.ts:22

***

### syncNum

> **syncNum**: `number`

Defined in: stores/PageStore.d.ts:21

***

### whenFinished

> **whenFinished**: () => `any`[]

Defined in: stores/PageStore.d.ts:23

#### Returns

`any`

## Methods

### addDirtyPageProps()

> **addDirtyPageProps**(`path`, `dirtyProps`): `void`

Defined in: stores/PageStore.d.ts:33

#### Parameters

##### path

`string`

##### dirtyProps

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### addDirtySessionProps()

> **addDirtySessionProps**(`path`, `dirtyProps`): `void`

Defined in: stores/PageStore.d.ts:34

#### Parameters

##### path

`string`

##### dirtyProps

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### addDirtyViewProps()

> **addDirtyViewProps**(`viewId`, `componentPath`, `dirtyProps`): `void`

Defined in: stores/PageStore.d.ts:32

Adds dirty property values to this sync request.

#### Parameters

##### viewId

`string`

The instance id of the owning view

##### componentPath

`string`

The component path, a combination of index path plus property type, like "0:5.props"

##### dirtyProps

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

An object containing the dirty properties in the component. Keys are property paths,
values are the property values in simple unqualified JSON format.

#### Returns

`void`

***

### addFinishCallback()

> **addFinishCallback**(`callback`): `void`

Defined in: stores/PageStore.d.ts:35

#### Parameters

##### callback

() => `any`

#### Returns

`void`

***

### finished()

> **finished**(): `void`

Defined in: stores/PageStore.d.ts:36

#### Returns

`void`
