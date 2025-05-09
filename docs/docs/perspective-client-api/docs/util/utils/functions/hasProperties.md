[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / hasProperties

# Function: hasProperties()

> **hasProperties**(`obj`, ...`args`): `boolean`

Defined in: util/utils.d.ts:204

A function that makes it a little nicer to test for the existence if deeply structured properties.  For instance, if
an object may have a shape where any number of intermediate properties are undefined, each should be tested for.

Using this structure as an example. where any of the keys may be missing:
```js
out: {
  top: {
    middle: {
      deep: { hi: 2 }
    }
  }
}
```

You could do something like:
   ` if (out && out.top && out.top.middle && && out.top.middle.deep && out.top.middle.deep.hi) { }`

But that sucks.  This method allows you to call:
   ` if (out, "top", "middle", "deep", "hi"){ }`

Still sucks, but is more more concise.

## Parameters

### obj

`any`

an object to inspect for valid nesting.

### args

...`string`[]

, where each arg is a string representing a property key in order expected in the structure.

## Returns

`boolean`
