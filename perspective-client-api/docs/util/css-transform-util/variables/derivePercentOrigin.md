[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/css-transform-util](../index.md) / derivePercentOrigin

# Variable: derivePercentOrigin()

> `const` **derivePercentOrigin**: (`componentRect`, `point`) => `string`

Defined in: util/css-transform-util.d.ts:22

Calculates the PercentBasedPoint of a x,y pixel-based coordinate point, relative to a client rectangle, and returns
the result as a valid CSS transform-origin style location string.

## Parameters

### componentRect

`DOMRect`

the rectangle from which we should derive percent-origin

### point

[`Point`](../../../perspective-client/interfaces/Point.md)

the raw x and y coordinates, as pixel values, to derive percentage location for

## Returns

`string`

representation of a valid css percentage location string
