[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [props/Dataset](../index.md) / Dataset

# Class: Dataset

Defined in: props/Dataset.d.ts:27

Implementation of Ignition's dataset model in javascript. This object is iterable, so the rows can be looped over
using a "for-of" loop, like: for (let row of dataset) ...

## Constructors

### Constructor

> **new Dataset**(`columns`): `Dataset`

Defined in: props/Dataset.d.ts:31

#### Parameters

##### columns

`any`[]

#### Returns

`Dataset`

## Properties

### \[iterator\]()

> **\[iterator\]**: () => `IterableIterator`\<`any`\>

Defined in: props/Dataset.d.ts:30

#### Returns

`IterableIterator`\<`any`\>

***

### columns

> **columns**: [`Column`](Column.md)[]

Defined in: props/Dataset.d.ts:28

***

### rowCount

> **rowCount**: `number`

Defined in: props/Dataset.d.ts:29

## Accessors

### columnCount

#### Get Signature

> **get** **columnCount**(): `number`

Defined in: props/Dataset.d.ts:37

##### Returns

`number`

## Methods

### createRowIterator()

> **createRowIterator**(): `IterableIterator`\<`any`\>

Defined in: props/Dataset.d.ts:36

#### Returns

`IterableIterator`\<`any`\>

***

### getColumnName()

> **getColumnName**(`c`): `string`

Defined in: props/Dataset.d.ts:32

#### Parameters

##### c

`number`

#### Returns

`string`

***

### getColumnNames()

> **getColumnNames**(): `string`[]

Defined in: props/Dataset.d.ts:33

#### Returns

`string`[]

***

### getColumnType()

> **getColumnType**(`c`): [`ColumnType`](../enumerations/ColumnType.md)

Defined in: props/Dataset.d.ts:34

#### Parameters

##### c

`number`

#### Returns

[`ColumnType`](../enumerations/ColumnType.md)

***

### getColumnTypes()

> **getColumnTypes**(): `Map`\<`string`, [`ColumnType`](../enumerations/ColumnType.md)\>

Defined in: props/Dataset.d.ts:35

#### Returns

`Map`\<`string`, [`ColumnType`](../enumerations/ColumnType.md)\>
