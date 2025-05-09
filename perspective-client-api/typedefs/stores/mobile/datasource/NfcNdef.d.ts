import { JsObject } from '../../../perspective-client';
import { MobileDataSource } from '../api/MobileDataSource';
import { MobileDataType } from '../api/MobileDataType';
export declare const NDEF_ACTION_ID: MobileDataType;
export interface NdefNfcConfig {
    enable: boolean;
    continuousRead: boolean;
}
/**
 * Interface representing a single nfc ndef scan item.  Multiple items may be received from the mobile device, each
 * representing a single ndef-formatted data item.
 */
export interface NdefDataItem {
    typeNameFormat: number;
    type: string;
    id?: string;
    payload: string;
}
export interface NdefData {
    messages: Array<NdefDataItem>;
}
export declare function simulate(data: NdefData | undefined, context?: JsObject | undefined): void;
export declare const NfcNdefDataSource: MobileDataSource<NdefNfcConfig, NdefData>;
