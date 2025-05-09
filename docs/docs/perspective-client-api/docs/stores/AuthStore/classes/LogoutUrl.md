[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/AuthStore](../index.md) / LogoutUrl

# Class: LogoutUrl

Defined in: stores/AuthStore.d.ts:96

## Extends

- `AuthUrl`\<[`LogoutParameters`](../type-aliases/LogoutParameters.md)\>

## Constructors

### Constructor

> **new LogoutUrl**(`beforeQuery`, `query`, `params`): `LogoutUrl`

Defined in: stores/AuthStore.d.ts:97

#### Parameters

##### beforeQuery

`string`

##### query

`string`

##### params

[`AuthParameters`](../interfaces/AuthParameters.md)

#### Returns

`LogoutUrl`

#### Overrides

`AuthUrl<LogoutParameters>.constructor`

## Properties

### beforeQuery

> `readonly` **beforeQuery**: `string`

Defined in: stores/AuthStore.d.ts:86

#### Inherited from

`AuthUrl.beforeQuery`

***

### params

> `readonly` **params**: [`AuthParameters`](../interfaces/AuthParameters.md)

Defined in: stores/AuthStore.d.ts:88

#### Inherited from

`AuthUrl.params`

***

### query

> `readonly` **query**: `string`

Defined in: stores/AuthStore.d.ts:87

#### Inherited from

`AuthUrl.query`

## Methods

### toString()

> **toString**(): `string`

Defined in: stores/AuthStore.d.ts:90

#### Returns

`string`

#### Inherited from

`AuthUrl.toString`
