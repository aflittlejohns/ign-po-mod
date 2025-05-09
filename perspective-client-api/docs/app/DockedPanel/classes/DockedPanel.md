[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/DockedPanel](../index.md) / DockedPanel

# Class: DockedPanel

Defined in: app/DockedPanel.d.ts:30

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`PanelProps`](../interfaces/PanelProps.md), [`PanelState`](../interfaces/PanelState.md)\>

## Constructors

### Constructor

> **new DockedPanel**(`props`): `DockedPanel`

Defined in: app/DockedPanel.d.ts:37

#### Parameters

##### props

[`PanelProps`](../interfaces/PanelProps.md)

#### Returns

`DockedPanel`

#### Overrides

`React.Component<PanelProps, PanelState>.constructor`

## Properties

### dragDelta

> **dragDelta**: [`Point`](../../../perspective-client/interfaces/Point.md)

Defined in: app/DockedPanel.d.ts:34

***

### dragPoint

> **dragPoint**: [`Point`](../../../perspective-client/interfaces/Point.md)

Defined in: app/DockedPanel.d.ts:35

***

### eventDidToggle

> **eventDidToggle**: `boolean`

Defined in: app/DockedPanel.d.ts:36

***

### fullyCollapsedTimeout

> **fullyCollapsedTimeout**: `number`

Defined in: app/DockedPanel.d.ts:31

***

### panel

> **panel**: `HTMLElement`

Defined in: app/DockedPanel.d.ts:33

***

### state

> **state**: [`PanelState`](../interfaces/PanelState.md)

Defined in: app/DockedPanel.d.ts:32

## Methods

### cancelFullyCollapsedTimeout()

> **cancelFullyCollapsedTimeout**(): `void`

Defined in: app/DockedPanel.d.ts:41

#### Returns

`void`

***

### checkForFullyCollapsed()

> **checkForFullyCollapsed**(): `void`

Defined in: app/DockedPanel.d.ts:40

#### Returns

`void`

***

### checkForScrollbars()

> **checkForScrollbars**(): `void`

Defined in: app/DockedPanel.d.ts:42

#### Returns

`void`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/DockedPanel.d.ts:38

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Defined in: app/DockedPanel.d.ts:39

#### Returns

`void`

***

### getDimensions()

> **getDimensions**(`activeView`, `dimension`): [`DockDimensions`](../interfaces/DockDimensions.md)

Defined in: app/DockedPanel.d.ts:53

#### Parameters

##### activeView

[`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)

##### dimension

[`DimensionConfig`](../enumerations/DimensionConfig.md)

#### Returns

[`DockDimensions`](../interfaces/DockDimensions.md)

***

### getFixedStyles()

> **getFixedStyles**(`panelStyle`, `vertScroll`, `horzScroll`, `bannerSize`): [`DockDimensions`](../interfaces/DockDimensions.md)

Defined in: app/DockedPanel.d.ts:54

#### Parameters

##### panelStyle

`CSSProperties`

##### vertScroll

`number`

##### horzScroll

`number`

##### bannerSize

`number`

#### Returns

[`DockDimensions`](../interfaces/DockDimensions.md)

***

### getResizeBorder()

> **getResizeBorder**(): `Element`

Defined in: app/DockedPanel.d.ts:51

#### Returns

`Element`

***

### getScrollableStyles()

> **getScrollableStyles**(`panelStyle`, `vertScroll`): [`DockDimensions`](../interfaces/DockDimensions.md)

Defined in: app/DockedPanel.d.ts:55

#### Parameters

##### panelStyle

`CSSProperties`

##### vertScroll

`number`

#### Returns

[`DockDimensions`](../interfaces/DockDimensions.md)

***

### getToggleHandles()

> **getToggleHandles**(`toggleWrapperStyle`): `Element`[]

Defined in: app/DockedPanel.d.ts:52

#### Parameters

##### toggleWrapperStyle

`CSSProperties`

#### Returns

`Element`[]

***

### onDockMouseDown()

> **onDockMouseDown**(): `void`

Defined in: app/DockedPanel.d.ts:58

#### Returns

`void`

***

### onDrag()

> **onDrag**(`e`, `data`): `void`

Defined in: app/DockedPanel.d.ts:44

#### Parameters

##### e

`DraggableEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### onDragStart()

> **onDragStart**(`e`, `data`): `void`

Defined in: app/DockedPanel.d.ts:43

#### Parameters

##### e

`DraggableEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### onDragStop()

> **onDragStop**(`e`, `data`): `void`

Defined in: app/DockedPanel.d.ts:45

#### Parameters

##### e

`DraggableEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### onModalClick()

> **onModalClick**(`event`): `void`

Defined in: app/DockedPanel.d.ts:57

#### Parameters

##### event

`MouseEvent`\<`HTMLDivElement`\>

#### Returns

`void`

***

### onResize()

> **onResize**(`e`, `data`): `void`

Defined in: app/DockedPanel.d.ts:47

#### Parameters

##### e

`DraggableEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### onResizeStart()

> **onResizeStart**(`e`, `data`): `void`

Defined in: app/DockedPanel.d.ts:46

#### Parameters

##### e

`DraggableEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### onResizeStop()

> **onResizeStop**(`event`, `data`): `void`

Defined in: app/DockedPanel.d.ts:48

#### Parameters

##### event

`DraggableEvent`

##### data

`DraggableData`

#### Returns

`void`

***

### render()

> **render**(): `ReactNode`

Defined in: app/DockedPanel.d.ts:65

#### Returns

`ReactNode`

***

### renderModal()

> **renderModal**(): `any`

Defined in: app/DockedPanel.d.ts:64

Rendered with the docked panel instead of wrapping in the panel root
in order to enable css transitions.

#### Returns

`any`

***

### togglePanel()

> **togglePanel**(`element`): `void`

Defined in: app/DockedPanel.d.ts:49

#### Parameters

##### element

`HTMLElement`

#### Returns

`void`

***

### tryBubbleToViewIndex()

> **tryBubbleToViewIndex**(`element`): `number`

Defined in: app/DockedPanel.d.ts:50

#### Parameters

##### element

`HTMLElement`

#### Returns

`number`
