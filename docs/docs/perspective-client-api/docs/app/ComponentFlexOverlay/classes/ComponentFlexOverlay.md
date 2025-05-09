[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ComponentFlexOverlay](../index.md) / ComponentFlexOverlay

# Class: ComponentFlexOverlay

Defined in: app/ComponentFlexOverlay.d.ts:46

A reusable component overlay that renders as a flex container
containing header, body, and footer sections whose content is
provided by the implementor.

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`ComponentFlexOverlayProps`](../interfaces/ComponentFlexOverlayProps.md)\>

## Constructors

### Constructor

> **new ComponentFlexOverlay**(): `ComponentFlexOverlay`

#### Returns

`ComponentFlexOverlay`

#### Inherited from

`React.Component<ComponentFlexOverlayProps>.constructor`

## Properties

### height

> **height**: `number`

Defined in: app/ComponentFlexOverlay.d.ts:49

***

### rootRef

> **rootRef**: `HTMLDivElement`

Defined in: app/ComponentFlexOverlay.d.ts:47

***

### width

> **width**: `number`

Defined in: app/ComponentFlexOverlay.d.ts:48

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/ComponentFlexOverlay.d.ts:50

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(`prevProps`): `void`

Defined in: app/ComponentFlexOverlay.d.ts:51

#### Parameters

##### prevProps

`Readonly`\<[`ComponentFlexOverlayProps`](../interfaces/ComponentFlexOverlayProps.md)\>

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/ComponentFlexOverlay.d.ts:52

#### Returns

`void`

***

### getPopoverPosition()

> **getPopoverPosition**(): [`PopoverPosition`](../interfaces/PopoverPosition.md)

Defined in: app/ComponentFlexOverlay.d.ts:58

#### Returns

[`PopoverPosition`](../interfaces/PopoverPosition.md)

***

### handleParentElementScroll()

> **handleParentElementScroll**(`event`): `void`

Defined in: app/ComponentFlexOverlay.d.ts:55

#### Parameters

##### event

`Event`

#### Returns

`void`

***

### handleResize()

> **handleResize**(`width`, `height`): `void`

Defined in: app/ComponentFlexOverlay.d.ts:54

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/ComponentFlexOverlay.d.ts:59

#### Returns

`Element`

***

### renderOverlayContent()

> **renderOverlayContent**(): `Element`

Defined in: app/ComponentFlexOverlay.d.ts:57

#### Returns

`Element`

***

### rootRefCb()

> **rootRefCb**(`ref`): `void`

Defined in: app/ComponentFlexOverlay.d.ts:53

#### Parameters

##### ref

`HTMLDivElement`

#### Returns

`void`
