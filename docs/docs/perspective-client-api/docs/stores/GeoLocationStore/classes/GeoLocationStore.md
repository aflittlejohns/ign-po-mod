[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/GeoLocationStore](../index.md) / GeoLocationStore

# Class: GeoLocationStore

Defined in: stores/GeoLocationStore.d.ts:22

## Constructors

### Constructor

> **new GeoLocationStore**(`parent`): `GeoLocationStore`

Defined in: stores/GeoLocationStore.d.ts:27

#### Parameters

##### parent

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`GeoLocationStore`

## Properties

### geolocationEnabled

> **geolocationEnabled**: `boolean`

Defined in: stores/GeoLocationStore.d.ts:25

***

### sessionPropsChangeDisposer()

> **sessionPropsChangeDisposer**: () => `any`

Defined in: stores/GeoLocationStore.d.ts:26

#### Returns

`any`

## Methods

### enableGeolocation()

> **enableGeolocation**(`enable`): `void`

Defined in: stores/GeoLocationStore.d.ts:31

#### Parameters

##### enable

`boolean`

#### Returns

`void`

***

### onSessionPropsChange()

> **onSessionPropsChange**(`tree`): `void`

Defined in: stores/GeoLocationStore.d.ts:29

#### Parameters

##### tree

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### subscribeToSessionProps()

> **subscribeToSessionProps**(): `void`

Defined in: stores/GeoLocationStore.d.ts:28

#### Returns

`void`

***

### updateGeolocation()

> **updateGeolocation**(`position`): `void`

Defined in: stores/GeoLocationStore.d.ts:30

#### Parameters

##### position

[`Position`](../../../perspective-client/interfaces/Position.md)

#### Returns

`void`

***

### mapOptionsForBrowser()

> `static` **mapOptionsForBrowser**(`props`): `PositionOptions`

Defined in: stores/GeoLocationStore.d.ts:32

#### Parameters

##### props

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`PositionOptions`
