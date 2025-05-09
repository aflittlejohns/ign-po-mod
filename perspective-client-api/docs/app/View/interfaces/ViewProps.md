[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/View](../index.md) / ViewProps

# Interface: ViewProps

Defined in: app/View.d.ts:7

## Properties

### dockOffsetChanged?

> `optional` **dockOffsetChanged**: `boolean`

Defined in: app/View.d.ts:21

***

### inactive?

> `optional` **inactive**: `boolean`

Defined in: app/View.d.ts:17

***

### mountPath

> **mountPath**: `string`

Defined in: app/View.d.ts:10

***

### outputListener?

> `optional` **outputListener**: [`OutputListener`](../../../stores/ViewStore/interfaces/OutputListener.md)

Defined in: app/View.d.ts:14

***

### params?

> `optional` **params**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: app/View.d.ts:13

***

### parent?

> `optional` **parent**: [`ComponentStore`](../../../stores/ComponentStore/classes/ComponentStore.md)

Defined in: app/View.d.ts:12

Used to detect view cycles, for starters.

***

### resourcePath

> **resourcePath**: `string`

Defined in: app/View.d.ts:9

***

### rootStyle?

> `optional` **rootStyle**: `any`

Defined in: app/View.d.ts:20

***

### store

> **store**: [`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)

Defined in: app/View.d.ts:8

***

### useDefaultHeight?

> `optional` **useDefaultHeight**: `boolean`

Defined in: app/View.d.ts:16

***

### useDefaultMinHeight?

> `optional` **useDefaultMinHeight**: `boolean`

Defined in: app/View.d.ts:19

***

### useDefaultMinWidth?

> `optional` **useDefaultMinWidth**: `boolean`

Defined in: app/View.d.ts:18

***

### useDefaultWidth?

> `optional` **useDefaultWidth**: `boolean`

Defined in: app/View.d.ts:15

## Methods

### onViewSizeChange()?

> `optional` **onViewSizeChange**(`size`): `void`

Defined in: app/View.d.ts:22

#### Parameters

##### size

[`Size2d`](../../../perspective-client/interfaces/Size2d.md)

#### Returns

`void`

***

### onViewStateChange()?

> `optional` **onViewStateChange**(`state`): `void`

Defined in: app/View.d.ts:23

#### Parameters

##### state

[`ViewStateType`](../enumerations/ViewStateType.md)

#### Returns

`void`
