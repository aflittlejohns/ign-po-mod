[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/native/api/NativeInterface](../index.md) / NativeInterface

# Interface: NativeInterface

Defined in: stores/native/api/NativeInterface.d.ts:7

When running in some webview/jxbrowser of the native application, these are the method signatures that the native
application should expose to allow the client to interact with it.

## Extended by

- [`WorkstationInterface`](../../../../workstation/api/WorkstationInterface/interfaces/WorkstationInterface.md)

## Methods

### launchAction()

> **launchAction**(`actionConfig`): `string` \| `void`

Defined in: stores/native/api/NativeInterface.d.ts:22

Launch an action on the native client.

#### Parameters

##### actionConfig

`string`

the config object of the LaunchActionConfig type in JSON.stringified form

#### Returns

`string` \| `void`

***

### onError()

> **onError**(`error`): `void`

Defined in: stores/native/api/NativeInterface.d.ts:17

Called when an error has occurred during a bridge activity in order to send error information to the native
app.

#### Parameters

##### error

[`ClientError`](../../../../../perspective-client/type-aliases/ClientError.md)

#### Returns

`void`

***

### onLifecycleEvent()

> **onLifecycleEvent**(`stage`): `void`

Defined in: stores/native/api/NativeInterface.d.ts:12

Called when a lifecycle transition or event has occured that the native application might be interested in.
Sends the NativeLifeCycleEvents's string value to the native side.

#### Parameters

##### stage

[`NativeLifeCycleEvents`](../../../../ClientStore/type-aliases/NativeLifeCycleEvents.md)

#### Returns

`void`
