import { ActionFactory } from '../perspective-client';
export interface NavActionConfig {
    page?: string;
    view?: string;
    relativeNavigationIndex?: number;
    params: any;
    url?: string;
    newTab?: boolean;
}
export declare const NavAction: ActionFactory<NavActionConfig>;
