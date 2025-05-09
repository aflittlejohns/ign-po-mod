[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/svg-util](../../../index.md) / [SVG\_Utils](../index.md) / getSVGIconMarkup

# Function: getSVGIconMarkup()

> **getSVGIconMarkup**(`name`, `library`): `Promise`\<[`SVGSessionStorageData`](../interfaces/SVGSessionStorageData.md)\>

Defined in: util/svg-util.d.ts:89

Retrieve an SVG icon from sessionStorage.  If the icon does not exist in session storage, grab the icon library via
an AJAX request, save the icons to session storage, and then return the requested icon.

## Parameters

### name

`string`

### library

`string`

## Returns

`Promise`\<[`SVGSessionStorageData`](../interfaces/SVGSessionStorageData.md)\>
