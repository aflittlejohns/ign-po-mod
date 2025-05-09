[**Documentation**](../../../../../index.md)

***

[Documentation](../../../../../index.md) / [stores/workstation/api/WorkstationDataSource](../index.md) / WorkstationDataSource

# Interface: WorkstationDataSource\<C, D\>

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:30

Workstation data sources receive data sent from a Workstation via the WorkstationBridge. In some cases, this data is
written directly back to the props on the client side via implementing the `apply` method.  In other cases, the data
is intended to be sent back to the gateway for session event handling, which is done automatically if the
WorkstationDataType is appropriately registered.

## Type Parameters

### C

`C` *extends* [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

### D

`D` *extends* [`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

## Properties

### factory?

> `optional` **factory**: [`ActionFactory`](../../../../../api/action/ActionRegistry/interfaces/ActionFactory.md)\<[`ContextualWorkstationAction`](../../WorkstationAction/interfaces/ContextualWorkstationAction.md)\<`C`\>\>

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:38

If the data source is one that may be triggered by an action, this is the factory which creates the action.

***

### type

> **type**: [`deviceInfo`](../../WorkstationDataType/enumerations/WorkstationDataType.md#deviceinfo)

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:34

The type of action/data event this DataSource represents.

## Methods

### apply()?

> `optional` **apply**(`data`, `client`): `void`

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:50

Some workstation data sources do not fire as a result of actions, nor need to send data back to the gateway.
In these cases, the WorkstationDataSource can act to apply data received from the  workstation directly in the
client by providing this function.

#### Parameters

##### data

[`WorkstationDataItem`](WorkstationDataItem.md)\<`D`\>

##### client

[`ClientStore`](../../../../ClientStore/classes/ClientStore.md)

#### Returns

`void`

***

### prepare()?

> `optional` **prepare**(`result`): [`WorkstationDataItem`](WorkstationDataItem.md)\<`D`\>

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:44

This function is called to "prepare" data that has been provided by the workstation.  This is a chance to
perform any alterations to the raw data provided by the workstation before it's forwarded to the 'apply',
or submitted back to the gateway.

#### Parameters

##### result

[`WorkstationDataItem`](WorkstationDataItem.md)\<`D`\>

#### Returns

[`WorkstationDataItem`](WorkstationDataItem.md)\<`D`\>

***

### simulate()?

> `optional` **simulate**(`data`, `context`, `config`): `void`

Defined in: stores/workstation/api/WorkstationDataSource.d.ts:74

Workstation data can be challenging to test during development, so WorkstationDataSource may choose to implement
this method in order to register a simulate method that will end up being callable from the browser console via
`window._simulate<WorkstationDataTypeSuffix>(data: D, context: {something: here})`.

For example: barcode scans have a type `native/barcode`, and a data shape D that is simply {text: string}.

Registering a 'simulate` method for the barcode data source would add the following method to the window:
```
    window._simulateBarcode(data: {text: string}, context?: JsObject)
```
To use, you'd call it in the browser console, submitting some simulated data such as:
```
    const fakeContext = { helperInfo: "this is a text context" };
    const fakeBarcodeData = "I am a string that was captured in a barcode";
    window._simulateBarcode(fakeBarcodeData, fakeContext);
```

#### Parameters

##### data

`D`

the data object that is representative of the info sent by the device

##### context

[`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

any string keyed plain JS object that should represent an example user-defined context

##### config

[`PlainObject`](../../../../../perspective-client/type-aliases/PlainObject.md)

the configuration to simulate (useful for cases where configuration alters where data is applied,
as is the case in a small number of data sources (e.g. accelerometer)

#### Returns

`void`
