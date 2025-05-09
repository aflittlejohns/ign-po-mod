import { JsObject, StyleObject, PlainObject } from '../perspective-client';
import { Style } from "../util/Style";
import { Dataset } from './Dataset';
import { QualifiedValue } from './QualifiedValue';
import { QualityCode } from './QualityCode';
export declare enum TypeCode {
    Dataset = "ds",
    Array = "array",
    Map = "map",
    Primitive = "qv",
    Date = "ts"
}
/**
 * Takes in a component configuration object and returns the same configuration object
 * but with any potential property bound values decoded from its encoded form
 * @param componentConfig - component configuration object to potentially unpack prop binding values
 */
export declare function fromEncoded(componentConfig: PlainObject): any;
export type QualifiedObject<T = any> = {
    $: [TypeCode, T, number];
};
export declare function isQualifiedObject(object: any): object is QualifiedObject;
export type UpdateTypeCode = "map" | "map/merge" | "array" | "array/merge" | "qv" | "ds" | "ts";
export type EncodedQuality = number | [number, string];
export type EncodedMetaArray = [
    UpdateTypeCode
] | [UpdateTypeCode, EncodedQuality] | [UpdateTypeCode, EncodedQuality, number];
export interface UpdateObject {
    $: EncodedMetaArray;
    $v?: null | boolean | number | string;
    $a?: Array<UpdateObject>;
    $columns?: Array<any>;
    $ts?: number;
    [k: string]: any;
}
/** Method of string -> boolean */
export interface PathPredicate {
    (path: string): boolean;
}
/**
 * Custom error thrown when component properties are read in type different than their default value.
 */
