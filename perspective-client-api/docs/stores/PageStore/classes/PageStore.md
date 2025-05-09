[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/PageStore](../index.md) / PageStore

# Class: PageStore

Defined in: stores/PageStore.d.ts:132

PageStore keeps track of the current active views, and is used to maintain the rolling instance id
as new views are loaded/reloaded and shut down.

## Implements

- [`Printable`](../../../api/component/Printable/interfaces/Printable.md)

## Constructors

### Constructor

> **new PageStore**(`parent`): `PageStore`

Defined in: stores/PageStore.d.ts:152

#### Parameters

##### parent

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`PageStore`

## Properties

### \_appBarVisible

> **\_appBarVisible**: `boolean`

Defined in: stores/PageStore.d.ts:148

***

### \_pageTitle

> **\_pageTitle**: `any`

Defined in: stores/PageStore.d.ts:147

***

### \_theme

> **\_theme**: `string`

Defined in: stores/PageStore.d.ts:149

***

### dirtyViews

> **dirtyViews**: `Set`\<[`ViewStore`](../../ViewStore/classes/ViewStore.md)\>

Defined in: stores/PageStore.d.ts:139

***

### eventsToSync

> **eventsToSync**: [`EventFiredPayload`](../interfaces/EventFiredPayload.md)[]

Defined in: stores/PageStore.d.ts:141

***

### missingViewUpdates

> **missingViewUpdates**: `Map`\<`string`, `MissingViewUpdates`\>

Defined in: stores/PageStore.d.ts:138

***

### pageProps?

> `optional` **pageProps**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/PageStore.d.ts:146

***

### parent

> **parent**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/PageStore.d.ts:136

***

### pendingPropertyUpdates

> **pendingPropertyUpdates**: [`UpdatePayload`](../interfaces/UpdatePayload.md)[]

Defined in: stores/PageStore.d.ts:143

***

### pendingSync

> **pendingSync**: [`SyncRequest`](SyncRequest.md)

Defined in: stores/PageStore.d.ts:140

***

### sessionCustom?

> `optional` **sessionCustom**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/PageStore.d.ts:145

***

### sessionProps?

> `optional` **sessionProps**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/PageStore.d.ts:144

***

### unsubPageProps()

> **unsubPageProps**: () => `any`

Defined in: stores/PageStore.d.ts:150

#### Returns

`any`

***

### unsubSessionProps()

> **unsubSessionProps**: () => `any`

Defined in: stores/PageStore.d.ts:151

#### Returns

`any`

***

### views

> **views**: `ObservableMap`\<`string`, [`ViewStore`](../../ViewStore/classes/ViewStore.md)\>

Defined in: stores/PageStore.d.ts:137

## Accessors

### qualityIssues

#### Get Signature

> **get** **qualityIssues**(): [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)[]

Defined in: stores/PageStore.d.ts:238

##### Returns

