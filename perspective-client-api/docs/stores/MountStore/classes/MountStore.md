[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/MountStore](../index.md) / MountStore

# Class: MountStore

Defined in: stores/MountStore.d.ts:114

## Constructors

### Constructor

> **new MountStore**(`store`): `MountStore`

Defined in: stores/MountStore.d.ts:131

#### Parameters

##### store

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`MountStore`

## Properties

### actionPanelOpen

> **actionPanelOpen**: `boolean`

Defined in: stores/MountStore.d.ts:124

***

### activePopups

> **activePopups**: [`PopupMount`](PopupMount.md)[]

Defined in: stores/MountStore.d.ts:120

***

### appBarOpen

> **appBarOpen**: `boolean`

Defined in: stores/MountStore.d.ts:123

***

### appModalContent

> **appModalContent**: [`StatusPages`](../../status/StatusPages/enumerations/StatusPages.md)

Defined in: stores/MountStore.d.ts:126

***

### appModalOpen

> **appModalOpen**: `boolean`

Defined in: stores/MountStore.d.ts:125

***

### center

> **center**: [`CenterViewport`](CenterViewport.md)

Defined in: stores/MountStore.d.ts:116

***

### connectionBannerActive

> **connectionBannerActive**: `boolean`

Defined in: stores/MountStore.d.ts:127

***

### dockOffset

> **dockOffset**: [`DockOffset`](DockOffset.md)

Defined in: stores/MountStore.d.ts:119

***

### dockOffsetChanged

> **dockOffsetChanged**: `boolean`

Defined in: stores/MountStore.d.ts:128

***

### docks

> **docks**: `Map`\<[`DockPosition`](../../../perspective-client/enumerations/DockPosition.md), [`DockedViewport`](DockedViewport.md)\>

Defined in: stores/MountStore.d.ts:117

***

### focusedPopupId

> **focusedPopupId**: `string`

Defined in: stores/MountStore.d.ts:121

***

### modalActive

> **modalActive**: `boolean`

Defined in: stores/MountStore.d.ts:122

***

### mountedDockConfig

> **mountedDockConfig**: [`DocksDefinition`](../../../perspective-client/interfaces/DocksDefinition.md)

Defined in: stores/MountStore.d.ts:118

***

### parent

> **parent**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/MountStore.d.ts:115

***

### unlicensedBannerActive

> **unlicensedBannerActive**: `boolean`

Defined in: stores/MountStore.d.ts:129

***

### unlicensedModalOpen

> **unlicensedModalOpen**: `boolean`

Defined in: stores/MountStore.d.ts:130

## Methods

### activatePopup()

> **activatePopup**(`config`): `void`

Defined in: stores/MountStore.d.ts:162

#### Parameters

##### config

[`PopupActionConfig`](../../../action/PopupAction/interfaces/PopupActionConfig.md)

#### Returns

`void`

***

### closeActionPanel()

> **closeActionPanel**(): `void`

Defined in: stores/MountStore.d.ts:169

#### Returns

`void`

***

### closeAppBar()

> **closeAppBar**(): `void`

Defined in: stores/MountStore.d.ts:167

#### Returns

`void`

***

### closeAppModal()

> **closeAppModal**(): `void`

Defined in: stores/MountStore.d.ts:173

#### Returns

`void`

***

### closeModal()

> **closeModal**(): `void`

Defined in: stores/MountStore.d.ts:166

#### Returns

`void`

***

### closePopup()

> **closePopup**(`id`): `void`

Defined in: stores/MountStore.d.ts:165

#### Parameters

##### id

`string`

#### Returns

`void`

***

### closeUnlicensedModal()

> **closeUnlicensedModal**(): `void`

Defined in: stores/MountStore.d.ts:175

#### Returns

`void`

***

### findDockByViewId()

> **findDockByViewId**(`id`): [`DockedViewport`](DockedViewport.md)

Defined in: stores/MountStore.d.ts:160

#### Parameters

##### id

`string`

#### Returns

[`DockedViewport`](DockedViewport.md)

***

### focusDock()

> **focusDock**(`position`): `void`

Defined in: stores/MountStore.d.ts:164

