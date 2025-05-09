export interface ColumnObject {
    name: string;
    type: ColumnType;
    data: Array<any>;
}
export declare enum ColumnType {
    Date = "Date",
    String = "String",
    Integer = "Integer",
    Long = "Long",
    Float = "Float",
    Short = "Short",
    Double = "Double",
    Number = "Number",
    Boolean = "Boolean"
}
export declare class Column {
    name: string;
    data: Array<any>;
    type: ColumnType;
    constructor(columnObj: ColumnObject);
}
/**
 * Implementation of Ignition's dataset model in javascript. This object is iterable, so the rows can be looped over
 * using a "for-of" loop, like: for (let row of dataset) ...
 */
export declare class Dataset {
    columns: Array<Column>;
    rowCount: number;
    [Symbol.iterator]: () => IterableIterator<any>;
    constructor(columns: Array<any>);
    getColumnName(c: number): string;
    getColumnNames(): Array<string>;
    getColumnType(c: number): ColumnType;
    getColumnTypes(): Map<string, ColumnType>;
    createRowIterator(): IterableIterator<any>;
    get columnCount(): number;
}
