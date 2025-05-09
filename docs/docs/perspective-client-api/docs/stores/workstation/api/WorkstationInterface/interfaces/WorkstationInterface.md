[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/workstation/api/WorkstationInterface](../index.md) / WorkstationInterface

# Interface: WorkstationInterface

Defined in: stores/workstation/api/WorkstationInterface.d.ts:11

When running in a jxbrowser in a workstation application, these are the method signatures that the native
application should expose to allow the client to interact with it.

NOTE: Adding functionality here after the initial inception which call to the java bridge should have guards against
the presence of a matching method in the java bridge. It is recommended if at all possible to initialize any handlers
in WorkstationBridge.java itself outside of this supplied and limited scope to guard future features, actions,
scripts, etc. which may not be supported in previous versions of workstation.

## Extends

- [`NativeInterface`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md)

## Methods

### bridgeAction()

> **bridgeAction**(`payloadType`, `payloadConfig`): `void`

Defined in: stores/workstation/api/WorkstationInterface.d.ts:33

Handles bridge actions that have been registered by the java bridge. This is the preferred mechanism for adding
functionality to workstation as it allows different versions of workstation to supply handlers for what that version
supports allowing flexibility in additional features over time with a single change in the code.

#### Parameters

##### payloadType

`string`

##### payloadConfig

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### challenge()

> **challenge**(`challenge`): `void`

Defined in: stores/workstation/api/WorkstationInterface.d.ts:23

Java Bridge method which handles the challenge token from the gateway

#### Parameters

##### challenge

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### exit()

> **exit**(): `void`

Defined in: stores/workstation/api/WorkstationInterface.d.ts:19

Handles exiting Workstations Browser instance. All open instances linked to this Browser instance are closed

#### Returns

`void`

***

### initializeBridge()

> **initializeBridge**(): `void`

Defined in: stores/workstation/api/WorkstationInterface.d.ts:15

Should be implemented on the Java side to initialize and add additional handlers supported by workstation.

#### Returns

`void`

***

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

#### Inherited from

[`NativeInterface`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md).[`launchAction`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md#launchaction)

***

### nativeSettings()

> **nativeSettings**(`settings`): `void`

Defined in: stores/workstation/api/WorkstationInterface.d.ts:27

Java Bridge method which handles any applicable native settings.

#### Parameters

##### settings

`Record`\<`string`, `any`\>

#### Returns

`void`

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

#### Inherited from

[`NativeInterface`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md).[`onError`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md#onerror)

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

#### Inherited from

[`NativeInterface`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md).[`onLifecycleEvent`](../../../../native/api/NativeInterface/interfaces/NativeInterface.md#onlifecycleevent)
