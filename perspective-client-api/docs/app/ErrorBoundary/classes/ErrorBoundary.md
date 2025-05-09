[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [app/ErrorBoundary](../index.md) / ErrorBoundary

# Class: ErrorBoundary

Defined in: app/ErrorBoundary.d.ts:10

Simple application error boundary.  Wraps application related components
so that errors do not leak into the global scope and cause the entire application to
crash.

## Extends

- [`ReactResizeDetector`](../../../perspective-client/variables/ReactResizeDetector.md)\<`ErrorBoundaryProps`, \{ `hasError`: `boolean`; \}\>

## Constructors

### Constructor

> **new ErrorBoundary**(): `ErrorBoundary`

#### Returns

`ErrorBoundary`

#### Inherited from

`React.Component<ErrorBoundaryProps, { hasError: boolean; }>.constructor`

## Properties

### state

> **state**: `object`

Defined in: app/ErrorBoundary.d.ts:13

#### hasError

> **hasError**: `boolean`

## Methods

### componentDidCatch()

> **componentDidCatch**(`error`, `info`): `void`

Defined in: app/ErrorBoundary.d.ts:16

#### Parameters

##### error

`Error`

##### info

`ErrorInfo`

#### Returns

`void`

***

### render()

> **render**(): `ReactNode`

Defined in: app/ErrorBoundary.d.ts:17

#### Returns

`ReactNode`
