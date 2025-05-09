[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/PageStore](../index.md) / ViewStoreFuture

# Class: ViewStoreFuture

Defined in: stores/PageStore.d.ts:79

Encapsulates the logic of the cancelable loading of view stores. View stores can take some time to load, so this
allows for monitoring of load progress and for cancelation in the case where the view store is no longer needed,
for example a view that was mounted and then unmounted before the view store finished loading.

## Constructors

### Constructor

> **new ViewStoreFuture**(`viewStore`, `loadMonitor?`): `ViewStoreFuture`

Defined in: stores/PageStore.d.ts:106

#### Parameters

##### viewStore

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

The view store we are building

##### loadMonitor?

[`ComponentLoadMonitor`](../../ComponentStoreLoader/interfaces/ComponentLoadMonitor.md)

Load monitor for monitoring progress of children loading. If specified, it indicates that
this future is part of a load-ahead. If not specified, one will be created.

#### Returns

`ViewStoreFuture`

## Properties

### finishedLoading

> **finishedLoading**: `boolean`

Defined in: stores/PageStore.d.ts:92

***

### useBatchNotify

> **useBatchNotify**: `boolean`

Defined in: stores/PageStore.d.ts:95

***

### viewStore

> `readonly` **viewStore**: [`ViewStore`](../../ViewStore/classes/ViewStore.md)

Defined in: stores/PageStore.d.ts:84

The viewStore that this future is working to prepare. Only legal to use this store after
finishedLoading becomes true

## Accessors

### instrumentation

#### Get Signature

> **get** **instrumentation**(): [`InstrumentationStore`](../../InstrumentationStore/classes/InstrumentationStore.md)

Defined in: stores/PageStore.d.ts:107

##### Returns

[`InstrumentationStore`](../../InstrumentationStore/classes/InstrumentationStore.md)

## Methods

### begin()

> **begin**(): `void`

Defined in: stores/PageStore.d.ts:108

#### Returns

`void`

***

### cancel()

> **cancel**(): `void`

Defined in: stores/PageStore.d.ts:111

#### Returns

`void`

***

### createLoadMonitor()

> **createLoadMonitor**(): [`ComponentLoadMonitor`](../../ComponentStoreLoader/interfaces/ComponentLoadMonitor.md)

Defined in: stores/PageStore.d.ts:109

#### Returns

[`ComponentLoadMonitor`](../../ComponentStoreLoader/interfaces/ComponentLoadMonitor.md)

***

### finished()

> **finished**(): `ViewStoreFuture`

Defined in: stores/PageStore.d.ts:110

#### Returns

`ViewStoreFuture`

***

### onProgress()

> **onProgress**(`callback`): `void`

Defined in: stores/PageStore.d.ts:120

Register a callback to be invoked periodically as the view is being loaded. Callback will be passed
the percentage of load completion, as a fraction 0.0 through 1.0

#### Parameters

##### callback

(`pctDone`) => `void`

#### Returns

`void`

***

### whenFinished()

> **whenFinished**(`callback`): `void`

Defined in: stores/PageStore.d.ts:115

Register a callback to be invoked when this future is finished and has the ViewStore ready.

#### Parameters

##### callback

(`viewStore`) => `void`

#### Returns

`void`

***

### batchNotify()

> `static` **batchNotify**(`notifications`): `void`

Defined in: stores/PageStore.d.ts:99

#### Parameters

##### notifications

`FinishedNotifications`

#### Returns

`void`

***

### batchProcess()

> `static` **batchProcess**(): `void`

Defined in: stores/PageStore.d.ts:100

#### Returns

`void`
