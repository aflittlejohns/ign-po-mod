[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [stores/workstation/WorkstationBridge](../index.md) / WorkstationBridge

# Class: WorkstationBridge

Defined in: stores/workstation/WorkstationBridge.d.ts:33

When running in a jxbrowser in a workstation application, these are the method signatures that the native
application should expose to allow the client to interact with it.

NOTE: Adding functionality here after the initial inception which call to the java bridge should have guards against
the presence of a matching method in the java bridge. It is recommended if at all possible to initialize any handlers
in WorkstationBridge.java itself outside of this supplied and limited scope to guard future features, actions,
scripts, etc. which may not be supported in previous versions of workstation.

## Implements

- [`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md)

## Constructors

### Constructor

> **new WorkstationBridge**(`bridge`): `WorkstationBridge`

Defined in: stores/workstation/WorkstationBridge.d.ts:37

#### Parameters

##### bridge

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md)

#### Returns

`WorkstationBridge`

## Properties

### bridgeHandlers

> `readonly` **bridgeHandlers**: `IObservableArray`\<`string`\>

Defined in: stores/workstation/WorkstationBridge.d.ts:36

***

### handlers

> `readonly` **handlers**: `Map`\<`string`, [`MessageHandler`](../../../../perspective-client/interfaces/MessageHandler.md)\>

Defined in: stores/workstation/WorkstationBridge.d.ts:35

## Methods

### bridgeAction()

> **bridgeAction**(`payloadType`, `payloadConfig`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:51

Handles bridge actions that have been registered by the java bridge. This is the preferred mechanism for adding
functionality to workstation as it allows different versions of workstation to supply handlers for what that version
supports allowing flexibility in additional features over time with a single change in the code.

#### Parameters

##### payloadType

`string`

##### payloadConfig

[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`bridgeAction`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#bridgeaction)

***

### challenge()

> **challenge**(`challenge`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:48

Java Bridge method which handles the challenge token from the gateway

#### Parameters

##### challenge

[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`challenge`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#challenge)

***

### exit()

> **exit**(): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:46

Handles exiting Workstations Browser instance. All open instances linked to this Browser instance are closed

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`exit`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#exit)

***

### initializeBridge()

> **initializeBridge**(): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:40

Should be implemented on the Java side to initialize and add additional handlers supported by workstation.

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`initializeBridge`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#initializebridge)

***

### launchAction()

> **launchAction**(`actionConfig`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:52

Launch an action on the native client.

#### Parameters

##### actionConfig

`string`

the config object of the LaunchActionConfig type in JSON.stringified form

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`launchAction`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#launchaction)

***

### nativeSettings()

> **nativeSettings**(`settings`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:49

Java Bridge method which handles any applicable native settings.

#### Parameters

##### settings

[`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`nativeSettings`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#nativesettings)

***

### onError()

> **onError**(`error`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:47

Called when an error has occurred during a bridge activity in order to send error information to the native
app.

#### Parameters

##### error

[`ClientError`](../../../../perspective-client/type-aliases/ClientError.md)

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`onError`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#onerror)

***

### onLifecycleEvent()

> **onLifecycleEvent**(`stage`): `void`

Defined in: stores/workstation/WorkstationBridge.d.ts:50

Called when a lifecycle transition or event has occured that the native application might be interested in.
Sends the NativeLifeCycleEvents's string value to the native side.

#### Parameters

##### stage

[`NativeLifeCycleEvents`](../../../ClientStore/type-aliases/NativeLifeCycleEvents.md)

#### Returns

`void`

#### Implementation of

[`WorkstationInterface`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md).[`onLifecycleEvent`](../../api/WorkstationInterface/interfaces/WorkstationInterface.md#onlifecycleevent)
