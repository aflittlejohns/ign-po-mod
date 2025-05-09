/**
 * Combines both Moment.js and Numeral.js libraries.
 * Allows both predefined and custom format
 * patterns.
 */
export declare class NumberFormat {
    private val;
    private formatType;
    private numeralLocaleService;
    private momentLocaleService;
    constructor(value: string | number);
    /**
     * Static method on the class to use as a pass-through to the NumeralLocaleService and MomentLocaleService as a
     * way to set the locales when a component that is locale-sensitive uses Moment/Numeral without instantiating
     * this class.  If the locale provided doesn't contain data in either service, default to the `en-us` locale.
     * @param locale
     */
    static SetLocale(locale: string): void;
    get type(): NumberFormatType;
    set type(type: NumberFormatType);
    get value(): string | number;
    set value(newValue: string | number);
    /**
     * Format the value pulling the formatting options from the parameter object.
     *
     * @param options - Object to wrap the params passed to `this.format`.
     */
    formatWithOptions(options: NumberFormatOptions): string;
    /**
     * Get the formatted value given an optional pattern string.  If no pattern string is
     * provided, will proceed to auto format this value.
     *
     * @param pattern - Optional pattern format string
     * @param timeZone - Optional timezone string to be used to apply a timezone, the NumberFormat is formatted as
     * a date.
     * @param locale (optional) - The locale to apply to the value being formatted.
     * @return - Returns a formatted value or just the value if no formatting was possible
     */
    format(pattern?: string, timeZone?: string, locale?: string): string;
}
export declare enum NumberFormatType {
    AUTO = "auto",
    DATE = "date",
    NONE = "none",
    NUMBER = "number"
}
export interface NumberFormatOptions {
    pattern?: string;
    timeZone?: string;
    locale?: string;
}
