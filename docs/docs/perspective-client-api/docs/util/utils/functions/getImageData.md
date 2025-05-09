[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / getImageData

# Function: getImageData()

> **getImageData**(`img`): `ImageData`

Defined in: util/utils.d.ts:54

Given an HTMLImageElement, outputs its ImageData or throws an Exception if there is some problem such as a CORS
access issue. The ImageData is useful in a canvas for pixel-by-pixel transformations.

## Parameters

### img

`HTMLImageElement`

The HTMLImageElement from which to extract its ImageData

## Returns

`ImageData`

The extracted ImageData
