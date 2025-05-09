[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / flatMap

# Function: flatMap()

> **flatMap**\<`T`, `U`\>(`array`, `mapFunc`): `U`[]

Defined in: util/utils.d.ts:215

Utility function that can convert an array of interable items into a single array of items through the application of
a caller-provided maping function which accepts an item T from the original array, and returns and array of desired
items.  The final array will be a single array of the desired items.  Note that the final array may have repeating
items, and it is up to the caller to filter it if distinct items are desired.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### array

`T`[]

of T

### mapFunc

(`x`) => `U`[]

## Returns

`U`[]
