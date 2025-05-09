[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/DockModal](../index.md) / DockModalProps

# Interface: DockModalProps

Defined in: app/DockModal.d.ts:15

## Properties

### children?

> `optional` **children**: `ReactNode`

Defined in: app/DockModal.d.ts:16

***

### className?

> `optional` **className**: `string`

Defined in: app/DockModal.d.ts:18

Add CSS classes to this component

***

### component

> **component**: `ReactInstance`

Defined in: app/DockModal.d.ts:20

The ReactInstance used to create a DOM element to display inside of the modal

***

### dock

> **dock**: `HTMLElement`

Defined in: app/DockModal.d.ts:22

The dock in which the ReactInstance component resides

***

### onInnerContentOutOfBoundsClick()

> **onInnerContentOutOfBoundsClick**: (`event`) => `any`

Defined in: app/DockModal.d.ts:24

A callback for when a click is discovered outside of the bounds of the inner content

#### Parameters

##### event

`MouseEvent`

#### Returns

`any`

***

### scope

> **scope**: [`ClientScope`](../../../stores/ClientStore/enumerations/ClientScope.md)

Defined in: app/DockModal.d.ts:26

The render scope of this component
