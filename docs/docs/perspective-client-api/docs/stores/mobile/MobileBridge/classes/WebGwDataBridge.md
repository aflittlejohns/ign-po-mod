[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [stores/mobile/MobileBridge](../index.md) / WebGwDataBridge

# Class: WebGwDataBridge

Defined in: stores/mobile/MobileBridge.d.ts:13

## Extended by

- [`ClientBridge`](ClientBridge.md)

## Implements

- [`GwDataSubmitter`](../../../native/api/NativeWebInterface/interfaces/GwDataSubmitter.md)\<[`MobileDataItem`](../../api/MobileDataSource/interfaces/MobileDataItem.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>\>

## Constructors

### Constructor

> **new WebGwDataBridge**(): `WebGwDataBridge`

Defined in: stores/mobile/MobileBridge.d.ts:16

#### Returns

`WebGwDataBridge`

## Properties

### dataSources

> `readonly` **dataSources**: `Map`\<`string`, [`MobileDataSource`](../../api/MobileDataSource/interfaces/MobileDataSource.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md), [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>\>

Defined in: stores/mobile/MobileBridge.d.ts:14

***

### submitter

> `readonly` **submitter**: `DataSubmitter`

Defined in: stores/mobile/MobileBridge.d.ts:15

## Methods

### registerDataSource()

> `protected` **registerDataSource**(`source`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:18

#### Parameters

##### source

[`MobileDataSource`](../../api/MobileDataSource/interfaces/MobileDataSource.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md), [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>

#### Returns

`void`

***

### submitData()

> **submitData**(`result`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:23

Method called from the mobile device's native code to submit data back to the client.  Ok to use from client
as well for actions that need to send data back to the gw.

#### Parameters

##### result

[`MobileDataItem`](../../api/MobileDataSource/interfaces/MobileDataItem.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>

#### Returns

`void`

#### Implementation of

[`GwDataSubmitter`](../../../native/api/NativeWebInterface/interfaces/GwDataSubmitter.md).[`submitData`](../../../native/api/NativeWebInterface/interfaces/GwDataSubmitter.md#submitdata)
