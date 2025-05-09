import * as React from "react";
import { MountStore } from "../stores/MountStore";
export interface UnlicensedBannerProps {
    mounts: MountStore;
}
export declare const unlicensedBannerSize: number;
export declare class UnlicensedBanner extends React.Component<UnlicensedBannerProps, any> {
    openUnlicensedModal(): void;
    render(): React.ReactElement<HTMLDivElement>;
}
