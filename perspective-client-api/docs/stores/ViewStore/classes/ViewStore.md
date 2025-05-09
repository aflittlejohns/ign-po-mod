[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ViewStore](../index.md) / ViewStore

# Class: ViewStore

Defined in: stores/ViewStore.d.ts:21

Abstract superclass of ViewStore and ComponentStore

## Extends

- [`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md)

## Implements

- [`Printable`](../../../api/component/Printable/interfaces/Printable.md)

## Constructors

### Constructor

> **new ViewStore**(`page`, `resourcePath`, `mountPath`, `def`, `params`, `sessionState?`, `parent?`): `ViewStore`

Defined in: stores/ViewStore.d.ts:51

#### Parameters

##### page

[`PageStore`](../../PageStore/classes/PageStore.md)

##### resourcePath

`string`

##### mountPath

`string`

##### def

[`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

##### params

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### sessionState?

[`ViewSessionState`](../../../perspective-client/interfaces/ViewSessionState.md)

##### parent?

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

#### Returns

`ViewStore`

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`constructor`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#constructor)

## Properties

### \_oldParams

> **\_oldParams**: `any`

Defined in: stores/ViewStore.d.ts:37

***

### accessDenied

> **accessDenied**: `boolean`

Defined in: stores/ViewStore.d.ts:44

***

### addressPathString

> **addressPathString**: `string`

Defined in: stores/AbstractUIElementStore.d.ts:12

#### Inherited from

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`addressPathString`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#addresspathstring)

***

### birthDate

> **birthDate**: `number`

Defined in: stores/ViewStore.d.ts:28

***

### componentEvents

> **componentEvents**: [`ComponentEvents`](../../../event/ComponentEvents/classes/ComponentEvents.md)

Defined in: stores/ViewStore.d.ts:43

***

### custom

> **custom**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ViewStore.d.ts:38

***

### def

> **def**: [`ViewDefinition`](../../../perspective-client/interfaces/ViewDefinition.md)

Defined in: stores/ViewStore.d.ts:29

***

### dirtyProps

> **dirtyProps**: `Map`\<`string`, [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)\>

Defined in: stores/ViewStore.d.ts:39

***

### dockOffsetState?

> `optional` **dockOffsetState**: `boolean`

Defined in: stores/ViewStore.d.ts:45

***

### initialParams

> **initialParams**: [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ViewStore.d.ts:30

***

### instanceId

> **instanceId**: `string`

Defined in: stores/ViewStore.d.ts:23

***

### mountPath

> **mountPath**: `string`

Defined in: stores/ViewStore.d.ts:27

***

### outputDisposer()

> **outputDisposer**: () => `any`

Defined in: stores/ViewStore.d.ts:40

#### Returns

`any`

***

### page

> **page**: [`PageStore`](../../PageStore/classes/PageStore.md)

Defined in: stores/ViewStore.d.ts:22

***

### params

> **params**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ViewStore.d.ts:36

***

### parent

> **parent**: [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

Defined in: stores/AbstractUIElementStore.d.ts:10

#### Inherited from

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`parent`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#parent)

***

### props

> **props**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ViewStore.d.ts:35

***

### resourcePath

> **resourcePath**: `string`

Defined in: stores/ViewStore.d.ts:24

***

### resourcePaths

> **resourcePaths**: `string`[]

Defined in: stores/ViewStore.d.ts:26

Contains the resource paths of ancestors as well as this store's resource path.

***

### root?

> `optional` **root**: [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)

Defined in: stores/ViewStore.d.ts:32

***

### running

> **running**: `boolean`

Defined in: stores/ViewStore.d.ts:31

***

### subscribe

> `readonly` **subscribe**: [`SubscriptionHandler`](../../../api/subscription/Subscription/type-aliases/SubscriptionHandler.md)

Defined in: stores/ViewStore.d.ts:47

***

### viewLoadedFromSessionState

> **viewLoadedFromSessionState**: `boolean`

Defined in: stores/ViewStore.d.ts:42

## Accessors

### children

#### Get Signature

> **get** **children**(): [`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]

Defined in: stores/ViewStore.d.ts:58

##### Returns

[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)[]

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`children`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#children)

***

### defaultsStore

#### Get Signature

> **get** **defaultsStore**(): [`ComponentDefaultsStore`](../../ComponentDefaultsStore/classes/ComponentDefaultsStore.md)

Defined in: stores/ViewStore.d.ts:88

##### Returns

[`ComponentDefaultsStore`](../../ComponentDefaultsStore/classes/ComponentDefaultsStore.md)

***

### dockOffsetChanged

#### Get Signature

> **get** **dockOffsetChanged**(): `boolean`

Defined in: stores/ViewStore.d.ts:54

##### Returns

`boolean`

#### Set Signature

> **set** **dockOffsetChanged**(`newState`): `void`

Defined in: stores/ViewStore.d.ts:53

##### Parameters

###### newState

`boolean`

##### Returns

`void`

***

### isValid

#### Get Signature

> **get** **isValid**(): [`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

Defined in: stores/ViewStore.d.ts:87

True if this view store actually represents a view that was found in the project config

##### Returns

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

***

### log

#### Get Signature

> **get** **log**(): `JSNLogLogger`

Defined in: stores/ViewStore.d.ts:59

##### Returns

`JSNLogLogger`

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`log`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#log)

***

### view

#### Get Signature

> **get** **view**(): `ViewStore`

Defined in: stores/ViewStore.d.ts:57

##### Returns

`ViewStore`

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`view`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#view)

## Methods

### \_disposeOutputListener()

> **\_disposeOutputListener**(): `void`

Defined in: stores/ViewStore.d.ts:85

#### Returns

`void`

***

### applyPropertyUpdates()

> **applyPropertyUpdates**(`updates`): `void`

Defined in: stores/ViewStore.d.ts:94

Called by PageStore when it receives client value updates. The updates object will have keys
that are component mount paths, which we will chop into an array and feed to the root container to dispatch.

#### Parameters

##### updates

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### clearSyncedModels()

> **clearSyncedModels**(): `void`

Defined in: stores/ViewStore.d.ts:105

#### Returns

`void`

***

### dispatchEvent()

> **dispatchEvent**(`payload`): `void`

Defined in: stores/ViewStore.d.ts:98

Called when an event is fired on the gateway that has client-scoped actions.

#### Parameters

##### payload

[`EventFiredPayload`](../../PageStore/interfaces/EventFiredPayload.md)

#### Returns

`void`

***

### hasInput()

> **hasInput**(`name`): `boolean`

Defined in: stores/ViewStore.d.ts:60

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### initRoot()

> **initRoot**(`loader`): `Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)\>

Defined in: stores/ViewStore.d.ts:56

#### Parameters

##### loader

[`ComponentStoreLoader`](../../ComponentStoreLoader/interfaces/ComponentStoreLoader.md)

#### Returns

`Promise`\<[`ComponentStore`](../../ComponentStore/classes/ComponentStore.md)\>

***

### interpolate()

> **interpolate**(`obj`): `any`

Defined in: stores/AbstractUIElementStore.d.ts:25

Takes an string with embedded property references that must be surrounded with brackets, and looks up the
values referenced by the paths, and replaces them. For example, the input string "Mickey{this.props.rodentType}"
might evaluate to "MickeyMarmot"

#### Parameters

##### obj

`any`

#### Returns

`any`

#### Inherited from

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`interpolate`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#interpolate)

***

### isDirty()

> **isDirty**(): `boolean`

Defined in: stores/ViewStore.d.ts:106

#### Returns

`boolean`

***

### onEventFired()

> **onEventFired**(`eventType`, `eventName`, `event`): `void`

Defined in: stores/AbstractUIElementStore.d.ts:18

Called from the event collections when events from the browser are fired that have a gateway-scoped action
associated with them.

#### Parameters

##### eventType

[`EventGroupType`](../../../perspective-client/enumerations/EventGroupType.md)

##### eventName

`string`

##### event

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

#### Inherited from

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`onEventFired`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#oneventfired)

***

### onPropChange()

> **onPropChange**(`componentPath`, `propType`, `dataModel`): `void`

Defined in: stores/ViewStore.d.ts:103

Called by any of this view's component children when one of their properties has been written to from something
initiated by the client.

#### Parameters

##### componentPath

`string`

##### propType

[`PropertyType`](../../../api/property/PropertyType/enumerations/PropertyType.md)

##### dataModel

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### prepareSyncRequest()

> **prepareSyncRequest**(`syncRequest`): `void`

Defined in: stores/ViewStore.d.ts:104

#### Parameters

##### syncRequest

[`SyncRequest`](../../PageStore/classes/SyncRequest.md)

#### Returns

`void`

***

### readInputs()

> **readInputs**(): [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: stores/ViewStore.d.ts:61

#### Returns

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

***

### requestPrint()

> **requestPrint**(`props?`): `void`

Defined in: stores/ViewStore.d.ts:52

#### Parameters

##### props?

[`PrintProps`](../../../api/component/Printable/type-aliases/PrintProps.md)

#### Returns

`void`

#### Implementation of

[`Printable`](../../../api/component/Printable/interfaces/Printable.md).[`requestPrint`](../../../api/component/Printable/interfaces/Printable.md#requestprint)

***

### setAccessDenied()

> **setAccessDenied**(`accessDenied`): `void`

Defined in: stores/ViewStore.d.ts:55

#### Parameters

##### accessDenied

`boolean`

#### Returns

`void`

***

### setOutputListener()

> **setOutputListener**(`outputListener`): `void`

Defined in: stores/ViewStore.d.ts:82

Sets a function that will be called with (outputName, outputValue) each time a defined output value changes

#### Parameters

##### outputListener

[`OutputListener`](../interfaces/OutputListener.md)

#### Returns

`void`

***

### shutdown()

> **shutdown**(): `void`

Defined in: stores/ViewStore.d.ts:84

#### Returns

`void`

***

### startup()

> **startup**(): `void`

Defined in: stores/ViewStore.d.ts:83

#### Returns

`void`

***

### updateOnReconnect()

> **updateOnReconnect**(`updates`): `void`

Defined in: stores/ViewStore.d.ts:89

#### Parameters

##### updates

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### writeInputs()

> **writeInputs**(`params`): `void`

Defined in: stores/ViewStore.d.ts:67

Updates all input parameters (if any) in the given params object.

#### Parameters

##### params

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`
