[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ClientStore](../index.md) / ClientStore

# Class: ClientStore

Defined in: stores/ClientStore.d.ts:64

This is the ROOT store of the client.

## Constructors

### Constructor

> **new ClientStore**(`projectName`, `projectTitle`, `platformEdition`, `tabIdentifier?`, `coBrandingEnabled?`): `ClientStore`

Defined in: stores/ClientStore.d.ts:111

#### Parameters

##### projectName

`string`

##### projectTitle

`string`

##### platformEdition

[`PlatformEdition`](../enumerations/PlatformEdition.md)

##### tabIdentifier?

`string`

##### coBrandingEnabled?

`boolean`

#### Returns

`ClientStore`

## Properties

### activeContextMenuRef?

> `optional` **activeContextMenuRef**: [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

Defined in: stores/ClientStore.d.ts:71

***

### auth

> **auth**: [`AuthStore`](../../AuthStore/classes/AuthStore.md)

Defined in: stores/ClientStore.d.ts:79

***

### bluetooth

> **bluetooth**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ClientStore.d.ts:102

***

### coBrandingEnabled

> **coBrandingEnabled**: `boolean`

Defined in: stores/ClientStore.d.ts:67

***

### connection

> **connection**: [`ChannelStore`](../../ChannelStore/classes/ChannelStore.md)

Defined in: stores/ClientStore.d.ts:77

***

### created

> **created**: `number`

Defined in: stores/ClientStore.d.ts:93

***

### defaultsStore

> **defaultsStore**: [`ComponentDefaultsStore`](../../ComponentDefaultsStore/classes/ComponentDefaultsStore.md)

Defined in: stores/ClientStore.d.ts:82

***

### deviceConnectData?

> `optional` **deviceConnectData**: [`DeviceConnectData`](../../mobile/MobileBridge/interfaces/DeviceConnectData.md)

Defined in: stores/ClientStore.d.ts:95

***

### deviceSettings

> **deviceSettings**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ClientStore.d.ts:103

***

### error

> **error**: [`ClientError`](../interfaces/ClientError.md)

Defined in: stores/ClientStore.d.ts:92

***

### flags

> **flags**: [`Flags`](../interfaces/Flags.md)

Defined in: stores/ClientStore.d.ts:108

***

### history

> **history**: `History`

Defined in: stores/ClientStore.d.ts:86

***

### iconRendererStore

> **iconRendererStore**: [`IconRenderersStore`](../../IconRenderersStore/classes/IconRenderersStore.md)

Defined in: stores/ClientStore.d.ts:91

***

### idle?

> `optional` **idle**: [`ClientIdleStore`](../../ClientIdleStore/classes/ClientIdleStore.md)

Defined in: stores/ClientStore.d.ts:90

***

### instrumentation

> **instrumentation**: [`InstrumentationStore`](../../InstrumentationStore/classes/InstrumentationStore.md)

Defined in: stores/ClientStore.d.ts:88

***

### keyEvent?

> `optional` **keyEvent**: [`KeyEventStore`](../../KeyEventStore/classes/KeyEventStore.md)

Defined in: stores/ClientStore.d.ts:89

***

### lastHelloCheck

> **lastHelloCheck**: `number`

Defined in: stores/ClientStore.d.ts:94

***

### location

> **location**: [`GeoLocationStore`](../../GeoLocationStore/classes/GeoLocationStore.md)

Defined in: stores/ClientStore.d.ts:87

***

### loggedOutMessage?

> `optional` **loggedOutMessage**: `string`

Defined in: stores/ClientStore.d.ts:75

***

### mounts

> **mounts**: [`MountStore`](../../MountStore/classes/MountStore.md)

Defined in: stores/ClientStore.d.ts:81

***

### notifications

> **notifications**: [`NotificationStore`](../../NotificationStore/classes/NotificationStore.md)

Defined in: stores/ClientStore.d.ts:85

***

### page

> **page**: [`PageStore`](../../PageStore/classes/PageStore.md)

Defined in: stores/ClientStore.d.ts:80

***

### pageClosedMessage?

> `optional` **pageClosedMessage**: `string`

Defined in: stores/ClientStore.d.ts:74

***

### projectName

> **projectName**: `string`

Defined in: stores/ClientStore.d.ts:65

***

### projectTitle

> **projectTitle**: `string`

Defined in: stores/ClientStore.d.ts:66

***

### resources

> **resources**: [`ResourceStore`](../../ResourceStore/classes/ResourceStore.md)

Defined in: stores/ClientStore.d.ts:78

***

### sessionClosedMessage?

> `optional` **sessionClosedMessage**: `string`

Defined in: stores/ClientStore.d.ts:73

***

### sessionId?

> `optional` **sessionId**: `string`

Defined in: stores/ClientStore.d.ts:70

***

### sessionPropsChangeDisposer()

> **sessionPropsChangeDisposer**: () => `any`

Defined in: stores/ClientStore.d.ts:187

#### Returns

`any`

***

### sessionState

> **sessionState**: [`ClientSessionState`](../../../perspective-client/interfaces/ClientSessionState.md)

Defined in: stores/ClientStore.d.ts:83

***

### stateReactionMap

> `protected` **stateReactionMap**: `Map`\<[`ClientState`](../../state/ClientState/enumerations/ClientState.md), () => `void`[]\>

Defined in: stores/ClientStore.d.ts:98

***

### subscribe

> `readonly` **subscribe**: [`SubscriptionHandler`](../../../api/subscription/Subscription/type-aliases/SubscriptionHandler.md)

Defined in: stores/ClientStore.d.ts:105

***

### system

> **system**: [`SystemStore`](../../SystemStore/classes/SystemStore.md)

Defined in: stores/ClientStore.d.ts:84

***

### tabIdUrlSafe

> **tabIdUrlSafe**: `string`

Defined in: stores/ClientStore.d.ts:69

***

### DEVICE\_ID\_KEY

> `readonly` `static` **DEVICE\_ID\_KEY**: `string`

Defined in: stores/ClientStore.d.ts:100

## Accessors

### areActionsEligible

#### Get Signature

> **get** **areActionsEligible**(): `boolean`

Defined in: stores/ClientStore.d.ts:114

##### Returns

`boolean`

***

### autoIdpAuthAllowed

#### Get Signature

> **get** **autoIdpAuthAllowed**(): `boolean`

Defined in: stores/ClientStore.d.ts:119

##### Returns

`boolean`

#### Set Signature

> **set** **autoIdpAuthAllowed**(`autoIdpAuthAllowed`): `void`

Defined in: stores/ClientStore.d.ts:120

##### Parameters

###### autoIdpAuthAllowed

`boolean`

##### Returns

`void`

***

### fullscreenInTransition

#### Get Signature

> **get** **fullscreenInTransition**(): `boolean`

Defined in: stores/ClientStore.d.ts:138

##### Returns

`boolean`

***

### isClient

#### Get Signature

> **get** **isClient**(): `boolean`

Defined in: stores/ClientStore.d.ts:136

##### Returns

`boolean`

***

### isDesigner

#### Get Signature

> **get** **isDesigner**(): `boolean`

Defined in: stores/ClientStore.d.ts:137

##### Returns

`boolean`

***

### platformEdition

#### Get Signature

> **get** **platformEdition**(): [`PlatformEdition`](../enumerations/PlatformEdition.md)

Defined in: stores/ClientStore.d.ts:113

##### Returns

[`PlatformEdition`](../enumerations/PlatformEdition.md)

***

### redundancyStatus

#### Get Signature

> **get** **redundancyStatus**(): [`RedundancyStatus`](../../../perspective-client/interfaces/RedundancyStatus.md)

Defined in: stores/ClientStore.d.ts:126

##### Returns

[`RedundancyStatus`](../../../perspective-client/interfaces/RedundancyStatus.md)

***

### scope

#### Get Signature

> **get** **scope**(): [`ClientScope`](../enumerations/ClientScope.md)

Defined in: stores/ClientStore.d.ts:135

Returns 'C' in the client, or 'D' in the designer

##### Returns

[`ClientScope`](../enumerations/ClientScope.md)

***

### state

#### Get Signature

> **get** **state**(): [`StateWrapper`](../../state/FiniteStateMachine/interfaces/StateWrapper.md)\<[`ClientState`](../../state/ClientState/enumerations/ClientState.md)\>

Defined in: stores/ClientStore.d.ts:125

##### Returns

[`StateWrapper`](../../state/FiniteStateMachine/interfaces/StateWrapper.md)\<[`ClientState`](../../state/ClientState/enumerations/ClientState.md)\>

***

### tabId

#### Get Signature

> **get** **tabId**(): `string`

Defined in: stores/ClientStore.d.ts:117

##### Returns

`string`

#### Set Signature

> **set** **tabId**(`tabId`): `void`

Defined in: stores/ClientStore.d.ts:118

##### Parameters

###### tabId

`string`

##### Returns

`void`

***

### token

#### Get Signature

> **get** **token**(): `string`

Defined in: stores/ClientStore.d.ts:115

##### Returns

`string`

#### Set Signature

> **set** **token**(`token`): `void`

Defined in: stores/ClientStore.d.ts:116

##### Parameters

###### token

`string`

##### Returns

`void`

***

### workstation

#### Get Signature

> **get** **workstation**(): [`WorkstationBridge`](../../workstation/WorkstationBridge/classes/WorkstationBridge.md)

Defined in: stores/ClientStore.d.ts:127

##### Returns

[`WorkstationBridge`](../../workstation/WorkstationBridge/classes/WorkstationBridge.md)

***

### nativeType

#### Get Signature

> **get** `static` **nativeType**(): [`NativeApplicationType`](../enumerations/NativeApplicationType.md)

Defined in: stores/ClientStore.d.ts:130

##### Returns

[`NativeApplicationType`](../enumerations/NativeApplicationType.md)

## Methods

### browserData()

> **browserData**(): [`DeviceConnectData`](../../mobile/MobileBridge/interfaces/DeviceConnectData.md)

Defined in: stores/ClientStore.d.ts:204

#### Returns

[`DeviceConnectData`](../../mobile/MobileBridge/interfaces/DeviceConnectData.md)

***

### clearFullscreenTransition()

> **clearFullscreenTransition**(): `void`

Defined in: stores/ClientStore.d.ts:140

#### Returns

`void`

***

### fault()

> **fault**(`description`, `error?`): `void`

Defined in: stores/ClientStore.d.ts:124

Sets the error reason and transitions to the error state

#### Parameters

##### description

`string`

##### error?

`Error`

#### Returns

`void`

***

### fireSessionInit()

> `protected` **fireSessionInit**(): `void`

Defined in: stores/ClientStore.d.ts:192

#### Returns

`void`

***

### getActiveContextMenuRef()

> **getActiveContextMenuRef**(): [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

Defined in: stores/ClientStore.d.ts:207

#### Returns

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

***

### getBasename()

> **getBasename**(): `string`

Defined in: stores/ClientStore.d.ts:128

#### Returns

`string`

***

### getDeviceId()

> **getDeviceId**(): `string`

Defined in: stores/ClientStore.d.ts:205

#### Returns

`string`

***

### getPeer()

> **getPeer**(): [`Peer`](../../../perspective-client/interfaces/Peer.md)

Defined in: stores/ClientStore.d.ts:218

#### Returns

[`Peer`](../../../perspective-client/interfaces/Peer.md)

***

### handleOpenPageInNewTab()

> **handleOpenPageInNewTab**(`page`): `void`

Defined in: stores/ClientStore.d.ts:154

#### Parameters

##### page

`string`

#### Returns

`void`

***

### initAuthStore()

> `protected` **initAuthStore**(): `void`

Defined in: stores/ClientStore.d.ts:230

#### Returns

`void`

***

### initChannelStore()

> `protected` **initChannelStore**(): `void`

Defined in: stores/ClientStore.d.ts:225

#### Returns

`void`

***

### initDefaultsStore()

> `protected` **initDefaultsStore**(): `void`

Defined in: stores/ClientStore.d.ts:229

#### Returns

`void`

***

### initFsm()

> `protected` **initFsm**(): `void`

Defined in: stores/ClientStore.d.ts:198

#### Returns

`void`

***

### initHandlers()

> `protected` **initHandlers**(): `void`

Defined in: stores/ClientStore.d.ts:189

#### Returns

`void`

***

### initIconRenderersStore()

> `protected` **initIconRenderersStore**(): `void`

Defined in: stores/ClientStore.d.ts:237

#### Returns

`void`

***

### initIdleStore()

> `protected` **initIdleStore**(): `void`

Defined in: stores/ClientStore.d.ts:235

#### Returns

`void`

***

### initInstrumentationStore()

> `protected` **initInstrumentationStore**(): `void`

Defined in: stores/ClientStore.d.ts:234

#### Returns

`void`

***

### initKeyEventStore()

> `protected` **initKeyEventStore**(): `void`

Defined in: stores/ClientStore.d.ts:236

#### Returns

`void`

***

### initLifecycle()

> `protected` **initLifecycle**(): `void`

Defined in: stores/ClientStore.d.ts:200

#### Returns

`void`

***

### initLocationStore()

> `protected` **initLocationStore**(): `void`

Defined in: stores/ClientStore.d.ts:233

#### Returns

`void`

***

### initMountStore()

> `protected` **initMountStore**(`store`): `void`

Defined in: stores/ClientStore.d.ts:228

#### Parameters

##### store

`ClientStore`

#### Returns

`void`

***

### initNotificationStore()

> `protected` **initNotificationStore**(): `void`

Defined in: stores/ClientStore.d.ts:232

#### Returns

`void`

***

### initPageStore()

> `protected` **initPageStore**(): `void`

Defined in: stores/ClientStore.d.ts:227

#### Returns

`void`

***

### initResourceStore()

> `protected` **initResourceStore**(): `void`

Defined in: stores/ClientStore.d.ts:226

#### Returns

`void`

***

### initScriptHandlers()

> `protected` **initScriptHandlers**(): `void`

Defined in: stores/ClientStore.d.ts:190

#### Returns

`void`

***

### initSystemStore()

> `protected` **initSystemStore**(): `void`

Defined in: stores/ClientStore.d.ts:231

#### Returns

`void`

***

### newTabId()

> **newTabId**(`idToSet?`, `force?`): `string`

Defined in: stores/ClientStore.d.ts:129

#### Parameters

##### idToSet?

`string`

##### force?

`boolean`

#### Returns

`string`

***

### onClientStart()

> `protected` **onClientStart**(`json`): `void`

Defined in: stores/ClientStore.d.ts:145

Returns a unique deviceId, as pulled from localStorage or as created on demand.

#### Parameters

##### json

[`ClientStartResponse`](../../../perspective-client/interfaces/ClientStartResponse.md)

#### Returns

`void`

***

### onFiniteStateChange()

> **onFiniteStateChange**(): `void`

Defined in: stores/ClientStore.d.ts:112

#### Returns

`void`

***

### onKeepAlive()

> `protected` **onKeepAlive**(`json`): `void`

Defined in: stores/ClientStore.d.ts:146

#### Parameters

##### json

`any`

#### Returns

`void`

***

### onNotAuthenticated()

> `protected` **onNotAuthenticated**(): `void`

Defined in: stores/ClientStore.d.ts:199

#### Returns

`void`

***

### onRunningOrConnected()

> **onRunningOrConnected**(`mobile`, `func`): `void`

Defined in: stores/ClientStore.d.ts:183

#### Parameters

##### mobile

[`NativeInterface`](../../native/api/NativeInterface/interfaces/NativeInterface.md)

##### func

(`mobile`, `props`) => `void`

#### Returns

`void`

***

### onScriptAlterDock()

> **onScriptAlterDock**(`dockConfigWrapper`): `void`

Defined in: stores/ClientStore.d.ts:167

See AlterDockAction

#### Parameters

##### dockConfigWrapper

[`AlterDockActionConfigWrapper`](../../../action/AlterDockAction/interfaces/AlterDockActionConfigWrapper.md)

#### Returns

`void`

***

### onScriptAlterLogging()

> **onScriptAlterLogging**(`config`): `void`

Defined in: stores/ClientStore.d.ts:178

config takes shape of:
 {  remoteLoggingEnabled?: boolean; logLevel?: string; }

#### Parameters

##### config

[`AlterLoggingActionConfig`](../../../action/AlterLoggingAction/interfaces/AlterLoggingActionConfig.md)

#### Returns

`void`

***

### onScriptAuthChallenge()

> **onScriptAuthChallenge**(`config`): `void`

Defined in: stores/ClientStore.d.ts:169

#### Parameters

##### config

`any`

#### Returns

`void`

***

### onScriptDebug()

> **onScriptDebug**(`config`): `void`

Defined in: stores/ClientStore.d.ts:172

#### Parameters

##### config

`any`

#### Returns

`void`

***

### onScriptDock()

> **onScriptDock**(`config`): `void`

Defined in: stores/ClientStore.d.ts:162

See DockAction

#### Parameters

##### config

[`DockActionConfig`](../../../action/DockAction/interfaces/DockActionConfig.md)

#### Returns

`void`

***

### onScriptLogin()

> **onScriptLogin**(`config`): `void`

Defined in: stores/ClientStore.d.ts:170

#### Parameters

##### config

`any`

#### Returns

`void`

***

### onScriptLogout()

> **onScriptLogout**(`config`): `void`

Defined in: stores/ClientStore.d.ts:171

#### Parameters

##### config

`any`

#### Returns

`void`

***

### onScriptPopup()

> **onScriptPopup**(`config`): `void`

Defined in: stores/ClientStore.d.ts:158

See PopupAction

#### Parameters

##### config

[`PopupActionConfig`](../../../action/PopupAction/interfaces/PopupActionConfig.md)

#### Returns

`void`

***

### onScriptRefresh()

> **onScriptRefresh**(`config`): `void`

Defined in: stores/ClientStore.d.ts:173

#### Parameters

##### config

`any`

#### Returns

`void`

***

### onScriptTheme()

> **onScriptTheme**(`config`): `void`

Defined in: stores/ClientStore.d.ts:168

#### Parameters

##### config

`any`

#### Returns

`void`

***

### onSessionPropsChange()

> **onSessionPropsChange**(`tree`): `void`

Defined in: stores/ClientStore.d.ts:186

#### Parameters

##### tree

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### registerStateReaction()

> **registerStateReaction**(`clientState`, `newReaction`): `void`

Defined in: stores/ClientStore.d.ts:197

#### Parameters

##### clientState

[`ClientState`](../../state/ClientState/enumerations/ClientState.md)

##### newReaction

() => `void`

#### Returns

`void`

***

### scheduleNextHelloCheck()

> `protected` **scheduleNextHelloCheck**(): `void`

Defined in: stores/ClientStore.d.ts:202

#### Returns

`void`

***

### sendBluetoothEvents()

> **sendBluetoothEvents**(`mobile`): `void`

Defined in: stores/ClientStore.d.ts:184

#### Parameters

##### mobile

[`NativeInterface`](../../native/api/NativeInterface/interfaces/NativeInterface.md)

#### Returns

`void`

***

### sendDeviceSettings()

> **sendDeviceSettings**(`mobile`): `void`

Defined in: stores/ClientStore.d.ts:185

#### Parameters

##### mobile

[`NativeInterface`](../../native/api/NativeInterface/interfaces/NativeInterface.md)

#### Returns

`void`

***

### setActiveContextMenuRef()

> **setActiveContextMenuRef**(`store?`): `void`

Defined in: stores/ClientStore.d.ts:206

#### Parameters

##### store?

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

#### Returns

`void`

***

### setFullscreenTransition()

> **setFullscreenTransition**(): `void`

Defined in: stores/ClientStore.d.ts:139

#### Returns

`void`

***

### simulateLostConnection()

> **simulateLostConnection**(`timeInSeconds`): `void`

Defined in: stores/ClientStore.d.ts:224

This is intended to be invoked from the browser dev console, for testing purposes, e.g.
__client.simulateLostConnection(20)

#### Parameters

##### timeInSeconds

`number`

#### Returns

`void`

***

### submitChallenge()

> **submitChallenge**(`data`): `void`

Defined in: stores/ClientStore.d.ts:201

#### Parameters

##### data

[`DeviceConnectData`](../../mobile/MobileBridge/interfaces/DeviceConnectData.md)

#### Returns

`void`

***

### subscribeToSessionProps()

> **subscribeToSessionProps**(): `void`

Defined in: stores/ClientStore.d.ts:188

#### Returns

`void`

***

### transition()

> **transition**(`action`): `void`

Defined in: stores/ClientStore.d.ts:122

#### Parameters

##### action

[`ClientActions`](../../action/ClientActions/enumerations/ClientActions.md)

#### Returns

`void`

***

### updateTitle()

> **updateTitle**(`title`, `skipPropUpdate?`): `void`

Defined in: stores/ClientStore.d.ts:147

#### Parameters

##### title

`string`

##### skipPropUpdate?

`boolean`

#### Returns

`void`

***

### writeSpecial()

> **writeSpecial**(`path`, `value`): `void`

Defined in: stores/ClientStore.d.ts:196

#### Parameters

##### path

`string`

##### value

`any`

#### Returns

`void`
