export declare namespace SVG_Utils {
    const ICON_DIGEST_KEY = "assetDigests/icon";
    const ICON_LIBRARY_PREFIX = "icon_library";
    const DEFAULT_ICON_SIZE = 24;
    const DEFAULT_ICON_CROP = 0;
    const VIEWBOX_DEFAULT: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    interface IconPathConfig {
        prefix: string;
        name: string;
    }
    interface ViewBoxConfig {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    interface SVGSessionStorageData {
        innerContent: any;
        viewBox: ViewBoxConfig;
    }
    interface CurrentIconUrlInfo {
        url: string;
        digest?: string;
    }
    /**
     * Tests a path to see if it is the correct format for icon shorthand: library/iconName. Returns true if path
     * matches two character groups without file extensions separated by a slash.
     * @param {string} path
     * @returns {boolean}
     */
    function isShorthandIconPath(path: string): boolean;
    /**
     * Constructs full path to resource from a shorthand path in format: prefix/name.
     * @param {string} path
     * @returns {string}
     */
    function getFullIconPath(path: string): string;
    /**
     * Constructs full path to resource from the passed in library and icon names.
     * @param name of the icon
     * @param library name of the library that contains the named icon
     */
    function buildIconRequestPath(name: string, library: string): CurrentIconUrlInfo;
    /**
     * Retrieve the SVG sprite library name and icon name from the passed-in URL.
     * @param url - library/iconName
     */
    function getLibraryNameAndIconNameFromURL(url: string): IconPathConfig;
    /**
     * Retrieve the SVG sprite library name and icon name from the passed-in path.
     * @param path - library/iconName
     */
    function getLibraryNameAndIconNameFromPath(path: string): IconPathConfig;
    /**
     * Return a sessionStorage key used for saving/retrieving individual icons based on the name of the SVG sprite
     * library and the name of the icon.
     * @param config
     */
    function getSessionStorageKey(config: IconPathConfig): string;
    /**
     * Retrieve an icon string and its viewBox coordinates from sessionStorage using that passed-in key.
     * @param key
     */
    function getSVGElementFromSessionStorage(key: string): SVGSessionStorageData;
    /**
     * Updates the localStorage digest object, adding or replacing the digest for the named library, writing the updated
     * data back to the localStorage.
     * @param library
     * @param newDigest
     */
    function updateLocalStorageDigest(library: string, newDigest: string): void;
    function digestsFromLocalStorage(): {
        [key: string]: string;
    } | undefined;
    function svgLibraryDigestFromLocalStorage(libraryName: string): string | undefined;
    function svgLibraryUpdateExists(library: string): boolean;
    function currentSvgLibraryDigest(libName: string): string | undefined;
    /**
     * Retrieve an SVG icon from sessionStorage.  If the icon does not exist in session storage, grab the icon library via
     * an AJAX request, save the icons to session storage, and then return the requested icon.
     * @param name
     * @param library
     */
    function getSVGIconMarkup(name: string, library: string): Promise<SVGSessionStorageData>;
}
