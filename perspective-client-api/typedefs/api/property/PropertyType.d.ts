export declare enum PropertyType {
    CUSTOM = "custom",
    META = "meta",
    POSITION = "position",
    PROPS = "props",
    PARAMS = "params"
}
export declare namespace PropertyType {
    function forEach(callback: (key: string, value: string) => void): void;
}
