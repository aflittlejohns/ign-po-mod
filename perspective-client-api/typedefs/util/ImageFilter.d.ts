import { Color } from "./utils";
/**
 * Base class for transforming the injected ImageData. Sub-Classes must override the filterPixel function to set the
 * behavior for the Filter's pixel-by-pixel transformation. It is important to understand that the internal data array
 * of the injected ImageData will be manipulated and returned in the filter function.
 */
export declare abstract class ImageFilter {
    private readonly imageData;
    protected constructor(imageData: ImageData);
    /**
     * Execute the filter operation on each pixel of the injected ImageData.
     * @returns {ImageData} The injected ImageData after passing through the filter
     */
    filter(): ImageData;
    /**
     * The transformation function for each individual pixel of the injected ImageData.
     * @param {Color} pixelColor The pixel color
     * @returns {Color} The filtered pixel color
     */
    protected abstract filterPixel(pixelColor: Color): Color;
}
/**
 * An ImageFilter which tints the injected ImageData to the color of the injected tint color.
 */
export declare class TintFilter extends ImageFilter {
    private tintColor;
    constructor(imageData: ImageData, tintColor: Color);
    protected filterPixel(pixelColor: Color): Color;
}