export declare class ComponentPropertyError extends Error {
    constructor(...params: Array<any>);
}
export type PropertyTreeChangeListener<T> = (tree: PropertyTree) => T;
export type PropertyTreeChangeListenerDisposer = () => any;
export declare class PropertyTree {
    private listeners;
    private root;
    private onWriteCallback;
    diagnosticId: string;
    constructor(modelSource: PlainObject, onWriteCallback?: () => any, diagnosticId?: string);
    /**
     * Subscribe to any updates to this PropertyTree.
     *
     * @param listener: PropertyTreeChangeListener - A listener that wants to subscribe to updates.
     *
     * @returns PropertyTreeChangeListenerDisposer - Returns a disposer function that will unsubscribe
     * the provided listener from any updates. Use this to remove reference and prevent memory leaks.
     */
    subscribe(listener: PropertyTreeChangeListener<unknown>): PropertyTreeChangeListenerDisposer;
    notifyListeners: () => void;
    notify: (...args: any) => void;
    /**
     * Called by the sync cycle when we have received updates to this property tree from our session. The argument
     * will be our $-qualified diff format.
     */
    update(data: UpdateObject): void;
    /**
     * Called by nodes whenever a write has occurred. This is when we notify the write callback that was passed to
     * us in our constructor.
     */
    onWrite(): void;
    /**
     * @returns {boolean} true if this property tree contains nodes with pending values
     */
    isDirty(): boolean;
    /**
     * @returns {Map<QualityCode>} map of all quality names.
     */
    getQualities(): Map<string, QualityCode>;
    /**
     * Called in the sync cycle when we are sending a sync request to the session. This method will add any dirty values
     * (nodes with non-null pending fields) to the sync request. It will also register callbacks onto the sync request
     * so that when we receive a receipt from the session that the sync has been applied, we can clear out the pending
     * fields.
     */
    getDirtyWrites(syncRequest: {
        addFinishCallback(f: () => any): void;
    }, readPlain?: boolean): PlainObject;
    /**
     * Reads a value from this data model. The value found at the given path is returned as a simple, plain,
     * non-qualified object, such as a primitive, number, string, boolean, object, or array.
     *
     * @param path The path to read from.
     * @param defaultValue (optional) A default value to return in case the path is not found.
     * @returns {any} The data found at the path, converted to plain format.
     */
    read(path?: string, defaultValue?: any): any;
    /**
     * Read the given property as a string. If the property exists and is a string, it will be returned.
     * If the property doesn't exist, the default will be returned.
     * If the property exists and is not a string, the value will be turned into a string via JSON.stringify.
     */
    readString(path: string, defaultValue?: string): string;
    /**
     * Reads the given property as a string, if that property exists and is a string. If the property doesn't exist,
     * null will be returned.
     */
    readStringIfExists(path: string): string | null;
    /**
     * Read the given property as an array. If the property exists and is an array, it will be returned.
     * If the property doesn't exist, or is not a string the default value will be returned.
     * @param path
     * @param defaultValue
     */
    readArray(path: string, defaultValue?: never[]): Array<any>;
    /**
     * Reads the given path in the $-encoded format that preserves quality and correctly encodes Datasets and Dates.
     * @throws Error if the path is not found in the property tree.
     */
    readEncoded(path?: string, includeTimestamp?: boolean): any;
    /**
     * Read the given property as a number. If the property exists and is a number, it will be returned.
     * If the value is a Date, the millis of the date will be returned. If the value is a string, it will be
     * parsed as a float and returned if successful, otherwise the default value will be returned.
     * @param path property reference path to try reading
     * @param defaultValue the value to return if a valid number does not exist at path
     */
    readNumber<T>(path: string, defaultValue: T): T;
    /**
     * Reads the given value as a boolean. If the value is a number, anything non-zero is true. If the value is a
     * string, the word "true" is evaluated to true. Otherwise you get the default value, which is false by default.
     */
    readBoolean(path: string, defaultValue?: boolean): boolean;
    /**
     * Reads the given value as a Date. If the value is a number, it is interpreted as millis since epoch. If the value
     * is a Date, it's just returned directly. Otherwise you get the default value, which is undefined by default.
     */
    readDate(path: string, defaultValue?: Date): Date | undefined;
    /**
     * Reads a value from this data model. The value will be returned as a QualifiedValue.
     * @param path The path to read from.
     * @returns A QualifiedValue representing the data found at the path. If the path is not found in this model,
     * then a qualified value with undefined, and NOT_FOUND quality will be returned.
     */
    readQualified(path: string): QualifiedValue;
    /**
     * Reads a style property and replaces variable-formatted properties (e.g. "--my-var") with css-valid strings.
     * If no argument is passed in, the base 'style' value from the data model will be read and processed for these
     * variable-formatted properties.
     */
    readStyle(path?: string): Style;
    static parseStyle(toBeParsed: StyleObject): Style;
    private static formatStyleNames;
    private static processStyles;
    /**
     * Reads a color property from the data model. A found value in variable format is returned modified as valid css.
     * Otherwise the plain value is returned.
     */
    readColor(path: string, defaultColor?: string): string;
    readDataset(path: string): Dataset | null;
    readType(path: string): TypeCode | null | void;
    readObject<T extends PlainObject>(path: string, defaultObj?: PlainObject): T;
    isObject(path: string): boolean;
    isArray(path: string): boolean;
    isDataset(path: string): boolean;
    isPrimitive(path: string): boolean;
    /**
     * Read the keys of the object at the given path, if it is indeed an object, otherwise an empty array.
     */
    readKeys(path: string): Array<string>;
    /**
     * If the path represents an array, this will get the length of the array. Otherwise will return zero.
     */
    readLength(path: string): number;
    /**
     * Tests a string value for css variable formatting. Returns full valid format: "--my-var" becomes "var(--my-var)"
     * if matched, or else just returns original string.
     */
    static getColorValue(value: string): string;
    /**
     * Returns just the quality of the item at the specified path.
     * @param path The path of the item in the data model to look up.
     * @returns The quality of the item, or undefined if the path doesn't exist
     */
    qualityOf(path: string): QualityCode;
    /**
     * This method is included on the top-level data model map node. Uses the operate method to write to any
     * section of the data model.
     * @param path The path to write to
     * @param value The new value to write
     */
    write(path: string, value: any): void;
    /**
     * Perform an operation (and return its result) on a value in the data model. Look up the position in the data model
     * using a path string. The "operation" is abstracted because this is used for both reading and writing in a data
     * model, since the lookup of the path is relatively complicated.  Will throw a ComponentPropertyError while traversing
     * the path if an unexpected value is found.
     *
     * @param path The path to look up.
     * @param op The operator callback. function will receive the node found at the given path, and a method that could
     * be called in order to overwrite the value
     * @param onNotFound A callback for when the path is not found in the structure. Only called when looking for a
     * name inside a map node. It is called with params: (parent map node, missing name, remainingPath)
     * operate wil return whatever this callback returns.
     * @param onError An error callback, will receive a string representing the error encountered, should throw.
     * @returns {*} Whatever value the operator returned
     */
    private operate;
    /**
     * @returns {Object} tree as a plain object (document) representation of its current state, including optimistic
     * pending values
     */
    toPlainObject(): JsObject;
    /**
     * Exports the property tree in a format suitable for saving
     * @param {PathPredicate} predicate predicate to control what gets included in the export
     */
    export(predicate: PathPredicate): PlainObject;
}
export type PropertyTreeWriter = (path: string, value: any) => void;
