import { MobileDataType } from './MobileDataType';
import { NativeLaunchActionMessage } from "../../native/api/NativeAction";
export interface ContextualMobileActionConfig<C extends Record<string, any>> {
    context: Record<string, any>;
    config: C | any;
}
/**
 * Shape of a config object sent across the js/native bridge for consumption by the native mobile app.
 */
export type LaunchActionMessage<C extends Record<string, any>> = NativeLaunchActionMessage<MobileDataType, C>;
