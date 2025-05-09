[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [ui/info/ViewPopup](../index.md) / ViewPopup

# Class: ViewPopup

Defined in: ui/info/ViewPopup.d.ts:11

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<[`ViewPopupProps`](../interfaces/ViewPopupProps.md), [`ViewPopupState`](../interfaces/ViewPopupState.md)\>

## Constructors

### Constructor

> **new ViewPopup**(`props`): `ViewPopup`

Defined in: ui/info/ViewPopup.d.ts:13

#### Parameters

##### props

[`ViewPopupProps`](../interfaces/ViewPopupProps.md)

#### Returns

`ViewPopup`

#### Overrides

`React.Component<ViewPopupProps, ViewPopupState>.constructor`

## Properties

### state

> **state**: [`ViewPopupState`](../interfaces/ViewPopupState.md)

Defined in: ui/info/ViewPopup.d.ts:12

## Methods

### onOutputChanged()

> **onOutputChanged**(`name`, `value`): `void`

Defined in: ui/info/ViewPopup.d.ts:19

Record any changes to in-out parameters so that we don't reset them when we re-render the view.
IGN-1518

#### Parameters

##### name

`string`

##### value

`any`

#### Returns

`void`

***

### onResize()

> **onResize**(): `void`

Defined in: ui/info/ViewPopup.d.ts:14

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: ui/info/ViewPopup.d.ts:20

#### Returns

`Element`
