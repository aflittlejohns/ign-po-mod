[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/KeyEventStore](../index.md) / KeyEventStore

# Class: KeyEventStore

Defined in: stores/KeyEventStore.d.ts:6

Store used to track keyup/keydown events and send the data back to the gateway where session events that
are bound to key events can execute against the data.

## Constructors

### Constructor

> **new KeyEventStore**(`client`): `KeyEventStore`

Defined in: stores/KeyEventStore.d.ts:13

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`KeyEventStore`

## Methods

### setConfigData()

> **setConfigData**(`keyEventConfigData`): `void`

Defined in: stores/KeyEventStore.d.ts:14

#### Parameters

##### keyEventConfigData

[`KeyEventConfigData`](../interfaces/KeyEventConfigData.md)

#### Returns

`void`
