[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/date-utils](../../../index.md) / [DateUtils](../index.md) / deriveDateRange

# Function: deriveDateRange()

> **deriveDateRange**(`minDate`, `maxDate`): [`DateRange`](../interfaces/DateRange.md)

Defined in: util/date-utils.d.ts:216

Validates the min date and max date. If the min date is later than the max date or the max date is earlier
than the min date, set them equal

## Parameters

### minDate

`Date`

{Date} - start of the date range

### maxDate

`Date`

{Date} - end of the date range

## Returns

[`DateRange`](../interfaces/DateRange.md)

- returns a valid date range
