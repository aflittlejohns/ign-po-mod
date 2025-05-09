[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/css-transform-util](../index.md) / deriveRotationTransform

# Variable: deriveRotationTransform()

> `const` **deriveRotationTransform**: (`rect`, `rotation`) => `React.CSSProperties` \| `void`

Defined in: util/css-transform-util.d.ts:32

Returns the css style properties that result from translating the rotation config into valid react css style
properties, in the shape: `{ transform: "rotate(<angle>)", transformOrigin: "<css transform-origin string>" }`

## Parameters

### rect

`DOMRect`

the rect from which we may need to calculate anchor positioning if given a coordinate-based
point as the rotation anchor value

### rotation

[`RotationConfig`](../interfaces/RotationConfig.md)

config to apply to the rotation styling

## Returns

`React.CSSProperties` \| `void`

object containing valid react css properties derived from the rotation config, or
void if no applicable/valid derivation has been computed.
