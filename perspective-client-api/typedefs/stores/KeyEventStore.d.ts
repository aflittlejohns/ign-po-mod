import { ClientStore } from "./ClientStore";
/**
 * Store used to track keyup/keydown events and send the data back to the gateway where session events that
 * are bound to key events can execute against the data.
 */
export declare class KeyEventStore {
    private static MAX_REGEX_CHARACTER_COUNT;
    private static REGEX_KEYS_TO_EXCLUDE;
    private client;
    private connection;
    private keyHandlers;
    private regexPatternCompareValues;
    constructor(client: ClientStore);
    setConfigData(keyEventConfigData: KeyEventConfigData): void;
    private buildKeyEventHandler;
    private filterKeyEvent;
    /**
     * Simple conversion of a raw string value to a RegExp.  String any leading/trailing slash characters and
     * apply and flags found to provide a valid string value for the constructor.  This assumes that everything
     * inside of leading/trailing slash characters is valid, and if slashes are NOT provided, it's valid as is.
     * @param regexString
     * @private
     */
    private stringToRegex;
}
export interface KeyEventConfigData {
    [key: string]: KeyEventConfigDataEntry;
}
interface KeyEventConfigDataEntry {
    name: string;
    enabled: boolean;
    eventMode: string;
    eventBound: string;
    eventBoundKey: string;
    eventBoundCode: string;
    regexPattern: string;
    regexWindow: number;
    altEventModifier: boolean;
    controlEventModifier: boolean;
    shiftEventModifier: boolean;
    metaEventModifier: boolean;
    capturePhaseEventOption: boolean;
    preventDefaultEventOption: boolean;
    stopPropagationEventOption: boolean;
}
export {};
