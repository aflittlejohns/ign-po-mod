[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/Style](../index.md) / Style

# Class: Style

Defined in: util/Style.d.ts:18

Handy wrapper around an array of CSS class names and inline CSS style props.
Provides builder-style APIs for transforming its internal CSS style classes and inline props.
Maintains style props internally as a Set.
Useful terminal API for outputting StyleProps.

## Constructors

### Constructor

> **new Style**(`classes?`, `style?`): `Style`

Defined in: util/Style.d.ts:21

#### Parameters

##### classes?

`string`[]

##### style?

`CSSProperties`

#### Returns

`Style`

## Methods

### addClasses()

> **addClasses**(`classes`): `this`

Defined in: util/Style.d.ts:52

Add CSS classes to this Style

#### Parameters

##### classes

`string`[]

The CSS classes to add to this Style

#### Returns

`this`

This Style

***

### applyCssProperties()

> **applyCssProperties**(...`style`): `this`

Defined in: util/Style.d.ts:39

Apply CSS properties to this Style

#### Parameters

##### style

...`any`[]

The CSS properties to apply to this Style

#### Returns

`this`

This Style

***

### applyStyle()

> **applyStyle**(`style`): `this`

Defined in: util/Style.d.ts:33

Apply given Style's inline styles to this Style and add its CSS classes to this Style's CSS classes.

#### Parameters

##### style

`Style`

The Style to apply

#### Returns

`this`

This Style

***

### clone()

> **clone**(): `Style`

Defined in: util/Style.d.ts:27

Clones this Style. Changes to this Style will not affect the cloned Style and vice-versa.

#### Returns

`Style`

A clone of this Style

***

### replaceClasses()

> **replaceClasses**(`classes`): `this`

Defined in: util/Style.d.ts:58

Replace this Style's CSS classes with a different array of CSS classes

#### Parameters

##### classes

`string`[]

The CSS classes which will replace those in this Style

#### Returns

`this`

This Style

***

### toEmitProps()

> **toEmitProps**(): [`EmitProps`](../../../api/component/Component/interfaces/EmitProps.md)

Defined in: util/Style.d.ts:69

Emit EmitProps from this Style.  Use this instead of toStyleProps when using an emitter

#### Returns

[`EmitProps`](../../../api/component/Component/interfaces/EmitProps.md)

***

### toStyleObject()

> **toStyleObject**(`stripClassPrefix?`): `any`

Defined in: util/Style.d.ts:80

Create a StyleObject structure from the class.  If necessary, the `psc-` class prefix can be removed
from the style class names.

#### Parameters

##### stripClassPrefix?

`boolean`

#### Returns

`any`

***

### toStyleProps()

> **toStyleProps**(): [`StyleProps`](../interfaces/StyleProps.md)

Defined in: util/Style.d.ts:74

Emit StyleProps from this Style

#### Returns

[`StyleProps`](../interfaces/StyleProps.md)

The StyleProps emitted from this Style

***

### transformClasses()

> **transformClasses**(`classTransformer`): `this`

Defined in: util/Style.d.ts:64

Execute a transformer on this Style's CSS classes

#### Parameters

##### classTransformer

(`classes`) => `void`

The transformer to execute on this Style's CSS classes

#### Returns

`this`

This Style

***

### transformCssProperties()

> **transformCssProperties**(`styleTransformer?`): `this`

Defined in: util/Style.d.ts:46

Execute a transformer on this Style's CSS properties

#### Parameters

##### styleTransformer?

(`style`) => `CSSProperties`

The transformer to execute on this Style's CSS properties

#### Returns

`this`

This Style
