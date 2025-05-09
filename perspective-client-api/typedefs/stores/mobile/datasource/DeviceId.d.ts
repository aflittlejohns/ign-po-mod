import { PlainObject } from '../../../perspective-client';
import { MobileDataSource } from '../api/MobileDataSource';
interface DeviceIdData {
    type: string;
    id: string;
}
export declare const DeviceId: MobileDataSource<DeviceIdData, PlainObject>;
export {};
