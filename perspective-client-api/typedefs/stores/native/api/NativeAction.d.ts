import { PlainObject } from "../../../perspective-client";
export interface ContextualMobileActionConfig<C extends PlainObject> {
    context: {
        [key: string]: any;
    };
    config: C | any;
}
/**
 * Shape of a config object sent across the js/native bridge for consumption by the native app.
 */
export interface NativeLaunchActionMessage<D, C extends PlainObject> {
    type: string | D;
    config: C | any;
    context: {
        [key: string]: any;
    } | undefined;
}
