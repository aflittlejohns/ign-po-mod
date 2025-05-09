[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ComponentDefaultsStore](../index.md) / ComponentDefaultsStore

# Class: ComponentDefaultsStore

Defined in: stores/ComponentDefaultsStore.d.ts:18

## Constructors

### Constructor

> **new ComponentDefaultsStore**(`client`): `ComponentDefaultsStore`

Defined in: stores/ComponentDefaultsStore.d.ts:26

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`ComponentDefaultsStore`

## Properties

### loading

> **loading**: `boolean`

Defined in: stores/ComponentDefaultsStore.d.ts:22

***

### metaDefaults

> **metaDefaults**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ComponentDefaultsStore.d.ts:20

***

### parent

> **parent**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/ComponentDefaultsStore.d.ts:23

***

### propsDefaults

> **propsDefaults**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ComponentDefaultsStore.d.ts:19

***

### sessionDefaults

> **sessionDefaults**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ComponentDefaultsStore.d.ts:21

## Accessors

### isLoaded

#### Get Signature

> **get** **isLoaded**(): `boolean`

Defined in: stores/ComponentDefaultsStore.d.ts:28

##### Returns

`boolean`

## Methods

### findChildPositionDefaults()

> **findChildPositionDefaults**(`componentType?`, `designerInit?`): `any`

Defined in: stores/ComponentDefaultsStore.d.ts:32

#### Parameters

##### componentType?

`string`

##### designerInit?

`boolean`

#### Returns

`any`

***

### findDefaults()

> **findDefaults**(`scope`, `componentType?`, `variant?`, `designerInit?`): `any`

Defined in: stores/ComponentDefaultsStore.d.ts:31

#### Parameters

##### scope

[`PropertyType`](../../../api/property/PropertyType/enumerations/PropertyType.md)

##### componentType?

`string`

##### variant?

`string`

##### designerInit?

`boolean`

#### Returns

`any`

***

### initHandlers()

> **initHandlers**(): `void`

Defined in: stores/ComponentDefaultsStore.d.ts:27

#### Returns

`void`

***

### requestDefaults()

> **requestDefaults**(): `Promise`\<`void`\>

Defined in: stores/ComponentDefaultsStore.d.ts:29

#### Returns

`Promise`\<`void`\>

***

### setDefaults()

> **setDefaults**(`defaultsJson`): `void`

Defined in: stores/ComponentDefaultsStore.d.ts:30

#### Parameters

##### defaultsJson

[`ComponentDefaultMsg`](../interfaces/ComponentDefaultMsg.md)

#### Returns

`void`
