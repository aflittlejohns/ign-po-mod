/**
 * Utility function used when reading a VALUE from a PropertyTree.
 * A PropertyTree uses these to coerce the value of a Node to a requested type.
 * Use these to do the same, without having to actually read from a PropertyTree.
 */
export declare namespace PropertyUtil {
    function getBooleanOrDefault(value: any, defaultValue?: boolean): boolean;
    function getDateOrDefault(value: any, defaultValue?: Date): Date | undefined;
    function getNumberOrDefault<T>(value: any, defaultValue?: T): number | T;
    function getStringOrDefault(value: any, defaultValue?: string): string;
    function getArrayOrDefault(value: any, defaultValue?: Array<any>): Array<any>;
    function getStringIfExists(value: any): string | null;
}
