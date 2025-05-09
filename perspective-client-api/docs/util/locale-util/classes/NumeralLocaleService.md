[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/locale-util](../index.md) / NumeralLocaleService

# Class: NumeralLocaleService

Defined in: util/locale-util.d.ts:10

A singleton service to wrap the implementation of NumeralJS' application of locales.  Needed so we have control
over the local codes that are used to register the rules against. The shorthand (2 digit) codes are used to match
as closely as possible to the Locale java class, and the BCP 47 (5 digit) codes are included because they are
commonly used as well.

## Methods

### getLocale()

> **getLocale**(): `string`

Defined in: util/locale-util.d.ts:17

#### Returns

`string`

***

### localeDataExists()

> **localeDataExists**(): `boolean`

Defined in: util/locale-util.d.ts:18

#### Returns

`boolean`

***

### setLocale()

> **setLocale**(`localeCode`): `void`

Defined in: util/locale-util.d.ts:16

#### Parameters

##### localeCode

`string`

#### Returns

`void`

***

### get()

> `static` **get**(`numeral`): `NumeralLocaleService`

Defined in: util/locale-util.d.ts:15

#### Parameters

##### numeral

`Numeral`

#### Returns

`NumeralLocaleService`
