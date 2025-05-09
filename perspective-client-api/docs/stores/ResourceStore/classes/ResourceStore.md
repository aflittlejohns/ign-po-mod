[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ResourceStore](../index.md) / ResourceStore

# Class: ResourceStore

Defined in: stores/ResourceStore.d.ts:108

## Constructors

### Constructor

> **new ResourceStore**(`client`): `ResourceStore`

Defined in: stores/ResourceStore.d.ts:153

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`ResourceStore`

## Properties

### assetDigests

> **assetDigests**: `Map`\<`string`, `string`\>

Defined in: stores/ResourceStore.d.ts:152

***

### client

> **client**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/ResourceStore.d.ts:109

***

### loadedResources

> **loadedResources**: `Set`\<`string`\>

Defined in: stores/ResourceStore.d.ts:139

ProjectConfigs are evaluated each time they are downloaded - whether a diff or a full project - to determine
any resources required by the Components in the project.  Each resources is collected through a http.get(),
and upon response completion, appended to the head of the dom.  When complete, the resource is added to this
Set, which is checked before subsequently downloading needed resources.

***

### loading

> **loading**: `boolean`

Defined in: stores/ResourceStore.d.ts:118

Flag which becomes true when the initial copy of the project is being downloaded.

***

### loadingUpdate

> **loadingUpdate**: `boolean`

Defined in: stores/ResourceStore.d.ts:126

Flag which becomes true when the client is currently downloading a project update.

***

### pendingUpdate

> **pendingUpdate**: [`PendingUpdate`](../interfaces/PendingUpdate.md)

Defined in: stores/ResourceStore.d.ts:122

Flag which becomes true when there is an update waiting for us on the gateway.

***

### project

> **project**: [`ObservableProjectDefinition`](ObservableProjectDefinition.md)

Defined in: stores/ResourceStore.d.ts:111

***

### projectDownloadProgress

> **projectDownloadProgress**: `number`

Defined in: stores/ResourceStore.d.ts:132

When downloading an update, this number will be < 0 when the progress is unknown, and otherwise will indicate
the download progress as a number between 0 and 100

***

### projectName

> **projectName**: `string`

Defined in: stores/ResourceStore.d.ts:110

***

### requiredResourceCount

> **requiredResourceCount**: `number`

Defined in: stores/ResourceStore.d.ts:149

Number of total initial required resources - for loading progress purposes

***

### requiredResources

> **requiredResources**: `Map`\<`string`, [`BrowserResource`](../interfaces/BrowserResource.md)\>

Defined in: stores/ResourceStore.d.ts:145

This list contains all the resources which are required to be downloaded before the project can start up.  It is
populated based by looking through the ProjectConfig when a project or project diff is received.
This set of BrowserResources should be empty when the client is loaded and running.

***

### resourceLoader

> **resourceLoader**: [`ResourceLoader`](ResourceLoader.md)

Defined in: stores/ResourceStore.d.ts:151

***

### snapshot

> **snapshot**: `EffectiveProjectSnapshot`

Defined in: stores/ResourceStore.d.ts:112

***

### styleHash

> **styleHash**: `string`

Defined in: stores/ResourceStore.d.ts:113

***

### symbolStyleHash

> **symbolStyleHash**: `string`

Defined in: stores/ResourceStore.d.ts:114

***

### translationResource

> **translationResource**: `TranslationResource`

Defined in: stores/ResourceStore.d.ts:150

***

### updateStatusMessage

> **updateStatusMessage**: `string`

Defined in: stores/ResourceStore.d.ts:127

## Accessors

### isProjectLoaded

#### Get Signature

> **get** **isProjectLoaded**(): `boolean`

Defined in: stores/ResourceStore.d.ts:201

##### Returns

`boolean`

***

### isStaging

#### Get Signature

> **get** **isStaging**(): `boolean`

Defined in: stores/ResourceStore.d.ts:203

##### Returns

`boolean`

***

### isUpdateAvailable

#### Get Signature

> **get** **isUpdateAvailable**(): `boolean`

Defined in: stores/ResourceStore.d.ts:204

##### Returns

`boolean`

***

### resourcesLoaded

#### Get Signature

> **get** **resourcesLoaded**(): `boolean`

Defined in: stores/ResourceStore.d.ts:202

##### Returns

`boolean`

***

### translationSettings

#### Get Signature

> **get** **translationSettings**(): [`TranslationSettings`](../interfaces/TranslationSettings.md)

Defined in: stores/ResourceStore.d.ts:205

##### Returns

[`TranslationSettings`](../interfaces/TranslationSettings.md)

## Methods

### fetchProject()

> **fetchProject**(): `Promise`\<`AxiosResponse`\>

Defined in: stores/ResourceStore.d.ts:174

#### Returns

`Promise`\<`AxiosResponse`\>

***

### findView()

> **findView**(`path`): [`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

Defined in: stores/ResourceStore.d.ts:206

#### Parameters

##### path

`string`

#### Returns

[`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

***

### observeView()

> **observeView**(`path`, `onViewChanged`): () => `any`

Defined in: stores/ResourceStore.d.ts:207

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

### onBrowserResourceLoaded()

> **onBrowserResourceLoaded**(`resourceName`): `void`

Defined in: stores/ResourceStore.d.ts:208

#### Parameters

##### resourceName

`string`

#### Returns

`void`

***

### onProjectUpdateReady()

> **onProjectUpdateReady**(`json`): `void`

Defined in: stores/ResourceStore.d.ts:179

Called when we receive the 'project-update-ready' message from the gateway. Only happens if the project is
configured for "Notify" update mode.

#### Parameters

##### json

[`PendingUpdate`](../interfaces/PendingUpdate.md)

#### Returns

`void`

***

### onUpdateProjectNow()

> **onUpdateProjectNow**(): `void`

Defined in: stores/ResourceStore.d.ts:188

Called when we receive the 'update-project' message back from the gateway

#### Returns

`void`

***

### requestProject()

> **requestProject**(): `Promise`\<`boolean`\>

Defined in: stores/ResourceStore.d.ts:173

#### Returns

`Promise`\<`boolean`\>

***

### requestTheme()

> **requestTheme**(`themeName`): `void`

Defined in: stores/ResourceStore.d.ts:191

#### Parameters

##### themeName

`string`

#### Returns

`void`

***

### updateProject()

> **updateProject**(): `void`

Defined in: stores/ResourceStore.d.ts:184

Called by the UI when the user is ready to update. Bounces the update signal through the gateway so that all
open tabs update simultaneously.

#### Returns

`void`
