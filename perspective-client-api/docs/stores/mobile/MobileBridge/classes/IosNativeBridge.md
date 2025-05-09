[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [stores/mobile/MobileBridge](../index.md) / IosNativeBridge

# Class: IosNativeBridge

Defined in: stores/mobile/MobileBridge.d.ts:48

## Implements

- [`MobileInterface`](../../api/MobileInterface/type-aliases/MobileInterface.md)

## Constructors

### Constructor

> **new IosNativeBridge**(): `IosNativeBridge`

Defined in: stores/mobile/MobileBridge.d.ts:50

#### Returns

`IosNativeBridge`

## Methods

### launchAction()

> **launchAction**(`actionConfig`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:52

Launch an action on the native client.

#### Parameters

##### actionConfig

`string`

the config object of the LaunchActionConfig type in JSON.stringified form

#### Returns

`void`

#### Implementation of

`MobileInterface.launchAction`

***

### onBrowserReady()

> **onBrowserReady**(): `void`

Defined in: stores/mobile/MobileBridge.d.ts:53

#### Returns

`void`

***

### onError()

> **onError**(`error`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:54

Called when an error has occurred during a bridge activity in order to send error information to the native
app.

#### Parameters

##### error

[`ClientError`](../../../../perspective-client/type-aliases/ClientError.md)

#### Returns

`void`

#### Implementation of

`MobileInterface.onError`

***

### onLifecycleEvent()

> **onLifecycleEvent**(`stage`): `void`

Defined in: stores/mobile/MobileBridge.d.ts:51

Called when a lifecycle transition or event has occured that the native application might be interested in.
Sends the NativeLifeCycleEvents's string value to the native side.

#### Parameters

##### stage

[`NativeLifeCycleEvents`](../../../ClientStore/type-aliases/NativeLifeCycleEvents.md)

#### Returns

`void`

#### Implementation of

`MobileInterface.onLifecycleEvent`

***

### onShutdown()

> **onShutdown**(): `void`

Defined in: stores/mobile/MobileBridge.d.ts:55

#### Returns

`void`

***

### onWebAppRunning()

> **onWebAppRunning**(): `void`

Defined in: stores/mobile/MobileBridge.d.ts:56

#### Returns

`void`

***

### exists()

> `static` **exists**(): `boolean`

Defined in: stores/mobile/MobileBridge.d.ts:58

#### Returns

`boolean`
