import { WebAuthStatus } from "../perspective-client";
import { ClientStore } from './ClientStore';
export declare enum FramingOption {
    SELF = "SELF",
    NEW = "NEW",
    EMBEDDED = "EMBEDDED"
}
export interface Framing {
    type: FramingOption;
}
export interface AuthParameters {
    token?: string;
}
export interface LoginParameters extends AuthParameters {
    forceAuth?: boolean;
    framing?: Framing;
    exp?: number;
}
export type LogoutParameters = AuthParameters;
/**
 * This class represents the auth redirect URL to either the login or logout route.
 * The login and logout routes process the path and query params like this:
 *
 * /data/perspective/<login|logout>/:project-name/*?<query-params>
 *
 * The '*' represents the current page URL that the user is on when they trigger the login or logout. This is how we
 * remember which page URL to send the user back to when completing login or logout activities at the IdP. We take
 * everything after the /data/perspective/<login|logout> but before the '?' and append this to /data/perspective/client.
 * For example: if the user is currently navigated to /data/perspective/client/test-project/super/cool/page, the path
 * part of the login URL will look like this: /data/perspective/login/test-project/super/cool/page.
 *
 * Both the login and logout routes handle a special optional URL param named 'params'. The value of the 'params' query
 * param contains the entire URL-encoded query string (after the '?' character) of the current URL that the user is on
 * when they trigger the login or logout. If the current page URL does not have any query params, the 'params' query
 * param is omitted from the login / logout route URL. This is how we remember which query params were set on the page
 * when it was loaded. We take the 'params' query param value, URL-decode it, and then prepend a '?' character to the
 * result, and then append this entire result to the path part of the URL described in the previous paragraph. For
 * example: if the user is currently navigated to /data/perspective/client/test-project/super/cool/page?foo=bar&baz=123,
 * the login URL will look like this: /data/perspective/login/test-project/super/cool/page?params=foo%3Dbar%26baz%3D123.
 * We must encode the query string as a query param instead of simply copying the query string from the current page
 * URL to the login / logout route URL because the login and logout routes use query params to expose certain behaviors
 * which is described below. This is how we can avoid collisions between user query params and system query params.
 *
 * The login route has another optional special query param named 'forceAuth' which is set to either 'true' or 'false'
 * when it is present. If present, it is merged with the 'params' URL param (if 'params' exists). Extending the example
 * above: /data/perspective/login/test-project/super/cool/page?params=foo%3Dbar%26baz%3D123&forceAuth=true
 *
 * The logout route has another optional special query param named 'token' which is set to a secure random string value
 * when it is present. The token is expected to be a base64url-encoded string. If present, it is merged with the
 * 'params' URL param (if 'params' exists). Extending the example above:
 * /data/perspective/login/test-project/super/cool/page?params=foo%3Dbar%26baz%3D123&token=abcXYZ123-_
 *
 * This class encapsulates the URL in two parts:
 *
 * 1. the part of the URL up to the query string (excluding the '?' char) such as
 * /data/perspective/login/test-project/super/cool/page
 * 2. the query string part of the URL (also excluding the '?' char) such as
 * params=foo%3Dbar%26baz%3D123&forceAuth=true. Note: each query param key and value is expected to be URL-encoded.
 *
 * Why do we encapsulate the URL in two parts like this?
 *
 * IGN-3134 introduced a solution to the problem of handling special characters in the URL path, such as the square
 * brackets. Users may have page URLs configured like /foo[bar]baz. Maybe the square brackets come from a tag path as
 * an example. If we were to redirect users to the login / logout routes with these special characters left as-is, the
 * Gateway would be unable to parse the URL. So the solution is to check if the URL path is already URL-encoded, and
 * if not, then URL-encode it before redirecting the user.
 *
 * This worked fine until we introduced IGN-4302 / IGN-5236, which introduced arbitrary query param support to
 * Perspective. The way we check if the URL path is already encoded is by first decoding it using decodeURI(), and if
 * the value differs from the original URL path, then we know it is already encoded, else we encodeURI() the URL path.
 * Let's consider this example URL:
 * /data/perspective/login/test-project/super/cool/page?params=foo%3Dbar%26baz%3D123&forceAuth=true
 * Calling decodeURI() with the above URL returns the same URL, so we assume it needs encoding before redirecting the
 * user. Unfortunately, calling encodeURI() with the above URL results in:
 * /data/perspective/login/test-project/super/cool/page?params=foo%253Dbar%2526baz%253D123&forceAuth=true. Notice that
 * some URL-encoded characters in the 'params' query param value were again URL-encoded. So the Gateway would have to
 * double-decode the 'params' query param value, which is not ideal.
 *
 * Instead, we split the URL up in the two parts mentioned above. We keep the same logic introduced in IGN-3134 for the
 * first part of the URL, but we do not apply this same URL-encoded-checking logic on the query string since it is
 * expected that the param keys / values are already URL-encoded. We then simply concatenate the encoded first part with
 * the raw second part to get the URL we expect.
 *
 */
declare abstract class AuthUrl<P extends AuthParameters> {
    readonly beforeQuery: string;
    readonly query: string;
    readonly params: P;
    protected constructor(beforeQuery: string, query: string, params: P);
    toString(): string;
}
export declare class LoginUrl extends AuthUrl<LoginParameters> {
    constructor(beforeQuery: string, query: string, params: LoginParameters);
    get framing(): Framing;
}
export declare class LogoutUrl extends AuthUrl<LogoutParameters> {
    constructor(beforeQuery: string, query: string, params: LogoutParameters);
}
/**
 * Auth store is a simple store that maintains a link between the client store, the authentication status, and the
 * message channel used to validate auth status.
 */
export declare class AuthStore {
    readonly client: ClientStore;
    webAuthStatus: WebAuthStatus;
    loginUrl: LoginUrl | undefined;
    logoutUrl: LogoutUrl | undefined;
    constructor(client: ClientStore);
    private onAuthChallengeComplete;
    authChange(changeObject?: WebAuthStatus): void;
    get isRedirecting(): boolean;
    clearLoginLogoutFlags(): void;
    get isIdpSet(): boolean;
    login(loginParameters?: LoginParameters): void;
    doNewTabOrWindowLogin(url: LoginUrl): void;
    doLogin(): void;
    logout(logoutParameters?: LogoutParameters): void;
    doLogout(): void;
}
export {};
