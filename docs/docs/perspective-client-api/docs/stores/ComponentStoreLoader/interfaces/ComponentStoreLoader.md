[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ComponentStoreLoader](../index.md) / ComponentStoreLoader

# Interface: ComponentStoreLoader

Defined in: stores/ComponentStoreLoader.d.ts:6

## Properties

### loadMonitor

> **loadMonitor**: [`ComponentLoadMonitor`](ComponentLoadMonitor.md)

Defined in: stores/ComponentStoreLoader.d.ts:9

## Methods

### cancel()

> **cancel**(): `void`

Defined in: stores/ComponentStoreLoader.d.ts:8

#### Returns

`void`

***

### loadChildren()

> **loadChildren**(`children`, `makeStore`): `Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]\>

Defined in: stores/ComponentStoreLoader.d.ts:7

#### Parameters

##### children

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)[]

##### makeStore

[`ComponentStoreMaker`](ComponentStoreMaker.md)

#### Returns

`Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]\>
