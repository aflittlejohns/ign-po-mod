[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/date-utils](../../../index.md) / [DateUtils](../index.md) / addTimeFromDate

# Function: addTimeFromDate()

> **addTimeFromDate**\<`T`\>(`to`, `from`): `T`

Defined in: util/date-utils.d.ts:235

Adds time (hour and minutes) to one date
from another date.  Useful when the time
of a date is stripped out or reset to midnight.

## Type Parameters

### T

`T` = `any`

## Parameters

### to

`any`

### from

`any`

## Returns

`T`

- Returns a new date, a clone of the 'to'
Date object with the time derived from the 'from' Date object.
