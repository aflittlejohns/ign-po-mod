[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ComponentStoreLoader](../index.md) / SynchroComponentStoreLoader

# Class: SynchroComponentStoreLoader

Defined in: stores/ComponentStoreLoader.d.ts:14

## Implements

- [`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md)

## Constructors

### Constructor

> **new SynchroComponentStoreLoader**(`monitor`): `SynchroComponentStoreLoader`

Defined in: stores/ComponentStoreLoader.d.ts:17

#### Parameters

##### monitor

[`ComponentLoadMonitor`](../interfaces/ComponentLoadMonitor.md)

#### Returns

`SynchroComponentStoreLoader`

## Properties

### loadMonitor

> **loadMonitor**: [`ComponentLoadMonitor`](../interfaces/ComponentLoadMonitor.md)

Defined in: stores/ComponentStoreLoader.d.ts:16

#### Implementation of

[`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md).[`loadMonitor`](../interfaces/ComponentStoreLoader.md#loadmonitor)

***

### running

> **running**: `boolean`

Defined in: stores/ComponentStoreLoader.d.ts:15

## Methods

### cancel()

> **cancel**(): `void`

Defined in: stores/ComponentStoreLoader.d.ts:19

#### Returns

`void`

#### Implementation of

[`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md).[`cancel`](../interfaces/ComponentStoreLoader.md#cancel)

***

### loadChildren()

> **loadChildren**(`children`, `makeStore`): `Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]\>

Defined in: stores/ComponentStoreLoader.d.ts:18

#### Parameters

##### children

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)[]

##### makeStore

[`ComponentStoreMaker`](../interfaces/ComponentStoreMaker.md)

#### Returns

`Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]\>

#### Implementation of

[`ComponentStoreLoader`](../interfaces/ComponentStoreLoader.md).[`loadChildren`](../interfaces/ComponentStoreLoader.md#loadchildren)
