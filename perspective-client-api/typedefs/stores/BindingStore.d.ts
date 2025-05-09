import { ObservableMap } from 'mobx';
export type PropertyBinding = {
    componentPath: string;
    type: string;
};
export declare class BindingStore {
    readonly bindings: ObservableMap<string, PropertyBinding>;
    constructor();
    addBinding(componentId: string, binding: PropertyBinding): void;
}
