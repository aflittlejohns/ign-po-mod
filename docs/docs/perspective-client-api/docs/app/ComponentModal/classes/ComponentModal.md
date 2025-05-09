[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ComponentModal](../index.md) / ComponentModal

# Class: ComponentModal

Defined in: app/ComponentModal.d.ts:29

Perspective ComponentModal component.

Will intelligently display in a position (below, above, left, or right) determined by the
the dimensions and positioning of the provided component/element, it's own dimensions, and the available space.
You can opt out of this intelligence if you'd like, and force the modals placement if you are confident.

Will render its children as the content, hence can be used to wrap other components or JSX elements.

Modals are tricky, especially in Perspective.  We use this thing everywhere.
If you change something here, make sure you check everything that uses this component, in various states and mounts.

If you have a perspective component that uses this component modal, you may need to stop event propagation
on modal content interaction (i.e. button, input, etc) so that the perspective component does not also catch and handle the event.

TODO: Eventually we will need to accommodate for the ability to provide different children depending on whether we are
rendering in large viewport mode (small modal with arrow) or small viewport mode (essentially the full screen modal).
I recommend either making use of a callback or adding something via props.

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`ComponentModalProps`](../interfaces/ComponentModalProps.md), `ComponentModalState`\>

## Constructors

### Constructor

> **new ComponentModal**(`props`): `ComponentModal`

Defined in: app/ComponentModal.d.ts:40

#### Parameters

##### props

[`ComponentModalProps`](../interfaces/ComponentModalProps.md)

#### Returns

`ComponentModal`

#### Overrides

`React.Component<ComponentModalProps, ComponentModalState>.constructor`

## Properties

### component

> **component**: `Element` \| `Text`

Defined in: app/ComponentModal.d.ts:31

***

### eventListener

> **eventListener**: `EventListenerObject`

Defined in: app/ComponentModal.d.ts:32

***

### fireOpened

> **fireOpened**: `boolean`

Defined in: app/ComponentModal.d.ts:45

***

### firstLargeViewportModalResize

> **firstLargeViewportModalResize**: `boolean`

Defined in: app/ComponentModal.d.ts:48

***

### horizScrollbarsPresent

> **horizScrollbarsPresent**: `boolean`

Defined in: app/ComponentModal.d.ts:39

***

### largeViewModalRef

> **largeViewModalRef**: `RefObject`\<`HTMLDivElement`\>

Defined in: app/ComponentModal.d.ts:33

***

### mountStore

> **mountStore**: [`MountStore`](../../../stores/MountStore/classes/MountStore.md)

Defined in: app/ComponentModal.d.ts:34

***

### scope

> **scope**: [`ClientScope`](../../../stores/ClientStore/enumerations/ClientScope.md)

Defined in: app/ComponentModal.d.ts:35

***

### state

> **state**: `ComponentModalState`

Defined in: app/ComponentModal.d.ts:30

***

### vertScrollbarsPresent

> **vertScrollbarsPresent**: `boolean`

Defined in: app/ComponentModal.d.ts:38

***

### contextType

> `static` **contextType**: `Context`\<[`Partial`](../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../stores/ClientStore/classes/ClientStore.md)\>\>

Defined in: app/ComponentModal.d.ts:36

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/ComponentModal.d.ts:41

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(`prev`): `void`

Defined in: app/ComponentModal.d.ts:42

#### Parameters

##### prev

[`ComponentModalProps`](../interfaces/ComponentModalProps.md)

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/ComponentModal.d.ts:43

#### Returns

`void`

***

### manageMadeFit()

> **manageMadeFit**(`madeFit`, `position`, `placement`, `mxHeight?`): `number`

Defined in: app/ComponentModal.d.ts:47

#### Parameters

##### madeFit

`boolean`

##### position

[`ElementPosition`](../../../perspective-client/interfaces/ElementPosition.md)

##### placement

[`ComponentModalPlacement`](../enumerations/ComponentModalPlacement.md)

##### mxHeight?

`number`

#### Returns

`number`

***

### onModalContentsResize()

> **onModalContentsResize**(`modalWidth`, `modalHeight`): `void`

Defined in: app/ComponentModal.d.ts:46

#### Parameters

##### modalWidth

`number`

##### modalHeight

`number`

#### Returns

`void`

***

### render()

> **render**(): `any`

Defined in: app/ComponentModal.d.ts:50

#### Returns

`any`

***

### renderModal()

> **renderModal**(`isSmallViewport`, `position`, `portalDestination`, `inPopup`, `placement?`, `maxHeight?`): `any`

Defined in: app/ComponentModal.d.ts:49

#### Parameters

##### isSmallViewport

`boolean`

##### position

[`ElementPosition`](../../../perspective-client/interfaces/ElementPosition.md)

##### portalDestination

`Element`

##### inPopup

`boolean`

##### placement?

[`ComponentModalPlacement`](../enumerations/ComponentModalPlacement.md)

##### maxHeight?

`number`

#### Returns

`any`

***

### smViewModalClickHandler()

> **smViewModalClickHandler**(`event`): `void`

Defined in: app/ComponentModal.d.ts:44

#### Parameters

##### event

`MouseEvent`\<`HTMLDivElement`\>

#### Returns

`void`
