[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/AuthStore](../index.md) / LoginUrl

# Class: LoginUrl

Defined in: stores/AuthStore.d.ts:92

## Extends

- `AuthUrl`\<[`LoginParameters`](../interfaces/LoginParameters.md)\>

## Constructors

### Constructor

> **new LoginUrl**(`beforeQuery`, `query`, `params`): `LoginUrl`

Defined in: stores/AuthStore.d.ts:93

#### Parameters

##### beforeQuery

`string`

##### query

`string`

##### params

[`LoginParameters`](../interfaces/LoginParameters.md)

#### Returns

`LoginUrl`

#### Overrides

`AuthUrl<LoginParameters>.constructor`

## Properties

### beforeQuery

> `readonly` **beforeQuery**: `string`

Defined in: stores/AuthStore.d.ts:86

#### Inherited from

`AuthUrl.beforeQuery`

***

### params

> `readonly` **params**: [`LoginParameters`](../interfaces/LoginParameters.md)

Defined in: stores/AuthStore.d.ts:88

#### Inherited from

`AuthUrl.params`

***

### query

> `readonly` **query**: `string`

Defined in: stores/AuthStore.d.ts:87

#### Inherited from

`AuthUrl.query`

## Accessors

### framing

#### Get Signature

> **get** **framing**(): [`Framing`](../interfaces/Framing.md)

Defined in: stores/AuthStore.d.ts:94

##### Returns

[`Framing`](../interfaces/Framing.md)

## Methods

### toString()

> **toString**(): `string`

Defined in: stores/AuthStore.d.ts:90

#### Returns

`string`

#### Inherited from

`AuthUrl.toString`
