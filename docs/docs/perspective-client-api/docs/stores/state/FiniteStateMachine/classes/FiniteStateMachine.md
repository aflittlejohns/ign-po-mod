[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [stores/state/FiniteStateMachine](../index.md) / FiniteStateMachine

# Class: FiniteStateMachine\<A, S\>

Defined in: stores/state/FiniteStateMachine.d.ts:14

## Type Parameters

### A

`A`

### S

`S`

## Constructors

### Constructor

> **new FiniteStateMachine**\<`A`, `S`\>(`initialState`, `transitions`, `log`): `FiniteStateMachine`\<`A`, `S`\>

Defined in: stores/state/FiniteStateMachine.d.ts:21

#### Parameters

##### initialState

`S`

##### transitions

[`Transition`](../interfaces/Transition.md)\<`A`, `S`\>[]

##### log

`JSNLogLogger`

#### Returns

`FiniteStateMachine`\<`A`, `S`\>

## Properties

### subscribe

> `readonly` **subscribe**: [`SubscriptionHandler`](../../../../api/subscription/Subscription/type-aliases/SubscriptionHandler.md)

Defined in: stores/state/FiniteStateMachine.d.ts:20

## Accessors

### state

#### Get Signature

> **get** **state**(): [`StateWrapper`](../interfaces/StateWrapper.md)\<`S`\>

Defined in: stores/state/FiniteStateMachine.d.ts:22

##### Returns

[`StateWrapper`](../interfaces/StateWrapper.md)\<`S`\>

## Methods

### transition()

> **transition**(`name`): `void`

Defined in: stores/state/FiniteStateMachine.d.ts:23

#### Parameters

##### name

`A`

#### Returns

`void`
