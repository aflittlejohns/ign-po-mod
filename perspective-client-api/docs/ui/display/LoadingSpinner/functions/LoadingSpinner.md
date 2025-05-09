[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [ui/display/LoadingSpinner](../index.md) / LoadingSpinner

# Function: LoadingSpinner()

> **LoadingSpinner**(`props`): `Element`

Defined in: ui/display/LoadingSpinner.d.ts:29

Reusable spinner to indicate a loading state. Able to set size and color, and spinner comes in two forms, depending
on whether "percent" props are passed to it. If so, component acts as a circular progress gauge, with the dark
part of the ring filling the circumference with respect to the percentage passed in. If no props.percent is passed,
component acts like a regular spinner, with a spinning animation running indefinitely until unmount.

## Parameters

### props

[`SpinnerProps`](../interfaces/SpinnerProps.md)

## Returns

`Element`
