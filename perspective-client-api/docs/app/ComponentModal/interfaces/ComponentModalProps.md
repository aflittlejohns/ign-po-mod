[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ComponentModal](../index.md) / ComponentModalProps

# Interface: ComponentModalProps

Defined in: app/ComponentModal.d.ts:52

## Properties

### align?

> `optional` **align**: [`ComponentModalAlign`](../enumerations/ComponentModalAlign.md)

Defined in: app/ComponentModal.d.ts:54

If set will attempt to align the component modal to the start, center, or end of the parent component

***

### children?

> `optional` **children**: `ReactNode`

Defined in: app/ComponentModal.d.ts:55

***

### className?

> `optional` **className**: `string`

Defined in: app/ComponentModal.d.ts:59

Optional property to add CSS classes to this component

***

### component

> **component**: `ReactInstance`

Defined in: app/ComponentModal.d.ts:57

The node in which this modal is associated with, required in order to determine modal positioning.

***

### confident?

> `optional` **confident**: `boolean`

Defined in: app/ComponentModal.d.ts:61

Optional.  If true, the modal will not attempt intelligent placement.  Defaults to false.

***

### hideArrow?

> `optional` **hideArrow**: `boolean`

Defined in: app/ComponentModal.d.ts:63

Optional property to hide the arrow when displaying as a popover when rendered in the large viewport.

***

### ignoreHorizontalBounds?

> `optional` **ignoreHorizontalBounds**: `boolean`

Defined in: app/ComponentModal.d.ts:65

Option property to ignore horizontal bounds

***

### isFocusable?

> `optional` **isFocusable**: `boolean`

Defined in: app/ComponentModal.d.ts:79

If provided, determines if the component modal div itself is focusable.

***

### minHeightFit?

> `optional` **minHeightFit**: `number`

Defined in: app/ComponentModal.d.ts:85

Optional minimum height the modal will try to resize down to before attempting other placements.

***

### modalOffset?

> `optional` **modalOffset**: `number`

Defined in: app/ComponentModal.d.ts:67

Optional property to specify a display offset to override the defaults

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLDivElement`\>

Defined in: app/ComponentModal.d.ts:81

Optional blur event handler that captures on blur on the modal and its children.

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLDivElement`\>

Defined in: app/ComponentModal.d.ts:83

Optional key event handler that captures key events on the modal and its children.

***

### onModalOutOfBoundsClick()

> **onModalOutOfBoundsClick**: (`event`) => `any`

Defined in: app/ComponentModal.d.ts:69

A callback for when a click is discovered outside of the modals bounds

#### Parameters

##### event

`MouseEvent`\<`HTMLDivElement`\>

#### Returns

`any`

***

### onResize?

> `optional` **onResize**: [`onResizeCallback`](../type-aliases/onResizeCallback.md)

Defined in: app/ComponentModal.d.ts:89

Optional callback used to notify the parent that the modal was resized to fit the viewport

***

### placement?

> `optional` **placement**: [`ComponentModalPlacement`](../enumerations/ComponentModalPlacement.md) \| [`ComponentModalPlacement`](../enumerations/ComponentModalPlacement.md)[]

Defined in: app/ComponentModal.d.ts:71

If provided, will attempt to place modal using the specified placement before attempting others.

***

### portalDestination?

> `optional` **portalDestination**: `HTMLElement`

Defined in: app/ComponentModal.d.ts:73

If provided, this element will be the place where the portal is rendered.

***

### show

> **show**: `boolean`

Defined in: app/ComponentModal.d.ts:75

To show, or not to show the modal.

***

### smallViewportForwardRef?

> `optional` **smallViewportForwardRef**: `RefObject`\<`HTMLDivElement`\>

Defined in: app/ComponentModal.d.ts:87

Optional forward ref to the small viewport modal (NOT the overlay wrapper).

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: app/ComponentModal.d.ts:77

Optional property to apply CSSProperties to the component

## Methods

### onClosed()?

> `optional` **onClosed**(): `void`

Defined in: app/ComponentModal.d.ts:93

Optional.  Callback notifying when the modal is considered closed (onmount or show=false).

#### Returns

`void`

***

### onOpen()?

> `optional` **onOpen**(`posAndPlc`): `void`

Defined in: app/ComponentModal.d.ts:91

Optional.  Callback notifying of first open with correct position and placement.

#### Parameters

##### posAndPlc

[`BestPositionAndPlacement`](BestPositionAndPlacement.md)

#### Returns

`void`
