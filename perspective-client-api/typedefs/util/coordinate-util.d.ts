import { ComponentStore } from "../stores/ComponentStore";
import { Rect, Size2d, SizeObject } from "../perspective-client";
export declare namespace CoordinateUtils {
    enum LayoutMode {
        FIXED = "fixed",
        PERCENT = "percent"
    }
    const zeroRect: Rect;
    const ID = "ia.container.coord";
    function isValidAspectRatio(aspectRatio: string | null | undefined): boolean;
    function readAspectRatio(aspectRatio: string | null | undefined): Array<number>;
    function checkUnits(componentPath: string, posRect: Rect): Rect;
    const IS_PERCENT_MAGIC_NUMBER = 3;
    /**
     * Attempt to verify whether these dimensions are valid for 'percent' mode.
     */
    function isPercentScale(dimensions: Array<number>): boolean;
    function percentToFixed(percentRect: Partial<Rect>, containerDimensions: Size2d): Partial<Rect>;
    function toFixed(childDimension: number, containerDimension: number): number;
    function fixedToPercent(fixedRect: Partial<Rect>, containerDimensions: Size2d): Partial<Rect>;
    function toPercent(childDimension: number, containerDimension: number): number;
    function countDecimals(value: number): number;
    function toMaxFixedDecimals(val: number, max: number): number;
    /**
     * Returns a shallow copy of the provided rect, with x,y,width,
     * and height to a max fixed decimal place.
     */
    function rectToMaxFixedDecimals(rect: Partial<Rect>, max: number): Partial<Rect>;
    interface AspectModeDimensions {
        width: number;
        height: number;
        offsetX: number;
        offsetY: number;
    }
    function getAspectModeDimensions(container: ComponentStore): AspectModeDimensions;
    function defaultSizeForComponent(componentType: string, preferredSize?: Size2d): SizeObject;
}
