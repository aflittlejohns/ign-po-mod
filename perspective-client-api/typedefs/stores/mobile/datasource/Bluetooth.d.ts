import { ActionFactory } from "../../../api/action/ActionRegistry";
import { ClientStore, PlainObject } from "../../../perspective-client";
import { ContextualMobileActionConfig } from "../api/MobileAction";
import { MobileDataItem, MobileDataSource } from "../api/MobileDataSource";
export type BluetoothData = Array<PlainObject>;
export interface BluetoothActionConfig {
    /**
     * Maximum amount of packets to show. Packets with stronger RSSI have priority.
     */
    limit: number;
}
export declare const BluetoothAction: ActionFactory<ContextualMobileActionConfig<BluetoothActionConfig>>;
export declare function apply(result: MobileDataItem<BluetoothData>, client: ClientStore): void;
export declare const BluetoothDataSource: MobileDataSource<BluetoothData, PlainObject>;
