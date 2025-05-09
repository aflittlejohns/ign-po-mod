[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [stores/workstation/WorkstationBridge](../index.md) / WebGwDataBridge

# Class: WebGwDataBridge

Defined in: stores/workstation/WorkstationBridge.d.ts:9

## Extended by

- [`WorkstationClientBridge`](WorkstationClientBridge.md)

## Implements

- [`GwDataSubmitter`](../../../native/api/NativeWebInterface/interfaces/GwDataSubmitter.md)\<[`WorkstationDataItem`](../../api/WorkstationDataSource/interfaces/WorkstationDataItem.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>\>

## Constructors

### Constructor

> **new WebGwDataBridge**(): `WebGwDataBridge`

Defined in: stores/workstation/WorkstationBridge.d.ts:12

#### Returns

`WebGwDataBridge`

## Properties

### dataSources

> `readonly` **dataSources**: `Map`\<`string`, [`WorkstationDataSource`](../../api/WorkstationDataSource/interfaces/WorkstationDataSource.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md), [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>\>

Defined in: stores/workstation/WorkstationBridge.d.ts:10

***

### submitter

> `readonly` **submitter**: `DataSubmitter`

Defined in: stores/workstation/WorkstationBridge.d.ts:11

## Methods

### registerDataSource()

> `protected` **registerDataSource**(`source`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:14

#### Parameters

##### source

[`WorkstationDataSource`](../../api/WorkstationDataSource/interfaces/WorkstationDataSource.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md), [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>

#### Returns

`void`

***

### submitData()

> **submitData**(`result`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:19

Method called from the workstations's java code to submit data back to the client.  Ok to use from client
as well for actions that need to send data back to the gw.

#### Parameters

##### result

[`WorkstationDataItem`](../../api/WorkstationDataSource/interfaces/WorkstationDataItem.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>

#### Returns

`void`

#### Implementation of

[`GwDataSubmitter`](../../../native/api/NativeWebInterface/interfaces/GwDataSubmitter.md).[`submitData`](../../../native/api/NativeWebInterface/interfaces/GwDataSubmitter.md#submitdata)
