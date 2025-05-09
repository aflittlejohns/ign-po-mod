import { ActionFactory } from "../api/action/ActionRegistry";
export interface LoginActionConfig {
    forceAuth?: boolean;
}
export declare const LoginAction: ActionFactory<LoginActionConfig>;
