[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [props/PropertyTree](../index.md) / PropertyTree

# Class: PropertyTree

Defined in: props/PropertyTree.d.ts:48

## Constructors

### Constructor

> **new PropertyTree**(`modelSource`, `onWriteCallback?`, `diagnosticId?`): `PropertyTree`

Defined in: props/PropertyTree.d.ts:53

#### Parameters

##### modelSource

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

##### onWriteCallback?

() => `any`

##### diagnosticId?

`string`

#### Returns

`PropertyTree`

## Properties

### diagnosticId

> **diagnosticId**: `string`

Defined in: props/PropertyTree.d.ts:52

***

### notify()

> **notify**: (...`args`) => `void`

Defined in: props/PropertyTree.d.ts:64

#### Parameters

##### args

...`any`

#### Returns

`void`

***

### notifyListeners()

> **notifyListeners**: () => `void`

Defined in: props/PropertyTree.d.ts:63

#### Returns

`void`

## Methods

### export()

> **export**(`predicate`): [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: props/PropertyTree.d.ts:221

Exports the property tree in a format suitable for saving

#### Parameters

##### predicate

[`PathPredicate`](../interfaces/PathPredicate.md)

predicate to control what gets included in the export

#### Returns

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

***

### getDirtyWrites()

> **getDirtyWrites**(`syncRequest`, `readPlain?`): [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

Defined in: props/PropertyTree.d.ts:89

Called in the sync cycle when we are sending a sync request to the session. This method will add any dirty values
(nodes with non-null pending fields) to the sync request. It will also register callbacks onto the sync request
so that when we receive a receipt from the session that the sync has been applied, we can clear out the pending
fields.

#### Parameters

##### syncRequest

###### addFinishCallback

##### readPlain?

`boolean`

#### Returns

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

***

### getQualities()

> **getQualities**(): `Map`\<`string`, [`QualityCode`](../../QualityCode/classes/QualityCode.md)\>

Defined in: props/PropertyTree.d.ts:82

#### Returns

`Map`\<`string`, [`QualityCode`](../../QualityCode/classes/QualityCode.md)\>

map of all quality names.

***

### isArray()

> **isArray**(`path`): `boolean`

Defined in: props/PropertyTree.d.ts:167

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### isDataset()

> **isDataset**(`path`): `boolean`

Defined in: props/PropertyTree.d.ts:168

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### isDirty()

> **isDirty**(): `boolean`

Defined in: props/PropertyTree.d.ts:78

#### Returns

`boolean`

true if this property tree contains nodes with pending values

***

### isObject()

> **isObject**(`path`): `boolean`

Defined in: props/PropertyTree.d.ts:166

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### isPrimitive()

> **isPrimitive**(`path`): `boolean`

Defined in: props/PropertyTree.d.ts:169

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### onWrite()

> **onWrite**(): `void`

Defined in: props/PropertyTree.d.ts:74

Called by nodes whenever a write has occurred. This is when we notify the write callback that was passed to
us in our constructor.

#### Returns

`void`

***

### qualityOf()

> **qualityOf**(`path`): [`QualityCode`](../../QualityCode/classes/QualityCode.md)

Defined in: props/PropertyTree.d.ts:188

Returns just the quality of the item at the specified path.

#### Parameters

##### path

`string`

The path of the item in the data model to look up.

#### Returns

[`QualityCode`](../../QualityCode/classes/QualityCode.md)

The quality of the item, or undefined if the path doesn't exist

***

### read()

> **read**(`path?`, `defaultValue?`): `any`

Defined in: props/PropertyTree.d.ts:100

Reads a value from this data model. The value found at the given path is returned as a simple, plain,
non-qualified object, such as a primitive, number, string, boolean, object, or array.

#### Parameters

##### path?

`string`

The path to read from.

##### defaultValue?

`any`

(optional) A default value to return in case the path is not found.

#### Returns

`any`

The data found at the path, converted to plain format.

***

### readArray()

> **readArray**(`path`, `defaultValue?`): `any`[]

Defined in: props/PropertyTree.d.ts:118

Read the given property as an array. If the property exists and is an array, it will be returned.
If the property doesn't exist, or is not a string the default value will be returned.

#### Parameters

##### path

`string`

##### defaultValue?

`never`[]

#### Returns

`any`[]

***

### readBoolean()

> **readBoolean**(`path`, `defaultValue?`): `boolean`

Defined in: props/PropertyTree.d.ts:136

Reads the given value as a boolean. If the value is a number, anything non-zero is true. If the value is a
string, the word "true" is evaluated to true. Otherwise you get the default value, which is false by default.

#### Parameters

##### path

`string`

##### defaultValue?

`boolean`

#### Returns

`boolean`

***

### readColor()

> **readColor**(`path`, `defaultColor?`): `string`

Defined in: props/PropertyTree.d.ts:162

Reads a color property from the data model. A found value in variable format is returned modified as valid css.
Otherwise the plain value is returned.

#### Parameters

##### path

`string`

##### defaultColor?

`string`

#### Returns

`string`

***

### readDataset()

> **readDataset**(`path`): [`Dataset`](../../Dataset/classes/Dataset.md)

Defined in: props/PropertyTree.d.ts:163

#### Parameters

##### path

`string`

#### Returns

[`Dataset`](../../Dataset/classes/Dataset.md)

***

### readDate()

> **readDate**(`path`, `defaultValue?`): `Date`

Defined in: props/PropertyTree.d.ts:141

Reads the given value as a Date. If the value is a number, it is interpreted as millis since epoch. If the value
is a Date, it's just returned directly. Otherwise you get the default value, which is undefined by default.

#### Parameters

##### path

`string`

##### defaultValue?

`Date`

#### Returns

`Date`

***

### readEncoded()

> **readEncoded**(`path?`, `includeTimestamp?`): `any`

Defined in: props/PropertyTree.d.ts:123

Reads the given path in the $-encoded format that preserves quality and correctly encodes Datasets and Dates.

#### Parameters

##### path?

`string`

##### includeTimestamp?

`boolean`

#### Returns

`any`

#### Throws

Error if the path is not found in the property tree.

***

### readKeys()

> **readKeys**(`path`): `string`[]

Defined in: props/PropertyTree.d.ts:173

Read the keys of the object at the given path, if it is indeed an object, otherwise an empty array.

#### Parameters

##### path

`string`

#### Returns

`string`[]

***

### readLength()

> **readLength**(`path`): `number`

Defined in: props/PropertyTree.d.ts:177

If the path represents an array, this will get the length of the array. Otherwise will return zero.

#### Parameters

##### path

`string`

#### Returns

`number`

***

### readNumber()

> **readNumber**\<`T`\>(`path`, `defaultValue`): `T`

Defined in: props/PropertyTree.d.ts:131

Read the given property as a number. If the property exists and is a number, it will be returned.
If the value is a Date, the millis of the date will be returned. If the value is a string, it will be
parsed as a float and returned if successful, otherwise the default value will be returned.

#### Type Parameters

##### T

`T`

#### Parameters

##### path

`string`

property reference path to try reading

##### defaultValue

`T`

the value to return if a valid number does not exist at path

#### Returns

`T`

***

### readObject()

> **readObject**\<`T`\>(`path`, `defaultObj?`): `T`

Defined in: props/PropertyTree.d.ts:165

#### Type Parameters

##### T

`T` *extends* [`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Parameters

##### path

`string`

##### defaultObj?

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`T`

***

### readQualified()

> **readQualified**(`path`): [`QualifiedValue`](../../QualifiedValue/classes/QualifiedValue.md)

Defined in: props/PropertyTree.d.ts:148

Reads a value from this data model. The value will be returned as a QualifiedValue.

#### Parameters

##### path

`string`

The path to read from.

#### Returns

[`QualifiedValue`](../../QualifiedValue/classes/QualifiedValue.md)

A QualifiedValue representing the data found at the path. If the path is not found in this model,
then a qualified value with undefined, and NOT_FOUND quality will be returned.

***

### readString()

> **readString**(`path`, `defaultValue?`): `string`

Defined in: props/PropertyTree.d.ts:106

Read the given property as a string. If the property exists and is a string, it will be returned.
If the property doesn't exist, the default will be returned.
If the property exists and is not a string, the value will be turned into a string via JSON.stringify.

#### Parameters

##### path

`string`

##### defaultValue?

`string`

#### Returns

`string`

***

### readStringIfExists()

> **readStringIfExists**(`path`): `string`

Defined in: props/PropertyTree.d.ts:111

Reads the given property as a string, if that property exists and is a string. If the property doesn't exist,
null will be returned.

#### Parameters

##### path

`string`

#### Returns

`string`

***

### readStyle()

> **readStyle**(`path?`): [`Style`](../../../util/Style/classes/Style.md)

Defined in: props/PropertyTree.d.ts:154

Reads a style property and replaces variable-formatted properties (e.g. "--my-var") with css-valid strings.
If no argument is passed in, the base 'style' value from the data model will be read and processed for these
variable-formatted properties.

#### Parameters

##### path?

`string`

#### Returns

[`Style`](../../../util/Style/classes/Style.md)

***

### readType()

> **readType**(`path`): `void` \| [`TypeCode`](../enumerations/TypeCode.md)

Defined in: props/PropertyTree.d.ts:164

#### Parameters

##### path

`string`

#### Returns

`void` \| [`TypeCode`](../enumerations/TypeCode.md)

***

### subscribe()

> **subscribe**(`listener`): [`PropertyTreeChangeListenerDisposer`](../type-aliases/PropertyTreeChangeListenerDisposer.md)

Defined in: props/PropertyTree.d.ts:62

Subscribe to any updates to this PropertyTree.

#### Parameters

##### listener

[`PropertyTreeChangeListener`](../type-aliases/PropertyTreeChangeListener.md)\<`unknown`\>

#### Returns

[`PropertyTreeChangeListenerDisposer`](../type-aliases/PropertyTreeChangeListenerDisposer.md)

PropertyTreeChangeListenerDisposer - Returns a disposer function that will unsubscribe
the provided listener from any updates. Use this to remove reference and prevent memory leaks.

***

### toPlainObject()

> **toPlainObject**(): [`JsObject`](../../../perspective-client/type-aliases/JsObject.md)

Defined in: props/PropertyTree.d.ts:216

#### Returns

[`JsObject`](../../../perspective-client/type-aliases/JsObject.md)

tree as a plain object (document) representation of its current state, including optimistic
pending values

***

### update()

> **update**(`data`): `void`

Defined in: props/PropertyTree.d.ts:69

Called by the sync cycle when we have received updates to this property tree from our session. The argument
will be our $-qualified diff format.

#### Parameters

##### data

[`UpdateObject`](../interfaces/UpdateObject.md)

#### Returns

`void`

***

### write()

> **write**(`path`, `value`): `void`

Defined in: props/PropertyTree.d.ts:195

This method is included on the top-level data model map node. Uses the operate method to write to any
section of the data model.

#### Parameters

##### path

`string`

The path to write to

##### value

`any`

The new value to write

#### Returns

`void`

***

### getColorValue()

> `static` **getColorValue**(`value`): `string`

Defined in: props/PropertyTree.d.ts:182

Tests a string value for css variable formatting. Returns full valid format: "--my-var" becomes "var(--my-var)"
if matched, or else just returns original string.

#### Parameters

##### value

`string`

#### Returns

`string`

***

### parseStyle()

> `static` **parseStyle**(`toBeParsed`): [`Style`](../../../util/Style/classes/Style.md)

Defined in: props/PropertyTree.d.ts:155

#### Parameters

##### toBeParsed

`any`

#### Returns

[`Style`](../../../util/Style/classes/Style.md)
