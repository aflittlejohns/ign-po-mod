import { default as moment } from "moment-timezone";
export declare namespace DateUtils {
    interface DateRange {
        end?: Date;
        start?: Date;
    }
    interface TimeObject {
        hour24: number;
        minute: number;
        seconds?: number;
    }
    enum Month {
        JANUARY = 1,
        FEBRUARY = 2,
        MARCH = 3,
        APRIL = 4,
        MAY = 5,
        JUNE = 6,
        JULY = 7,
        AUGUST = 8,
        SEPTEMBER = 9,
        OCTOBER = 10,
        NOVEMBER = 11,
        DECEMBER = 12
    }
    enum Day {
        SUNDAY = 1,
        MONDAY = 2,
        TUESDAY = 3,
        WEDNESDAY = 4,
        THURSDAY = 5,
        FRIDAY = 6,
        SATURDAY = 7
    }
    enum TimePickerPrecision {
        MINUTE = 0,
        SECOND = 1
    }
    enum PickerType {
        DATETIME = "datetime",
        DATE = "date",
        TIME = "time"
    }
    function isDate(date: any): date is Date;
    function isMomentDate(date: any): date is moment.Moment;
    /**
     * Gets the number of days within given month
     *
     * @param date: {Date | moment.Moment} - The relevant date object.
     * @return {number} - Returns the number of days within a given month
     */
    function getDaysInMonth(date: Date | moment.Moment): number;
    /**
     * Gets the number of visible calendar weeks in a given month
     *
     * @param date: {Date | moment.Moment} - The relevant date object.
     * @return {number} - Returns the number of visible calendar week in a month
     */
    function getCalendarWeeksInMonth(date: Date | moment.Moment): number;
    /**
     * Gets the first weekday of the month.
     *
     * @param date: {Date | moment.Moment} - The relevant date object
     * @return {number} - Returns the last weekday of the month
     */
    function getFirstWeekdayOfMonth(date: Date | moment.Moment): Day;
    /**
     * Gets the last weekday of the month.
     *
     * @param date: {Date | moment.Moment} - The relevant date object
     * @return {number} - Returns the last weekday of the month
     */
    function getLastWeekdayOfMonth(date: Date | moment.Moment): Day;
    /**
     * Compares the first calendar date to the second calendar date to determine
     * if the first calendar date is later than the second calendar date.
     *
     * @param first: {Date | moment.Moment} - Date to compare
     * @param second: {Date | moment.Moment} - Date to be compared against
     * @param inclusive {boolean} - Determines if exact matches are not considered later dates.
     * @param checkTime {boolean} - Determines if time is considered in the comparison.
     * @return {boolean} - Returns true if the first calendar date is later than the second calendar date.
     */
    function isLaterDate(first: Date | moment.Moment, second: Date | moment.Moment, inclusive?: boolean, checkTime?: boolean): boolean;
    /**
     * Checks if a date falls between the provided start
     * and end dates.
     *
     * @param date: {Date | moment.Moment} - The date to be compared.
     * @param start: {Date | moment.Moment} - The compared start date.
     * @param end: {Date | moment.Moment} - The compared end date.
     * @param inclusive {boolean} - Determines if boundaries are considered in the range.
     * @param checkTime {boolean} - Determines if time is considered in the comparison.
     * @return {boolean} - Returns true if the calendar date is between the start and end calendar dates, otherwise returns false.
     */
    function isDateBetween(date: Date | moment.Moment, start: Date | moment.Moment, end: Date | moment.Moment, inclusive?: boolean, checkTime?: boolean): boolean;
    /**
     * Determines if two calendar dates are equal,
     * (i.e. having the same year, month, and day)
     *
     * @param first: {Date | moment.Moment} - The first date to compare.
     * @param second: {Date | moment.Moment} -  The second date to compare.
     * @param checkTime {boolean} - Determines if time is considered in the comparison.
     * @param includeSeconds {boolean} - Determines is seconds are considered in the comparison.
     * @return {boolean} - Returns true if the provided dates are equal, otherwise returns false.
     */
    function areDatesEqual(first: Date | moment.Moment, second: Date | moment.Moment, checkTime?: boolean, includeSeconds?: boolean): boolean;
    /**
     * Determines if two date range objects are equal.  Uses areDatesEqual
     * which does not take into account time, but only day, month, and year.
     *
     * @param first: {DateRange} - The first date range to compare.
     * @param second: {DateRange} - The second date range to compare.
     * @return {boolean} - Returns whether the provided date ranges are equal.
     */
    function areRangesEqual(first: DateRange, second: DateRange): boolean;
    /**
     * Abbreviates the provided day.
     *
     * @param day: {Day} - The day to abbreviate.
     * @param length?: {number} - The length of the abbreviated string. Defaults to 2.
     * @return {string} - Returns a capitalized abbreviated day as a string.
     */
    function getAbbrevDay(day: Day, length?: number): string;
    /**
     * Strips time from a Date or Moment object and returns a
     * new Date/Moment.
     *
     * @param date
     *
     * @return {Date | moment.Moment} Returns a new date or Moment object
     * with the time stripped or reset to midnight.
     */
    function stripTime<T = Date | moment.Moment>(date: T): T;
    /**
     * Determines if given the current locale and format if the time format is 24 hours.
     * @param format (string} - Moment date time format.
     * @param locale {string} - Moment locale.
     *
     * @return {boolean} Returns boolean if the time format and locale is 24 hour.
     */
    function isTwelveHour(format: string, locale: string): boolean;
    /**
     * Converts the data to a formatted, localized datetime string.
     * @param data {any} - Data to be converted to a datetime string.
     * @param format {string} - Moment date time format.
     * @param locale {string} - Moment locale.
     * @param timezone - Moment timezone.
     *
     * @return {string} Returns a formatted, localized datetime string or the data as a string if conversion fails
     */
    function localizeMoment(data: any, format?: string, locale?: string, timezone?: string): string;
    /**
     * Converts the data to a Date object if the given data, format, locale is valid.
     * The parsing done is NOT in strict mode.
     *
     * @param data {any} - Data to be converted to a Date object.
     * @param format {string} - Moment date time format.
     * @param locale {string} - Moment locale.
     *
     * @return {Date | undefined} Returns a Date object if valid otherwise undefined
     */
    function parseDate(data: any, format?: string, locale?: string): Date | undefined;
    /**
     * Check if the data provided is a valid date given the format and locale.
     * The validation done is NOT in strict mode.
     *
     * @param data {any} - Data to be converted to a Date object.
     * @param format {string} - Moment date time format.
     * @param locale {string} - Moment locale.
     *
     * @return {boolean} Returns a boolean that determines if the data is a valid date
     */
    function isValidDate(data: any, format: string, locale?: string, timezone?: string): boolean;
    /**
     * Splits the datetime format into a separate date and time formats.
     *
     * @param format {string} Moment date time format to be split.
     *
     * @return {{ dateFormat: string | undefined; timeFormat: string | undefined }} An object containing a date and time format string.
     */
    function separateFormats(format: string): {
        dateFormat: string | undefined;
        timeFormat: string | undefined;
    };
    /**
     * Gets the time precision (minutes, seconds) given the format string
     *
     * @param format {string} - Moment format string
     *
     * @return {TimePickerPrecision} Returns a TimePickerPrecision enum that determines how granular the time format is.
     */
    function getTimePrecision(format: string): TimePickerPrecision | undefined;
    /**
     * Extracts the hours, minutes and seconds from the given date value
     *
     * @param date {any} - Date value
     *
     * @return {TimeObject} - Returns a TimeObject from the given date value
     */
    function getTimeObject(date: any, timezone?: string, defaultTime?: {
        hour24: number;
        minute: number;
        seconds: number;
    }): TimeObject;
    function getTimezoneDate(date?: any, timezone?: string, strict?: boolean): moment.Moment | undefined;
    /**
     * Validates the min date and max date. If the min date is later than the max date or the max date is earlier
     * than the min date, set them equal
     *
     * @param minDate {Date} - start of the date range
     * @param maxDate {Date} - end of the date range
     *
     * @return {DateRange} - returns a valid date range
     */
    function deriveDateRange(minDate: Date, maxDate: Date): DateRange;
    function toPickerDisplayString(date?: Date | moment.Moment, placeholder?: string, time?: {
        twentyFour?: boolean;
    }): string;
    function isValid24Hour(hour: any): boolean;
    function isValidMinute(minute: any): boolean;
    function isValidSeconds(seconds: any): boolean;
    function twentyFourToTwelve(hour24: number): number;
    function isAM(hour24: number): boolean;
    /**
     * Adds time (hour and minutes) to one date
     * from another date.  Useful when the time
     * of a date is stripped out or reset to midnight.
     *
     * @param to: {Date | moment.Moment} - The date in which to add time to.
     * @param from: {Date | moment.Moment} -  The date in which to add time from.
     * @return {Date | moment.Moment} - Returns a new date, a clone of the 'to'
     * Date object with the time derived from the 'from' Date object.
     */
    function addTimeFromDate<T = Date | moment.Moment>(to: Date | moment.Moment, from: Date | moment.Moment): T;
    function getTimeInputBounds(date?: Date, minDate?: Date, maxDate?: Date, timezone?: string): {
        minTime?: TimeObject;
        maxTime?: TimeObject;
    };
}
