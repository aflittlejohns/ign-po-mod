[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/component/ComponentRegistry](../index.md) / ComponentMeta

# Interface: ComponentMeta

Defined in: api/component/ComponentRegistry.d.ts:4

## Properties

### canConvertToDrawing?

> `optional` **canConvertToDrawing**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:11

***

### customMoveUndo?

> `optional` **customMoveUndo**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:17

***

### focusRootOnly?

> `optional` **focusRootOnly**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:15

***

### focusTargetSelector?

> `optional` **focusTargetSelector**: `string`

Defined in: api/component/ComponentRegistry.d.ts:16

***

### getPropsReducer?

> `optional` **getPropsReducer**: [`PropertyTreeChangeListener`](../../../../props/PropertyTree/type-aliases/PropertyTreeChangeListener.md)\<`Record`\<`string`, `any`\>\>

Defined in: api/component/ComponentRegistry.d.ts:9

***

### installReactions?

> `optional` **installReactions**: [`InstallReactionFunc`](../../../../perspective-client/interfaces/InstallReactionFunc.md)

Defined in: api/component/ComponentRegistry.d.ts:10

***

### isContainer?

> `optional` **isContainer**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:13

***

### isDeepSelectable?

> `optional` **isDeepSelectable**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:14

***

### isDrawing?

> `optional` **isDrawing**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:12

***

### pipingAnchorSelector?

> `optional` **pipingAnchorSelector**: `string`

Defined in: api/component/ComponentRegistry.d.ts:19

***

### pipingEnabled?

> `optional` **pipingEnabled**: `boolean`

Defined in: api/component/ComponentRegistry.d.ts:18

***

### version?

> `optional` **version**: `number`

Defined in: api/component/ComponentRegistry.d.ts:20

## Methods

### createDelegate()?

> `optional` **createDelegate**(`component`): [`ComponentStoreDelegate`](../../ComponentStoreDelegate/classes/ComponentStoreDelegate.md)

Defined in: api/component/ComponentRegistry.d.ts:5

#### Parameters

##### component

[`AbstractUIElementStore`](../../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

#### Returns

[`ComponentStoreDelegate`](../../ComponentStoreDelegate/classes/ComponentStoreDelegate.md)

***

### getComponentType()

> **getComponentType**(): `string`

Defined in: api/component/ComponentRegistry.d.ts:6

#### Returns

`string`

***

### getDefaultSize()

> **getDefaultSize**(): [`SizeObject`](../../../../perspective-client/interfaces/SizeObject.md)

Defined in: api/component/ComponentRegistry.d.ts:7

#### Returns

[`SizeObject`](../../../../perspective-client/interfaces/SizeObject.md)

***

### getViewComponent()

> **getViewComponent**(): `any`

Defined in: api/component/ComponentRegistry.d.ts:8

#### Returns

`any`
