import { CSSProperties } from "react";
import { LayoutCallback } from '../perspective-client';
export type LayoutBuilder = () => CSSProperties;
export declare const layoutCallbackCreator: {
    /**
     * Creates a layout callback which will add the given classname(s), leaving the style object alone.
     * @param classNames string(s) to add to the target component's list of class names
     */
    forClass(classNames: Array<string>): LayoutCallback;
    /**
     * Creates a layout callback which will augment a component's styles with the style object provided.
     * @param layoutBuilder - A function which returns an object containing keys suitable for the React "style"
     *                        argument. See https://facebook.github.io/react/docs/dom-elements.html#style
     */
    forStyle(layoutBuilder: LayoutBuilder): LayoutCallback;
    /**
     * Creates a layout callback which will augment a component's styles with the style object provided and
     * which will add the given class name(s).
     * @param layoutBuilder  - A function which returns an object containing keys suitable for the React "style" argument.
     * @param classNames string(s) to add to the target component's list of class names
     */
    forClassAndStyle(layoutBuilder: LayoutBuilder, classNames: Array<string>): LayoutCallback;
};
