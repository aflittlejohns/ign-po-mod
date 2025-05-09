[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [ui/client-state/ClientLoading](../index.md) / ClientLoading

# Class: ClientLoading

Defined in: ui/client-state/ClientLoading.d.ts:18

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<[`ClientLoadingProps`](../interfaces/ClientLoadingProps.md), `any`\>

## Constructors

### Constructor

> **new ClientLoading**(): `ClientLoading`

#### Returns

`ClientLoading`

#### Inherited from

`React.Component<ClientLoadingProps, any>.constructor`

## Properties

### clientLoadingStages

> **clientLoadingStages**: `ClientLoadingState`[]

Defined in: ui/client-state/ClientLoading.d.ts:19

## Methods

### getStageMessage()

> **getStageMessage**(`stage`): `any`

Defined in: ui/client-state/ClientLoading.d.ts:34

#### Parameters

##### stage

`ClientLoadingState`

#### Returns

`any`

***

### getStageProximityClass()

> **getStageProximityClass**(`index`, `currentLoadingIndex`, `diff`): `ProximityClass`

Defined in: ui/client-state/ClientLoading.d.ts:20

#### Parameters

##### index

`number`

##### currentLoadingIndex

`number`

##### diff

`number`

#### Returns

`ProximityClass`

***

### getStageYPosition()

> **getStageYPosition**(`stage`, `proximityClass`, `diff`): `number`

Defined in: ui/client-state/ClientLoading.d.ts:21

#### Parameters

##### stage

[`ClientState`](../../../../stores/state/ClientState/enumerations/ClientState.md)

##### proximityClass

`ProximityClass`

##### diff

`number`

#### Returns

`number`

***

### getWheelPositionStyles()

> **getWheelPositionStyles**(`stage`, `index`, `stages`): [`LoadingItemStyle`](../interfaces/LoadingItemStyle.md)

Defined in: ui/client-state/ClientLoading.d.ts:33

Returns the styling that is applied to the rolling 'wheel' effect present in the client loading UI, whereby the
current loading stage message is in focus and centered, completed items are above and 'upcoming' loading stages
are below, with decreasing opacity as the completed/upcoming items are further from the current item.

Only the previous 3 completed (if applicable) and upcoming 3 items are listed.

#### Parameters

##### stage

`ClientLoadingState`

##### index

`number`

##### stages

[`ClientState`](../../../../stores/state/ClientState/enumerations/ClientState.md)[]

#### Returns

[`LoadingItemStyle`](../interfaces/LoadingItemStyle.md)

***

### render()

> **render**(): `ReactElement`\<`HTMLDivElement`\>

Defined in: ui/client-state/ClientLoading.d.ts:37

#### Returns

`ReactElement`\<`HTMLDivElement`\>

***

### renderFooterLogo()

> **renderFooterLogo**(): `any`

Defined in: ui/client-state/ClientLoading.d.ts:36

#### Returns

`any`

***

### renderMessages()

> **renderMessages**(): `Element`[]

Defined in: ui/client-state/ClientLoading.d.ts:35

#### Returns

`Element`[]
