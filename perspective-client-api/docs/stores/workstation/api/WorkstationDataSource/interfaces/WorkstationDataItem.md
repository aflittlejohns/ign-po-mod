[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/workstation/api/WorkstationDataSource](../index.md) / WorkstationDataItem

# Interface: WorkstationDataItem\<D\>

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:10

Interface that a minimal data value being received from the Native bridge will have.  The type of data `D` is
dependent on the WorkstationDataType

## Type Parameters

### D

`D` *extends* [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

## Properties

### config?

> `optional` **config**: [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:14

***

### context?

> `optional` **context**: [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:13

***

### data?

> `optional` **data**: `D`

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:12

***

### type?

> `optional` **type**: [`deviceInfo`](../../WorkstationDataType/enumerations/WorkstationDataType.md#deviceinfo)

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:11
