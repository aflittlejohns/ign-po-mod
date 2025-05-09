[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/locale-util](../index.md) / MomentLocaleService

# Class: MomentLocaleService

Defined in: util/locale-util.d.ts:61

A singleton service to wrap the implementation of MomentJS' application of locales.  This is needed for the same
reason as the locale service that wraps NumeralJS, and additionally to keep the locale codes for both services
in sync.

## Methods

### getLocale()

> **getLocale**(): `string`

Defined in: util/locale-util.d.ts:68

#### Returns

`string`

***

### localeDataExists()

> **localeDataExists**(`localeCode`): `boolean`

Defined in: util/locale-util.d.ts:69

#### Parameters

##### localeCode

`string`

#### Returns

`boolean`

***

### setLocale()

> **setLocale**(`localeCode`): `void`

Defined in: util/locale-util.d.ts:67

#### Parameters

##### localeCode

`string`

#### Returns

`void`

***

### get()

> `static` **get**(`moment`): `MomentLocaleService`

Defined in: util/locale-util.d.ts:66

#### Parameters

##### moment

[`MomentWithLocale`](../interfaces/MomentWithLocale.md)

#### Returns

`MomentLocaleService`
