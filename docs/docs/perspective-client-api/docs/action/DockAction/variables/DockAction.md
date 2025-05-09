[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [action/DockAction](../index.md) / DockAction

# Variable: DockAction

> `const` **DockAction**: `object`

Defined in: action/DockAction.d.ts:17

Dock action - expands or collapses a docked view by id
type = "dock"
scope = "C"
config:
  type {"open" | "close" | "toggle"} - Determines which operation to apply on dock
  id {`string`} - unique docked view identity

## Type declaration

### type

> **type**: `string`

### create()

> **create**(`component`, `def`): (`event`) => `void`

#### Parameters

##### component

[`AbstractUIElementStore`](../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

##### def

[`ActionDefinition`](../../../perspective-client/interfaces/ActionDefinition.md)\<[`DockActionConfig`](../interfaces/DockActionConfig.md)\>

#### Returns

> (`event`): `void`

##### Parameters

###### event

`any`

##### Returns

`void`
