[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/MountStore](../index.md) / MountedUrl

# Class: MountedUrl

Defined in: stores/MountStore.d.ts:15

## Constructors

### Constructor

> **new MountedUrl**(`url`, `mountConfig`): `MountedUrl`

Defined in: stores/MountStore.d.ts:21

#### Parameters

##### url

`string`

##### mountConfig

[`PageDefinition`](../../../perspective-client/interfaces/PageDefinition.md)

#### Returns

`MountedUrl`

## Properties

### expectedParams

> **expectedParams**: `Set`\<`string`\>

Defined in: stores/MountStore.d.ts:20

***

### mountPath

> **mountPath**: `string`

Defined in: stores/MountStore.d.ts:17

***

### parts

> **parts**: [`UrlPart`](../interfaces/UrlPart.md)[]

Defined in: stores/MountStore.d.ts:19

***

### title

> **title**: `string`

Defined in: stores/MountStore.d.ts:18

***

### viewPath

> **viewPath**: `string`

Defined in: stores/MountStore.d.ts:16

## Methods

### makeUrl()

> **makeUrl**(`params`): `string`

Defined in: stores/MountStore.d.ts:28

#### Parameters

##### params

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`string`

***

### match()

> **match**(`url`): `boolean` \| [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/MountStore.d.ts:27

Tests a URL string against this mounted URL. If the url matches, return value will be an object containing
any parameter names/values. Empty object if the url matches but there are no parameters specified.
If the url doesn't match, false is returned.

#### Parameters

##### url

`string`

#### Returns

`boolean` \| [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)
