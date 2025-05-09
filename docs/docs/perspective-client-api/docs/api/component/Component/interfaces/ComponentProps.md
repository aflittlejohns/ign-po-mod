[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/component/Component](../index.md) / ComponentProps

# Interface: ComponentProps\<P, D\>

Defined in: api/component/Component.d.ts:14

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<`any`\>

## Extended by

- [`ComponentErrorBoundaryProps`](../../../../ui/error/ComponentErrorBoundary/interfaces/ComponentErrorBoundaryProps.md)

## Type Parameters

### P

`P` *extends* [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)

### D

`D` *extends* [`ComponentDelegateState`](../type-aliases/ComponentDelegateState.md) = [`PlainObject`](../../../../perspective-client/type-aliases/PlainObject.md)

## Properties

### componentEvents

> **componentEvents**: [`ComponentEvents`](../../../../event/ComponentEvents/classes/ComponentEvents.md)

Defined in: api/component/Component.d.ts:16

***

### custom

> **custom**: [`JsObject`](../../../../perspective-client/type-aliases/JsObject.md)

Defined in: api/component/Component.d.ts:24

***

### def?

> `optional` **def**: [`ComponentDefinition`](ComponentDefinition.md)

Defined in: api/component/Component.d.ts:17

***

### delegate?

> `optional` **delegate**: `D`

Defined in: api/component/Component.d.ts:18

***

### domEvents

> **domEvents**: [`DomEvents`](../../../../event/DomEvents/classes/DomEvents.md)

Defined in: api/component/Component.d.ts:19

***

### emit

> **emit**: [`Emitter`](Emitter.md)

Defined in: api/component/Component.d.ts:20

***

### eventsEnabled

> **eventsEnabled**: `boolean`

Defined in: api/component/Component.d.ts:21

***

### i18nStale

> **i18nStale**: `boolean`

Defined in: api/component/Component.d.ts:29

***

### layout

> **layout**: [`LayoutCallback`](../../../../perspective-client/interfaces/LayoutCallback.md)

Defined in: api/component/Component.d.ts:26

***

### meta

> **meta**: [`MetaObject`](MetaObject.md)

Defined in: api/component/Component.d.ts:22

***

### position

> **position**: [`JsObject`](../../../../perspective-client/type-aliases/JsObject.md)

Defined in: api/component/Component.d.ts:23

***

### props

> **props**: `P`

Defined in: api/component/Component.d.ts:27

***

### rotationEnabled?

> `optional` **rotationEnabled**: `boolean`

Defined in: api/component/Component.d.ts:25

***

### store

> **store**: [`ComponentStore`](../../../../stores/ComponentStore/classes/ComponentStore.md)

Defined in: api/component/Component.d.ts:28

## Methods

### onQualitiesUpdated()?

> `optional` **onQualitiesUpdated**(`overlayStateChanged?`): `void`

Defined in: api/component/Component.d.ts:15

#### Parameters

##### overlayStateChanged?

`boolean`

#### Returns

`void`
