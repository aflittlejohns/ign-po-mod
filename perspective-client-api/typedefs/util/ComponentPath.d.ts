/**
 * Utility class for dealing with Component Address Paths, which are the "0:1:0" style paths used by the system
 * to locate specific components in the tree.  The root container component of a view is always 0, and the colon
 * designates one level of depth in the tree.  So in the example above, the address would resolve to the first child
 * of a root containers child with an id (in designer) or index (in the client) of 1.  Ids are always natural numbers.
 */
export declare class ComponentPath {
    /**
     * Pattern matching a component's index path string
     *  examples:
     *  "0"       // pass
     *  "0:1:21"  // pass
     *  "99:1"    // pass - path must be relative to the root component or deeper
     *  ":0"      // fail
     *  "0:1:"    // fail
     *  "no:1"    // fail
     *
     * @type {RegExp}
     */
    static PATTERN: RegExp;
    /**
     * Pattern matching a fully-qualified component mount path, including the mount-location prefix.
     * examples:
     * "D.0:2:4"  // pass
     * "C.0"      // pass
     * "T.1:2"    // fail, first id after mount must be the root index of 0
     * @type {RegExp}
     */
    static FULL_PATH: RegExp;
    static isValidIndexPath(path: string): boolean;
    /**
     * Tests if string is a val id 'mount address path', meaning it's a valid mount identifier, followed by a period
     * and then a valid address path.
     */
    static isValidFullPath(path: string): boolean;
    /**
     * Returns true if the given index path has no more colons and the string value is a natural number
     */
    static isLastElement(addressPath: string): boolean;
    /**
     * Returns the component index path, derived from a fully qualified mount path.  If given a string which is
     * already a properly formatted path (without mount prefix), then it simply returns the string.
     */
    static parse(path: string): string;
}
