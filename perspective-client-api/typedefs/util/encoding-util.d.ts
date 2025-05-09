import { PlainObject, TypeCode } from '../perspective-client';
export declare namespace EncodedUtils {
    const isEncoded: (val: any) => boolean;
    const getEncodedType: (val: any) => TypeCode | null;
    const isDataset: (ds: unknown) => boolean;
    const isDatetime: (dt: unknown) => boolean;
    const isMap: (map: unknown) => boolean;
    const isArray: (arr: unknown) => boolean;
    const isPrimitive: (prim: unknown) => boolean;
    /**
     * Takes the value and un-encodes it if it happens to be dollar qualified encoded.
     *
     * @param val - value to un-encode.
     * @param dateFormatter - function to format dates if an encoded date object is found.
     * @returns - Returns the un-encoded value if found to be dollar qualified encoded, otherwise returns provided value
     */
    const unEncode: (val: any, dateFormatter: (ts: number) => string) => any;
    namespace Dataset {
        const toPlain: (ds: PlainObject, dateFormatter: (ts: number) => string) => Array<PlainObject>;
    }
    namespace Date {
        const toPlain: (ts: PlainObject, dateFormatter: (ts: number) => string) => string;
    }
    namespace Map {
        const toPlain: (map: PlainObject, dateFormatter: (ts: number) => string) => PlainObject;
    }
}
