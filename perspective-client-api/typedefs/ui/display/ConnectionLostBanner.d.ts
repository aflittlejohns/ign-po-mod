import { ClientState } from '../../stores/state/ClientState';
export interface ConnectionBannerProps {
    isActive: boolean;
    connection: ClientState;
}
export declare const connectionBannerSize: number;
export declare const ConnectionLostBanner: (props: ConnectionBannerProps) => JSX.Element;
