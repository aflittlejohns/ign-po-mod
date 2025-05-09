[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/IconRenderer](../index.md) / IconRenderer

# Class: IconRenderer

Defined in: app/IconRenderer.d.ts:40

Component to simplify and standardize icons in component authoring. Accepts either a "path" prop (in shorthand format
library/iconName), or individual props "library" and "path".

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`IconRendererConfig`](../interfaces/IconRendererConfig.md), [`IconRendererState`](../type-aliases/IconRendererState.md)\>

## Constructors

### Constructor

> **new IconRenderer**(): `IconRenderer`

#### Returns

`IconRenderer`

#### Inherited from

`React.Component<IconRendererConfig, IconRendererState>.constructor`

## Properties

### context

> **context**: `ContextType`\<`Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>\>

Defined in: app/IconRenderer.d.ts:41

***

### state

> `readonly` **state**: [`SVGSessionStorageData`](../../../util/svg-util/namespaces/SVG_Utils/interfaces/SVGSessionStorageData.md)

Defined in: app/IconRenderer.d.ts:46

***

### contextType

> `static` **contextType**: `Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>

Defined in: app/IconRenderer.d.ts:42

## Methods

### buildKey()

> **buildKey**(`libName`, `iconName`): `string`

Defined in: app/IconRenderer.d.ts:54

#### Parameters

##### libName

`string`

##### iconName

`string`

#### Returns

`string`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/IconRenderer.d.ts:47

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Defined in: app/IconRenderer.d.ts:48

#### Returns

`void`

***

### getNames()

> **getNames**(): `object`

Defined in: app/IconRenderer.d.ts:50

#### Returns

`object`

##### iconName

> **iconName**: `string`

##### libName

> **libName**: `string`

***

### handleParsedAndCachedValueReady()

> **handleParsedAndCachedValueReady**(`requestedKey`): `void`

Defined in: app/IconRenderer.d.ts:56

#### Parameters

##### requestedKey

`string`

#### Returns

`void`

***

### isParsedAndCached()

> **isParsedAndCached**(`iconKey`): [`SVGSessionStorageData`](../../../util/svg-util/namespaces/SVG_Utils/interfaces/SVGSessionStorageData.md)

Defined in: app/IconRenderer.d.ts:55

#### Parameters

##### iconKey

`string`

#### Returns

[`SVGSessionStorageData`](../../../util/svg-util/namespaces/SVG_Utils/interfaces/SVGSessionStorageData.md)

***

### render()

> **render**(): `Element`

Defined in: app/IconRenderer.d.ts:58

#### Returns

`Element`

***

### setInnerContent()

> **setInnerContent**(): `void`

Defined in: app/IconRenderer.d.ts:57

#### Returns

`void`

***

### shouldReset()

> **shouldReset**(): `boolean`

Defined in: app/IconRenderer.d.ts:49

#### Returns

`boolean`
