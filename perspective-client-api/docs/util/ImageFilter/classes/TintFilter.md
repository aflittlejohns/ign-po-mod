[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/ImageFilter](../index.md) / TintFilter

# Class: TintFilter

Defined in: util/ImageFilter.d.ts:25

An ImageFilter which tints the injected ImageData to the color of the injected tint color.

## Extends

- [`ImageFilter`](ImageFilter.md)

## Constructors

### Constructor

> **new TintFilter**(`imageData`, `tintColor`): `TintFilter`

Defined in: util/ImageFilter.d.ts:27

#### Parameters

##### imageData

`ImageData`

##### tintColor

[`Color`](../../utils/interfaces/Color.md)

#### Returns

`TintFilter`

#### Overrides

[`ImageFilter`](ImageFilter.md).[`constructor`](ImageFilter.md#constructor)

## Methods

### filter()

> **filter**(): `ImageData`

Defined in: util/ImageFilter.d.ts:14

Execute the filter operation on each pixel of the injected ImageData.

#### Returns

`ImageData`

The injected ImageData after passing through the filter

#### Inherited from

[`ImageFilter`](ImageFilter.md).[`filter`](ImageFilter.md#filter)

***

### filterPixel()

> `protected` **filterPixel**(`pixelColor`): [`Color`](../../utils/interfaces/Color.md)

Defined in: util/ImageFilter.d.ts:28

The transformation function for each individual pixel of the injected ImageData.

#### Parameters

##### pixelColor

[`Color`](../../utils/interfaces/Color.md)

The pixel color

#### Returns

[`Color`](../../utils/interfaces/Color.md)

The filtered pixel color

#### Overrides

[`ImageFilter`](ImageFilter.md).[`filterPixel`](ImageFilter.md#filterpixel)
