/**
 *  Enum-style object representing the state of the client
 */
export declare enum ClientState {
    NEW = "new",
    INITIALIZING = "initializing",
    AUTHN = "authenticating",
    CONNECTING = "connecting",
    LOADING = "loading",
    SYNCHRONIZING = "synchronizing",
    RUNNING_CONNECTED = "running-connected",
    RUNNING_DISCONNECTED = "running-disconnected",
    RECONNECTING = "re-connecting",
    RESYNCHRONIZING = "re-synchronizing",
    NO_PROJECT = "no-project",
    PROJECT_NOT_RUNNABLE = "project-not-runnable",
    NOT_LICENSED = "not-licensed",
    FORBIDDEN = "forbidden",
    INVALID_PAGE_BIRTHDATE = "invalid-page-birthdate",
    ERROR = "error",
    SESSION_CLOSED = "session-closed",
    PAGE_CLOSED = "page-closed",
    LOGGING_IN = "logging-in",
    LOGGING_OUT = "logging-out",
    LOGGED_OUT = "logged-out"
}
