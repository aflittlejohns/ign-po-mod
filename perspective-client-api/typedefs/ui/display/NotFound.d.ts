import * as React from 'react';
import { Size2d, PlainObject, PComponent, ComponentProps } from "../../perspective-client";
export declare class NotFound extends React.Component<ComponentProps<any>> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export declare class NotFoundMeta {
    getComponentType(): string;
    getViewComponent(): PComponent;
    getDefaultSize(): Size2d;
    getPropsReducer(): PlainObject;
}
