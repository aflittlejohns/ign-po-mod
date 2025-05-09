[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/NumberFormat](../index.md) / NumberFormat

# Class: NumberFormat

Defined in: util/NumberFormat.d.ts:6

Combines both Moment.js and Numeral.js libraries.
Allows both predefined and custom format
patterns.

## Constructors

### Constructor

> **new NumberFormat**(`value`): `NumberFormat`

Defined in: util/NumberFormat.d.ts:11

#### Parameters

##### value

`string` | `number`

#### Returns

`NumberFormat`

## Accessors

### type

#### Get Signature

> **get** **type**(): [`NumberFormatType`](../enumerations/NumberFormatType.md)

Defined in: util/NumberFormat.d.ts:19

##### Returns

[`NumberFormatType`](../enumerations/NumberFormatType.md)

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: util/NumberFormat.d.ts:20

##### Parameters

###### type

[`NumberFormatType`](../enumerations/NumberFormatType.md)

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `string` \| `number`

Defined in: util/NumberFormat.d.ts:21

##### Returns

`string` \| `number`

#### Set Signature

> **set** **value**(`newValue`): `void`

Defined in: util/NumberFormat.d.ts:22

##### Parameters

###### newValue

`string` | `number`

##### Returns

`void`

## Methods

### format()

> **format**(`pattern?`, `timeZone?`, `locale?`): `string`

Defined in: util/NumberFormat.d.ts:39

Get the formatted value given an optional pattern string.  If no pattern string is
provided, will proceed to auto format this value.

#### Parameters

##### pattern?

`string`

Optional pattern format string

##### timeZone?

`string`

Optional timezone string to be used to apply a timezone, the NumberFormat is formatted as
a date.

##### locale?

`string`

(optional) - The locale to apply to the value being formatted.

#### Returns

`string`

- Returns a formatted value or just the value if no formatting was possible

***

### formatWithOptions()

> **formatWithOptions**(`options`): `string`

Defined in: util/NumberFormat.d.ts:28

Format the value pulling the formatting options from the parameter object.

#### Parameters

##### options

[`NumberFormatOptions`](../interfaces/NumberFormatOptions.md)

Object to wrap the params passed to `this.format`.

#### Returns

`string`

***

### SetLocale()

> `static` **SetLocale**(`locale`): `void`

Defined in: util/NumberFormat.d.ts:18

Static method on the class to use as a pass-through to the NumeralLocaleService and MomentLocaleService as a
way to set the locales when a component that is locale-sensitive uses Moment/Numeral without instantiating
this class.  If the locale provided doesn't contain data in either service, default to the `en-us` locale.

#### Parameters

##### locale

`string`

#### Returns

`void`
