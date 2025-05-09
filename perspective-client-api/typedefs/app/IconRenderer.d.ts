import * as React from 'react';
import { StyleObject, SVG_Utils, ClientStoreProviderContext } from "../perspective-client";
export interface IconRendererConfig {
    /** Allows the classes provided by otherProps to be overridden by classes provided by the style prop */
    allowClassNameOverride?: boolean;
    color?: string;
    library?: string;
    name?: string;
    otherProps?: any;
    path?: string;
    style?: StyleObject;
    size?: number;
    viewBox?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
}
export type IconRendererState = SVG_Utils.SVGSessionStorageData;
/**
 * Component to simplify and standardize icons in component authoring. Accepts either a "path" prop (in shorthand format
 * library/iconName), or individual props "library" and "path".
 * @prop {string} path - Shorthand format icon path: library/iconName
 * @prop {string} library - Optional alternative to "path", name of library/directory where icon is located. Must also supply "name".
 * @prop {string} name - Optional alternative to "path", name of icon. Must also supply "library".
 * @prop {string} color - Color of the icon. Here for convenience, may instead assign "fill" in the styles prop.
 * @prop {number} size - Size of the icon used to create the viewBox. If provided, this will be a preferred value to
 * viewBox.width and viewBox.height;
 * @prop {number} viewBox.x - The x value (amount to crop from the X axis) assigned to the 'viewBox' portion of the
 * SVG that displays the icon.
 * @prop {number} viewBox.y - The y value (amount to crop from the Y axis) assigned to the 'viewBox' portion of the
 * SVG that displays the icon.
 * @prop {number} viewBox.width - The width assigned to the 'viewBox' portion of the SVG that displays the icon.
 * @prop {number} viewBox.height - The height assigned to the 'viewBox' portion of the SVG that displays the icon.
 * @prop {StyleObject} style - Any styles or perspective style classes to be applied to the svg element
 * @prop {boolean} allowClassNameOverride - Allows override of non-project classes are defined in otherProps.
 * @prop {object} otherProps - Any extra attributes to apply to svg element, including non-transformed ('psc-') classes
 */
export declare class IconRenderer extends React.Component<IconRendererConfig, IconRendererState> {
    context: React.ContextType<typeof ClientStoreProviderContext>;
    static contextType: React.Context<import("../perspective-client").Partial<import("../perspective-client").ClientStore>>;
    private path;
    private library;
    private name;
    readonly state: IconRendererState;
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldReset(): boolean;
    getNames(): {
        libName: string;
        iconName: string;
    };
    buildKey(libName: string, iconName: string): string;
    isParsedAndCached(iconKey: string): IconRendererState | null;
    handleParsedAndCachedValueReady(requestedKey: string): void;
    setInnerContent(): void;
    render(): JSX.Element;
}
