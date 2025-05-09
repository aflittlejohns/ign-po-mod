[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [event/DomEvents](../index.md) / DomEvents

# Class: DomEvents

Defined in: event/DomEvents.d.ts:26

An object whose keys are react-compatible event names, and whose values are event-handling callback
functions. This object is then stored as ComponentStore.events, and passed into each component definition
as props.events. Component implementations simply need to include this object in their top-level emitted
DOM in order to wire-up the user configured events, like this:
`<div {...this.props.events} />`

## Implements

- `DomEventsInterface`

## Constructors

### Constructor

> **new DomEvents**(`store`, `domEventsDef`): `DomEvents`

Defined in: event/DomEvents.d.ts:28

#### Parameters

##### store

[`ComponentStore`](../../../stores/ComponentStore/classes/ComponentStore.md)

##### domEventsDef

[`EventGroup`](../../../perspective-client/interfaces/EventGroup.md)

#### Returns

`DomEvents`

## Properties

### component

> **component**: [`ComponentStore`](../../../stores/ComponentStore/classes/ComponentStore.md)

Defined in: event/DomEvents.d.ts:27

## Methods

### addListener()

> **addListener**(`eventName`, `listener`): () => `void`

Defined in: event/DomEvents.d.ts:36

Components might call this to add their own listeners to DOM events. They put it here rather than directly
on the DOM elements because if they did that, their listeners might be shadowed by the user's events, or
vice-versa.

Returns a callback function that will remove the listener when invoked

#### Parameters

##### eventName

`string`

##### listener

(`e`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

`DomEventsInterface.addListener`
