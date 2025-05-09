[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ChannelStore](../index.md) / ChannelStore

# Class: ChannelStore

Defined in: stores/ChannelStore.d.ts:7

ChannelStore holds the websocket connection to the gateway and is used to send messages and register
handlers for receiving messages.

## Constructors

### Constructor

> **new ChannelStore**(`client`): `ChannelStore`

Defined in: stores/ChannelStore.d.ts:24

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`ChannelStore`

## Properties

### client

> **client**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/ChannelStore.d.ts:16

***

### closeEventDefinitions

> **closeEventDefinitions**: `object`

Defined in: stores/ChannelStore.d.ts:19

#### Index Signature

\[`key`: `string`\]: [`CloseEventDefinition`](../../../perspective-client/interfaces/CloseEventDefinition.md)

***

### handlers

> **handlers**: `Map`\<`string`, [`MessageHandler`](../../../perspective-client/interfaces/MessageHandler.md)\>

Defined in: stores/ChannelStore.d.ts:18

***

### idleTimeIntervalMs

> **idleTimeIntervalMs**: `number`

Defined in: stores/ChannelStore.d.ts:15

Interval between idle checks

***

### lastIdleCheck

> **lastIdleCheck**: `number`

Defined in: stores/ChannelStore.d.ts:23

***

### maxIdleTimeMs

> **maxIdleTimeMs**: `number`

Defined in: stores/ChannelStore.d.ts:11

Maximum time allowed after last message was processed before triggering disconnect

***

### status

> **status**: [`ConnectionState`](../../../perspective-client/interfaces/ConnectionState.md)

Defined in: stores/ChannelStore.d.ts:22

***

### webSocket

> **webSocket**: `WebSocket`

Defined in: stores/ChannelStore.d.ts:17

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: stores/ChannelStore.d.ts:27

##### Returns

`boolean`

***

### isSecure

#### Get Signature

> **get** **isSecure**(): `boolean`

Defined in: stores/ChannelStore.d.ts:28

##### Returns

`boolean`

## Methods

### connect()

> **connect**(): `void`

Defined in: stores/ChannelStore.d.ts:29

#### Returns

`void`

***

### disconnect()

> **disconnect**(`message?`, `beginTransition?`): `void`

Defined in: stores/ChannelStore.d.ts:35

#### Parameters

##### message?

`string`

##### beginTransition?

`boolean`

#### Returns

`void`

***

### getCloseEventDefinition()

> **getCloseEventDefinition**(`code`): [`CloseEventDefinition`](../../../perspective-client/interfaces/CloseEventDefinition.md)

Defined in: stores/ChannelStore.d.ts:32

#### Parameters

##### code

`number`

#### Returns

[`CloseEventDefinition`](../../../perspective-client/interfaces/CloseEventDefinition.md)

***

### processMessage()

> `protected` **processMessage**(`event`): `void`

Defined in: stores/ChannelStore.d.ts:34

#### Parameters

##### event

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### send()

> **send**(`protocol`, `payload`): `void`

Defined in: stores/ChannelStore.d.ts:33

#### Parameters

##### protocol

`string`

##### payload

[`PlainObject`](../../../perspective-client/type-aliases/PlainObject.md)

#### Returns

`void`

***

### socketInit()

> **socketInit**(`json`): `void`

Defined in: stores/ChannelStore.d.ts:25

#### Parameters

##### json

[`SocketInitResponse`](../../../perspective-client/interfaces/SocketInitResponse.md)

#### Returns

`void`
