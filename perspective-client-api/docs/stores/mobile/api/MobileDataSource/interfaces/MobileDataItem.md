[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/mobile/api/MobileDataSource](../index.md) / MobileDataItem

# Interface: MobileDataItem\<D\>

Defined in: stores/mobile/api/MobileDataSource.d.ts:10

Interface that a minimal data value being received from the Native bridge will have.  The type of data `D` is
dependent on the MobileDataType

## Type Parameters

### D

`D` *extends* [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

## Properties

### config?

> `optional` **config**: [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/mobile/api/MobileDataSource.d.ts:14

***

### context?

> `optional` **context**: [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/mobile/api/MobileDataSource.d.ts:13

***

### data?

> `optional` **data**: `D`

Defined in: stores/mobile/api/MobileDataSource.d.ts:12

***

### type?

> `optional` **type**: [`MobileDataType`](../../MobileDataType/enumerations/MobileDataType.md)

Defined in: stores/mobile/api/MobileDataSource.d.ts:11
