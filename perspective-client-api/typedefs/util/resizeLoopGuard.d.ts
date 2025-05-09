import { JsObject } from "../perspective-client";
/**
 * There are 2 distinct parts to the resizeLoop Guard
 * 1. @resizeLoopGuard , the decorator which decorates onResize functions - it binds the function and keeps track of previous Dimensions using a set of hashed
 *    dimensions.  It schedules a prune of previous dimensions using the AutoPruner
 * 2. AutoPruner - a (shared/singleton) scheduler for the prune function provided by each instance of the PreviousDimensions. Everytime a
 *    PreviousDimensions schedules a prune a quiet period is triggered. This quiet period pospones the prune of each instance of PreviousDimensions.
 *    This makes detection of loops more reliable for extreme examples of loops where Component_0  triggers a resize of Component_1 triggers, ...,
 *    triggers a resize of Component_N which triggers a resize of Component_0.
 */
/** 1. @loopGuard decorator */
export declare function resizeLoopGuard(target: JsObject, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): {
    configurable: boolean;
    get(this: any): any;
};
type OnResizeFunction = (width: number, height: number) => void;
export declare function loopGuardFunction(fn: OnResizeFunction): OnResizeFunction;
export {};