[`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)[]

***

### theme

#### Get Signature

> **get** **theme**(): `string`

Defined in: stores/PageStore.d.ts:239

##### Returns

`string`

***

### viewCount

#### Get Signature

> **get** **viewCount**(): `number`

Defined in: stores/PageStore.d.ts:154

##### Returns

`number`

***

### viewLoadedCount

#### Get Signature

> **get** **viewLoadedCount**(): `number`

Defined in: stores/PageStore.d.ts:156

##### Returns

`number`

***

### viewLoadingCount

#### Get Signature

> **get** **viewLoadingCount**(): `number`

Defined in: stores/PageStore.d.ts:155

##### Returns

`number`

***

### gatewayAddress

#### Get Signature

> **get** `static` **gatewayAddress**(): `string`

Defined in: stores/PageStore.d.ts:162

##### Returns

`string`

## Methods

### \_findViewDef()

> **\_findViewDef**(`resourcePath`): [`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

Defined in: stores/PageStore.d.ts:227

#### Parameters

##### resourcePath

`string`

#### Returns

[`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

***

### \_isViewDefined()

> **\_isViewDefined**(`resourcePath`): `boolean`

Defined in: stores/PageStore.d.ts:228

#### Parameters

##### resourcePath

`string`

#### Returns

`boolean`

***

### \_newViewStore()

> **\_newViewStore**(`resourcePath`, `mountPath`, `definition`, `params`, `parent?`): [`ViewStore`](../../ViewStore/classes/ViewStore.md)

Defined in: stores/PageStore.d.ts:226

#### Parameters

##### resourcePath

`string`

##### mountPath

`string`

##### definition

[`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

##### params

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### parent?

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

#### Returns

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

***

### applyPagePropertyUpdates()

> **applyPagePropertyUpdates**(`pageUpdates`): `void`

Defined in: stores/PageStore.d.ts:164

#### Parameters

##### pageUpdates

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### applyPendingUpdates()

> **applyPendingUpdates**(): `void`

Defined in: stores/PageStore.d.ts:175

Any updates that come in while views are loading get stashed for later. Once the last view is finished
loading, its ViewStoreFuture will call back to this method to apply the stashed update(s) in the order
they were recevied.

#### Returns

`void`

***

### applyPropertyUpdates()

> **applyPropertyUpdates**(`payload`): `void`

Defined in: stores/PageStore.d.ts:176

#### Parameters

##### payload

[`UpdatePayload`](../interfaces/UpdatePayload.md)

#### Returns

`void`

***

### applySessionPropertyUpdates()

> **applySessionPropertyUpdates**(`sessionUpdates?`): `void`

Defined in: stores/PageStore.d.ts:163

#### Parameters

##### sessionUpdates?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### eventFiredFromGateway()

> **eventFiredFromGateway**(`payload`): `void`

Defined in: stores/PageStore.d.ts:177

#### Parameters

##### payload

[`EventFiredPayload`](../interfaces/EventFiredPayload.md)

#### Returns

`void`

***

### findView()

> **findView**(`resourcePath`, `mountPath`): [`ViewStore`](../../ViewStore/classes/ViewStore.md)

Defined in: stores/PageStore.d.ts:191

#### Parameters

##### resourcePath

`string`

##### mountPath

`string`

#### Returns

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

***

### initFromExistingState()

> **initFromExistingState**(`views`): `void`

Defined in: stores/PageStore.d.ts:184

We've received a 'session-init' message that contained the property structures of existing views.
We put these structures into a cache so that for the next 60 seconds, if these views are re-opened,
then they will be initialized with the state that already exists on the backend

#### Parameters

##### views

[`ViewSessionState`](../../../perspective-client/interfaces/ViewSessionState.md)[]

#### Returns

`void`

***

### initSessionProps()

> **initSessionProps**(`props?`, `custom?`, `pageProps?`, `def?`): `void`

Defined in: stores/PageStore.d.ts:158

Called as part of the 'client-start' message

#### Parameters

##### props?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### custom?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### pageProps?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### def?

[`SessionPropsDefinition`](../../ResourceStore/interfaces/SessionPropsDefinition.md)

#### Returns

`void`

***

### isLoadAheadSafe()

> **isLoadAheadSafe**(`parent`, `child`, `childIndex`): `boolean`

Defined in: stores/PageStore.d.ts:230

#### Parameters

##### parent

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

##### child

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

##### childIndex

`number`

#### Returns

`boolean`

***

### isOpen()

> **isOpen**(`resourcePath`, `mountPath`): `boolean`

Defined in: stores/PageStore.d.ts:192

#### Parameters

##### resourcePath

`string`

##### mountPath

`string`

#### Returns

`boolean`

***

### observeView()

> **observeView**(`path`, `onViewChanged`): () => `any`

Defined in: stores/PageStore.d.ts:197

Each View instance (View.tsx) will observe its own view path in this way. When the view config changes
(project updated), the View will stop and start itself, thus getting the new config from startView.

#### Parameters

##### path

`string`

##### onViewChanged

() => `any`

#### Returns

> (): `any`

##### Returns

`any`

***

### onClientReconnect()

> **onClientReconnect**(`updates`): `void`

Defined in: stores/PageStore.d.ts:167

#### Parameters

##### updates

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### onEventFired()

> **onEventFired**(`event`): `void`

Defined in: stores/PageStore.d.ts:178

#### Parameters

##### event

[`EventFiredPayload`](../interfaces/EventFiredPayload.md)

#### Returns

`void`

***

### onFileDownload()

> **onFileDownload**(`payload`): `void`

Defined in: stores/PageStore.d.ts:169

#### Parameters

##### payload

[`FileDownloadPayload`](../../../perspective-client/interfaces/FileDownloadPayload.md)

#### Returns

`void`

***

### onPagePropsChange()

> **onPagePropsChange**(`tree`): `void`

Defined in: stores/PageStore.d.ts:159

#### Parameters

##### tree

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### onPropWrite()

> **onPropWrite**(`propType`, `dataModel`): `void`

Defined in: stores/PageStore.d.ts:165

#### Parameters

##### propType

[`PropertyType`](../../../api/property/PropertyType/enumerations/PropertyType.md)

##### dataModel

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### onSessionPropsChange()

> **onSessionPropsChange**(`tree`): `void`

Defined in: stores/PageStore.d.ts:160

#### Parameters

##### tree

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### onViewWrite()

> **onViewWrite**(`store`): `void`

Defined in: stores/PageStore.d.ts:235

This is called by individual views as notification that a PropertyTree has been written to, and the view
now contains a dirty component and requires a sync.

#### Parameters

##### store

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

#### Returns

`void`

***

### reloadSymbolStyles()

> **reloadSymbolStyles**(): `void`

Defined in: stores/PageStore.d.ts:161

#### Returns

`void`

***

### requestPrint()

> **requestPrint**(`props?`): `void`

Defined in: stores/PageStore.d.ts:153

#### Parameters

##### props?

[`PrintProps`](../../../api/component/Printable/type-aliases/PrintProps.md)

#### Returns

`void`

#### Implementation of

[`Printable`](../../../api/component/Printable/interfaces/Printable.md).[`requestPrint`](../../../api/component/Printable/interfaces/Printable.md#requestprint)

***

### requestSync()

> **requestSync**(): `void`

Defined in: stores/PageStore.d.ts:236

#### Returns

`void`

***

### sendResynchronizeViews()

> **sendResynchronizeViews**(): `void`

Defined in: stores/PageStore.d.ts:190

Sends a 're-sync-views' message that contains the views that are currently running along with their
input parameters and mount locations. This is sent when reconnecting to an existing session, so that
the backend can shut down any ViewModels it has running that aren't open anymore, and update any that are.

#### Returns

`void`

***

### startView()

> **startView**(`resourcePath`, `mountPath`, `params`, `parent?`, `loadMonitor?`): [`ViewStoreFuture`](ViewStoreFuture.md)

Defined in: stores/PageStore.d.ts:225

Called when a View starts up. Creates the store for the view. If the view doesn't exist, this will throw an
error.

#### Parameters

##### resourcePath

`string`

Path of the resource in the project.

##### mountPath

`string`

represents where in the visual hierarchy this view is mounted

##### params

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

a map of key:value for the names of the parameters mapped to the value objects

##### parent?

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

optional parent store to check for view cycles

##### loadMonitor?

[`ComponentLoadMonitor`](../../ComponentStoreLoader/interfaces/ComponentLoadMonitor.md)

if this view is being loaded as part of a load-ahead optimization, this is the load monitor
for the top-most view in the load-ahead stack.

#### Returns

[`ViewStoreFuture`](ViewStoreFuture.md)

the new store for the requested view.

***

### startViewLoadAhead()

> **startViewLoadAhead**(`resourcePath`, `mountPath`, `params`, `parent`, `loadMonitor`): `Promise`\<[`ViewStore`](../../ViewStore/classes/ViewStore.md)\>

Defined in: stores/PageStore.d.ts:212

A special version of startView that is used in the load-ahead process. Returns a Promise<ViewStore>
    so that it can be called in an async function.

#### Parameters

##### resourcePath

`string`

##### mountPath

`string`

##### params

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### parent

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

##### loadMonitor

[`ComponentLoadMonitor`](../../ComponentStoreLoader/interfaces/ComponentLoadMonitor.md)

#### Returns

`Promise`\<[`ViewStore`](../../ViewStore/classes/ViewStore.md)\>

***

### stopView()

> **stopView**(`store`): `void`

Defined in: stores/PageStore.d.ts:229

#### Parameters

##### store

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

#### Returns

`void`

***

### sync()

> **sync**(): `void`

Defined in: stores/PageStore.d.ts:237

#### Returns

`void`

***

### hasViewCycle()

> `static` **hasViewCycle**(`resourcePath`, `parent`): `boolean`

Defined in: stores/PageStore.d.ts:198

#### Parameters

##### resourcePath

`string`

##### parent

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

#### Returns

`boolean`

***

### instanceKeyFor()

> `static` **instanceKeyFor**(`resourcePath`, `mountPath`): `string`

Defined in: stores/PageStore.d.ts:240

#### Parameters

##### resourcePath

`any`

##### mountPath

`string`

#### Returns

`string`
