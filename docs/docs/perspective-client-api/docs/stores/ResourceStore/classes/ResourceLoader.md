[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ResourceStore](../index.md) / ResourceLoader

# Class: ResourceLoader

Defined in: stores/ResourceStore.d.ts:270

This class wraps the functionality of:
1. Fetching the resources (js and css) required by the project
2. Attaching the resources to the page
3. executing the progressWatcher() upon the completion of each resource being loaded.

## Constructors

### Constructor

> **new ResourceLoader**(`progressWatcher`): `ResourceLoader`

Defined in: stores/ResourceStore.d.ts:274

#### Parameters

##### progressWatcher

(`itemLoaded`) => `void`

#### Returns

`ResourceLoader`

## Methods

### fetchResource()

> **fetchResource**(`resource`): `Promise`\<`AxiosResponse`\>

Defined in: stores/ResourceStore.d.ts:276

#### Parameters

##### resource

[`BrowserResource`](../interfaces/BrowserResource.md)

#### Returns

`Promise`\<`AxiosResponse`\>

***

### loadResources()

> **loadResources**(`toLoad`): `Promise`\<`boolean`\>

Defined in: stores/ResourceStore.d.ts:290

#### Parameters

##### toLoad

[`BrowserResource`](../interfaces/BrowserResource.md)[]

#### Returns

`Promise`\<`boolean`\>

***

### loadScript()

> **loadScript**(`resource`): `Promise`\<`string`\>

Defined in: stores/ResourceStore.d.ts:289

#### Parameters

##### resource

[`BrowserResource`](../interfaces/BrowserResource.md)

#### Returns

`Promise`\<`string`\>

***

### loadStyle()

> **loadStyle**(`resource`): `Promise`\<`string`\>

Defined in: stores/ResourceStore.d.ts:288

#### Parameters

##### resource

[`BrowserResource`](../interfaces/BrowserResource.md)

#### Returns

`Promise`\<`string`\>

***

### updateStyleLink()

> **updateStyleLink**(`url?`, `routeSubstring?`): `void`

Defined in: stores/ResourceStore.d.ts:284

Updates the `<link>` element that loads the perspective named styles css.  If url is undefined and the route
substring is 'style-classes', calling this method will act to place the named style css at the end of the head
element in order to make sure it's last in the css cascade (so that it overrides default css).

#### Parameters

##### url?

`string`

the url of the style classes, dynamically generated from the gateway.  May be undefined.

##### routeSubstring?

`string`

the path to the css resource

#### Returns

`void`

***

### updateSymbolsLink()

> **updateSymbolsLink**(`url`): `void`

Defined in: stores/ResourceStore.d.ts:285

#### Parameters

##### url

`string`

#### Returns

`void`

***

### updateThemeLink()

> **updateThemeLink**(`theme`): `void`

Defined in: stores/ResourceStore.d.ts:286

#### Parameters

##### theme

`string`

#### Returns

`void`

***

### buildResourceUri()

> `static` **buildResourceUri**(`resource`): `string`

Defined in: stores/ResourceStore.d.ts:287

#### Parameters

##### resource

[`BrowserResource`](../interfaces/BrowserResource.md)

#### Returns

`string`

***

### withNoCache()

> `static` **withNoCache**(`filename`): `string`

Defined in: stores/ResourceStore.d.ts:275

#### Parameters

##### filename

`string`

#### Returns

`string`
