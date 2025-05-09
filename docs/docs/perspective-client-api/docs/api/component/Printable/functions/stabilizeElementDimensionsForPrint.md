[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [api/component/Printable](../index.md) / stabilizeElementDimensionsForPrint

# Function: stabilizeElementDimensionsForPrint()

> **stabilizeElementDimensionsForPrint**(`elem`, `stabilizeHeight?`, `stabilizeWidth?`): () => `void`

Defined in: api/component/Printable.d.ts:26

Temporarily assigns the calculated bounding rect height and width of the element, in its
current DOM hierarchy and layout, directly to the elements style object.  We do this to
ensure the element maintains its size when it is reconstructed in the print environment.
For example, the layout of a component this is a flex child relies on the rules and layout
of its parent flex container.

onBeforePrint doesn't work how we'd expect, for now, so instead we do all the before print work here.

## Parameters

### elem

`HTMLElement`

element to stabilize

### stabilizeHeight?

`boolean`

### stabilizeWidth?

`boolean`

## Returns

Returns a cleanup callback to be used after print has finished

> (): `void`

### Returns

`void`
