[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/component/ComponentRegistry](../index.md) / ComponentRegistry

# Class: ComponentRegistry

Defined in: api/component/ComponentRegistry.d.ts:29

The registry for components.  Register your implementation of ComponentMeta via ComponentRegistry.get().register(

## Properties

### \_components

> **\_components**: `Map`\<`string`, [`ComponentMeta`](../interfaces/ComponentMeta.md)\>

Defined in: api/component/ComponentRegistry.d.ts:30

## Methods

### report()

> **report**(): `string`

Defined in: api/component/ComponentRegistry.d.ts:36

#### Returns

`string`

***

### getMeta()

> `static` **getMeta**(`componentType`): [`ComponentMeta`](../interfaces/ComponentMeta.md)

Defined in: api/component/ComponentRegistry.d.ts:35

Finds a ComponentMeta that was previously registered by component-type name. Returns null if not registered.

#### Parameters

##### componentType

`string`

#### Returns

[`ComponentMeta`](../interfaces/ComponentMeta.md)

***

### register()

> `static` **register**(`component`): `void`

Defined in: api/component/ComponentRegistry.d.ts:33

#### Parameters

##### component

[`ComponentMeta`](../interfaces/ComponentMeta.md)

#### Returns

`void`
