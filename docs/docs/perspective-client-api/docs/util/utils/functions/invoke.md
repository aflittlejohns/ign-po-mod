[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / invoke

# Function: invoke()

> **invoke**(`fn`): `void`

Defined in: util/utils.d.ts:47

Uses either requestIdleCallback (if available) or requestAnimationFrame (generally on Safari only)
to invoke the provided function.  If requestIdleCallback is available it will by default wait patiently
for 5 seconds, and if not invoked, will invoke the function.  This should help prevent functions from
never being invoked in instances where the main thread is constantly being occupied.  Can be overridden
by providing the idleTimeout param.

## Parameters

### fn

() => `void`

## Returns

`void`