#### Parameters

##### position

[`DockPosition`](../../../perspective-client/enumerations/DockPosition.md)

#### Returns

`void`

***

### focusPopup()

> **focusPopup**(`id`): `void`

Defined in: stores/MountStore.d.ts:163

#### Parameters

##### id

`string`

#### Returns

`void`

***

### forceUpdateDockConfig()

> **forceUpdateDockConfig**(`expandCollapseDock`): `void`

Defined in: stores/MountStore.d.ts:147

#### Parameters

##### expandCollapseDock

`boolean`

#### Returns

`void`

***

### getMountedDockConfig()

> **getMountedDockConfig**(`project`): [`DocksDefinition`](../../../perspective-client/interfaces/DocksDefinition.md)

Defined in: stores/MountStore.d.ts:154

If a mount-specific DockDefinition exists, merges its configuration with the global project DockDefinition.
Defaults to global definition for any properties not specified at mount level, but overrides with mount-specific
value when present.

#### Parameters

##### project

[`ObservableProjectDefinition`](../../ResourceStore/classes/ObservableProjectDefinition.md)

#### Returns

[`DocksDefinition`](../../../perspective-client/interfaces/DocksDefinition.md)

***

### listenForGatewayConnection()

> **listenForGatewayConnection**(): `void`

Defined in: stores/MountStore.d.ts:132

#### Returns

`void`

***

### matchMountPath()

> **matchMountPath**(`project`): [`PageDefinition`](../../../perspective-client/interfaces/PageDefinition.md)

Defined in: stores/MountStore.d.ts:158

Matches the current mountPath to a configured project mount, allowing for urls with parameters.

#### Parameters

##### project

[`ObservableProjectDefinition`](../../ResourceStore/classes/ObservableProjectDefinition.md)

#### Returns

[`PageDefinition`](../../../perspective-client/interfaces/PageDefinition.md)

***

### navigateTo()

> **navigateTo**(`viewPath`, `viewParams?`): `void`

Defined in: stores/MountStore.d.ts:148

#### Parameters

##### viewPath

`string`

##### viewParams?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### openAppBar()

> **openAppBar**(): `void`

Defined in: stores/MountStore.d.ts:168

#### Returns

`void`

***

### openAppModal()

> **openAppModal**(`content?`): `void`

Defined in: stores/MountStore.d.ts:171

#### Parameters

##### content?

[`StatusPages`](../../status/StatusPages/enumerations/StatusPages.md)

#### Returns

`void`

***

### openUnlicensedModal()

> **openUnlicensedModal**(): `void`

Defined in: stores/MountStore.d.ts:174

#### Returns

`void`

***

### setDockResize()

> **setDockResize**(`resizing`): `void`

Defined in: stores/MountStore.d.ts:161

#### Parameters

##### resizing

`boolean`

#### Returns

`void`

***

### setModalContent()

> **setModalContent**(`content`): `void`

Defined in: stores/MountStore.d.ts:172

#### Parameters

##### content

[`StatusPages`](../../status/StatusPages/enumerations/StatusPages.md)

#### Returns

`void`

***

### toggleActionPanel()

> **toggleActionPanel**(): `void`

Defined in: stores/MountStore.d.ts:170

#### Returns

`void`

***

### updateDockConfig()

> **updateDockConfig**(): `void`

Defined in: stores/MountStore.d.ts:136

Called on initial load, when project updates or when center mount changes to set current dock configuration.

#### Returns

`void`

***

### updateDockOffset()

> **updateDockOffset**(`position`, `size?`): `void`

Defined in: stores/MountStore.d.ts:159

#### Parameters

##### position

[`DockPosition`](../../../perspective-client/enumerations/DockPosition.md)

##### size?

`number`

#### Returns

`void`

***

### updatePartialDockConfig()

> **updatePartialDockConfig**(`position`, `viewConfigs`): `void`

Defined in: stores/MountStore.d.ts:142

Pass in the view configuration to apply to one position of the docks that should be updated.

#### Parameters

##### position

[`DockPosition`](../../../perspective-client/enumerations/DockPosition.md)

##### viewConfigs

[`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)[]

#### Returns

`void`
