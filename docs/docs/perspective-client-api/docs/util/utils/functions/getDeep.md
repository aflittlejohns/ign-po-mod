[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / getDeep

# Function: getDeep()

> **getDeep**(`obj`, `path`): `any`

Defined in: util/utils.d.ts:251

Given an object or an array, and array of path steps, attempts to extract the
value of the property at the given path.

## Parameters

### obj

`Record`\<`string`, `unknown`\> | `unknown`[]

### path

(`string` \| `number`)[]

## Returns

`any`

- Returns the properties value if the property exists at the given path, otherwise returns null.
