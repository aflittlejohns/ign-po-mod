[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/View](../index.md) / View

# Class: View

Defined in: app/View.d.ts:57

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`ViewProps`](../interfaces/ViewProps.md), `Readonly`\<`ViewState`\>\>

## Constructors

### Constructor

> **new View**(): `View`

#### Returns

`View`

#### Inherited from

`React.Component<ViewProps, Readonly<ViewState>>.constructor`

## Properties

### accessDeniedDisposer()

> **accessDeniedDisposer**: () => `any`

Defined in: app/View.d.ts:63

#### Returns

`any`

***

### paramsDirty

> **paramsDirty**: `boolean`

Defined in: app/View.d.ts:59

***

### state

> **state**: `Readonly`\<`ViewState`\>

Defined in: app/View.d.ts:58

***

### styleDirty

> **styleDirty**: `boolean`

Defined in: app/View.d.ts:60

***

### viewObserverDisposer()

> **viewObserverDisposer**: () => `any`

Defined in: app/View.d.ts:62

#### Returns

`any`

## Methods

### calculateLayout()

> **calculateLayout**(): [`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

Defined in: app/View.d.ts:85

#### Returns

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/View.d.ts:73

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(`prevProp`): `void`

Defined in: app/View.d.ts:75

#### Parameters

##### prevProp

[`ViewProps`](../interfaces/ViewProps.md)

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/View.d.ts:74

#### Returns

`void`

***

### getViewState()

> **getViewState**(): [`ViewStateType`](../enumerations/ViewStateType.md)

Defined in: app/View.d.ts:82

#### Returns

[`ViewStateType`](../enumerations/ViewStateType.md)

***

### installViewStore()

> **installViewStore**(`viewStore`): `void`

Defined in: app/View.d.ts:67

#### Parameters

##### viewStore

[`ViewStore`](../../../stores/ViewStore/classes/ViewStore.md)

#### Returns

`void`

***

### maybeUpdateViewState()

> **maybeUpdateViewState**(): `void`

Defined in: app/View.d.ts:83

#### Returns

`void`

***

### onAccessDenied()

> **onAccessDenied**(): `void`

Defined in: app/View.d.ts:69

#### Returns

`void`

***

### onDockOffsetChanged()

> **onDockOffsetChanged**(): `void`

Defined in: app/View.d.ts:70

#### Returns

`void`

***

### onViewLoading()

> **onViewLoading**(`pctDone`): `void`

Defined in: app/View.d.ts:71

#### Parameters

##### pctDone

`number`

#### Returns

`void`

***

### onViewPropertiesChanged()

> **onViewPropertiesChanged**(`props`): `void`

Defined in: app/View.d.ts:68

#### Parameters

##### props

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### render()

> **render**(): `any`

Defined in: app/View.d.ts:86

#### Returns

`any`

***

### renderAccessDenied()

> **renderAccessDenied**(`layout`): `Element`

Defined in: app/View.d.ts:90

#### Parameters

##### layout

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

#### Returns

`Element`

***

### renderError()

> **renderError**(`layout`, `message`): `Element`

Defined in: app/View.d.ts:87

#### Parameters

##### layout

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

##### message

`string`

#### Returns

`Element`

***

### renderLoading()

> **renderLoading**(`layout`): `Element`

Defined in: app/View.d.ts:91

#### Parameters

##### layout

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

#### Returns

`Element`

***

### renderNotFound()

> **renderNotFound**(`layout`): `Element`

Defined in: app/View.d.ts:88

#### Parameters

##### layout

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

#### Returns

`Element`

***

### renderNotSpecified()

> **renderNotSpecified**(`layout`): `Element`

Defined in: app/View.d.ts:89

#### Parameters

##### layout

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

#### Returns

`Element`

***

### resetInstance()

> **resetInstance**(): `void`

Defined in: app/View.d.ts:81

#### Returns

`void`

***

### startInstance()

> **startInstance**(): `void`

Defined in: app/View.d.ts:66

#### Returns

`void`

***

### stopInstance()

> **stopInstance**(): `void`

Defined in: app/View.d.ts:72

#### Returns

`void`

***

### UNSAFE\_componentWillReceiveProps()

> **UNSAFE\_componentWillReceiveProps**(`nextProps`): `void`

Defined in: app/View.d.ts:80

Anyone who mounts a view may pass values into it as an object property named "params". The values in this
object will be written to any defined inputs on the view.

#### Parameters

##### nextProps

[`ViewProps`](../interfaces/ViewProps.md)

#### Returns

`void`
