[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/native/api/NativeWebInterface](../index.md) / NativeWebInterface

# Interface: NativeWebInterface\<D\>

Defined in: stores/native/api/NativeWebInterface.d.ts:12

## Extends

- [`GwDataSubmitter`](GwDataSubmitter.md)\<`D`\>

## Extended by

- [`WebInterface`](../../../../mobile/api/WebInterface/interfaces/WebInterface.md)
- [`WebInterface`](../../../../workstation/api/WebInterface/interfaces/WebInterface.md)

## Type Parameters

### D

`D`

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

***

### log()

> **log**(`level`, `msg`): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:25

Submit a log message to the client, which is then also sent back to the gateway.  Useful for propagating
native errors/logging info back to the gateway.

#### Parameters

##### level

[`LogLevel`](../enumerations/LogLevel.md)

the log level, represented as a String valued enum.

##### msg

`string`

the log message

#### Returns

`void`

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

***

### submitChallenge()

> **submitChallenge**(`result`): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:18

Called from the native application, used to submit the result of a mobile origin challenge.

#### Parameters

##### result

`string`

the decrypted challenge used to verify the client application is running as a webview of the
              native app

#### Returns

`void`

***

### submitData()

> **submitData**(`result`): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:48

When the client has initiated a native action, the result of that action may (if necessary) return the result
of the action to the client via this method.  This method should only be called if the ClientStore.clientState
== "running" OR if the native app has received the onWebAppRunning callback

#### Parameters

##### result

`D`

the result of some native action or data collection request

#### Returns

`void`

#### Inherited from

[`GwDataSubmitter`](GwDataSubmitter.md).[`submitData`](GwDataSubmitter.md#submitdata)
