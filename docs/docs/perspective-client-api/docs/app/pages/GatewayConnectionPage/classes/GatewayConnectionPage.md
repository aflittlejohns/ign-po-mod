[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [app/pages/GatewayConnectionPage](../index.md) / GatewayConnectionPage

# Class: GatewayConnectionPage

Defined in: app/pages/GatewayConnectionPage.d.ts:17

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<[`GatewayConnectionProps`](../interfaces/GatewayConnectionProps.md), `GatewayConnectionPageState`\>

## Constructors

### Constructor

> **new GatewayConnectionPage**(`props`): `GatewayConnectionPage`

Defined in: app/pages/GatewayConnectionPage.d.ts:19

#### Parameters

##### props

[`GatewayConnectionProps`](../interfaces/GatewayConnectionProps.md)

#### Returns

`GatewayConnectionPage`

#### Overrides

`React.Component<GatewayConnectionProps, GatewayConnectionPageState>.constructor`

## Properties

### state

> **state**: `GatewayConnectionPageState`

Defined in: app/pages/GatewayConnectionPage.d.ts:18

## Methods

### getGatewayDetails()

> **getGatewayDetails**(): `Element`

Defined in: app/pages/GatewayConnectionPage.d.ts:23

#### Returns

`Element`

***

### getGatewayHeader()

> **getGatewayHeader**(`role`, `backupActive`): `Element`

Defined in: app/pages/GatewayConnectionPage.d.ts:26

#### Parameters

##### role

[`NodeRole`](../../../../perspective-client/enumerations/NodeRole.md)

##### backupActive

`boolean`

#### Returns

`Element`

***

### launchGateway()

> **launchGateway**(`url`): () => `void`

Defined in: app/pages/GatewayConnectionPage.d.ts:20

#### Parameters

##### url

`string`

#### Returns

> (): `void`

##### Returns

`void`

***

### onPagePropsChange()

> **onPagePropsChange**(`tree`): `void`

Defined in: app/pages/GatewayConnectionPage.d.ts:25

#### Parameters

##### tree

[`PropertyTree`](../../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### onSessionPropsChange()

> **onSessionPropsChange**(`tree`): `void`

Defined in: app/pages/GatewayConnectionPage.d.ts:24

#### Parameters

##### tree

[`PropertyTree`](../../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### render()

> **render**(): `ReactElement`\<`HTMLDivElement`\>

Defined in: app/pages/GatewayConnectionPage.d.ts:27

#### Returns

`ReactElement`\<`HTMLDivElement`\>

***

### renderDetailRow()

> **renderDetailRow**(`classes`, `label`, `data`): `Element`

Defined in: app/pages/GatewayConnectionPage.d.ts:22

#### Parameters

##### classes

`string`

##### label

`string`

##### data

`string`

#### Returns

`Element`

***

### renderGatewayUrlDetail()

> **renderGatewayUrlDetail**(`url`): `Element`

Defined in: app/pages/GatewayConnectionPage.d.ts:21

#### Parameters

##### url

`string`

#### Returns

`Element`
