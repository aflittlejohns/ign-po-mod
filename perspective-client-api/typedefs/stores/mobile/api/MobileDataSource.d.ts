import { ActionFactory } from '../../../api/action/ActionRegistry';
import { PlainObject } from '../../../perspective-client';
import { ClientStore } from '../../ClientStore';
import { ContextualMobileActionConfig } from './MobileAction';
import { MobileDataType } from './MobileDataType';
/**
 * Interface that a minimal data value being received from the Native bridge will have.  The type of data `D` is
 * dependent on the MobileDataType
 */
export interface MobileDataItem<D extends PlainObject> {
    type?: MobileDataType;
    data?: D;
    context?: PlainObject;
    config?: PlainObject;
}
/**
 * Represents a single data 'item' sent back to the gw through the async submitter
 */
export interface MobileDataGwSubmission<D extends PlainObject> {
    type: MobileDataType;
    data: D;
    context?: PlainObject;
}
/**
 * Mobile data sources receive data sent from a mobile device via the MobileBridge. In some cases, this data is written
 * directly back to the props on the client side via implementing the `apply` method.  In other cases, the data is
 * intended to be sent back to the gateway for session event handling, which is done automatically if the
 * MobileDataType is appropriately registered.
 */
export interface MobileDataSource<C extends PlainObject, D extends PlainObject> {
    /**
     * The type of action/data event this DataSource represents.
     */
    type: MobileDataType;
    /**
     * If the data source is one that may be triggered by an action, this is the factory which creates the action.
     */
    factory?: ActionFactory<ContextualMobileActionConfig<C>>;
    /**
     * This function is called to "prepare" data that has been provided by the mobile device.  This is a chance to
     * perform any alterations to the raw data provided by the mobile devices before it's forwarded to the 'apply',
     * or submitted back to the gateway.
     */
    prepare?(result: MobileDataItem<D>): MobileDataItem<D>;
    /**
     * Some mobile data sources do not fire as a result of actions, nor need to send data back to the gateway.
     * In these cases, the MobileDataSource can act to apply data received from the mobile device directly in the
     * client by providing this function.
     */
    apply?(data: MobileDataItem<D>, client: ClientStore): void;
    /**
     * Mobile data can be challenging to test during development, so MobileDataSources may choose to implement this
     * method in order to register a simulate method that will end up being callable from the browser console via
     * `window._simulate<MobileDataTypeSuffix>(data: D, context: {something: here})`.
     *
     * For example: barcode scans have a type `native/barcode`, and a data shape D that is simply {text: string}.
     *
     * Registering a 'simulate` method for the barcode data source would add the following method to the window:
     * ```
     *     window._simulateBarcode(data: {text: string}, context?: JsObject)
     * ```
     * To use, you'd call it in the browser console, submitting some simulated data such as:
     * ```
     *     const fakeContext = { helperInfo: "this is a text context" };
     *     const fakeBarcodeData = "I am a string that was captured in a barcode";
     *     window._simulateBarcode(fakeBarcodeData, fakeContext);
     * ```
     * @param data the data object that is representative of the info sent by the device
     * @param context any string keyed plain JS object that should represent an example user-defined context
     * @param config the configuration to simulate (useful for cases where configuration alters where data is applied,
     * as is the case in a small number of data sources (e.g. accelerometer)
     *
     */
    simulate?(data?: D, context?: PlainObject, config?: PlainObject): void;
}
