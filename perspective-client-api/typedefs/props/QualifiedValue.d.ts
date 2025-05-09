import { QualityCode } from './QualityCode';
/** Symbol for quality in a qualified value.
 *  Implemented as shared symbol, so this is equivalent to Symbol.for('quality').
 *  Value must be a QualityCode
 */
export declare const QUALITY: string;
/** Symbol for timestamp in a qualified value.
 *  Implemented as shared symbol, so this is equivalent to Symbol.for('timestamp').
 *  Value must be a Date
 */
export declare const TIMESTAMP: string;
export declare const ORIGIN: string;
export declare class QualifiedValue {
    value: any;
    QUALITY: QualityCode;
    TIMESTAMP: Date;
    constructor(value: any, quality?: QualityCode, timestamp?: Date);
    toString(): string;
}
export declare const NULL_NOT_FOUND: QualifiedValue;
