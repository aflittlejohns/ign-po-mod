[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ComponentQualityFlexOverlay](../index.md) / ComponentQualityFlexOverlay

# Class: ComponentQualityFlexOverlay

Defined in: app/ComponentQualityFlexOverlay.d.ts:29

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`ComponentQualityFlexOverlayProps`](../interfaces/ComponentQualityFlexOverlayProps.md), `ComponentQualityFlexOverlayState`\>

## Constructors

### Constructor

> **new ComponentQualityFlexOverlay**(`props`): `ComponentQualityFlexOverlay`

Defined in: app/ComponentQualityFlexOverlay.d.ts:30

#### Parameters

##### props

[`ComponentQualityFlexOverlayProps`](../interfaces/ComponentQualityFlexOverlayProps.md)

#### Returns

`ComponentQualityFlexOverlay`

#### Overrides

`React.Component<ComponentQualityFlexOverlayProps, ComponentQualityFlexOverlayState>.constructor`

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/ComponentQualityFlexOverlay.d.ts:31

#### Returns

`void`

***

### disableTouchHandler()

> **disableTouchHandler**(`event`): `void`

Defined in: app/ComponentQualityFlexOverlay.d.ts:39

#### Parameters

##### event

`TouchEvent`

#### Returns

`void`

***

### evalQualitiesAndUpdateState()

> **evalQualitiesAndUpdateState**(`qualities`): `void`

Defined in: app/ComponentQualityFlexOverlay.d.ts:35

#### Parameters

##### qualities

`Map`\<`string`, [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)\>

#### Returns

`void`

***

### getMicroFooterContent()

> **getMicroFooterContent**(): `ReactElement`\<`HTMLElement`\>

Defined in: app/ComponentQualityFlexOverlay.d.ts:41

#### Returns

`ReactElement`\<`HTMLElement`\>

***

### getPopoverCards()

> **getPopoverCards**(): [`PopoverCardData`](../../ComponentPopover/interfaces/PopoverCardData.md)[]

Defined in: app/ComponentQualityFlexOverlay.d.ts:38

#### Returns

[`PopoverCardData`](../../ComponentPopover/interfaces/PopoverCardData.md)[]

***

### hidePopover()

> **hidePopover**(): `void`

Defined in: app/ComponentQualityFlexOverlay.d.ts:37

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/ComponentQualityFlexOverlay.d.ts:42

#### Returns

`Element`

***

### renderHeaderContent()

> **renderHeaderContent**(): `any`

Defined in: app/ComponentQualityFlexOverlay.d.ts:33

#### Returns

`any`

***

### renderIcons()

> **renderIcons**(): `ReactElement`\<`HTMLElement`\>[]

Defined in: app/ComponentQualityFlexOverlay.d.ts:34

#### Returns

`ReactElement`\<`HTMLElement`\>[]

***

### renderMicroIcons()

> **renderMicroIcons**(): `ReactElement`\<`HTMLElement`\>[]

Defined in: app/ComponentQualityFlexOverlay.d.ts:40

#### Returns

`ReactElement`\<`HTMLElement`\>[]

***

### showPopover()

> **showPopover**(): `void`

Defined in: app/ComponentQualityFlexOverlay.d.ts:36

#### Returns

`void`

***

### UNSAFE\_componentWillReceiveProps()

> **UNSAFE\_componentWillReceiveProps**(`nextProps`): `void`

Defined in: app/ComponentQualityFlexOverlay.d.ts:32

#### Parameters

##### nextProps

[`ComponentQualityFlexOverlayProps`](../interfaces/ComponentQualityFlexOverlayProps.md)

#### Returns

`void`
