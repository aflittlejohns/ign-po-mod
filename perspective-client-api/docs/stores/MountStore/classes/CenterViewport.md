[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/MountStore](../index.md) / CenterViewport

# Class: CenterViewport

Defined in: stores/MountStore.d.ts:30

## Constructors

### Constructor

> **new CenterViewport**(`history`): `CenterViewport`

Defined in: stores/MountStore.d.ts:40

#### Parameters

##### history

`History`

#### Returns

`CenterViewport`

## Properties

### code

> **code**: `string`

Defined in: stores/MountStore.d.ts:36

***

### hasContent

> **hasContent**: `boolean`

Defined in: stores/MountStore.d.ts:37

***

### history

> **history**: `History`

Defined in: stores/MountStore.d.ts:39

***

### isDockResizing

> **isDockResizing**: `boolean`

Defined in: stores/MountStore.d.ts:34

***

### mounts

> **mounts**: [`MountedUrl`](MountedUrl.md)[]

Defined in: stores/MountStore.d.ts:35

***

### pageTitle

> **pageTitle**: `string`

Defined in: stores/MountStore.d.ts:32

***

### updateDocks()

> **updateDocks**: () => `any`

Defined in: stores/MountStore.d.ts:38

#### Returns

`any`

***

### viewParams

> **viewParams**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/MountStore.d.ts:33

***

### viewPath

> **viewPath**: `string`

Defined in: stores/MountStore.d.ts:31

## Methods

### init()

> **init**(`config`, `updateDocks`): `void`

Defined in: stores/MountStore.d.ts:41

#### Parameters

##### config

[`ObservableProjectDefinition`](../../ResourceStore/classes/ObservableProjectDefinition.md)

##### updateDocks

() => `any`

#### Returns

`void`

***

### navigateToView()

> **navigateToView**(`viewPath`, `viewParams?`): `void`

Defined in: stores/MountStore.d.ts:53

Can by called by other parts of the API to navigate to a view with a given set of params. Navigating in this way
will change the primary view without changing the url path.

#### Parameters

##### viewPath

`string`

##### viewParams?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### onPathChanged()

> **onPathChanged**(`newPath`): `void`

Defined in: stores/MountStore.d.ts:48

Reacts to a new URL being pushed onto the history stack. Looks through the mounted url configuration
to figure out which view to mount and what the parameter values are.

#### Parameters

##### newPath

`string`

#### Returns

`void`

***

### sortMounts()

> **sortMounts**(): `void`

Defined in: stores/MountStore.d.ts:43

#### Returns

`void`

***

### updateMounts()

> **updateMounts**(`config`): `void`

Defined in: stores/MountStore.d.ts:42

#### Parameters

##### config

[`PagesDefinition`](../../../perspective-client/interfaces/PagesDefinition.md)

#### Returns

`void`
