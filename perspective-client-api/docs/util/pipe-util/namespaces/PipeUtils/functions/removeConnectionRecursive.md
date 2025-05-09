[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [util/pipe-util](../../../index.md) / [PipeUtils](../index.md) / removeConnectionRecursive

# Function: removeConnectionRecursive()

> **removeConnectionRecursive**(`pipe`, `connectionAddress`, `connection`, `connectionAddressIndex?`, `previousConnection?`, `previousPreviousConnection?`): [`Pipes`](../type-aliases/Pipes.md)

Defined in: util/pipe-util.d.ts:209

returns an array of pipes consisting of the existing pipe (if its origin has still has a connection),
and the pipes made from the deleted connection's connections (if they exist).  For new pipes that are created,
the new Pipe's props (appearance, width, etc) equal to the original pipe's props.

## Parameters

### pipe

[`Pipe`](../interfaces/Pipe.md)

### connectionAddress

`number`[]

### connection

[`ConnectedPoint`](../interfaces/ConnectedPoint.md)

the origin (for the first recursive iteration)

### connectionAddressIndex?

`number`

### previousConnection?

[`ConnectedPoint`](../interfaces/ConnectedPoint.md)

### previousPreviousConnection?

[`ConnectedPoint`](../interfaces/ConnectedPoint.md)

## Returns

[`Pipes`](../type-aliases/Pipes.md)
