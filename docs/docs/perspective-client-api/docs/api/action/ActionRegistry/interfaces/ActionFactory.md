[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/action/ActionRegistry](../index.md) / ActionFactory

# Interface: ActionFactory\<C\>

Defined in: api/action/ActionRegistry.d.ts:3

## Type Parameters

### C

`C` *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

## Properties

### type

> **type**: `string`

Defined in: api/action/ActionRegistry.d.ts:4

## Methods

### create()

> **create**(`store`, `ActionDefinition`): (`event`) => `void`

Defined in: api/action/ActionRegistry.d.ts:5

#### Parameters

##### store

[`AbstractUIElementStore`](../../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

##### ActionDefinition

[`ActionDefinition`](../../../../perspective-client/interfaces/ActionDefinition.md)\<`C`\>

#### Returns

> (`event`): `void`

##### Parameters

###### event

`any`

##### Returns

`void`
