import { MobileDataSource } from '../api/MobileDataSource';
export interface BarcodeConfig {
    type: "string";
}
export interface BarcodeData {
    text: string;
}
export declare const BarcodeDataSource: MobileDataSource<BarcodeConfig, BarcodeData>;
