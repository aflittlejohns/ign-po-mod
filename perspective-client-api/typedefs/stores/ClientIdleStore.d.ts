import { ClientStore } from "../perspective-client";
/**
 * Idle store that the client uses to keep track of the gateway time and the remaining time
 * before idling out of the session. If we are running disconnected, we fall back to using
 * local storage to keep each tab/window from idling out.
 */
export declare class ClientIdleStore {
    readonly client: ClientStore;
    gatewayTime: number;
    remainingTime: number;
    timeout: number | undefined;
    innerTimeout: number | undefined;
    disconnectedIdleListener: (() => void) | null;
    private pendingIdleTimeoutAction;
    private static readonly DISCONNECTED_IDLE;
    constructor(client: ClientStore);
    resetPendingIdleTimeoutAction(): void;
    maybeTriggerIdleTimeoutAction(): boolean;
    initActivityTracker(): void;
    /**
     * Receive last active time from the gateway through the channel store.
     * @param time - last active time from the gateway
     * @param remainingTime - remaining time before the gateway closes/logs out the session
     */
    setGatewayLastActiveTime(time: number, remainingTime: number): void;
    private onGatewayLastActive;
    /**
     * Idle timeout for when we run disconnected. Essentially, this allows
     * the UI to go through the motions. For close session, we transition to the terminal state.
     * For log out, we attempt a redirect. In either case,
     * we obfuscate the page when running disconnected.
     */
    idleTimeout(): void;
    /**
     * Starts timers for the disconnected idle timeout.
     */
    startDisconnectedIdleTimeout(): number | undefined;
    resetIdleTimer(): void;
    /**
     * If we are running disconnected, simply reset the timer since we are falling back to local storage.
     * If connected, ping the gateway to reset the timer.
     */
    onUserActivity(): void;
}
