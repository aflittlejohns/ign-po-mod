[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/date-utils](../../../index.md) / [DateUtils](../index.md) / areRangesEqual

# Function: areRangesEqual()

> **areRangesEqual**(`first`, `second`): `boolean`

Defined in: util/date-utils.d.ts:116

Determines if two date range objects are equal.  Uses areDatesEqual
which does not take into account time, but only day, month, and year.

## Parameters

### first

[`DateRange`](../interfaces/DateRange.md)

### second

[`DateRange`](../interfaces/DateRange.md)

## Returns

`boolean`

- Returns whether the provided date ranges are equal.
