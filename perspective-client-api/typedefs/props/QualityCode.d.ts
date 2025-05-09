export declare class LevelImpl {
    mask: number;
    constructor(code: number);
    matches(code: number): boolean;
    code(userCode: number): number;
}
export declare const Level: {
    Good: LevelImpl;
    Uncertain: LevelImpl;
    Bad: LevelImpl;
    Error: LevelImpl;
};
export declare class QualityCode {
    code: number;
    diagnosticMessage: string;
    constructor(code: number, diagnosticMessage?: string);
    /**
     * Returns a string representing the severity level of this quality code
     */
    get level(): "Good" | "Uncertain" | "Bad" | "Error";
    equals(other?: QualityCode): boolean;
    isGood(): boolean;
    isUncertain(): boolean;
    isBad(): boolean;
    isError(): boolean;
    isNotGood(): boolean;
    isBadOrError(): boolean;
    isPending(): boolean;
    toString(): string;
}
export declare const getFullName: (code: number) => string;
export declare const getCodeName: (code: number) => string;
export declare const getQualityFor: (code: number) => QualityCode;
export interface QualityCodeDef {
    name: string;
    code: number;
}
/**
 * The known quality codes are injected onto the page, but in order to support testing, we hook those into the
 * known code map through this method, which is called in index.js
 * @private
 */
export declare const _initQualityCodes: (qualityCodes: Array<QualityCodeDef>) => void;
export declare const GOOD: QualityCode;
export declare const GOOD_PENDING: QualityCode;
export declare const GOOD_LEGACY: QualityCode;
export declare const GOOD_INITIAL: QualityCode;
export declare const UNCERTAIN: QualityCode;
export declare const NOT_FOUND: QualityCode;
export declare const BAD: QualityCode;
export declare const TRIAL_EXPIRED: QualityCode;
export declare const ERROR: QualityCode;
