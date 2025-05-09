[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / DOMRectPolyfill

# Class: DOMRectPolyfill

Defined in: util/utils.d.ts:262

## Implements

- `DOMRect`

## Constructors

### Constructor

> **new DOMRectPolyfill**(`x?`, `y?`, `width?`, `height?`): `DOMRectPolyfill`

Defined in: util/utils.d.ts:269

#### Parameters

##### x?

`number`

##### y?

`number`

##### width?

`number`

##### height?

`number`

#### Returns

`DOMRectPolyfill`

## Properties

### height

> **height**: `number`

Defined in: util/utils.d.ts:273

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/height)

#### Implementation of

`DOMRect.height`

***

### width

> **width**: `number`

Defined in: util/utils.d.ts:272

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/width)

#### Implementation of

`DOMRect.width`

***

### x

> **x**: `number`

Defined in: util/utils.d.ts:270

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/x)

#### Implementation of

`DOMRect.x`

***

### y

> **y**: `number`

Defined in: util/utils.d.ts:271

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/y)

#### Implementation of

`DOMRect.y`

## Accessors

### bottom

#### Get Signature

> **get** **bottom**(): `number`

Defined in: util/utils.d.ts:276

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/bottom)

##### Returns

`number`

#### Implementation of

`DOMRect.bottom`

***

### left

#### Get Signature

> **get** **left**(): `number`

Defined in: util/utils.d.ts:277

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left)

##### Returns

`number`

#### Implementation of

`DOMRect.left`

***

### right

#### Get Signature

> **get** **right**(): `number`

Defined in: util/utils.d.ts:275

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/right)

##### Returns

`number`

#### Implementation of

`DOMRect.right`

***

### top

#### Get Signature

> **get** **top**(): `number`

Defined in: util/utils.d.ts:274

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/top)

##### Returns

`number`

#### Implementation of

`DOMRect.top`

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: util/utils.d.ts:278

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/toJSON)

#### Returns

`object`

##### bottom

> **bottom**: `number`

##### height

> **height**: `number`

##### left

> **left**: `number`

##### right

> **right**: `number`

##### top

> **top**: `number`

##### width

> **width**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Implementation of

`DOMRect.toJSON`

***

### fromRect()

> `static` **fromRect**(`rect?`): `DOMRectPolyfill`

Defined in: util/utils.d.ts:263

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/fromRect_static)

#### Parameters

##### rect?

###### height?

`number`

###### width?

`number`

###### x?

`number`

###### y?

`number`

#### Returns

`DOMRectPolyfill`
