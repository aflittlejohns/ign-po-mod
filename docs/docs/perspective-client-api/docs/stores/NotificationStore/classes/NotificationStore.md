[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/NotificationStore](../index.md) / NotificationStore

# Class: NotificationStore

Defined in: stores/NotificationStore.d.ts:25

## Constructors

### Constructor

> **new NotificationStore**(`client`): `NotificationStore`

Defined in: stores/NotificationStore.d.ts:44

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`NotificationStore`

## Properties

### actionDenied

> **actionDenied**: [`ActionDenied`](../../../perspective-client/interfaces/ActionDenied.md)

Defined in: stores/NotificationStore.d.ts:39

***

### activeNotifications

> **activeNotifications**: [`ClientNotification`](../../../perspective-client/interfaces/ClientNotification.md)[]

Defined in: stores/NotificationStore.d.ts:30

***

### authChallengeBlockedCount

> **authChallengeBlockedCount**: `number`

Defined in: stores/NotificationStore.d.ts:35

***

### authChallengeBlockedTimer

> **authChallengeBlockedTimer**: `number`

Defined in: stores/NotificationStore.d.ts:36

***

### authChallengeBlockedUrl

> **authChallengeBlockedUrl**: [`LoginUrl`](../../AuthStore/classes/LoginUrl.md)

Defined in: stores/NotificationStore.d.ts:37

***

### client

> **client**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/NotificationStore.d.ts:26

***

### errorMessage

> **errorMessage**: [`ErrorMessagePayload`](../../../perspective-client/interfaces/ErrorMessagePayload.md)

Defined in: stores/NotificationStore.d.ts:40

***

### idleCount

> **idleCount**: `number`

Defined in: stores/NotificationStore.d.ts:33

***

### idleTimer

> **idleTimer**: `number`

Defined in: stores/NotificationStore.d.ts:34

***

### isMobile

> **isMobile**: `boolean`

Defined in: stores/NotificationStore.d.ts:28

***

### isTablet

> **isTablet**: `boolean`

Defined in: stores/NotificationStore.d.ts:29

***

### login

> **login**: `boolean`

Defined in: stores/NotificationStore.d.ts:43

***

### nativeFallbackRedirectEnabled

> **nativeFallbackRedirectEnabled**: `boolean`

Defined in: stores/NotificationStore.d.ts:41

***

### nativeFallbackRedirectTimeout

> **nativeFallbackRedirectTimeout**: `number`

Defined in: stores/NotificationStore.d.ts:42

***

### notificationVisible

> **notificationVisible**: `boolean`

Defined in: stores/NotificationStore.d.ts:27

***

### updateCount

> **updateCount**: `number`

Defined in: stores/NotificationStore.d.ts:31

***

### updateMessage

> **updateMessage**: `string`

Defined in: stores/NotificationStore.d.ts:38

***

### updateTimer

> **updateTimer**: `number`

Defined in: stores/NotificationStore.d.ts:32

## Accessors

### active

#### Get Signature

> **get** **active**(): [`ClientNotification`](../../../perspective-client/interfaces/ClientNotification.md)[]

Defined in: stores/NotificationStore.d.ts:47

##### Returns

[`ClientNotification`](../../../perspective-client/interfaces/ClientNotification.md)[]

***

### fallbackRedirectTimer

#### Get Signature

> **get** **fallbackRedirectTimer**(): `number`

Defined in: stores/NotificationStore.d.ts:48

##### Returns

`number`

## Methods

### authChallengeBlockedNotification()

> **authChallengeBlockedNotification**(`url`): `void`

Defined in: stores/NotificationStore.d.ts:56

#### Parameters

##### url

[`LoginUrl`](../../AuthStore/classes/LoginUrl.md)

#### Returns

`void`

***

### backupGatewayNotification()

> **backupGatewayNotification**(): `void`

Defined in: stores/NotificationStore.d.ts:57

#### Returns

`void`

***

### clearPendingUpdate()

> **clearPendingUpdate**(): `void`

Defined in: stores/NotificationStore.d.ts:66

#### Returns

`void`

***

