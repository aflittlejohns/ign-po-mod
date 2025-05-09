[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/ComponentPath](../index.md) / ComponentPath

# Class: ComponentPath

Defined in: util/ComponentPath.d.ts:7

Utility class for dealing with Component Address Paths, which are the "0:1:0" style paths used by the system
to locate specific components in the tree.  The root container component of a view is always 0, and the colon
designates one level of depth in the tree.  So in the example above, the address would resolve to the first child
of a root containers child with an id (in designer) or index (in the client) of 1.  Ids are always natural numbers.

## Constructors

### Constructor

> **new ComponentPath**(): `ComponentPath`

#### Returns

`ComponentPath`

## Properties

### FULL\_PATH

> `static` **FULL\_PATH**: `RegExp`

Defined in: util/ComponentPath.d.ts:29

Pattern matching a fully-qualified component mount path, including the mount-location prefix.
examples:
"D.0:2:4"  // pass
"C.0"      // pass
"T.1:2"    // fail, first id after mount must be the root index of 0

***

### PATTERN

> `static` **PATTERN**: `RegExp`

Defined in: util/ComponentPath.d.ts:20

Pattern matching a component's index path string
 examples:
 "0"       // pass
 "0:1:21"  // pass
 "99:1"    // pass - path must be relative to the root component or deeper
 ":0"      // fail
 "0:1:"    // fail
 "no:1"    // fail

## Methods

### isLastElement()

> `static` **isLastElement**(`addressPath`): `boolean`

Defined in: util/ComponentPath.d.ts:39

Returns true if the given index path has no more colons and the string value is a natural number

#### Parameters

##### addressPath

`string`

#### Returns

`boolean`

***

### isValidFullPath()

> `static` **isValidFullPath**(`path`): `boolean`

Defined in: util/ComponentPath.d.ts:35

Tests if string is a val id 'mount address path', meaning it's a valid mount identifier, followed by a period
and then a valid address path.

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### isValidIndexPath()

> `static` **isValidIndexPath**(`path`): `boolean`

Defined in: util/ComponentPath.d.ts:30

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### parse()

> `static` **parse**(`path`): `string`

Defined in: util/ComponentPath.d.ts:44

Returns the component index path, derived from a fully qualified mount path.  If given a string which is
already a properly formatted path (without mount prefix), then it simply returns the string.

#### Parameters

##### path

`string`

#### Returns

`string`
