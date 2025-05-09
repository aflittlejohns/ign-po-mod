[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ComponentContextMenu](../index.md) / ComponentContextMenu

# Class: ComponentContextMenu

Defined in: app/ComponentContextMenu.d.ts:45

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`ContextMenuProps`](../interfaces/ContextMenuProps.md), `Readonly`\<`any`\>\>

## Constructors

### Constructor

> **new ComponentContextMenu**(`props`): `ComponentContextMenu`

Defined in: app/ComponentContextMenu.d.ts:48

#### Parameters

##### props

[`ContextMenuProps`](../interfaces/ContextMenuProps.md)

#### Returns

`ComponentContextMenu`

#### Overrides

`React.Component<ContextMenuProps, Readonly<any>>.constructor`

## Properties

### contextMenu

> **contextMenu**: `HTMLElement`

Defined in: app/ComponentContextMenu.d.ts:46

***

### submenuRefs

> **submenuRefs**: `HTMLElement`[]

Defined in: app/ComponentContextMenu.d.ts:47

## Methods

### callComponentLink()

> **callComponentLink**(`url`, `target`): `any`

Defined in: app/ComponentContextMenu.d.ts:58

#### Parameters

##### url

`string`

##### target

`string`

#### Returns

`any`

***

### callComponentMessage()

> **callComponentMessage**(`payload`): `any`

Defined in: app/ComponentContextMenu.d.ts:56

#### Parameters

##### payload

[`Message`](../interfaces/Message.md)

#### Returns

`any`

***

### callComponentMethod()

> **callComponentMethod**(`payload`): `any`

Defined in: app/ComponentContextMenu.d.ts:57

#### Parameters

##### payload

[`Method`](../interfaces/Method.md)

#### Returns

`any`

***

### callOnMouseEnterHandler()

> **callOnMouseEnterHandler**(`event`, `isBaseMenu`): `any`

Defined in: app/ComponentContextMenu.d.ts:59

#### Parameters

##### event

`MouseEvent`

##### isBaseMenu

`boolean`

#### Returns

`any`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/ComponentContextMenu.d.ts:49

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Defined in: app/ComponentContextMenu.d.ts:50

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/ComponentContextMenu.d.ts:51

#### Returns

`void`

***

### configureLink()

> **configureLink**(`item`, `index`, `hideMenuCallback`): `ReactNode`

Defined in: app/ComponentContextMenu.d.ts:65

#### Parameters

##### item

[`MenuItem`](../interfaces/MenuItem.md)

##### index

`number`

##### hideMenuCallback

`any`

#### Returns

`ReactNode`

***

### configureMessage()

> **configureMessage**(`item`, `index`, `hideMenuCallback`): `ReactNode`

Defined in: app/ComponentContextMenu.d.ts:68

#### Parameters

##### item

[`MenuItem`](../interfaces/MenuItem.md)

##### index

`number`

##### hideMenuCallback

`any`

#### Returns

`ReactNode`

***

### configureMethod()

> **configureMethod**(`item`, `index`, `hideMenuCallback`): `ReactNode`

Defined in: app/ComponentContextMenu.d.ts:66

#### Parameters

##### item

[`MenuItem`](../interfaces/MenuItem.md)

##### index

`number`

##### hideMenuCallback

`any`

#### Returns

`ReactNode`

***

### configureMethodParams()

> **configureMethodParams**(`params?`): `any`

Defined in: app/ComponentContextMenu.d.ts:67

#### Parameters

##### params?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`any`

***

### configureSeparator()

> **configureSeparator**(`item`, `index`): `ReactNode`

Defined in: app/ComponentContextMenu.d.ts:69

#### Parameters

##### item

[`MenuItem`](../interfaces/MenuItem.md)

##### index

`number`

#### Returns

`ReactNode`

***

### configureStyleClassNames()

> **configureStyleClassNames**(`style`): `string`

Defined in: app/ComponentContextMenu.d.ts:72

#### Parameters

##### style

`any`

#### Returns

`string`

***

### configureSubmenu()

> **configureSubmenu**(`item`, `index`): `ReactNode`

Defined in: app/ComponentContextMenu.d.ts:64

#### Parameters

##### item

[`MenuItem`](../interfaces/MenuItem.md)

##### index

`number`

#### Returns

`ReactNode`

***

### delegateMenuPosition()

> **delegateMenuPosition**(`styleProp`, `shouldReverse?`): `string`

Defined in: app/ComponentContextMenu.d.ts:63

#### Parameters

##### styleProp

`string`

##### shouldReverse?

`boolean`

#### Returns

`string`

***

### disableDefaultContextMenu()

> **disableDefaultContextMenu**(): `void`

Defined in: app/ComponentContextMenu.d.ts:52

#### Returns

`void`

***

### hideContextMenu()

> **hideContextMenu**(): `void`

Defined in: app/ComponentContextMenu.d.ts:53

#### Returns

`void`

***

### isOutOfBounds()

> **isOutOfBounds**(`submenuDimensions`): `boolean`

Defined in: app/ComponentContextMenu.d.ts:62

#### Parameters

##### submenuDimensions

`DOMRect`

#### Returns

`boolean`

***

### maybeRenderIcon()

> **maybeRenderIcon**(`iconConfig`, `index`, `classes?`, `isSubmenu?`): `any`

Defined in: app/ComponentContextMenu.d.ts:70

#### Parameters

##### iconConfig

[`IconRendererConfig`](../../IconRenderer/interfaces/IconRendererConfig.md)

##### index

`number`

##### classes?

`string`

##### isSubmenu?

`boolean`

#### Returns

`any`

***

### removeSubmenu()

> **removeSubmenu**(`event`, `index`, `isBaseMenu`): `any`

Defined in: app/ComponentContextMenu.d.ts:61

#### Parameters

##### event

`MouseEvent`

##### index

`number`

##### isBaseMenu

`boolean`

#### Returns

`any`

***

### render()

> **render**(): `Element`

Defined in: app/ComponentContextMenu.d.ts:73

#### Returns

`Element`

***

### renderMenuItems()

> **renderMenuItems**(`items`): `ReactNode`[]

Defined in: app/ComponentContextMenu.d.ts:71

#### Parameters

##### items

[`MenuItem`](../interfaces/MenuItem.md)[]

#### Returns

`ReactNode`[]

***

### renderSubmenu()

> **renderSubmenu**(`event`, `items`, `index`, `isBaseMenu`): `any`

Defined in: app/ComponentContextMenu.d.ts:60

#### Parameters

##### event

`MouseEvent`

##### items

[`MenuItem`](../interfaces/MenuItem.md)[]

##### index

`number`

##### isBaseMenu

`boolean`

#### Returns

`any`

***

### setContextMenuRef()

> **setContextMenuRef**(`contextMenu`): `void`

Defined in: app/ComponentContextMenu.d.ts:54

#### Parameters

##### contextMenu

`HTMLElement`

#### Returns

`void`

***

### setSubmenuRef()

> **setSubmenuRef**(`submenuRef`, `index`): `void`

Defined in: app/ComponentContextMenu.d.ts:55

#### Parameters

##### submenuRef

`any`

##### index

`number`

#### Returns

`void`
