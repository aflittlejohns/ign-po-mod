import { JL } from 'jsnlog';
import { SubscriptionHandler } from "../../perspective-client";
export interface Transition<A, S> {
    name: A;
    from: S;
    to: S;
}
export interface StateWrapper<S> {
    state: S;
}
export declare enum FiniteStateMachineState {
    STATE = "state"
}
export declare class FiniteStateMachine<A, S> {
    private currentState;
    private readonly transitions;
    private readonly log;
    private subscriptionMap;
    private notify;
    readonly subscribe: SubscriptionHandler;
    constructor(initialState: S, transitions: Array<Transition<A, S>>, log: JL.JSNLogLogger);
    get state(): StateWrapper<S>;
    transition(name: A): void;
}
