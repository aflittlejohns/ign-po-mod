[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/MobileNotification](../index.md) / MobileNotification

# Class: MobileNotification

Defined in: app/MobileNotification.d.ts:8

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<[`NotificationProps`](../../Notification/interfaces/NotificationProps.md), `MobileNotificationState`\>

## Constructors

### Constructor

> **new MobileNotification**(): `MobileNotification`

#### Returns

`MobileNotification`

#### Inherited from

`React.Component<NotificationProps, MobileNotificationState>.constructor`

## Properties

### notificationRef

> **notificationRef**: `RefObject`\<`HTMLDivElement`\>

Defined in: app/MobileNotification.d.ts:9

***

### state

> **state**: `object`

Defined in: app/MobileNotification.d.ts:11

#### isSwiping

> **isSwiping**: `boolean`

#### swipeOffset

> **swipeOffset**: `number`

#### swipeStart

> **swipeStart**: `number`

***

### timeout

> **timeout**: `number`

Defined in: app/MobileNotification.d.ts:10

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Defined in: app/MobileNotification.d.ts:16

#### Returns

`void`

***

### componentWillUnmount()

> **componentWillUnmount**(): `void`

Defined in: app/MobileNotification.d.ts:17

#### Returns

`void`

***

### onTouchEnd()

> **onTouchEnd**(`event`): `void`

Defined in: app/MobileNotification.d.ts:32

Reset notification position if we do not reach the threshold, but end drag.

#### Parameters

##### event

`any`

#### Returns

`void`

***

### onTouchMove()

> **onTouchMove**(`event`): `void`

Defined in: app/MobileNotification.d.ts:27

Update position of notification, dismiss if we hit the threshold.

#### Parameters

##### event

`any`

#### Returns

`void`

***

### onTouchStart()

> **onTouchStart**(`event`): `void`

Defined in: app/MobileNotification.d.ts:22

Start touch event for notification.

#### Parameters

##### event

`any`

#### Returns

`void`

***

### render()

> **render**(): `Element`

Defined in: app/MobileNotification.d.ts:33

#### Returns

`Element`
