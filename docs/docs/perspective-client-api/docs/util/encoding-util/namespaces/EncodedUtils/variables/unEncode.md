[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/encoding-util](../../../index.md) / [EncodedUtils](../index.md) / unEncode

# Variable: unEncode()

> `const` **unEncode**: (`val`, `dateFormatter`) => `any`

Defined in: util/encoding-util.d.ts:17

Takes the value and un-encodes it if it happens to be dollar qualified encoded.

## Parameters

### val

`any`

value to un-encode.

### dateFormatter

(`ts`) => `string`

function to format dates if an encoded date object is found.

## Returns

`any`

- Returns the un-encoded value if found to be dollar qualified encoded, otherwise returns provided value
