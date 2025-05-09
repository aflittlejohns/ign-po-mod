[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [stores/mobile/MobileBridge](../index.md) / ClientBridge

# Class: ClientBridge

Defined in: stores/mobile/MobileBridge.d.ts:25

## Extends

- [`WebGwDataBridge`](WebGwDataBridge.md)

## Implements

- [`WebInterface`](../../api/WebInterface/interfaces/WebInterface.md)

## Constructors

### Constructor

> **new ClientBridge**(`iOsBridge?`): `ClientBridge`

Defined in: stores/mobile/MobileBridge.d.ts:26

#### Parameters

##### iOsBridge?

[`NativeInterface`](../../../native/api/NativeInterface/interfaces/NativeInterface.md)

#### Returns

`ClientBridge`

#### Overrides

[`WebGwDataBridge`](WebGwDataBridge.md).[`constructor`](WebGwDataBridge.md#constructor)

## Properties

### dataSources

> `readonly` **dataSources**: `Map`\<`string`, [`MobileDataSource`](../../api/MobileDataSource/interfaces/MobileDataSource.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md), [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>\>

Defined in: stores/mobile/MobileBridge.d.ts:14

#### Inherited from

[`WebGwDataBridge`](WebGwDataBridge.md).[`dataSources`](WebGwDataBridge.md#datasources)

***

### submitter

> `readonly` **submitter**: `DataSubmitter`

Defined in: stores/mobile/MobileBridge.d.ts:15

#### Inherited from

[`WebGwDataBridge`](WebGwDataBridge.md).[`submitter`](WebGwDataBridge.md#submitter)

## Methods

### enableActions()

> **enableActions**(): `void`

Defined in: stores/mobile/MobileBridge.d.ts:28

#### Returns

`void`

***

### enableFallbackRedirect()

> **enableFallbackRedirect**(): `void`

Defined in: stores/mobile/MobileBridge.d.ts:32

Enabled Fallback Redirect for this client. This function is called from the native-side of the client and enables
UI information for a fallback redirect. The actual implementation of performing the fallback is performed on the
native side, not in the client. This simply enables the client UI fallback redirect modal instead of the
traditional gateway disconnect one when appropriate and Native Applications which call this should take into
account the situation where the client doesn't actually have this method (older gateways)

#### Returns

`void`

#### Implementation of

[`WebInterface`](../../api/WebInterface/interfaces/WebInterface.md).[`enableFallbackRedirect`](../../api/WebInterface/interfaces/WebInterface.md#enablefallbackredirect)

***

### log()

> **log**(`level`, `msg`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:31

Submit a log message to the client, which is then also sent back to the gateway.  Useful for propagating
native errors/logging info back to the gateway.

#### Parameters

##### level

[`LogLevel`](../../../native/api/NativeWebInterface/enumerations/LogLevel.md)

the log level, represented as a String valued enum.

##### msg

`string`

the log message

#### Returns

`void`

#### Implementation of

[`WebInterface`](../../api/WebInterface/interfaces/WebInterface.md).[`log`](../../api/WebInterface/interfaces/WebInterface.md#log)

***

### registerDataSource()

> `protected` **registerDataSource**(`source`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:27

#### Parameters

##### source

[`MobileDataSource`](../../api/MobileDataSource/interfaces/MobileDataSource.md)\<[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md), [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)\>

#### Returns

`void`

#### Overrides

[`WebGwDataBridge`](WebGwDataBridge.md).[`registerDataSource`](WebGwDataBridge.md#registerdatasource)

***

### setFallbackRedirectTimeout()

> **setFallbackRedirectTimeout**(`timeRemaining`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:33

Sets the fallback redirect time remaining. The implementor of this class should do the necessary to notify the
user how much time is left before the fallback application is launched, usually through a notification

#### Parameters

##### timeRemaining

`number`

The time remaining (in seconds) before fallback redirect happens.

#### Returns

`void`

#### Implementation of

[`WebInterface`](../../api/WebInterface/interfaces/WebInterface.md).[`setFallbackRedirectTimeout`](../../api/WebInterface/interfaces/WebInterface.md#setfallbackredirecttimeout)

***

### submitChallenge()

> **submitChallenge**(`data`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:29

Called from the native application, used to submit the result of a mobile origin challenge.

#### Parameters

##### data

`string`

#### Returns

`void`

#### Implementation of

[`WebInterface`](../../api/WebInterface/interfaces/WebInterface.md).[`submitChallenge`](../../api/WebInterface/interfaces/WebInterface.md#submitchallenge)

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

[`WebInterface`](../../api/WebInterface/interfaces/WebInterface.md).[`submitData`](../../api/WebInterface/interfaces/WebInterface.md#submitdata)

#### Inherited from

[`WebGwDataBridge`](WebGwDataBridge.md).[`submitData`](WebGwDataBridge.md#submitdata)

***

### submitDeviceConnect()

> **submitDeviceConnect**(`data`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:30

#### Parameters

##### data

[`DeviceConnectData`](../interfaces/DeviceConnectData.md)

#### Returns

`void`
