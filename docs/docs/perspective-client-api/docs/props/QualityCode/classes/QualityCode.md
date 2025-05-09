[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [props/QualityCode](../index.md) / QualityCode

# Class: QualityCode

Defined in: props/QualityCode.d.ts:13

## Constructors

### Constructor

> **new QualityCode**(`code`, `diagnosticMessage?`): `QualityCode`

Defined in: props/QualityCode.d.ts:16

#### Parameters

##### code

`number`

##### diagnosticMessage?

`string`

#### Returns

`QualityCode`

## Properties

### code

> **code**: `number`

Defined in: props/QualityCode.d.ts:14

***

### diagnosticMessage

> **diagnosticMessage**: `string`

Defined in: props/QualityCode.d.ts:15

## Accessors

### level

#### Get Signature

> **get** **level**(): `"Good"` \| `"Uncertain"` \| `"Bad"` \| `"Error"`

Defined in: props/QualityCode.d.ts:20

Returns a string representing the severity level of this quality code

##### Returns

`"Good"` \| `"Uncertain"` \| `"Bad"` \| `"Error"`

## Methods

### equals()

> **equals**(`other?`): `boolean`

Defined in: props/QualityCode.d.ts:21

#### Parameters

##### other?

`QualityCode`

#### Returns

`boolean`

***

### isBad()

> **isBad**(): `boolean`

Defined in: props/QualityCode.d.ts:24

#### Returns

`boolean`

***

### isBadOrError()

> **isBadOrError**(): `boolean`

Defined in: props/QualityCode.d.ts:27

#### Returns

`boolean`

***

### isError()

> **isError**(): `boolean`

Defined in: props/QualityCode.d.ts:25

#### Returns

`boolean`

***

### isGood()

> **isGood**(): `boolean`

Defined in: props/QualityCode.d.ts:22

#### Returns

`boolean`

***

### isNotGood()

> **isNotGood**(): `boolean`

Defined in: props/QualityCode.d.ts:26

#### Returns

`boolean`

***

### isPending()

> **isPending**(): `boolean`

Defined in: props/QualityCode.d.ts:28

#### Returns

`boolean`

***

### isUncertain()

> **isUncertain**(): `boolean`

Defined in: props/QualityCode.d.ts:23

#### Returns

`boolean`

***

### toString()

> **toString**(): `string`

Defined in: props/QualityCode.d.ts:29

#### Returns

`string`
