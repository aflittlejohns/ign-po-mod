[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/pipe-util](../../../index.md) / [PipeUtils](../index.md) / addConnectionRecursive

# Function: addConnectionRecursive()

> **addConnectionRecursive**(`connectionAddress`, `connectionIndex`, `connection`, `x`, `y`, `connectionAddressIndex?`): `boolean`

Defined in: util/pipe-util.d.ts:189

Returns true if a connection has been added at the connection address, and connectionIndex. x, and y will snap to
its parent coordinates.

## Parameters

### connectionAddress

`number`[]

### connectionIndex

`number`

if null, the newly added connection will be pushed to the end of connection.connections

### connection

[`ConnectedPoint`](../interfaces/ConnectedPoint.md)

the origin (for the first recursive iteration)

### x

`number`

### y

`number`

### connectionAddressIndex?

`number`

## Returns

`boolean`
