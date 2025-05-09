[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ComponentTooltip](../index.md) / ComponentTooltip

# Class: ComponentTooltip

Defined in: app/ComponentTooltip.d.ts:15

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`TooltipProps`](../interfaces/TooltipProps.md), `any`\>

## Constructors

### Constructor

> **new ComponentTooltip**(`props`): `ComponentTooltip`

Defined in: app/ComponentTooltip.d.ts:18

#### Parameters

##### props

[`TooltipProps`](../interfaces/TooltipProps.md)

#### Returns

`ComponentTooltip`

#### Overrides

`React.PureComponent<TooltipProps, any>.constructor`

## Properties

### tail

> **tail**: `HTMLElement`

Defined in: app/ComponentTooltip.d.ts:17

***

### tooltip

> **tooltip**: `HTMLElement`

Defined in: app/ComponentTooltip.d.ts:16

## Methods

### calculateTailPositionLeft()

> **calculateTailPositionLeft**(`tooltipDimensions`, `tailDimensions`, `location`, `position`): `string`

Defined in: app/ComponentTooltip.d.ts:27

#### Parameters

##### tooltipDimensions

`DOMRect`

##### tailDimensions

`any`

##### location

`string`

##### position

`string`

#### Returns

`string`

***

### calculateTailPositionTop()

> **calculateTailPositionTop**(`tooltipDimensions`, `tailDimensions`, `location`, `position`): `string`

Defined in: app/ComponentTooltip.d.ts:26

#### Parameters

##### tooltipDimensions

`DOMRect`

##### tailDimensions

`any`

##### location

`string`

##### position

`string`

#### Returns

`string`

***

### calculateTooltipPositionLeft()

> **calculateTooltipPositionLeft**(`tooltipDimensions`, `parentDimensons`, `location`, `position`): `string`

Defined in: app/ComponentTooltip.d.ts:30

#### Parameters

##### tooltipDimensions

`DOMRect`

##### parentDimensons

`any`

##### location

`string`

##### position

`string`

#### Returns

`string`

***

### calculateTooltipPositionTop()

> **calculateTooltipPositionTop**(`tooltipDimensions`, `parentDimensons`, `location`, `position`): `string`

Defined in: app/ComponentTooltip.d.ts:28

#### Parameters

##### tooltipDimensions

`DOMRect`

##### parentDimensons

`DOMRect`

##### location

`string`

##### position

`string`

#### Returns

`string`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/ComponentTooltip.d.ts:19

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(`prevProps`): `void`

Defined in: app/ComponentTooltip.d.ts:20

#### Parameters

##### prevProps

[`TooltipProps`](../interfaces/TooltipProps.md)

#### Returns

`void`

***

### delegateTailPosition()

> **delegateTailPosition**(`tailDimensions`, `styleProp`, `location`): `string`

Defined in: app/ComponentTooltip.d.ts:25

#### Parameters

##### tailDimensions

`any`

##### styleProp

`string`

##### location

`string`

#### Returns

`string`

***

### delegateTooltipPosition()

> **delegateTooltipPosition**(`parentDimensons`, `styleProp`, `location`): `string`

Defined in: app/ComponentTooltip.d.ts:24

#### Parameters

##### parentDimensons

`any`

##### styleProp

`string`

##### location

`string`

#### Returns

`string`

***

### handleTailDirection()

> **handleTailDirection**(): `string`

Defined in: app/ComponentTooltip.d.ts:32

#### Returns

`string`

***

### handleTooltipOutsideViewportLeft()

> **handleTooltipOutsideViewportLeft**(`position`, `tooltipDimensions`, `viewportWidth`): `string`

Defined in: app/ComponentTooltip.d.ts:31

#### Parameters

##### position

`string`

##### tooltipDimensions

`DOMRect`

##### viewportWidth

`number`

#### Returns

`string`

***

### handleTooltipOutsideViewportTop()

> **handleTooltipOutsideViewportTop**(`position`, `tooltipDimensions`, `viewportHeight`): `string`

Defined in: app/ComponentTooltip.d.ts:29

#### Parameters

##### position

`string`

##### tooltipDimensions

`DOMRect`

##### viewportHeight

`number`

#### Returns

`string`

***

### maybeUpdateTooltipPosition()

> **maybeUpdateTooltipPosition**(`prevProps`): `void`

Defined in: app/ComponentTooltip.d.ts:23

#### Parameters

##### prevProps

[`TooltipProps`](../interfaces/TooltipProps.md)

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/ComponentTooltip.d.ts:34

#### Returns

`Element`

***

### renderTail()

> **renderTail**(): `Element`

Defined in: app/ComponentTooltip.d.ts:33

#### Returns

`Element`

***

### setTooltipRef()

> **setTooltipRef**(`tooltip`): `void`

Defined in: app/ComponentTooltip.d.ts:21

#### Parameters

##### tooltip

`HTMLElement`

#### Returns

`void`

***

### setTooltipTailRef()

> **setTooltipTailRef**(`tail`): `void`

Defined in: app/ComponentTooltip.d.ts:22

#### Parameters

##### tail

`HTMLElement`

#### Returns

`void`
