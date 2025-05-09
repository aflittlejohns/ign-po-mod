/// <reference types="react" />
export interface SpinnerProps {
    percent?: number;
    width?: string;
    height?: string;
    color?: string;
    classNames?: Array<string>;
}
export declare const defaultSpinnerWidth: string;
export declare const defaultSpinnerHeight: string;
export declare const defaultSpinnerColor: string;
/**
 * Reusable spinner to indicate a loading state. Able to set size and color, and spinner comes in two forms, depending
 * on whether "percent" props are passed to it. If so, component acts as a circular progress gauge, with the dark
 * part of the ring filling the circumference with respect to the percentage passed in. If no props.percent is passed,
 * component acts like a regular spinner, with a spinning animation running indefinitely until unmount.
 *
 * @param {SpinnerProps} props:
 *
 *        {number} percent - Optional. Represents percentage of a loading task complete. If present, spinner will act
 *                           as a progress gauge.
 *        {string} width - Width of the spinner
 *        {string} height - Height of the spinner
 *        {string} color - Color of the dark portion of the spinner (lighter portion also this color, with low opacity)
 *        {string[]} classNames - Additional class names to add to outer element of the spinner
 *
 * @returns {JSX.Element}
 */
export declare function LoadingSpinner(props: SpinnerProps): JSX.Element;
