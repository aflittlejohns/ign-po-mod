[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / deepClone

# Function: deepClone()

> **deepClone**\<`T`\>(`obj`): `T`

Defined in: util/utils.d.ts:88

Returns a clone of an object, copying its property values without references from the original structure
- will not copy classes, Date objects etc. with integrity
- from Visual Studio Code https://github.com/Microsoft/vscode/blob/master/src/vs/base/common/objects.ts

 CAUTION - not for use with deep observable mobx structures - @observable.ref can work if only top-level structure
 is being observed

## Type Parameters

### T

`T`

## Parameters

### obj

`T`

object to clone

## Returns

`T`

a deep clone of the parameter, if it's a truthy value of type 'object'
