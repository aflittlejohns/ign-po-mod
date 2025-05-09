import { CSSProperties } from 'react';
import { EmitProps } from '../api/component/Component';
import { StyleObject } from "../perspective-client";
/**
 * Handy immutable shape for applying className and style to a React Element
 */
export interface StyleProps {
    readonly className?: string;
    readonly style?: CSSProperties;
}
/**
 * Handy wrapper around an array of CSS class names and inline CSS style props.
 * Provides builder-style APIs for transforming its internal CSS style classes and inline props.
 * Maintains style props internally as a Set.
 * Useful terminal API for outputting StyleProps.
 *
 */
export declare class Style {
    private readonly classes;
    private readonly style;
    constructor(classes?: Array<string>, style?: CSSProperties);
    private joinClasses;
    /**
     * Clones this Style. Changes to this Style will not affect the cloned Style and vice-versa.
     * @returns {Style} A clone of this Style
     */
    clone(): Style;
    /**
     * Apply given Style's inline styles to this Style and add its CSS classes to this Style's CSS classes.
     * @param {Style} style The Style to apply
     * @returns {this} This Style
     */
    applyStyle(style: Style): this;
    /**
     * Apply CSS properties to this Style
     * @param {React.CSSProperties | undefined} style The CSS properties to apply to this Style
     * @returns {this} This Style
     */
    applyCssProperties(...style: (CSSProperties | undefined)[]): this;
    /**
     * Execute a transformer on this Style's CSS properties
     * @param {(style: CSSProperties) => CSSProperties} styleTransformer
     * The transformer to execute on this Style's CSS properties
     * @returns {this} This Style
     */
    transformCssProperties(styleTransformer?: (style: CSSProperties) => CSSProperties): this;
    /**
     * Add CSS classes to this Style
     * @param {Array<string>} classes The CSS classes to add to this Style
     * @returns {this} This Style
     */
    addClasses(classes: Array<string>): this;
    /**
     * Replace this Style's CSS classes with a different array of CSS classes
     * @param {Array<string>} classes The CSS classes which will replace those in this Style
     * @returns {this} This Style
     */
    replaceClasses(classes: Array<string>): this;
    /**
     * Execute a transformer on this Style's CSS classes
     * @param {(classes: Set<string>) => void} classTransformer The transformer to execute on this Style's CSS classes
     * @returns {this} This Style
     */
    transformClasses(classTransformer: (classes: Set<string>) => void): this;
    /**
     * Emit EmitProps from this Style.  Use this instead of toStyleProps when using an emitter
     * @returns {EmitProps}
     */
    toEmitProps(): EmitProps;
    /**
     * Emit StyleProps from this Style
     * @returns {StyleProps} The StyleProps emitted from this Style
     */
    toStyleProps(): StyleProps;
    /**
     * Create a StyleObject structure from the class.  If necessary, the `psc-` class prefix can be removed
     * from the style class names.
     * @param stripClassPrefix
     */
    toStyleObject(stripClassPrefix?: boolean): StyleObject;
}
