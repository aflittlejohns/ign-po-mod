import * as React from 'react';
import { Point } from '../perspective-client';
export type TransformAnchor = string | Point | PercentBasedPoint;
export interface RotationConfig {
    anchor: TransformAnchor;
    angle: number | string;
}
/**
 * Interface describing a point in percentage terms (relative to a specific component)
 */
export interface PercentBasedPoint {
    x: string;
    y: string;
}
/**
 * Calculates the PercentBasedPoint of a x,y pixel-based coordinate point, relative to a client rectangle, and returns
 * the result as a valid CSS transform-origin style location string.
 * @param {DOMRect} componentRect the rectangle from which we should derive percent-origin
 * @param {Point} point the raw x and y coordinates, as pixel values, to derive percentage location for
 * @return {string} representation of a valid css percentage location string
 */
export declare const derivePercentOrigin: (componentRect: DOMRect, point: Point) => string;
/**
 * Returns the css style properties that result from translating the rotation config into valid react css style
 * properties, in the shape: { transform: "rotate(<angle>)", transformOrigin: "<css transform-origin string>" }
 * @param {DOMRect} rect the rect from which we may need to calculate anchor positioning if given a coordinate-based
 * point as the rotation anchor value
 * @param {RotationConfig} rotation config to apply to the rotation styling
 * @return {React.CSSProperties|void} object containing valid react css properties derived from the rotation config, or
 * void if no applicable/valid derivation has been computed.
 */
export declare const deriveRotationTransform: (rect: DOMRect, rotation: RotationConfig) => React.CSSProperties | void;
