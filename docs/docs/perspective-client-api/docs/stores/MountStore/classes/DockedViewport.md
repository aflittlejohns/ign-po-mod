[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/MountStore](../index.md) / DockedViewport

# Class: DockedViewport

Defined in: stores/MountStore.d.ts:55

## Constructors

### Constructor

> **new DockedViewport**(`position`, `mounts`): `DockedViewport`

Defined in: stores/MountStore.d.ts:66

#### Parameters

##### position

[`DockPosition`](../../../perspective-client/enumerations/DockPosition.md)

##### mounts

[`MountStore`](MountStore.md)

#### Returns

`DockedViewport`

## Properties

### \_views

> **\_views**: [`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)[]

Defined in: stores/MountStore.d.ts:65

***

### code

> **code**: `string`

Defined in: stores/MountStore.d.ts:58

***

### currentViewIndex

> **currentViewIndex**: `IObservableValue`\<`number`\>

Defined in: stores/MountStore.d.ts:59

***

### enableHandles

> **enableHandles**: `boolean`

Defined in: stores/MountStore.d.ts:62

***

### expanded

> **expanded**: `boolean`

Defined in: stores/MountStore.d.ts:60

***

### focus

> **focus**: `boolean`

Defined in: stores/MountStore.d.ts:61

***

### isResizing

> **isResizing**: `boolean`

Defined in: stores/MountStore.d.ts:64

***

### modallyActive

> **modallyActive**: `boolean`

Defined in: stores/MountStore.d.ts:63

***

### mountStore

> **mountStore**: [`MountStore`](MountStore.md)

Defined in: stores/MountStore.d.ts:56

***

### position

> **position**: [`DockPosition`](../../../perspective-client/enumerations/DockPosition.md)

Defined in: stores/MountStore.d.ts:57

## Accessors

### activeView

#### Get Signature

> **get** **activeView**(): [`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)

Defined in: stores/MountStore.d.ts:71

##### Returns

[`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)

***

### cornerPriority

#### Get Signature

> **get** **cornerPriority**(): [`DocksDefinitionCornerPriority`](../../../perspective-client/enumerations/DocksDefinitionCornerPriority.md)

Defined in: stores/MountStore.d.ts:70

##### Returns

[`DocksDefinitionCornerPriority`](../../../perspective-client/enumerations/DocksDefinitionCornerPriority.md)

***

### hasContent

#### Get Signature

> **get** **hasContent**(): `boolean`

Defined in: stores/MountStore.d.ts:82

##### Returns

`boolean`

***

### hasFocus

#### Get Signature

> **get** **hasFocus**(): `boolean`

Defined in: stores/MountStore.d.ts:77

##### Returns

`boolean`

***

### views

#### Get Signature

> **get** **views**(): [`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)[]

Defined in: stores/MountStore.d.ts:72

##### Returns

[`DockedViewDefinition`](../../../perspective-client/interfaces/DockedViewDefinition.md)[]

## Methods

### adjustSize()

> **adjustSize**(`size`): `void`

Defined in: stores/MountStore.d.ts:73

#### Parameters

##### size

`number`

#### Returns

`void`

***

### collapseDock()

> **collapseDock**(): `void`

Defined in: stores/MountStore.d.ts:79

#### Returns

`void`

***

### configShouldExpand()

> **configShouldExpand**(): `boolean`

Defined in: stores/MountStore.d.ts:69

#### Returns

`boolean`

***

### expandDock()

> **expandDock**(): `void`

Defined in: stores/MountStore.d.ts:74

#### Returns

`void`

***

### expandWithConfig()

> **expandWithConfig**(`config`): `void`

Defined in: stores/MountStore.d.ts:78

#### Parameters

##### config

[`DockActionConfig`](../../../action/DockAction/interfaces/DockActionConfig.md)

#### Returns

`void`

***

### focusDock()

> **focusDock**(): `void`

Defined in: stores/MountStore.d.ts:75

#### Returns

`void`

***

### hideToggleHandles()

> **hideToggleHandles**(): `void`

Defined in: stores/MountStore.d.ts:81

#### Returns

`void`

***

### setActiveView()

> **setActiveView**(): `void`

Defined in: stores/MountStore.d.ts:68

#### Returns

`void`

***

### setViews()

> **setViews**(): `void`

Defined in: stores/MountStore.d.ts:67

#### Returns

`void`

***

### showToggleHandles()

> **showToggleHandles**(): `void`

Defined in: stores/MountStore.d.ts:80

#### Returns

`void`

***

### unFocusDock()

> **unFocusDock**(): `void`

Defined in: stores/MountStore.d.ts:76

#### Returns

`void`
