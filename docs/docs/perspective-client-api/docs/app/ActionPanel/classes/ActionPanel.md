[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ActionPanel](../index.md) / ActionPanel

# Class: ActionPanel

Defined in: app/ActionPanel.d.ts:11

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`ActionPanelProps`](../interfaces/ActionPanelProps.md), `any`\>

## Constructors

### Constructor

> **new ActionPanel**(`props`): `ActionPanel`

Defined in: app/ActionPanel.d.ts:19

#### Parameters

##### props

[`ActionPanelProps`](../interfaces/ActionPanelProps.md)

#### Returns

`ActionPanel`

#### Overrides

`React.Component<ActionPanelProps, any>.constructor`

## Properties

### notificationHeight

> **notificationHeight**: `number`

Defined in: app/ActionPanel.d.ts:14

***

### overlay

> **overlay**: `HTMLElement`

Defined in: app/ActionPanel.d.ts:18

***

### panelBodyHeight

> **panelBodyHeight**: `number`

Defined in: app/ActionPanel.d.ts:15

***

### panelClosedBottom

> **panelClosedBottom**: `number`

Defined in: app/ActionPanel.d.ts:17

***

### panelOpenBottom

> **panelOpenBottom**: `number`

Defined in: app/ActionPanel.d.ts:16

***

### props

> **props**: [`ActionPanelProps`](../interfaces/ActionPanelProps.md)

Defined in: app/ActionPanel.d.ts:13

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/ActionPanel.d.ts:20

#### Returns

`void`

***

### connectionIcon()

> **connectionIcon**(`isWss`): `Element`

Defined in: app/ActionPanel.d.ts:25

#### Parameters

##### isWss

`boolean`

#### Returns

`Element`

***

### connectionSecurityTitle()

> **connectionSecurityTitle**(`isWss`): `string`

Defined in: app/ActionPanel.d.ts:24

#### Parameters

##### isWss

`boolean`

#### Returns

`string`

***

### listenForPanelToggle()

> **listenForPanelToggle**(): `void`

Defined in: app/ActionPanel.d.ts:22

#### Returns

`void`

***

### logIn()

> **logIn**(): `void`

Defined in: app/ActionPanel.d.ts:27

#### Returns

`void`

***

### logOut()

> **logOut**(): `void`

Defined in: app/ActionPanel.d.ts:26

#### Returns

`void`

***

### openGatewayPage()

> **openGatewayPage**(): `void`

Defined in: app/ActionPanel.d.ts:23

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/ActionPanel.d.ts:31

#### Returns

`Element`

***

### renderAuthAction()

> **renderAuthAction**(`authenticated`): `Element`

Defined in: app/ActionPanel.d.ts:29

#### Parameters

##### authenticated

`boolean`

#### Returns

`Element`

***

### renderPanelHeader()

> **renderPanelHeader**(`client`, `userName`): `Element`

Defined in: app/ActionPanel.d.ts:30

#### Parameters

##### client

[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)

##### userName

`string`

#### Returns

`Element`

***

### setOverlayRef()

> **setOverlayRef**(`ref`): `void`

Defined in: app/ActionPanel.d.ts:28

#### Parameters

##### ref

`HTMLElement`

#### Returns

`void`

***

### UNSAFE\_componentWillReceiveProps()

> **UNSAFE\_componentWillReceiveProps**(`nextProps`): `void`

Defined in: app/ActionPanel.d.ts:21

#### Parameters

##### nextProps

[`ActionPanelProps`](../interfaces/ActionPanelProps.md)

#### Returns

`void`
