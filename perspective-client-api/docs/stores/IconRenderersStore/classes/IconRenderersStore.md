[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/IconRenderersStore](../index.md) / IconRenderersStore

# Class: IconRenderersStore

Defined in: stores/IconRenderersStore.d.ts:15

This singleton store is an in memory cache of each type of icon ever loaded on the page.  Its purpose is to avoid having
every instance of an IconRenderer fetch icons html string, parse the string to valid html, and then parse it again to
create a React element.  Each instance on an IconRenderer must check with this store first to see if the desired
renderer configuration is available.  If not, this store will attempt to fetch and parse the icon and then notify
any icon renderer instances interested in said icon when it becomes available.

## Constructors

### Constructor

> **new IconRenderersStore**(): `IconRenderersStore`

Defined in: stores/IconRenderersStore.d.ts:20

#### Returns

`IconRenderersStore`

## Properties

### getCached()

> **getCached**: (`path`) => [`ICON_CACHE_VALUE`](../type-aliases/ICON_CACHE_VALUE.md)

Defined in: stores/IconRenderersStore.d.ts:24

#### Parameters

##### path

`string`

#### Returns

[`ICON_CACHE_VALUE`](../type-aliases/ICON_CACHE_VALUE.md)

## Methods

### requestCached()

> **requestCached**(`path`, `cb`): `void`

Defined in: stores/IconRenderersStore.d.ts:25

#### Parameters

##### path

`string`

##### cb

(`path`) => `void`

#### Returns

`void`
