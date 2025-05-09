[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/PanelRoot](../index.md) / PanelRoot

# Class: PanelRoot

Defined in: app/PanelRoot.d.ts:33

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`PanelRootProps`](../interfaces/PanelRootProps.md), [`PanelRootState`](../interfaces/PanelRootState.md)\>

## Constructors

### Constructor

> **new PanelRoot**(`props`): `PanelRoot`

Defined in: app/PanelRoot.d.ts:43

#### Parameters

##### props

[`PanelRootProps`](../interfaces/PanelRootProps.md)

#### Returns

`PanelRoot`

#### Overrides

`React.Component<PanelRootProps, PanelRootState>.constructor`

## Properties

### centerRoot

> **centerRoot**: `HTMLElement`

Defined in: app/PanelRoot.d.ts:41

***

### clientRoot

> **clientRoot**: `HTMLElement`

Defined in: app/PanelRoot.d.ts:38

***

### clientRootHasListeners

> **clientRootHasListeners**: `boolean`

Defined in: app/PanelRoot.d.ts:39

***

### context

> **context**: `ContextType`\<`Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>\>

Defined in: app/PanelRoot.d.ts:35

***

### inactivityDuration

> **inactivityDuration**: `number`

Defined in: app/PanelRoot.d.ts:36

***

### inactivityTimer

> **inactivityTimer**: `number`

Defined in: app/PanelRoot.d.ts:37

***

### state

> **state**: [`PanelRootState`](../interfaces/PanelRootState.md)

Defined in: app/PanelRoot.d.ts:42

***

### windowHasResizeListener

> **windowHasResizeListener**: `boolean`

Defined in: app/PanelRoot.d.ts:40

***

### contextType

> `static` **contextType**: `Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>

Defined in: app/PanelRoot.d.ts:34

## Methods

### addClientEventListeners()

> **addClientEventListeners**(): `void`

Defined in: app/PanelRoot.d.ts:47

#### Returns

`void`

***

### addWindowResizeListener()

> **addWindowResizeListener**(): `void`

Defined in: app/PanelRoot.d.ts:49

#### Returns

`void`

***

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/PanelRoot.d.ts:44

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/PanelRoot.d.ts:45

#### Returns

`void`

***

### findActiveModal()

> **findActiveModal**(): [`PopupMount`](../../../stores/MountStore/classes/PopupMount.md)

Defined in: app/PanelRoot.d.ts:56

#### Returns

[`PopupMount`](../../../stores/MountStore/classes/PopupMount.md)

***

### handleMakerModalCloseClick()

> **handleMakerModalCloseClick**(`event`): `void`

Defined in: app/PanelRoot.d.ts:58

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### initializeDocks()

> **initializeDocks**(): `void`

Defined in: app/PanelRoot.d.ts:46

#### Returns

`void`

***

### listenForModal()

> **listenForModal**(): `void`

Defined in: app/PanelRoot.d.ts:51

#### Returns

`void`

***

### positionDockOnResize()

> **positionDockOnResize**(): `void`

Defined in: app/PanelRoot.d.ts:53

#### Returns

`void`

***

### removeClientEventListeners()

> **removeClientEventListeners**(): `void`

Defined in: app/PanelRoot.d.ts:48

#### Returns

`void`

***

### removeWindowResizeListener()

> **removeWindowResizeListener**(): `void`

Defined in: app/PanelRoot.d.ts:50

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/PanelRoot.d.ts:59

#### Returns

`Element`

***

### setCenterRoot()

> **setCenterRoot**(`root`): `void`

Defined in: app/PanelRoot.d.ts:52

#### Parameters

##### root

`HTMLElement`

#### Returns

`void`

***

### setClientRoot()

> **setClientRoot**(`ref`): `void`

Defined in: app/PanelRoot.d.ts:57

#### Parameters

##### ref

`HTMLElement`

#### Returns

`void`

***

### showHandles()

> **showHandles**(): `void`

Defined in: app/PanelRoot.d.ts:55

#### Returns

`void`

***

### updateCenterDimensions()

> **updateCenterDimensions**(): `void`

Defined in: app/PanelRoot.d.ts:54

#### Returns

`void`
