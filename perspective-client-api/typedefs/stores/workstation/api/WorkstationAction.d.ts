import { WorkstationDataType } from './WorkstationDataType';
import { NativeLaunchActionMessage } from "../../native/api/NativeAction";
import { PlainObject } from '../../../perspective-client';
export interface ContextualWorkstationAction<C extends PlainObject> {
    context: {
        [key: string]: any;
    };
    config: C | any;
}
/**
 * Shape of a config object sent across the js/native bridge for consumption by the native app.
 */
export type LaunchActionMessage<C extends PlainObject> = NativeLaunchActionMessage<WorkstationDataType, C>;
