import * as React from 'react';
import { default as moment } from "moment-timezone";
import { ClientScope } from '../stores/ClientStore';
import { PlainObject, StyleObject } from '../perspective-client';
/**
 * An immutable color interface made up of its red, green, blue, and alpha components
 */
export interface Color {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
}
export declare enum JsType {
    Null = "null",
    Undefined = "undefined",
    Object = "object",
    Function = "function",
    Array = "array",
    Number = "number",
    Boolean = "boolean",
    String = "string",
    Unknown = "unknown"
}
/**
 * Calculates the angle between 0,0 and the point specified by x and y params
 * @param x
 * @param y
 * @param offsetAngle
 */
export declare function calcAngleDegrees(x: number, y: number, offsetAngle?: number): number;
/**
 * Parse a string into a Color instance
 * @param {string} color The string to parse into an instance of Color
 * @returns {Color} The parsed Color instance
 */
export declare function parseColor(color: string): Color;
/**
 * Uses either requestIdleCallback (if available) or requestAnimationFrame (generally on Safari only)
 * to invoke the provided function.  If requestIdleCallback is available it will by default wait patiently
 * for 5 seconds, and if not invoked, will invoke the function.  This should help prevent functions from
 * never being invoked in instances where the main thread is constantly being occupied.  Can be overridden
 * by providing the idleTimeout param.
 *
 * @param fn: () => void - function to invoke
 */
export declare function invoke(fn: () => void): void;
/**
 * Given an HTMLImageElement, outputs its ImageData or throws an Exception if there is some problem such as a CORS
 * access issue. The ImageData is useful in a canvas for pixel-by-pixel transformations.
 * @param {HTMLImageElement} img The HTMLImageElement from which to extract its ImageData
 * @returns {ImageData} The extracted ImageData
 */
export declare function getImageData(img: HTMLImageElement): ImageData;
export interface RegularObject {
    [key: number]: any;
    [key: string]: any;
}
export declare function isPrimaryMouseButton(event: React.MouseEvent<HTMLElement, MouseEvent>): boolean;
export declare function isRegularObject(o: any): o is RegularObject;
/**
 * Checks if a value is a plain object.
 *
 * @param o: any - The value to check.
 * @return boolean - Returns true if the value is a PlainObject.
 */
export declare function isPlainObject(o: any): o is PlainObject;
/**
 * Returns true if the argument's prototype === Object.prototype or is null. Leaving for backwards compatibility.
 * This should be reconciled with isPlainObject
 * @link isPlainObject
 * @param o
 */
export declare function isSimpleObject(o: any): boolean;
/** Recursive version of Object.freeze. Thanks to https://github.com/substack/deep-freeze */
export declare function deepFreeze<T extends PlainObject>(o: T): T;
/**
 * Returns a clone of an object, copying its property values without references from the original structure
 * - will not copy classes, Date objects etc. with integrity
 * - from Visual Studio Code https://github.com/Microsoft/vscode/blob/master/src/vs/base/common/objects.ts
 *
 *  CAUTION - not for use with deep observable mobx structures - @observable.ref can work if only top-level structure
 *  is being observed
 *
 * @param obj - object to clone
 * @returns {T} a deep clone of the parameter, if it's a truthy value of type 'object'
 */
export declare function deepClone<T>(obj: T): T;
/** Requires the argument to be non-null and non-undefined. If it is, it throws an error. If not, it returns the arg */
export declare function requireNonNull(arg: any, message: string): any;
export declare function isNullOrUndefined(arg: any): boolean;
export declare function setsEqual(setA: Set<any>, setB: Set<any>): boolean;
/** Requires the argument to be a string. Empty string is allowed. */
export declare function requireString(arg: any, message: string): any;
export declare function getRandomInt(min: number, max: number): number;
export declare function isFunction(item: any): item is JsType.Function;
export declare function isString(item: any): item is string;
export declare function isNumeric(n: any): n is number;
export declare function isBoolean(b: any): boolean;
export declare function isPrimitive(p: any): boolean;
/**
 * Convenience method - mobx observable arrays fail Array.isArray(), so this catches either
 */
export declare function isArray(arr: any): arr is Array<any>;
export declare function isDate(date: any): date is Date;
export declare function isMomentDate(date: any): date is moment.Moment;
export declare function convertReactCssToHyphen(style: string | undefined): string | undefined;
/**
 * Convenience function to check that a StleObject type is valid
 * @param config
 */
export declare function isStyleConfig(config: StyleObject): boolean;
/**
 * Perform a best-effort guess at the type of the passed in variable and return a string describing the result.
 * @param variable
 */
export declare function getType(variable: any): string;
/**
 * Given a number, a min, and a max, returns min if num < min, max if num > max, or num otherwise.
 * If max < min, this function will always return num.
 * This method is undefined if any of the arguments are not a number.
 * @param min the minimum value that can be returned
 * @param max the maximum value that can be returned
 * @param num the number to test
 */
export declare function between(min: number, max: number, num: number): number;
/**
 * Utility method that registers a callback method that will be called after the page loads. May be called many
 * times and will simply chain the callbacks together.
 */
export declare function onload(callback: (evt: any) => any): void;
/**
 * Get the active fullscreenElement on the document or null if there isn't an active element.
 */
