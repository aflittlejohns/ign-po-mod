[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/mobile/datasource/Accelerometer](../index.md) / AccelerometerActionConfig

# Interface: AccelerometerActionConfig

Defined in: stores/mobile/datasource/Accelerometer.d.ts:13

## Properties

### duration

> **duration**: `number`

Defined in: stores/mobile/datasource/Accelerometer.d.ts:22

How long the accelerometer should run for in milliseconds, with negative values and 0 having special meaning:
value : result
< 0 : disable
  0 : continuous mode
> 0 : duration to collect accelerometer data, in milliseconds

***

### sampleRate

> **sampleRate**: `number`

Defined in: stores/mobile/datasource/Accelerometer.d.ts:30

Rate that accelerometer reads data from the device, in milliseconds.  E.g. a value of 30 means "read from the
accelerometer every 30 milliseconds".

Values that exceed 100Hz frequencies (~0.6 ms) may exceed the update rate of common Android hardware (phones).
When this occurs, the value will still be returned, but will likely be the same value as previously requested.
