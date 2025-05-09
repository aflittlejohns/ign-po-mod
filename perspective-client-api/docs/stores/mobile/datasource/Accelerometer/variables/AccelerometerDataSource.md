[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/mobile/datasource/Accelerometer](../index.md) / AccelerometerDataSource

# Variable: AccelerometerDataSource

> `const` **AccelerometerDataSource**: [`MobileDataSource`](../../../api/MobileDataSource/interfaces/MobileDataSource.md)\<[`AccelerometerData`](../type-aliases/AccelerometerData.md), [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)\>

Defined in: stores/mobile/datasource/Accelerometer.d.ts:47

Accelerometer as a mobile datasource is a little bit odd in that accelerometer's can be configured in two ways which
act quite differently in how they apply the resulting information.

In 'continuous' mode (the mode which the accelerometer runs in when the 'duration' configuration value is 0), the
data is received one-read at a time, with timing specified by the configured 'sampleRate'.  When in this mode,
we write the information directly back to the session's `device.accelerometer` property.

When we are in 'batch' mode (utilized when an accelerometer action is requested with a specified duration/sample
window), the mobile device collects accelerometer data at the requested frequency for the duration, and the full
set of data is provided at the end of the sample duration.  This set is not written back to the device session props,
but is instead submitted to the gateway to be handled by a user written perspective session event handler.
