[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/workstation/api/WebInterface](../index.md) / WebInterface

# Interface: WebInterface

Defined in: stores/workstation/api/WebInterface.d.ts:7

## Extends

- [`NativeWebInterface`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md)\<[`WorkstationDataItem`](../../WorkstationDataSource/interfaces/WorkstationDataItem.md)\<[`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)\>\>

## Methods

### enableFallbackRedirect()

> **enableFallbackRedirect**(): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:33

Enabled Fallback Redirect for this client. This function is called from the native-side of the client and enables
UI information for a fallback redirect. The actual implementation of performing the fallback is performed on the
native side, not in the client. This simply enables the client UI fallback redirect modal instead of the
traditional gateway disconnect one when appropriate and Native Applications which call this should take into
account the situation where the client doesn't actually have this method (older gateways)

#### Returns

`void`

#### Inherited from

[`NativeWebInterface`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md).[`enableFallbackRedirect`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md#enablefallbackredirect)

***

### log()

> **log**(`level`, `msg`): `void`

Defined in: stores/workstation/api/WebInterface.d.ts:19

Submit a log message to the client, which is then also sent back to the gateway.  Useful for propagating
workstation errors/logging info back to the gateway.

#### Parameters

##### level

[`LogLevel`](../../../../native/api/NativeWebInterface/enumerations/LogLevel.md)

the log level, represented as a String valued enum.

##### msg

`string`

the log message

#### Returns

`void`

#### Overrides

[`NativeWebInterface`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md).[`log`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md#log)

***

### setFallbackRedirectTimeout()

> **setFallbackRedirectTimeout**(`timeRemaining`): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:39

Sets the fallback redirect time remaining. The implementor of this class should do the necessary to notify the
user how much time is left before the fallback application is launched, usually through a notification

#### Parameters

##### timeRemaining

`number`

The time remaining (in seconds) before fallback redirect happens.

#### Returns

`void`

#### Inherited from

[`NativeWebInterface`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md).[`setFallbackRedirectTimeout`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md#setfallbackredirecttimeout)

***

### submitChallenge()

> **submitChallenge**(`result`): `void`

Defined in: stores/workstation/api/WebInterface.d.ts:12

Called from workstation, used to submit the result of a workstation origin challenge.

#### Parameters

##### result

`string`

the decrypted challenge used to verify the client application is running in jxbrowser in workstation.

#### Returns

`void`

#### Overrides

[`NativeWebInterface`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md).[`submitChallenge`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md#submitchallenge)

***

### submitData()

> **submitData**(`result`): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:48

When the client has initiated a native action, the result of that action may (if necessary) return the result
of the action to the client via this method.  This method should only be called if the ClientStore.clientState
== "running" OR if the native app has received the onWebAppRunning callback

#### Parameters

##### result

[`WorkstationDataItem`](../../WorkstationDataSource/interfaces/WorkstationDataItem.md)

the result of some native action or data collection request

#### Returns

`void`

#### Inherited from

[`NativeWebInterface`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md).[`submitData`](../../../../native/api/NativeWebInterface/interfaces/NativeWebInterface.md#submitdata)
