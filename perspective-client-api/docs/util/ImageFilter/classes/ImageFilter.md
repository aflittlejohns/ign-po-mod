[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/ImageFilter](../index.md) / ImageFilter

# Class: `abstract` ImageFilter

Defined in: util/ImageFilter.d.ts:7

Base class for transforming the injected ImageData. Sub-Classes must override the filterPixel function to set the
behavior for the Filter's pixel-by-pixel transformation. It is important to understand that the internal data array
of the injected ImageData will be manipulated and returned in the filter function.

## Extended by

- [`TintFilter`](TintFilter.md)

## Constructors

### Constructor

> `protected` **new ImageFilter**(`imageData`): `ImageFilter`

Defined in: util/ImageFilter.d.ts:9

#### Parameters

##### imageData

`ImageData`

#### Returns

`ImageFilter`

## Methods

### filter()

> **filter**(): `ImageData`

Defined in: util/ImageFilter.d.ts:14

Execute the filter operation on each pixel of the injected ImageData.

#### Returns

`ImageData`

The injected ImageData after passing through the filter

***

### filterPixel()

> `abstract` `protected` **filterPixel**(`pixelColor`): [`Color`](../../utils/interfaces/Color.md)

Defined in: util/ImageFilter.d.ts:20

The transformation function for each individual pixel of the injected ImageData.

#### Parameters

##### pixelColor

[`Color`](../../utils/interfaces/Color.md)

The pixel color

#### Returns

[`Color`](../../utils/interfaces/Color.md)

The filtered pixel color