export declare function getFullScreenElement(): Element | null;
/**
 * Request fullscreen presentation for the passed in element. The request can potentially return a promise
 * and needs to be handled correctly if the request fails.
 * @param element
 * @param options FullscreenOptions
 */
export declare function requestFullScreen(element: Element, options?: any): void | Promise<void>;
/**
 * Cancel fullscreen presentation at the document level if the fullscreen element is a VideoPlayer component.
 */
export declare function exitFullScreen(): void | Promise<void>;
/**
 * Set of utility functions to smooth out full screen requests. Certain browsers
 * do not return a promise on full screen requests.
 */
export declare function requestFullScreenPromise(element: Element): Promise<void>;
export declare function exitFullScreenPromise(): Promise<void>;
/**
 * A javascript implementation of Java's String.hashCode().  Accounts for the 32 bit space.
 * @param str a string
 * @returns {number} signed integer value which matches the output from a java string.hashCode() call on the same
 * string.  Will return undefined if non-string is passed in as the argument.
 */
export declare function hashCode(str: string): number;
/**
 * Checks that a check value is defined, and returns it if it is, else returns the default provided.
 * @param {T} check value to test for being defined
 * @param {T} defaultValue the return if undefined
 * @returns {T}
 */
export declare function existsOrDefault<T>(check: T, defaultValue: T): T;
/**
 * Static util function to call instead of using lambda's in jsx
 * @param {React.SyntheticEvent<any>} e
 */
export declare function stopPropagation(e?: React.SyntheticEvent<any>): void;
/**
 * Checks to see if the parameter is an Iterable object, following the reference:
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
 * @param obj any object
 * @returns {boolean}
 */
export declare function isIterable(obj: any): boolean;
/**
 * A function that makes it a little nicer to test for the existence if deeply structured properties.  For instance, if
 * an object may have a shape where any number of intermediate properties are undefined, each should be tested for.
 *
 * Using this structure as an example. where any of the keys may be missing:
 * out: {
 *   top: {
 *     middle: {
 *       deep: { hi: 2 }
 *     }
 *   }
 * }
 *
 * You could do something like:
 *     if (out && out.top && out.top.middle && && out.top.middle.deep && out.top.middle.deep.hi) { }
 *
 * But that sucks.  This method allows you to call:
 *     if (out, "top", "middle", "deep", "hi"){ }
 *
 * Still sucks, but is more more concise.
 *
 *
 * @param obj an object to inspect for valid nesting.
 * @param args , where each arg is a string representing a property key in order expected in the structure.
 */
export declare function hasProperties(obj: any, ...args: Array<string>): boolean;
/**
 * Utility function that can convert an array of interable items into a single array of items through the application of
 * a caller-provided maping function which accepts an item T from the original array, and returns and array of desired
 * items.  The final array will be a single array of the desired items.  Note that the final array may have repeating
 * items, and it is up to the caller to filter it if distinct items are desired.
 *
 * @param {T[]} array of T
 * @param {(x: T) => U[]} mapFunc
 * @returns {U[]}
 */
export declare function flatMap<T, U>(array: T[], mapFunc: (x: T) => U[]): U[];
export declare function getPortalDestination(component: Element, scope: ClientScope, withMeta?: boolean): HTMLElement | PortalDestinationMeta | any;
export declare function wordsFromCamelCase(camel: string): string;
export declare function capitalizeEveryWord(phrase: string): string;
export declare function isUrlEncoded(url: string): boolean;
export declare function secondsToHms(seconds: number, translator?: ((text: string) => string)): string;
export interface PortalDestinationMeta {
    rootElement: HTMLElement;
    inDock: boolean;
    inPopup: boolean;
    inModal: boolean;
}
export declare const ROOT_PORTAL_DESTINATION: HTMLElement;
export declare enum OperatingSystem {
    Mac = 0,
    Windows = 1,
    Linux = 2,
    Unix = 3,
    Unknown = 4
}
export declare namespace OperatingSystem {
    /**
     * Detects the operating system in a very general way, assuming that this call is being made from the Ignition
     * Designer which is extremely unlikely to be running on a mobile devices.
     * @return {OperatingSystem}
     */
    function detect(): OperatingSystem;
}
/**
 * Given an object or an array, and array of path steps, attempts to extract the
 * value of the property at the given path.
 *
 * @param obj: Record<string, any> | Array<unknown> - The object or array to search.
 * @param path: Array<string | number> - The path to the desired property.
 * @returns - Returns the properties value if the property exists at the given path, otherwise returns null.
 */
export declare function getDeep(obj: Record<string, unknown> | Array<unknown>, path: Array<string | number>): any;
/**
 * Given a path, determine its pathToParent, and either an index or a name to complete the path
 */
interface PathDetails {
    pathToParent: string;
    name?: string;
    index: number;
}
export declare function getPathDetails(completePath: string): PathDetails;
export declare function arrayMove<T>(array: Array<T>, fromIndex: number, toIndex: number): Array<T> | null;
export declare class DOMRectPolyfill implements DOMRect {
    static fromRect(rect?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }): DOMRectPolyfill;
    constructor(x?: number, y?: number, width?: number, height?: number);
    x: number;
    y: number;
    width: number;
    height: number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get left(): number;
    toJSON(): {
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
export {};
