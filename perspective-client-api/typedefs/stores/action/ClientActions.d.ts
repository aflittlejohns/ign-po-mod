/**
 *  Enum-style object representing the actions for transitioning client state
 */
export declare enum ClientActions {
    NOT_AUTHENTICATED = "not-authenticated",
    NOT_AUTHORIZED = "not-authorized",
    NOT_LICENSED = "not-licensed",
    NO_PROJECT = "no-project",
    PROJECT_NOT_RUNNABLE = "project-not-runnable",
    INVALID_PAGE_BIRTHDATE = "invalid-page-birthdate",
    AUTHORIZED = "authorized",
    CONNECTED = "connected",
    LOADED = "loaded",
    SYNCHRONIZED = "synchronized",
    DISCONNECTED = "disconnected",
    PROJECT_UPDATED = "project-updated",
    ERROR = "error",
    WINDOW_READY = "window-ready",
    CHECKED = "checked",
    SESSION_CLOSED = "session-closed",
    PAGE_CLOSED = "page-closed",
    LOGIN = "login",
    LOGOUT = "logout",
    LOGGED_OUT = "logged-out"
}
