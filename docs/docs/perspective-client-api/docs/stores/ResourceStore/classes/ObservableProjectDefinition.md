[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ResourceStore](../index.md) / ObservableProjectDefinition

# Class: ObservableProjectDefinition

Defined in: stores/ResourceStore.d.ts:240

## Constructors

### Constructor

> **new ObservableProjectDefinition**(`def`): `ObservableProjectDefinition`

Defined in: stores/ResourceStore.d.ts:256

#### Parameters

##### def

[`ProjectDefinition`](../interfaces/ProjectDefinition.md)

#### Returns

`ObservableProjectDefinition`

## Properties

### description

> **description**: `string`

Defined in: stores/ResourceStore.d.ts:243

***

### idleProps

> **idleProps**: [`IdleTimeoutProps`](../interfaces/IdleTimeoutProps.md)

Defined in: stores/ResourceStore.d.ts:250

***

### keyEvents

> **keyEvents**: [`KeyEventConfigData`](../../KeyEventStore/interfaces/KeyEventConfigData.md)

Defined in: stores/ResourceStore.d.ts:252

***

### lastModified

> **lastModified**: `number`

Defined in: stores/ResourceStore.d.ts:245

***

### lastModifiedBy

> **lastModifiedBy**: `string`

Defined in: stores/ResourceStore.d.ts:244

***

### name

> **name**: `string`

Defined in: stores/ResourceStore.d.ts:241

***

### pageConfig

> **pageConfig**: [`PagesDefinition`](../../../perspective-client/interfaces/PagesDefinition.md)

Defined in: stores/ResourceStore.d.ts:247

***

### props

> **props**: [`ProjectGeneralProps`](../interfaces/ProjectGeneralProps.md)

Defined in: stores/ResourceStore.d.ts:248

***

### sessionProps

> **sessionProps**: [`SessionPropsDefinition`](../interfaces/SessionPropsDefinition.md)

Defined in: stores/ResourceStore.d.ts:249

***

### subscribe

> `readonly` **subscribe**: [`SubscriptionHandler`](../../../api/subscription/Subscription/type-aliases/SubscriptionHandler.md)

Defined in: stores/ResourceStore.d.ts:254

***

### symbolProps

> **symbolProps**: `any`

Defined in: stores/ResourceStore.d.ts:251

***

### title

> **title**: `string`

Defined in: stores/ResourceStore.d.ts:242

***

### views

> **views**: `Map`\<`string`, [`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)\>

Defined in: stores/ResourceStore.d.ts:246

## Methods

### applyDiff()

> **applyDiff**(`diff`): `void`

Defined in: stores/ResourceStore.d.ts:261

Called by ResourceStore.onUpdateProjectNow() after the diff of the project has been downloaded, it gets
sent to this method assuming it is an actual diff not a new copy of a project (i.e. matching uuids)

#### Parameters

##### diff

[`ProjectDiff`](../interfaces/ProjectDiff.md)

#### Returns

`void`
