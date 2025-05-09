[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/transform-util](../index.md) / PointsTransform

# Class: PointsTransform

Defined in: util/transform-util.d.ts:75

## Constructors

### Constructor

> **new PointsTransform**(`rect`): `PointsTransform`

Defined in: util/transform-util.d.ts:83

#### Parameters

##### rect

[`DetailedRectangle`](../../../perspective-client/interfaces/DetailedRectangle.md)

#### Returns

`PointsTransform`

## Properties

### \_bottomEdge

> `protected` **\_bottomEdge**: `number`

Defined in: util/transform-util.d.ts:80

***

### \_centerPoint

> `protected` **\_centerPoint**: [`Point`](../../../perspective-client/interfaces/Point.md)

Defined in: util/transform-util.d.ts:81

***

### \_leftEdge

> `protected` **\_leftEdge**: `number`

Defined in: util/transform-util.d.ts:77

***

### \_points

> `protected` **\_points**: [`Point`](../../../perspective-client/interfaces/Point.md)[]

Defined in: util/transform-util.d.ts:76

***

### \_rightEdge

> `protected` **\_rightEdge**: `number`

Defined in: util/transform-util.d.ts:78

***

### \_topEdge

> `protected` **\_topEdge**: `number`

Defined in: util/transform-util.d.ts:79

***

### rect

> `protected` **rect**: [`DetailedRectangle`](../../../perspective-client/interfaces/DetailedRectangle.md)

Defined in: util/transform-util.d.ts:82

## Accessors

### bottomEdge

#### Get Signature

> **get** **bottomEdge**(): `number`

Defined in: util/transform-util.d.ts:88

##### Returns

`number`

***

### centerPoint

#### Get Signature

> **get** **centerPoint**(): [`Point`](../../../perspective-client/interfaces/Point.md)

Defined in: util/transform-util.d.ts:89

##### Returns

[`Point`](../../../perspective-client/interfaces/Point.md)

***

### leftEdge

#### Get Signature

> **get** **leftEdge**(): `number`

Defined in: util/transform-util.d.ts:85

##### Returns

`number`

***

### rightEdge

#### Get Signature

> **get** **rightEdge**(): `number`

Defined in: util/transform-util.d.ts:86

##### Returns

`number`

***

### topEdge

#### Get Signature

> **get** **topEdge**(): `number`

Defined in: util/transform-util.d.ts:87

##### Returns

`number`

## Methods

### clone()

> **clone**(): `PointsTransform`

Defined in: util/transform-util.d.ts:94

#### Returns

`PointsTransform`

***

### toPointsArray()

> **toPointsArray**(): [`Point`](../../../perspective-client/interfaces/Point.md)[]

Defined in: util/transform-util.d.ts:93

#### Returns

[`Point`](../../../perspective-client/interfaces/Point.md)[]

***

### transformByTransformation()

> **transformByTransformation**(`transformation?`, `setEdges?`): `PointsTransform`

Defined in: util/transform-util.d.ts:90

#### Parameters

##### transformation?

[`Transform`](../interfaces/Transform.md)

##### setEdges?

`boolean`

#### Returns

`PointsTransform`

***

### transformByTransformationArray()

> **transformByTransformationArray**(`transformationArray`): `PointsTransform`

Defined in: util/transform-util.d.ts:91

#### Parameters

##### transformationArray

[`Transform`](../interfaces/Transform.md)[]

#### Returns

`PointsTransform`

***

### translate()

> **translate**(`x`, `y`): `PointsTransform`

Defined in: util/transform-util.d.ts:92

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`PointsTransform`
