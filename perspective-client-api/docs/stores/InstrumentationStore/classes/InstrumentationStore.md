[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/InstrumentationStore](../index.md) / InstrumentationStore

# Class: InstrumentationStore

Defined in: stores/InstrumentationStore.d.ts:4

## Constructors

### Constructor

> **new InstrumentationStore**(): `InstrumentationStore`

#### Returns

`InstrumentationStore`

## Properties

### enabled

> **enabled**: `boolean`

Defined in: stores/InstrumentationStore.d.ts:5

## Methods

### begin()

> **begin**(`key`): [`Tracer`](../interfaces/Tracer.md)

Defined in: stores/InstrumentationStore.d.ts:9

#### Parameters

##### key

`string`

#### Returns

[`Tracer`](../interfaces/Tracer.md)

***

### report()

> **report**(): `void`

Defined in: stores/InstrumentationStore.d.ts:11

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: stores/InstrumentationStore.d.ts:10

#### Returns

`void`

***

### trace()

> **trace**(`message`): `void`

Defined in: stores/InstrumentationStore.d.ts:8

#### Parameters

##### message

`string`

#### Returns

`void`
