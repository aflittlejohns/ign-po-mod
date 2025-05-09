[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/AppModal](../index.md) / AppModal

# Class: AppModal

Defined in: app/AppModal.d.ts:16

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`AppModalProps`](../interfaces/AppModalProps.md), [`AppModalState`](../interfaces/AppModalState.md)\>

## Constructors

### Constructor

> **new AppModal**(`props`): `AppModal`

Defined in: app/AppModal.d.ts:23

#### Parameters

##### props

[`AppModalProps`](../interfaces/AppModalProps.md)

#### Returns

`AppModal`

#### Overrides

`React.Component<AppModalProps, AppModalState>.constructor`

## Properties

### pageBody

> **pageBody**: `HTMLElement`

Defined in: app/AppModal.d.ts:18

***

### sessionPropsDisposer()

> **sessionPropsDisposer**: () => `void`

Defined in: app/AppModal.d.ts:22

#### Returns

`void`

***

### swipeableActions

> **swipeableActions**: `object`

Defined in: app/AppModal.d.ts:19

#### updateHeight()

> **updateHeight**(): `void`

##### Returns

`void`

***

### wrapper

> **wrapper**: `HTMLElement`

Defined in: app/AppModal.d.ts:17

## Methods

### actionCallback()

> **actionCallback**(`actions`): `void`

Defined in: app/AppModal.d.ts:35

#### Parameters

##### actions

`any`

#### Returns

`void`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/AppModal.d.ts:24

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(`prevProps`): `void`

Defined in: app/AppModal.d.ts:25

#### Parameters

##### prevProps

[`AppModalProps`](../interfaces/AppModalProps.md)

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/AppModal.d.ts:26

#### Returns

`void`

***

### getNavbar()

> **getNavbar**(`content`): `Element`

Defined in: app/AppModal.d.ts:28

#### Parameters

##### content

[`StatusPages`](../../../stores/status/StatusPages/enumerations/StatusPages.md)

#### Returns

`Element`

***

### navigate()

> **navigate**(`e`): `void`

Defined in: app/AppModal.d.ts:29

#### Parameters

##### e

`SyntheticEvent`\<`any`\>

#### Returns

`void`

***

### onKeyDown()

> **onKeyDown**(`e`): `void`

Defined in: app/AppModal.d.ts:30

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### onSessionPropsChange()

> **onSessionPropsChange**(`tree`): `void`

Defined in: app/AppModal.d.ts:27

#### Parameters

##### tree

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/AppModal.d.ts:37

#### Returns

`Element`

***

### renderBody()

> **renderBody**(): `Element`

Defined in: app/AppModal.d.ts:36

#### Returns

`Element`

***

### updatePageIndex()

> **updatePageIndex**(`index`): `void`

Defined in: app/AppModal.d.ts:31

#### Parameters

##### index

`number`

#### Returns

`void`

***

### stopPropagation()

> `static` **stopPropagation**(`e`): `void`

Defined in: app/AppModal.d.ts:34

#### Parameters

##### e

`SyntheticEvent`\<`any`\>

#### Returns

`void`
