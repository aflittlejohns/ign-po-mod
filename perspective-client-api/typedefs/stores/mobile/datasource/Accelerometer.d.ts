import { ActionFactory } from '../../../api/action/ActionRegistry';
import { PlainObject } from '../../../perspective-client';
import { ClientStore } from '../../ClientStore';
import { ContextualMobileActionConfig } from '../api/MobileAction';
import { MobileDataItem, MobileDataSource } from '../api/MobileDataSource';
export interface AccelerometerDataPoint {
    timestamp: number;
    x: number;
    y: number;
    z: number;
}
export type AccelerometerData = Array<AccelerometerDataPoint>;
export interface AccelerometerActionConfig {
    /**
     * How long the accelerometer should run for in milliseconds, with negative values and 0 having special meaning:
     * value : result
     * < 0 : disable
     *   0 : continuous mode
     * > 0 : duration to collect accelerometer data, in milliseconds
     *
     */
    duration: number;
    /**
     * Rate that accelerometer reads data from the device, in milliseconds.  E.g. a value of 30 means "read from the
     * accelerometer every 30 milliseconds".
     *
     * Values that exceed 100Hz frequencies (~0.6 ms) may exceed the update rate of common Android hardware (phones).
     * When this occurs, the value will still be returned, but will likely be the same value as previously requested.
     */
    sampleRate: number;
}
export declare const AccelerometerAction: ActionFactory<ContextualMobileActionConfig<AccelerometerActionConfig>>;
export declare function apply(result: MobileDataItem<AccelerometerData>, client: ClientStore): void;
/**
 * Accelerometer as a mobile datasource is a little bit odd in that accelerometer's can be configured in two ways which
 * act quite differently in how they apply the resulting information.
 *
 * In 'continuous' mode (the mode which the accelerometer runs in when the 'duration' configuration value is 0), the
 * data is received one-read at a time, with timing specified by the configured 'sampleRate'.  When in this mode,
 * we write the information directly back to the session's `device.accelerometer` property.
 *
 * When we are in 'batch' mode (utilized when an accelerometer action is requested with a specified duration/sample
 * window), the mobile device collects accelerometer data at the requested frequency for the duration, and the full
 * set of data is provided at the end of the sample duration.  This set is not written back to the device session props,
 * but is instead submitted to the gateway to be handled by a user written perspective session event handler.
 */
export declare const AccelerometerDataSource: MobileDataSource<AccelerometerData, PlainObject>;
