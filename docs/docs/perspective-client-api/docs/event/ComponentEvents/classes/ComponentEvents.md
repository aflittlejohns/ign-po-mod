[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [event/ComponentEvents](../index.md) / ComponentEvents

# Class: ComponentEvents

Defined in: event/ComponentEvents.d.ts:22

Holds the configured action instances for 'system' and 'component' event types.

## Implements

- [`ComponentEventsInterface`](../interfaces/ComponentEventsInterface.md)

## Constructors

### Constructor

> **new ComponentEvents**(`component`, `systemEvents`, `componentEvents?`): `ComponentEvents`

Defined in: event/ComponentEvents.d.ts:26

#### Parameters

##### component

[`AbstractUIElementStore`](../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

##### systemEvents

[`EventGroup`](../../../perspective-client/interfaces/EventGroup.md)

##### componentEvents?

[`EventGroup`](../../../perspective-client/interfaces/EventGroup.md)

#### Returns

`ComponentEvents`

## Properties

### component

> **component**: [`AbstractUIElementStore`](../../../stores/AbstractUIElementStore/classes/AbstractUIElementStore.md)

Defined in: event/ComponentEvents.d.ts:23

## Methods

### fireComponentEvent()

> **fireComponentEvent**(`eventName`, `eventObject`): `void`

Defined in: event/ComponentEvents.d.ts:32

Called by component implementations when an event of their own design has happened. For example, the table
component might do some detection of when an individual table cell has been clicked, and then fire a
"tableCellClicked" event with an event object that described the cell's row, column, and data.

#### Parameters

##### eventName

`string`

##### eventObject

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

#### Implementation of

`ComponentEventsInterface.fireComponentEvent`

***

### runClientActions()

> **runClientActions**(`type`, `eventName`, `eventObject`): `void`

Defined in: event/ComponentEvents.d.ts:37

Called when an event was fired on the gateway and we are being notified of it.

#### Parameters

##### type

`string`

##### eventName

`string`

##### eventObject

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

#### Implementation of

`ComponentEventsInterface.runClientActions`