### completeAuthChallengeBlockedNotification()

> **completeAuthChallengeBlockedNotification**(): [`LoginUrl`](../../AuthStore/classes/LoginUrl.md)

Defined in: stores/NotificationStore.d.ts:55

#### Returns

[`LoginUrl`](../../AuthStore/classes/LoginUrl.md)

***

### completeIdleNotification()

> **completeIdleNotification**(): `void`

Defined in: stores/NotificationStore.d.ts:53

#### Returns

`void`

***

### dismissNotification()

> **dismissNotification**(`type`): `void`

Defined in: stores/NotificationStore.d.ts:50

#### Parameters

##### type

[`NotificationType`](../enumerations/NotificationType.md)

#### Returns

`void`

***

### handleNotificationChange()

> **handleNotificationChange**(`type`, `requiresNotification`, `isPopupType`, `isDismissable?`, `removeOnDismiss?`): `void`

Defined in: stores/NotificationStore.d.ts:58

#### Parameters

##### type

[`NotificationType`](../enumerations/NotificationType.md)

##### requiresNotification

`boolean`

##### isPopupType

`boolean`

##### isDismissable?

`boolean`

##### removeOnDismiss?

`boolean`

#### Returns

`void`

***

### idleNotification()

> **idleNotification**(`isIdle`): `void`

Defined in: stores/NotificationStore.d.ts:54

#### Parameters

##### isIdle

`boolean`

#### Returns

`void`

***

### initNotifications()

> **initNotifications**(): `void`

Defined in: stores/NotificationStore.d.ts:46

#### Returns

`void`

***

### onActionDenied()

> **onActionDenied**(`actionDenied`): `void`

Defined in: stores/NotificationStore.d.ts:64

#### Parameters

##### actionDenied

[`ActionDenied`](../../../perspective-client/interfaces/ActionDenied.md)

#### Returns

`void`

***

### onCountdownComplete()

> **onCountdownComplete**(): `void`

Defined in: stores/NotificationStore.d.ts:62

#### Returns

`void`

***

### onErrorMessage()

> **onErrorMessage**(`errorMessage`): `void`

Defined in: stores/NotificationStore.d.ts:63

#### Parameters

##### errorMessage

[`ErrorMessagePayload`](../../../perspective-client/interfaces/ErrorMessagePayload.md)

#### Returns

`void`

***

### onFallbackRedirect()

> **onFallbackRedirect**(): `void`

Defined in: stores/NotificationStore.d.ts:52

#### Returns

`void`

***

### onNoIdP()

> **onNoIdP**(`login`): `void`

Defined in: stores/NotificationStore.d.ts:65

#### Parameters

##### login

`boolean`

#### Returns

`void`

***

### onProjectUpdateLoading()

> **onProjectUpdateLoading**(`projectLoading`): `void`

Defined in: stores/NotificationStore.d.ts:60

#### Parameters

##### projectLoading

`boolean`

#### Returns

`void`

***

### onProjectUpdateReady()

> **onProjectUpdateReady**(`update`): `void`

Defined in: stores/NotificationStore.d.ts:59

#### Parameters

##### update

[`PendingUpdate`](../../ResourceStore/interfaces/PendingUpdate.md)

#### Returns

`void`

***

### onTrialTimerUpdate()

> **onTrialTimerUpdate**(`isTrial`): `void`

Defined in: stores/NotificationStore.d.ts:61

#### Parameters

##### isTrial

`boolean`

#### Returns

`void`

***

### removeNotification()

> **removeNotification**(`type`): `void`

Defined in: stores/NotificationStore.d.ts:51

#### Parameters

##### type

[`NotificationType`](../enumerations/NotificationType.md)

#### Returns

`void`

***

### setConnectionListener()

> **setConnectionListener**(): `void`

Defined in: stores/NotificationStore.d.ts:45

#### Returns

`void`

***

### updateNotification()

> **updateNotification**(`notification`): `void`

Defined in: stores/NotificationStore.d.ts:49

#### Parameters

##### notification

[`ClientNotification`](../../../perspective-client/interfaces/ClientNotification.md)

#### Returns

`void`
