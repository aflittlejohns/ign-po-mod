[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ComponentStore](../index.md) / HOCWrapperState

# Interface: HOCWrapperState

Defined in: stores/ComponentStore.d.ts:185

## Extends

- `Partial`\<[`ComponentProps`](../../../api/component/Component/interfaces/ComponentProps.md)\<[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)\>\>

## Properties

### componentEvents?

> `optional` **componentEvents**: [`ComponentEvents`](../../../event/ComponentEvents/classes/ComponentEvents.md)

Defined in: api/component/Component.d.ts:16

#### Inherited from

`Partial.componentEvents`

***

### coOptQualities

> **coOptQualities**: `Map`\<`string`, [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)\>

Defined in: stores/ComponentStore.d.ts:193

***

### custom

> **custom**: `any`

Defined in: stores/ComponentStore.d.ts:190

#### Overrides

`Partial.custom`

***

### def?

> `optional` **def**: [`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

Defined in: api/component/Component.d.ts:17

#### Inherited from

`Partial.def`

***

### delegate

> **delegate**: `any`

Defined in: stores/ComponentStore.d.ts:187

#### Overrides

`Partial.delegate`

***

### domEvents?

> `optional` **domEvents**: [`DomEvents`](../../../event/DomEvents/classes/DomEvents.md)

Defined in: api/component/Component.d.ts:19

#### Inherited from

`Partial.domEvents`

***

### emit?

> `optional` **emit**: [`Emitter`](../../../api/component/Component/interfaces/Emitter.md)

Defined in: api/component/Component.d.ts:20

#### Inherited from

`Partial.emit`

***

### eventsEnabled?

> `optional` **eventsEnabled**: `boolean`

Defined in: api/component/Component.d.ts:21

#### Inherited from

`Partial.eventsEnabled`

***

### i18nStale

> **i18nStale**: `boolean`

Defined in: stores/ComponentStore.d.ts:191

#### Overrides

`Partial.i18nStale`

***

### layout?

> `optional` **layout**: [`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

Defined in: api/component/Component.d.ts:26

#### Inherited from

`Partial.layout`

***

### meta

> **meta**: `any`

Defined in: stores/ComponentStore.d.ts:188

#### Overrides

`Partial.meta`

***

### position

> **position**: `any`

Defined in: stores/ComponentStore.d.ts:189

#### Overrides

`Partial.position`

***

### props

> **props**: `any`

Defined in: stores/ComponentStore.d.ts:186

#### Overrides

`Partial.props`

***

### qualities

> **qualities**: `Map`\<`string`, [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)\>

Defined in: stores/ComponentStore.d.ts:192

***

### rotationEnabled?

> `optional` **rotationEnabled**: `boolean`

Defined in: api/component/Component.d.ts:25

#### Inherited from

`Partial.rotationEnabled`

***

### showQualityOverlay?

> `optional` **showQualityOverlay**: `boolean`

Defined in: stores/ComponentStore.d.ts:194

***

### store?

> `optional` **store**: [`ComponentStore`](../classes/ComponentStore.md)

Defined in: api/component/Component.d.ts:28

#### Inherited from

`Partial.store`

## Methods

### onQualitiesUpdated()?

> `optional` **onQualitiesUpdated**(`overlayStateChanged?`): `void`

Defined in: api/component/Component.d.ts:15

#### Parameters

##### overlayStateChanged?

`boolean`

#### Returns

`void`

#### Inherited from

`Partial.onQualitiesUpdated`
