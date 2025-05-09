[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/LayoutCallbackCreator](../index.md) / layoutCallbackCreator

# Variable: layoutCallbackCreator

> `const` **layoutCallbackCreator**: `object`

Defined in: app/LayoutCallbackCreator.d.ts:4

## Type declaration

### forClass()

> **forClass**(`classNames`): [`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

Creates a layout callback which will add the given classname(s), leaving the style object alone.

#### Parameters

##### classNames

`string`[]

string(s) to add to the target component's list of class names

#### Returns

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

### forClassAndStyle()

> **forClassAndStyle**(`layoutBuilder`, `classNames`): [`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

Creates a layout callback which will augment a component's styles with the style object provided and
which will add the given class name(s).

#### Parameters

##### layoutBuilder

[`LayoutBuilder`](../type-aliases/LayoutBuilder.md)

A function which returns an object containing keys suitable for the React "style" argument.

##### classNames

`string`[]

string(s) to add to the target component's list of class names

#### Returns

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

### forStyle()

> **forStyle**(`layoutBuilder`): [`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)

Creates a layout callback which will augment a component's styles with the style object provided.

#### Parameters

##### layoutBuilder

[`LayoutBuilder`](../type-aliases/LayoutBuilder.md)

A function which returns an object containing keys suitable for the React "style"
                       argument. See https://facebook.github.io/react/docs/dom-elements.html#style

#### Returns

[`LayoutCallback`](../../../perspective-client/interfaces/LayoutCallback.md)
