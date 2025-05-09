[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/native/api/NativeWebInterface](../index.md) / GwDataSubmitter

# Interface: GwDataSubmitter\<D\>

Defined in: stores/native/api/NativeWebInterface.d.ts:41

## Extended by

- [`NativeWebInterface`](NativeWebInterface.md)

## Type Parameters

### D

`D`

## Methods

### submitData()

> **submitData**(`result`): `void`

Defined in: stores/native/api/NativeWebInterface.d.ts:48

When the client has initiated a native action, the result of that action may (if necessary) return the result
of the action to the client via this method.  This method should only be called if the ClientStore.clientState
== "running" OR if the native app has received the onWebAppRunning callback

#### Parameters

##### result

`D`

the result of some native action or data collection request

#### Returns

`void`
