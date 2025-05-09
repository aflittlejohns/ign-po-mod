[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/ClientIdleStore](../index.md) / ClientIdleStore

# Class: ClientIdleStore

Defined in: stores/ClientIdleStore.d.ts:7

Idle store that the client uses to keep track of the gateway time and the remaining time
before idling out of the session. If we are running disconnected, we fall back to using
local storage to keep each tab/window from idling out.

## Constructors

### Constructor

> **new ClientIdleStore**(`client`): `ClientIdleStore`

Defined in: stores/ClientIdleStore.d.ts:16

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`ClientIdleStore`

## Properties

### client

> `readonly` **client**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/ClientIdleStore.d.ts:8

***

### disconnectedIdleListener()

> **disconnectedIdleListener**: () => `void`

Defined in: stores/ClientIdleStore.d.ts:13

#### Returns

`void`

***

### gatewayTime

> **gatewayTime**: `number`

Defined in: stores/ClientIdleStore.d.ts:9

***

### innerTimeout

> **innerTimeout**: `number`

Defined in: stores/ClientIdleStore.d.ts:12

***

### remainingTime

> **remainingTime**: `number`

Defined in: stores/ClientIdleStore.d.ts:10

***

### timeout

> **timeout**: `number`

Defined in: stores/ClientIdleStore.d.ts:11

## Methods

### idleTimeout()

> **idleTimeout**(): `void`

Defined in: stores/ClientIdleStore.d.ts:33

Idle timeout for when we run disconnected. Essentially, this allows
the UI to go through the motions. For close session, we transition to the terminal state.
For log out, we attempt a redirect. In either case,
we obfuscate the page when running disconnected.

#### Returns

`void`

***

### initActivityTracker()

> **initActivityTracker**(): `void`

Defined in: stores/ClientIdleStore.d.ts:19

#### Returns

`void`

***

### maybeTriggerIdleTimeoutAction()

> **maybeTriggerIdleTimeoutAction**(): `boolean`

Defined in: stores/ClientIdleStore.d.ts:18

#### Returns

`boolean`

***

### onUserActivity()

> **onUserActivity**(): `void`

Defined in: stores/ClientIdleStore.d.ts:43

If we are running disconnected, simply reset the timer since we are falling back to local storage.
If connected, ping the gateway to reset the timer.

#### Returns

`void`

***

### resetIdleTimer()

> **resetIdleTimer**(): `void`

Defined in: stores/ClientIdleStore.d.ts:38

#### Returns

`void`

***

### resetPendingIdleTimeoutAction()

> **resetPendingIdleTimeoutAction**(): `void`

Defined in: stores/ClientIdleStore.d.ts:17

#### Returns

`void`

***

### setGatewayLastActiveTime()

> **setGatewayLastActiveTime**(`time`, `remainingTime`): `void`

Defined in: stores/ClientIdleStore.d.ts:25

Receive last active time from the gateway through the channel store.

#### Parameters

##### time

`number`

last active time from the gateway

##### remainingTime

`number`

remaining time before the gateway closes/logs out the session

#### Returns

`void`

***

### startDisconnectedIdleTimeout()

> **startDisconnectedIdleTimeout**(): `number`

Defined in: stores/ClientIdleStore.d.ts:37

Starts timers for the disconnected idle timeout.

#### Returns

`number`
