[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [util/utils](../index.md) / hashCode

# Function: hashCode()

> **hashCode**(`str`): `number`

Defined in: util/utils.d.ts:159

A javascript implementation of Java's String.hashCode().  Accounts for the 32 bit space.

## Parameters

### str

`string`

a string

## Returns

`number`

signed integer value which matches the output from a java string.hashCode() call on the same
string.  Will return undefined if non-string is passed in as the argument.
