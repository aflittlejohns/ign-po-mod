[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [ui/info/Popup](../index.md) / Popup

# Class: Popup

Defined in: ui/info/Popup.d.ts:32

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<[`PopupProps`](../interfaces/PopupProps.md), [`PopupState`](../interfaces/PopupState.md)\>

## Constructors

### Constructor

> **new Popup**(`props`): `Popup`

Defined in: ui/info/Popup.d.ts:38

#### Parameters

##### props

[`PopupProps`](../interfaces/PopupProps.md)

#### Returns

`Popup`

#### Overrides

`React.Component<PopupProps, PopupState>.constructor`

## Properties

### dragDelta

> **dragDelta**: [`Point`](../../../../perspective-client/interfaces/Point.md)

Defined in: ui/info/Popup.d.ts:35

***

### initialDimensions

> **initialDimensions**: [`ElementDimensions`](../../../../perspective-client/type-aliases/ElementDimensions.md)

Defined in: ui/info/Popup.d.ts:36

***

### popupContainer

> **popupContainer**: `HTMLDivElement`

Defined in: ui/info/Popup.d.ts:37

***

### state

> **state**: [`PopupState`](../interfaces/PopupState.md)

Defined in: ui/info/Popup.d.ts:34

***

### Z\_INDEX\_BASE\_VALUE

> **Z\_INDEX\_BASE\_VALUE**: `number`

Defined in: ui/info/Popup.d.ts:33

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: ui/info/Popup.d.ts:39

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(`prevProps`): `void`

Defined in: ui/info/Popup.d.ts:40

#### Parameters

##### prevProps

[`PopupProps`](../interfaces/PopupProps.md)

#### Returns

`void`

***

### forceViewportBoundRelative()

> **forceViewportBoundRelative**(`location`): `void`

Defined in: ui/info/Popup.d.ts:46

#### Parameters

##### location

`string`

#### Returns

`void`

***

### forceViewportBounds()

> **forceViewportBounds**(`location?`): `void`

Defined in: ui/info/Popup.d.ts:45

#### Parameters

##### location?

`string`

#### Returns

`void`

***

### getResizeIndicators()

> **getResizeIndicators**(): `Element`

Defined in: ui/info/Popup.d.ts:55

#### Returns

`Element`

***

### getStyle()

> **getStyle**(): `CSSProperties`

Defined in: ui/info/Popup.d.ts:56

#### Returns

`CSSProperties`

***

### handleModalClick()

> **handleModalClick**(): `void`

Defined in: ui/info/Popup.d.ts:58

#### Returns

`void`

***

### isInaccessible()

> **isInaccessible**(`popupDimensions`): `boolean`

Defined in: ui/info/Popup.d.ts:44

#### Parameters

##### popupDimensions

`DOMRect`

#### Returns

`boolean`

***

### maybeToggleDraggableState()

> **maybeToggleDraggableState**(): `void`

Defined in: ui/info/Popup.d.ts:43

#### Returns

`void`

***

### onClose()

> **onClose**(): `void`

Defined in: ui/info/Popup.d.ts:52

#### Returns

`void`

***

### onDrag()

> **onDrag**(`event`, `data`): `void`

Defined in: ui/info/Popup.d.ts:48

#### Parameters

##### event

`MouseEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### onDragStart()

> **onDragStart**(): `void`

Defined in: ui/info/Popup.d.ts:47

#### Returns

`void`

***

### onDragStop()

> **onDragStop**(): `void`

Defined in: ui/info/Popup.d.ts:49

#### Returns

`void`

***

### onFocus()

> **onFocus**(): `void`

Defined in: ui/info/Popup.d.ts:53

#### Returns

`void`

***

### onKeyDown()

> **onKeyDown**(`event`): `void`

Defined in: ui/info/Popup.d.ts:54

#### Parameters

##### event

`KeyboardEvent`\<`HTMLDivElement`\>

#### Returns

`void`

***

### onResize()

> **onResize**(`e`): `void`

Defined in: ui/info/Popup.d.ts:51

#### Parameters

##### e

`any`

#### Returns

`void`

***

### onResizeStart()

> **onResizeStart**(`e`): `void`

Defined in: ui/info/Popup.d.ts:50

#### Parameters

##### e

`any`

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: ui/info/Popup.d.ts:60

#### Returns

`Element`

***

### renderModal()

> **renderModal**(): `any`

Defined in: ui/info/Popup.d.ts:59

#### Returns

`any`

***

### setPopupRef()

> **setPopupRef**(`popup`): `void`

Defined in: ui/info/Popup.d.ts:57

#### Parameters

##### popup

`HTMLDivElement`

#### Returns

`void`

***

### updateFocus()

> **updateFocus**(): `void`

Defined in: ui/info/Popup.d.ts:42

#### Returns

`void`

***

### updatePosition()

> **updatePosition**(): `void`

Defined in: ui/info/Popup.d.ts:41

#### Returns

`void`
