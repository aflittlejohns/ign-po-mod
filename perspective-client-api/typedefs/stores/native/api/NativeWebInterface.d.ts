/**
 * Interface for methods intended to be called from the native application.
 */
export declare enum LogLevel {
    trace = "trace",
    debug = "debug",
    info = "info",
    warn = "warn",
    error = "error",
    fatal = "fatal"
}
export interface NativeWebInterface<D> extends GwDataSubmitter<D> {
    /**
     * Called from the native application, used to submit the result of a mobile origin challenge.
     * @param result the decrypted challenge used to verify the client application is running as a webview of the
     *               native app
     */
    submitChallenge(result: string): void;
    /**
     * Submit a log message to the client, which is then also sent back to the gateway.  Useful for propagating
     * native errors/logging info back to the gateway.
     * @param level the log level, represented as a String valued enum.
     * @param msg the log message
     */
    log(level: LogLevel, msg: string): void;
    /**
     * Enabled Fallback Redirect for this client. This function is called from the native-side of the client and enables
     * UI information for a fallback redirect. The actual implementation of performing the fallback is performed on the
     * native side, not in the client. This simply enables the client UI fallback redirect modal instead of the
     * traditional gateway disconnect one when appropriate and Native Applications which call this should take into
     * account the situation where the client doesn't actually have this method (older gateways)
     */
    enableFallbackRedirect(): void;
    /**
     * Sets the fallback redirect time remaining. The implementor of this class should do the necessary to notify the
     * user how much time is left before the fallback application is launched, usually through a notification
     * @param timeRemaining  The time remaining (in seconds) before fallback redirect happens.
     */
    setFallbackRedirectTimeout(timeRemaining: number): void;
}
export interface GwDataSubmitter<D> {
    /**
     * When the client has initiated a native action, the result of that action may (if necessary) return the result
     * of the action to the client via this method.  This method should only be called if the ClientStore.clientState
     * == "running" OR if the native app has received the onWebAppRunning callback
     * @param result the result of some native action or data collection request
     */
    submitData(result: D): void;
}
