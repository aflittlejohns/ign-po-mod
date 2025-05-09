[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/Notification](../index.md) / Notification

# Class: Notification

Defined in: app/Notification.d.ts:11

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`NotificationProps`](../interfaces/NotificationProps.md), `any`\>

## Constructors

### Constructor

> **new Notification**(`props`): `Notification`

Defined in: app/Notification.d.ts:15

#### Parameters

##### props

[`NotificationProps`](../interfaces/NotificationProps.md)

#### Returns

`Notification`

#### Overrides

`React.Component<NotificationProps, any>.constructor`

## Properties

### props

> **props**: [`NotificationProps`](../interfaces/NotificationProps.md)

Defined in: app/Notification.d.ts:12

***

### renderTime

> **renderTime**: `Moment`

Defined in: app/Notification.d.ts:14

## Methods

### closeNotification()

> **closeNotification**(): `void`

Defined in: app/Notification.d.ts:19

#### Returns

`void`

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Defined in: app/Notification.d.ts:17

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/Notification.d.ts:18

#### Returns

`void`

***

### getActionDenied()

> **getActionDenied**(): [`ActionDenied`](../../../perspective-client/interfaces/ActionDenied.md)

Defined in: app/Notification.d.ts:24

#### Returns

[`ActionDenied`](../../../perspective-client/interfaces/ActionDenied.md)

***

### getActions()

> **getActions**(`type`): `any`

Defined in: app/Notification.d.ts:29

#### Parameters

##### type

[`NotificationType`](../../../stores/NotificationStore/enumerations/NotificationType.md)

#### Returns

`any`

***

### getAuthChallengeBlockedMessage()

> **getAuthChallengeBlockedMessage**(): `Element`

Defined in: app/Notification.d.ts:23

#### Returns

`Element`

***

### getBody()

> **getBody**(`type`, `connectionStatus`, `timestamp`): `Element`

Defined in: app/Notification.d.ts:27

#### Parameters

##### type

[`NotificationType`](../../../stores/NotificationStore/enumerations/NotificationType.md)

##### connectionStatus

[`ConnectionStatus`](../../../stores/NotificationStore/enumerations/ConnectionStatus.md)

##### timestamp

`Moment`

#### Returns

`Element`

***

### getErrorMessage()

> **getErrorMessage**(): [`ErrorMessagePayload`](../../../perspective-client/interfaces/ErrorMessagePayload.md)

Defined in: app/Notification.d.ts:25

#### Returns

[`ErrorMessagePayload`](../../../perspective-client/interfaces/ErrorMessagePayload.md)

***

### getIdleMessage()

> **getIdleMessage**(): `any`

Defined in: app/Notification.d.ts:22

#### Returns

`any`

***

### getMobileNotificationBody()

> **getMobileNotificationBody**(`type`, `connectionStatus`, `timestamp`): `Element`

Defined in: app/Notification.d.ts:31

#### Parameters

##### type

[`NotificationType`](../../../stores/NotificationStore/enumerations/NotificationType.md)

##### connectionStatus

[`ConnectionStatus`](../../../stores/NotificationStore/enumerations/ConnectionStatus.md)

##### timestamp

`Moment`

#### Returns

`Element`

***

### getUpdateMessage()

> **getUpdateMessage**(): `Element`

Defined in: app/Notification.d.ts:21

#### Returns

`Element`

***

### isLogin()

> **isLogin**(): `boolean`

Defined in: app/Notification.d.ts:26

#### Returns

`boolean`

***

### render()

> **render**(): `Element`

Defined in: app/Notification.d.ts:32

#### Returns

`Element`

***

### replaceTokens()

> **replaceTokens**(`message`, `token`, `toReplace`): `any`[]

Defined in: app/Notification.d.ts:20

#### Parameters

##### message

`string`

##### token

`string`

##### toReplace

`string`

#### Returns

`any`[]

***

### toggleExpansion()

> **toggleExpansion**(): `void`

Defined in: app/Notification.d.ts:30

#### Returns

`void`

***

### UNSAFE\_componentWillReceiveProps()

> **UNSAFE\_componentWillReceiveProps**(`nextProps`): `void`

Defined in: app/Notification.d.ts:16

#### Parameters

##### nextProps

[`NotificationProps`](../interfaces/NotificationProps.md)

#### Returns

`void`
