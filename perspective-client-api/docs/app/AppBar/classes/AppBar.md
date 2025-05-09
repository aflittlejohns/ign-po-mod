[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/AppBar](../index.md) / AppBar

# Class: AppBar

Defined in: app/AppBar.d.ts:20

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`AppBarProps`](../interfaces/AppBarProps.md), [`AppBarState`](../interfaces/AppBarState.md)\>

## Constructors

### Constructor

> **new AppBar**(`props`): `AppBar`

Defined in: app/AppBar.d.ts:30

#### Parameters

##### props

[`AppBarProps`](../interfaces/AppBarProps.md)

#### Returns

`AppBar`

#### Overrides

`React.Component<AppBarProps, AppBarState>.constructor`

## Properties

### barColors

> **barColors**: [`BarColor`](../interfaces/BarColor.md)

Defined in: app/AppBar.d.ts:25

***

### context

> **context**: `ContextType`\<`Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>\>

Defined in: app/AppBar.d.ts:22

***

### disposer

> **disposer**: `IReactionDisposer`

Defined in: app/AppBar.d.ts:28

***

### gatewayNameCharLimit

> **gatewayNameCharLimit**: `number`

Defined in: app/AppBar.d.ts:26

***

### props

> **props**: [`AppBarProps`](../interfaces/AppBarProps.md)

Defined in: app/AppBar.d.ts:23

***

### sessionPropsDisposer()

> **sessionPropsDisposer**: () => `void`

Defined in: app/AppBar.d.ts:29

#### Returns

`void`

***

### state

> **state**: [`AppBarState`](../interfaces/AppBarState.md)

Defined in: app/AppBar.d.ts:24

***

### tooltip

> **tooltip**: `HTMLElement`

Defined in: app/AppBar.d.ts:27

***

### contextType

> `static` **contextType**: `Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>

Defined in: app/AppBar.d.ts:21

## Methods

### closeAppBar()

> **closeAppBar**(): `void`

Defined in: app/AppBar.d.ts:38

#### Returns

`void`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/AppBar.d.ts:31

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Defined in: app/AppBar.d.ts:32

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/AppBar.d.ts:33

#### Returns

`void`

***

### createExitProjectButton()

> **createExitProjectButton**(): `Element`

Defined in: app/AppBar.d.ts:43

#### Returns

`Element`

***

### hideTooltip()

> **hideTooltip**(): `void`

Defined in: app/AppBar.d.ts:36

#### Returns

`void`

***

### onExitTap()

> **onExitTap**(): `void`

Defined in: app/AppBar.d.ts:44

#### Returns

`void`

***

### onSessionPropsChange()

> **onSessionPropsChange**(`tree`): `void`

Defined in: app/AppBar.d.ts:34

#### Parameters

##### tree

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### openAppBar()

> **openAppBar**(): `void`

Defined in: app/AppBar.d.ts:37

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/AppBar.d.ts:42

#### Returns

`Element`

***

### renderAboutIcon()

> **renderAboutIcon**(`edition`, `aboutActiveClass`): `Element`

Defined in: app/AppBar.d.ts:41

#### Parameters

##### edition

`string`

##### aboutActiveClass

`string`

#### Returns

`Element`

***

### setTooltipRef()

> **setTooltipRef**(`ref`): `void`

Defined in: app/AppBar.d.ts:40

#### Parameters

##### ref

`HTMLElement`

#### Returns

`void`

***

### showTooltip()

> **showTooltip**(): `void`

Defined in: app/AppBar.d.ts:35

#### Returns

`void`

***

### toggleAboutWindow()

> **toggleAboutWindow**(): `void`

Defined in: app/AppBar.d.ts:39

#### Returns

`void`
