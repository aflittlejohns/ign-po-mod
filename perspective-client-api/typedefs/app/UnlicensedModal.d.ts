import * as React from "react";
import { MountStore } from "../stores/MountStore";
export interface UnlicensedModalProps {
    mounts: MountStore;
}
export declare class UnlicensedModal extends React.Component<UnlicensedModalProps, any> {
    createClosableHeader(): React.ReactElement<HTMLDivElement>;
    createContentBody(): React.ReactElement<HTMLDivElement>;
    createButtonBar(): React.ReactElement<HTMLDivElement>;
    render(): React.ReactElement<HTMLDivElement>;
}
