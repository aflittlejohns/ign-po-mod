[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ComponentStoreLoader](../index.md) / MeteredComponentStoreLoader

# Class: MeteredComponentStoreLoader

Defined in: stores/ComponentStoreLoader.d.ts:21

## Implements

- [`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md)

## Constructors

### Constructor

> **new MeteredComponentStoreLoader**(`chunkCount`, `monitor`): `MeteredComponentStoreLoader`

Defined in: stores/ComponentStoreLoader.d.ts:25

#### Parameters

##### chunkCount

`number`

##### monitor

[`ComponentLoadMonitor`](../interfaces/ComponentLoadMonitor.md)

#### Returns

`MeteredComponentStoreLoader`

## Properties

### chunkCount

> **chunkCount**: `number`

Defined in: stores/ComponentStoreLoader.d.ts:23

***

### loadMonitor

> **loadMonitor**: [`ComponentLoadMonitor`](../interfaces/ComponentLoadMonitor.md)

Defined in: stores/ComponentStoreLoader.d.ts:24

#### Implementation of

[`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md).[`loadMonitor`](../interfaces/ComponentStoreLoader.md#loadmonitor)

***

### running

> **running**: `boolean`

Defined in: stores/ComponentStoreLoader.d.ts:22

## Methods

### cancel()

> **cancel**(): `void`

Defined in: stores/ComponentStoreLoader.d.ts:26

#### Returns

`void`

#### Implementation of

[`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md).[`cancel`](../interfaces/ComponentStoreLoader.md#cancel)

***

### loadChildren()

> **loadChildren**(`children`, `makeStore`): `Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]\>

Defined in: stores/ComponentStoreLoader.d.ts:27

#### Parameters

##### children

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)[]

##### makeStore

[`ComponentStoreMaker`](../interfaces/ComponentStoreMaker.md)

#### Returns

`Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]\>

#### Implementation of

[`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md).[`loadChildren`](../interfaces/ComponentStoreLoader.md#loadchildren)
