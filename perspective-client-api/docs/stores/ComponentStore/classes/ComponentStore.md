[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ComponentStore](../index.md) / ComponentStore

# Class: ComponentStore

Defined in: stores/ComponentStore.d.ts:42

Abstract superclass of ViewStore and ComponentStore

## Extends

- [`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md)

## Implements

- [`Printable`](../../../api/component/Printable/interfaces/Printable.md)

## Constructors

### Constructor

> **new ComponentStore**(`view`, `parent`, `def`, `addressPath`, `sessionState?`): `ComponentStore`

Defined in: stores/ComponentStore.d.ts:73

#### Parameters

##### view

[`ViewStore`](../../ViewStore/classes/ViewStore.md)

##### parent

`ComponentStore`

##### def

[`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

##### addressPath

`number`[]

##### sessionState?

[`ComponentSessionState`](../../../perspective-client/interfaces/ComponentSessionState.md)

#### Returns

`ComponentStore`

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`constructor`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#constructor)

## Properties

### \_custom?

> `optional` **\_custom**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ComponentStore.d.ts:53

***

### \_position?

> `optional` **\_position**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ComponentStore.d.ts:52

***

### \_ref

> **\_ref**: `Element`

Defined in: stores/ComponentStore.d.ts:68

***

### addressPath

> **addressPath**: `number`[]

Defined in: stores/ComponentStore.d.ts:46

***

### addressPathString

> **addressPathString**: `string`

Defined in: stores/AbstractUIElementStore.d.ts:12

#### Inherited from

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`addressPathString`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#addresspathstring)

***

### childComponents

> **childComponents**: `ComponentStore`[]

Defined in: stores/ComponentStore.d.ts:55

***

### clientStore

> **clientStore**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/ComponentStore.d.ts:64

***

### Component

> **Component**: `ComponentClass`

Defined in: stores/ComponentStore.d.ts:58

***

### componentEvents

> **componentEvents**: [`ComponentEvents`](../../../event/ComponentEvents/classes/ComponentEvents.md)

Defined in: stores/ComponentStore.d.ts:56

***

### componentMeta

> **componentMeta**: [`ComponentMeta`](../../../api/component/ComponentRegistry/interfaces/ComponentMeta.md)

Defined in: stores/ComponentStore.d.ts:54

***

### componentTooltipFlag

> **componentTooltipFlag**: `boolean`

Defined in: stores/ComponentStore.d.ts:60

***

### contextMenu

> **contextMenu**: `any`

Defined in: stores/ComponentStore.d.ts:61

***

### contextMenuDelay

> **contextMenuDelay**: `any`

Defined in: stores/ComponentStore.d.ts:67

***

### contextSubmenuPortal

> **contextSubmenuPortal**: `any`

Defined in: stores/ComponentStore.d.ts:63

***

### contextSubmenus

> **contextSubmenus**: `any`[]

Defined in: stores/ComponentStore.d.ts:62

***

### def

> **def**: [`ComponentDefinition`](../../../api/component/Component/interfaces/ComponentDefinition.md)

Defined in: stores/ComponentStore.d.ts:48

***

### delay

> **delay**: `any`

Defined in: stores/ComponentStore.d.ts:66

***

### delegate

> **delegate**: [`ComponentStoreDelegate`](../../../api/component/ComponentStoreDelegate/classes/ComponentStoreDelegate.md)

Defined in: stores/ComponentStore.d.ts:49

***

### domEvents

> **domEvents**: [`DomEvents`](../../../event/DomEvents/classes/DomEvents.md)

Defined in: stores/ComponentStore.d.ts:57

***

### meta

> **meta**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ComponentStore.d.ts:51

***

### notify

> `protected` **notify**: [`NotificationHandler`](../../../api/subscription/Subscription/type-aliases/NotificationHandler.md)

Defined in: stores/ComponentStore.d.ts:72

***

### parent

> **parent**: `ComponentStore`

Defined in: stores/ComponentStore.d.ts:45

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`parent`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#parent)

***

### path

> **path**: `string`

Defined in: stores/ComponentStore.d.ts:47

***

### props

> **props**: [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ComponentStore.d.ts:50

***

### subscribe

> `readonly` **subscribe**: [`SubscriptionHandler`](../../../api/subscription/Subscription/type-aliases/SubscriptionHandler.md)

Defined in: stores/ComponentStore.d.ts:71

***

### sustain

> **sustain**: `any`

Defined in: stores/ComponentStore.d.ts:65

***

### tooltip

> **tooltip**: `any`

Defined in: stores/ComponentStore.d.ts:59

***

### view

> **view**: [`ViewStore`](../../ViewStore/classes/ViewStore.md)

Defined in: stores/ComponentStore.d.ts:43

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`view`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#view)

***

### viewMountPath

> **viewMountPath**: `string`

Defined in: stores/ComponentStore.d.ts:44

***

### notFoundMeta

> `readonly` `static` **notFoundMeta**: [`NotFoundMeta`](../../../ui/display/NotFound/classes/NotFoundMeta.md)

Defined in: stores/ComponentStore.d.ts:69

## Accessors

### children

#### Get Signature

> **get** **children**(): `ComponentStore`[]

Defined in: stores/ComponentStore.d.ts:135

##### Returns

`ComponentStore`[]

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`children`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#children)

***

### custom

#### Get Signature

> **get** **custom**(): [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ComponentStore.d.ts:77

##### Returns

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

***

### element

#### Get Signature

> **get** **element**(): `void` \| `Element`

Defined in: stores/ComponentStore.d.ts:181

Returns the actual dom node represented by the react element if the reference exists.

##### Returns

`void` \| `Element`

***

### index

#### Get Signature

> **get** **index**(): `number`

Defined in: stores/ComponentStore.d.ts:137

##### Returns

`number`

***

### isCoordContainer

#### Get Signature

> **get** **isCoordContainer**(): `boolean`

Defined in: stores/ComponentStore.d.ts:83

##### Returns

`boolean`

***

### isCoordContainerChild

#### Get Signature

> **get** **isCoordContainerChild**(): `boolean`

Defined in: stores/ComponentStore.d.ts:82

##### Returns

`boolean`

***

### log

#### Get Signature

> **get** **log**(): `JSNLogLogger`

Defined in: stores/ComponentStore.d.ts:76

##### Returns

`JSNLogLogger`

#### Overrides

[`AbstractUIElementStore`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md).[`log`](../../AbstractUIElementStore/classes/AbstractUIElementStore.md#log)

***

### position

#### Get Signature

> **get** **position**(): [`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

Defined in: stores/ComponentStore.d.ts:78

##### Returns

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

***

### uiOffset

#### Get Signature

> **get** **uiOffset**(): [`Point`](../../../perspective-client/interfaces/Point.md)

Defined in: stores/ComponentStore.d.ts:183

##### Returns

[`Point`](../../../perspective-client/interfaces/Point.md)

## Methods

### assignOwnUpdates()

> **assignOwnUpdates**(`updates`): `void`

Defined in: stores/ComponentStore.d.ts:136

#### Parameters

##### updates

[`PropertyUpdateObject`](../interfaces/PropertyUpdateObject.md)

#### Returns

`void`

***

### assignPropsFromSession()

> **assignPropsFromSession**(`sessionState?`): `void`

Defined in: stores/ComponentStore.d.ts:134

Assigns all PropertyTypes to the given store

#### Parameters

##### sessionState?

[`ComponentSessionState`](../../../perspective-client/interfaces/ComponentSessionState.md)

the existing state of a session, if it exists

#### Returns

`void`

***

### buildComponent()

> `protected` **buildComponent**(`Component`, `overlayOptOut?`): `ComponentClass`

Defined in: stores/ComponentStore.d.ts:96

#### Parameters

##### Component

`any`

##### overlayOptOut?

`OverlayOptOutFilter`

#### Returns

`ComponentClass`

***

### dispatchEvent()

> **dispatchEvent**(`componentPath`, `eventType`, `eventName`, `eventObject`): `void`

Defined in: stores/ComponentStore.d.ts:142

#### Parameters

##### componentPath

`number`[]

##### eventType

`string`

##### eventName

`string`

##### eventObject

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### dispatchUpdates()

> **dispatchUpdates**(`componentPath`, `updates`): `void`

Defined in: stores/ComponentStore.d.ts:140

Called either by my parent container or by the containing ViewStore (if this is a root container)

#### Parameters

##### componentPath

`number`[]

##### updates

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### emitterFactory()

> **emitterFactory**(`layout?`, `rotationEnabled?`): [`Emitter`](../../../api/component/Component/interfaces/Emitter.md)

Defined in: stores/ComponentStore.d.ts:85

#### Parameters

##### layout?

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

##### rotationEnabled?

`boolean`

#### Returns

[`Emitter`](../../../api/component/Component/interfaces/Emitter.md)

***

### focus()

> **focus**(): `void`

Defined in: stores/ComponentStore.d.ts:145

#### Returns

`void`

***

### getComponent()

> **getComponent**(): `ComponentClass`\<`any`\>

Defined in: stores/ComponentStore.d.ts:81

#### Returns

`ComponentClass`\<`any`\>

***

### getMetaProps()

> `protected` **getMetaProps**(): [`JsObject`](../../../perspective-client/type-aliases/JsObject.md)

Defined in: stores/ComponentStore.d.ts:79

#### Returns

[`JsObject`](../../../perspective-client/type-aliases/JsObject.md)

***

### getPositionProps()

> `protected` **getPositionProps**(): [`JsObject`](../../../perspective-client/type-aliases/JsObject.md)

Defined in: stores/ComponentStore.d.ts:75

#### Returns

[`JsObject`](../../../perspective-client/type-aliases/JsObject.md)

***

### getRawComponent()

> `protected` **getRawComponent**(): `any`

Defined in: stores/ComponentStore.d.ts:80

#### Returns

`any`

***

### getTooltipProps()

> **getTooltipProps**(): [`ComponentMetaTooltipProps`](../interfaces/ComponentMetaTooltipProps.md)

Defined in: stores/ComponentStore.d.ts:176

#### Returns

[`ComponentMetaTooltipProps`](../interfaces/ComponentMetaTooltipProps.md)

***

### handleClickEvent()

> **handleClickEvent**(`event`): `void`

Defined in: stores/ComponentStore.d.ts:147

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### handleContextMenuEvent()

> **handleContextMenuEvent**(`event`): `void`

Defined in: stores/ComponentStore.d.ts:146

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### handleInternalComponentEvent()

> **handleInternalComponentEvent**(`eventName`, `eventObject`): `void`

Defined in: stores/ComponentStore.d.ts:141

#### Parameters

##### eventName

`string`

##### eventObject

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### hideContextMenu()

> **hideContextMenu**(): `void`

Defined in: stores/ComponentStore.d.ts:155

#### Returns

`void`

***

### hideExistingContextMenuRef()

> **hideExistingContextMenuRef**(): `any`

Defined in: stores/ComponentStore.d.ts:150

#### Returns

`any`

***

### hideTooltip()

> **hideTooltip**(): `void`

Defined in: stores/ComponentStore.d.ts:175

#### Returns

`void`

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

### isContainerComponent()

> **isContainerComponent**(): `boolean`

Defined in: stores/ComponentStore.d.ts:129

Check to see if the current component is a container.

#### Returns

`boolean`

Returns true if the component is a container, false otherwise.

***

### isRootContainer()

> **isRootContainer**(): `boolean`

Defined in: stores/ComponentStore.d.ts:182

#### Returns

`boolean`

***

### loadAhead()

> **loadAhead**(`loadMonitor`): `Promise`\<`any`\>

Defined in: stores/ComponentStore.d.ts:123

#### Parameters

##### loadMonitor

[`ComponentLoadMonitor`](../../ComponentStoreLoader/interfaces/ComponentLoadMonitor.md)

#### Returns

`Promise`\<`any`\>

***

### maybeHideContextMenu()

> **maybeHideContextMenu**(): `void`

Defined in: stores/ComponentStore.d.ts:154

#### Returns

`void`

***

### maybeHideTooltip()

> **maybeHideTooltip**(`event`): `void`

Defined in: stores/ComponentStore.d.ts:171

#### Parameters

##### event

`any`

#### Returns

`void`

***

### maybeShowContextMenu()

> **maybeShowContextMenu**(`event`): `void`

Defined in: stores/ComponentStore.d.ts:148

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### maybeShowTooltip()

> **maybeShowTooltip**(`event`): `void`

Defined in: stores/ComponentStore.d.ts:168

#### Parameters

##### event

`PointerEvent`

#### Returns

`void`

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

### onPropWrite()

> **onPropWrite**(`propType`, `dataModel`): `void`

Defined in: stores/ComponentStore.d.ts:124

#### Parameters

##### propType

[`PropertyType`](../../../api/property/PropertyType/enumerations/PropertyType.md)

##### dataModel

[`PropertyTree`](../../../props/PropertyTree/classes/PropertyTree.md)

#### Returns

`void`

***

### overlayOptOut()

> **overlayOptOut**(`propsQ`, `propsConfig`): `Map`\<`string`, [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)\>

Defined in: stores/ComponentStore.d.ts:109

Provides a new map of component qualities that have not been configured to opt out of displaying a
quality overlay.

#### Parameters

##### propsQ

`Map`\<`string`, [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)\>

{Map<string, QualityCode>} - A map of quality codes to filter.

##### propsConfig

[`PropertyConfigCollection`](../../../perspective-client/interfaces/PropertyConfigCollection.md)

{PropertyConfigCollection | undefined} - A property config collection.

#### Returns

`Map`\<`string`, [`QualityCode`](../../../props/QualityCode/classes/QualityCode.md)\>

- Returns a map of quality codes that are not opted out.

***

### refCallback()

> **refCallback**(`ref`): `void`

Defined in: stores/ComponentStore.d.ts:84

#### Parameters

##### ref

`Element`

#### Returns

`void`

***

### requestContextMenu()

> **requestContextMenu**(): `void`

Defined in: stores/ComponentStore.d.ts:151

#### Returns

`void`

***

### requestPrint()

> **requestPrint**(`props?`): `void`

Defined in: stores/ComponentStore.d.ts:172

#### Parameters

##### props?

[`PrintProps`](../../../api/component/Printable/type-aliases/PrintProps.md)

#### Returns

`void`

#### Implementation of

[`Printable`](../../../api/component/Printable/interfaces/Printable.md).[`requestPrint`](../../../api/component/Printable/interfaces/Printable.md#requestprint)

***

### requestTooltip()

> **requestTooltip**(): `void`

Defined in: stores/ComponentStore.d.ts:170

#### Returns

`void`

***

### rerenderTooltip()

> **rerenderTooltip**(`currTooltipProps`): `void`

Defined in: stores/ComponentStore.d.ts:169

#### Parameters

##### currTooltipProps

[`ComponentMetaTooltipProps`](../interfaces/ComponentMetaTooltipProps.md)

#### Returns

`void`

***

### showComponentTooltip()

> **showComponentTooltip**(`props`, `mouseEventCoordinates?`): `void`

Defined in: stores/ComponentStore.d.ts:173

#### Parameters

##### props

[`ComponentMetaTooltipProps`](../interfaces/ComponentMetaTooltipProps.md)

##### mouseEventCoordinates?

[`Point`](../../../perspective-client/interfaces/Point.md)

#### Returns

`void`

***

### showTooltip()

> **showTooltip**(`text`, `location`): `void`

Defined in: stores/ComponentStore.d.ts:174

#### Parameters

##### text

`string`

##### location

[`Point`](../../../perspective-client/interfaces/Point.md)

#### Returns

`void`

***

### stopEvent()

> **stopEvent**(`event`): `void`

Defined in: stores/ComponentStore.d.ts:149

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### updateMetaName()

> **updateMetaName**(): `void`

Defined in: stores/ComponentStore.d.ts:100

noop - overriden in DesignerComponentStore

#### Returns

`void`

***

### updateOnReconnect()

> **updateOnReconnect**(`updates`): `void`

Defined in: stores/ComponentStore.d.ts:138

#### Parameters

##### updates

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`
