import { IReactToPrintProps } from 'react-to-print';
export type PrintProps = Omit<IReactToPrintProps, "content"> & {
    "target"?: string | "view" | "page" | "component";
};
export declare const defaultPrintProps: {
    copyStyles: boolean;
    pageStyle: string;
    removeAfterPrint: boolean;
    suppressErrors: boolean;
};
export interface Printable {
    requestPrint(props?: PrintProps): void;
}
/**
 * Temporarily assigns the calculated bounding rect height and width of the element, in its
 * current DOM hierarchy and layout, directly to the elements style object.  We do this to
 * ensure the element maintains its size when it is reconstructed in the print environment.
 * For example, the layout of a component this is a flex child relies on the rules and layout
 * of its parent flex container.
 *
 * onBeforePrint doesn't work how we'd expect, for now, so instead we do all the before print work here.
 *
 * @param elem - element to stabilize
 * @returns Returns a cleanup callback to be used after print has finished
 */
export declare function stabilizeElementDimensionsForPrint(elem: HTMLElement, stabilizeHeight?: boolean, stabilizeWidth?: boolean): (() => void);
