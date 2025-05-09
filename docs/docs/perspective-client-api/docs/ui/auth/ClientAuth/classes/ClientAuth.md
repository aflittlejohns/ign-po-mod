[**Documentation**](../../../../index.md)

***

[Documentation](../../../../index.md) / [ui/auth/ClientAuth](../index.md) / ClientAuth

# Class: ClientAuth

Defined in: ui/auth/ClientAuth.d.ts:19

## Extends

- [`ReactResizeDetector`](../../../../perspective-client/variables/ReactResizeDetector.md)\<[`AuthProps`](../interfaces/AuthProps.md), [`AuthState`](../interfaces/AuthState.md)\>

## Constructors

### Constructor

> **new ClientAuth**(`props`): `ClientAuth`

Defined in: ui/auth/ClientAuth.d.ts:23

#### Parameters

##### props

[`AuthProps`](../interfaces/AuthProps.md)

#### Returns

`ClientAuth`

#### Overrides

`React.Component<AuthProps, AuthState>.constructor`

## Properties

### context

> **context**: `ContextType`\<`Context`\<[`Partial`](../../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../../stores/ClientStore/classes/ClientStore.md)\>\>\>

Defined in: ui/auth/ClientAuth.d.ts:21

***

### handleWindowResize

> **handleWindowResize**: `any`

Defined in: ui/auth/ClientAuth.d.ts:22

***

### contextType

> `static` **contextType**: `Context`\<[`Partial`](../../../../perspective-client/type-aliases/Partial.md)\<[`ClientStore`](../../../../stores/ClientStore/classes/ClientStore.md)\>\>

Defined in: ui/auth/ClientAuth.d.ts:20

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: ui/auth/ClientAuth.d.ts:24

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: ui/auth/ClientAuth.d.ts:25

#### Returns

`void`

***

### login()

> **login**(): `void`

Defined in: ui/auth/ClientAuth.d.ts:28

#### Returns

`void`

***

### onKeyDown()

> **onKeyDown**(`e`): `void`

Defined in: ui/auth/ClientAuth.d.ts:27

#### Parameters

##### e

`KeyboardEvent`\<`HTMLDivElement` \| `HTMLInputElement`\>

#### Returns

`void`

***

### onWindowResize()

> **onWindowResize**(): `void`

Defined in: ui/auth/ClientAuth.d.ts:26

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: ui/auth/ClientAuth.d.ts:31

#### Returns

`Element`

***

### renderMessagePanel()

> **renderMessagePanel**(): `any`

Defined in: ui/auth/ClientAuth.d.ts:29

#### Returns

`any`

***

### renderSecondaryMessage()

> **renderSecondaryMessage**(): `any`

Defined in: ui/auth/ClientAuth.d.ts:30

#### Returns

`any`
