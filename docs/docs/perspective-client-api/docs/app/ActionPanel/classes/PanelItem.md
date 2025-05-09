[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ActionPanel](../index.md) / PanelItem

# Class: PanelItem

Defined in: app/ActionPanel.d.ts:48

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`PanelItemProps`](../interfaces/PanelItemProps.md), `any`\>

## Constructors

### Constructor

> **new PanelItem**(): `PanelItem`

#### Returns

`PanelItem`

#### Inherited from

`React.Component<PanelItemProps, any>.constructor`

## Methods

### getConnectionStatus()

> **getConnectionStatus**(): [`ConnectionStatus`](../../../stores/NotificationStore/enumerations/ConnectionStatus.md)

Defined in: app/ActionPanel.d.ts:49

#### Returns

[`ConnectionStatus`](../../../stores/NotificationStore/enumerations/ConnectionStatus.md)

***

### getPanelInfo()

> **getPanelInfo**(`notification`): [`PanelNotificationItem`](../interfaces/PanelNotificationItem.md)

Defined in: app/ActionPanel.d.ts:50

#### Parameters

##### notification

[`ClientNotification`](../../../perspective-client/interfaces/ClientNotification.md) | `Partial`\<[`ClientNotification`](../../../perspective-client/interfaces/ClientNotification.md)\>

#### Returns

[`PanelNotificationItem`](../interfaces/PanelNotificationItem.md)

***

### openModal()

> **openModal**(): `void`

Defined in: app/ActionPanel.d.ts:53

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/ActionPanel.d.ts:54

#### Returns

`Element`

***

### reportIssue()

> **reportIssue**(): `void`

Defined in: app/ActionPanel.d.ts:51

#### Returns

`void`

***

### updateProject()

> **updateProject**(): `void`

Defined in: app/ActionPanel.d.ts:52

#### Returns

`void`
