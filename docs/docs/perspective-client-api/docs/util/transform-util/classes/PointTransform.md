[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/transform-util](../index.md) / PointTransform

# Class: PointTransform

Defined in: util/transform-util.d.ts:35

Given a point, this calculator can apply the appropriate Transformations to determine where this point should be after transformations

## Constructors

### Constructor

> **new PointTransform**(`x`, `y`): `PointTransform`

Defined in: util/transform-util.d.ts:37

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`PointTransform`

## Methods

### toPoint()

> **toPoint**(): [`Point`](../../../perspective-client/interfaces/Point.md)

Defined in: util/transform-util.d.ts:73

Return a new point object representing this point

#### Returns

[`Point`](../../../perspective-client/interfaces/Point.md)

***

### transformByMatrix()

> **transformByMatrix**(`matrix`): `PointTransform`

Defined in: util/transform-util.d.ts:42

Transform this point by the specified matrix

#### Parameters

##### matrix

`Matrix`

#### Returns

`PointTransform`

***

### transformByTransformation()

> **transformByTransformation**(`transformation`, `originAdjustment?`, `inverse?`): `PointTransform`

Defined in: util/transform-util.d.ts:49

Transform this point by this transformation (matrix & origin) and apply any specified origin adjustment

#### Parameters

##### transformation

[`Transform`](../interfaces/Transform.md)

##### originAdjustment?

[`Point`](../../../perspective-client/interfaces/Point.md)

##### inverse?

`boolean`

#### Returns

`PointTransform`

***

### transformByTransformationArray()

> **transformByTransformationArray**(`transformationArray`, `originAdjustment?`, `inverse?`): `PointTransform`

Defined in: util/transform-util.d.ts:56

Transform this point by this array of transformations (matrix & origin)

#### Parameters

##### transformationArray

[`Transform`](../interfaces/Transform.md)[]

##### originAdjustment?

[`Point`](../../../perspective-client/interfaces/Point.md)

##### inverse?

`boolean`

#### Returns

`PointTransform`

***

### translate()

> **translate**(`x`, `y`, `inverse?`): `PointTransform`

Defined in: util/transform-util.d.ts:63

Translate this point by this x and y

#### Parameters

##### x

`number`

##### y

`number`

##### inverse?

`boolean`

#### Returns

`PointTransform`

***

### translateByPoint()

> **translateByPoint**(`point`, `inverse?`): `PointTransform`

Defined in: util/transform-util.d.ts:69

Translate this point by this point

#### Parameters

##### point

[`Point`](../../../perspective-client/interfaces/Point.md)

##### inverse?

`boolean`

#### Returns

`PointTransform`
