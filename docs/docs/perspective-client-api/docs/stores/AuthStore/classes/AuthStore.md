[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/AuthStore](../index.md) / AuthStore

# Class: AuthStore

Defined in: stores/AuthStore.d.ts:103

Auth store is a simple store that maintains a link between the client store, the authentication status, and the
message channel used to validate auth status.

## Constructors

### Constructor

> **new AuthStore**(`client`): `AuthStore`

Defined in: stores/AuthStore.d.ts:108

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`AuthStore`

## Properties

### client

> `readonly` **client**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/AuthStore.d.ts:104

***

### loginUrl

> **loginUrl**: [`LoginUrl`](LoginUrl.md)

Defined in: stores/AuthStore.d.ts:106

***

### logoutUrl

> **logoutUrl**: [`LogoutUrl`](LogoutUrl.md)

Defined in: stores/AuthStore.d.ts:107

***

### webAuthStatus

> **webAuthStatus**: [`WebAuthStatus`](../../../perspective-client/interfaces/WebAuthStatus.md)

Defined in: stores/AuthStore.d.ts:105

## Accessors

### isIdpSet

#### Get Signature

> **get** **isIdpSet**(): `boolean`

Defined in: stores/AuthStore.d.ts:113

##### Returns

`boolean`

***

### isRedirecting

#### Get Signature

> **get** **isRedirecting**(): `boolean`

Defined in: stores/AuthStore.d.ts:111

##### Returns

`boolean`

## Methods

### authChange()

> **authChange**(`changeObject?`): `void`

Defined in: stores/AuthStore.d.ts:110

#### Parameters

##### changeObject?

[`WebAuthStatus`](../../../perspective-client/interfaces/WebAuthStatus.md)

#### Returns

`void`

***

### clearLoginLogoutFlags()

> **clearLoginLogoutFlags**(): `void`

Defined in: stores/AuthStore.d.ts:112

#### Returns

`void`

***

### doLogin()

> **doLogin**(): `void`

Defined in: stores/AuthStore.d.ts:116

#### Returns

`void`

***

### doLogout()

> **doLogout**(): `void`

Defined in: stores/AuthStore.d.ts:118

#### Returns

`void`

***

### doNewTabOrWindowLogin()

> **doNewTabOrWindowLogin**(`url`): `void`

Defined in: stores/AuthStore.d.ts:115

#### Parameters

##### url

[`LoginUrl`](LoginUrl.md)

#### Returns

`void`

***

### login()

> **login**(`loginParameters?`): `void`

Defined in: stores/AuthStore.d.ts:114

#### Parameters

##### loginParameters?

[`LoginParameters`](../interfaces/LoginParameters.md)

#### Returns

`void`

***

### logout()

> **logout**(`logoutParameters?`): `void`

Defined in: stores/AuthStore.d.ts:117

#### Parameters

##### logoutParameters?

[`AuthParameters`](../interfaces/AuthParameters.md)

#### Returns

`void`
