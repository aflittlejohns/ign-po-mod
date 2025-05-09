[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [ui/client-state/FatalError](../index.md) / FatalError

# Class: FatalError

Defined in: ui/client-state/FatalError.d.ts:11

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<[`FatalErrorProps`](../interfaces/FatalErrorProps.md), [`FatalErrorState`](../interfaces/FatalErrorState.md)\>

## Constructors

### Constructor

> **new FatalError**(`props`): `FatalError`

Defined in: ui/client-state/FatalError.d.ts:17

#### Parameters

##### props

`any`

#### Returns

`FatalError`

#### Overrides

`React.Component<FatalErrorProps, FatalErrorState>.constructor`

## Properties

### collapsedHeight

> **collapsedHeight**: `number`

Defined in: ui/client-state/FatalError.d.ts:13

***

### detailBody

> **detailBody**: `HTMLElement`

Defined in: ui/client-state/FatalError.d.ts:12

***

### reloadTimer

> **reloadTimer**: `number`

Defined in: ui/client-state/FatalError.d.ts:14

***

### stackTraceDisplay

> **stackTraceDisplay**: `HTMLElement`

Defined in: ui/client-state/FatalError.d.ts:15

***

### tooltip

> **tooltip**: `HTMLElement`

Defined in: ui/client-state/FatalError.d.ts:16

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: ui/client-state/FatalError.d.ts:18

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Defined in: ui/client-state/FatalError.d.ts:19

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: ui/client-state/FatalError.d.ts:20

#### Returns

`void`

***

### copyToClipboard()

> **copyToClipboard**(): `void`

Defined in: ui/client-state/FatalError.d.ts:21

#### Returns

`void`

***

### reload()

> **reload**(): `void`

Defined in: ui/client-state/FatalError.d.ts:23

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: ui/client-state/FatalError.d.ts:28

#### Returns

`Element`

***

### setDetailBody()

> **setDetailBody**(`ref`): `void`

Defined in: ui/client-state/FatalError.d.ts:27

#### Parameters

##### ref

`HTMLElement`

#### Returns

`void`

***

### setStackTraceDisplay()

> **setStackTraceDisplay**(`ref`): `void`

Defined in: ui/client-state/FatalError.d.ts:26

#### Parameters

##### ref

`HTMLElement`

#### Returns

`void`

***

### setTimer()

> **setTimer**(): `void`

Defined in: ui/client-state/FatalError.d.ts:22

#### Returns

`void`

***

### setTooltip()

> **setTooltip**(`ref`): `void`

Defined in: ui/client-state/FatalError.d.ts:25

#### Parameters

##### ref

`HTMLElement`

#### Returns

`void`

***

### toggleExpansion()

> **toggleExpansion**(): `void`

Defined in: ui/client-state/FatalError.d.ts:24

#### Returns

`void`
