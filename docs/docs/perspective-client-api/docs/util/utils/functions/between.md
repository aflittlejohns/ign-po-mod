[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / between

# Function: between()

> **between**(`min`, `max`, `num`): `number`

Defined in: util/utils.d.ts:126

Given a number, a min, and a max, returns min if num < min, max if num > max, or num otherwise.
If max < min, this function will always return num.
This method is undefined if any of the arguments are not a number.

## Parameters

### min

`number`

the minimum value that can be returned

### max

`number`

the maximum value that can be returned

### num

`number`

the number to test

## Returns

`number`
