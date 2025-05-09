import { PlainObject } from '../../../perspective-client';
import { WorkstationDataSource } from '../api/WorkstationDataSource';
interface DeviceInfoData {
    type: string;
    id: string;
}
export declare const DeviceInfo: WorkstationDataSource<DeviceInfoData, PlainObject>;
export {};
