[**Documentation**](../../../index.md)

***

[Documentation](../../../index.md) / [stores/SystemStore](../index.md) / SystemStore

# Class: SystemStore

Defined in: stores/SystemStore.d.ts:18

A store for system information, generally meta-info relating not to the project, but to the client, gateway,
modules, etc.

## Constructors

### Constructor

> **new SystemStore**(`client`): `SystemStore`

Defined in: stores/SystemStore.d.ts:27

#### Parameters

##### client

[`ClientStore`](../../ClientStore/classes/ClientStore.md)

#### Returns

`SystemStore`

## Properties

### client

> **client**: [`ClientStore`](../../ClientStore/classes/ClientStore.md)

Defined in: stores/SystemStore.d.ts:19

***

### gateway

> **gateway**: [`GatewayInfo`](../../../perspective-client/interfaces/GatewayInfo.md)

Defined in: stores/SystemStore.d.ts:20

***

### isLegacyLicense

> **isLegacyLicense**: `boolean`

Defined in: stores/SystemStore.d.ts:26

***

### licenseNotPermittedReason

> **licenseNotPermittedReason**: [`NotLicensedReason`](../enumerations/NotLicensedReason.md)

Defined in: stores/SystemStore.d.ts:25

***

### modules

> **modules**: [`ModuleInfo`](../../../perspective-client/interfaces/ModuleInfo.md)[]

Defined in: stores/SystemStore.d.ts:21

***

### trial

> **trial**: `boolean`

Defined in: stores/SystemStore.d.ts:22

***

### trialRemaining

> **trialRemaining**: `number`

Defined in: stores/SystemStore.d.ts:23

## Accessors

### isIndependent

#### Get Signature

> **get** **isIndependent**(): `boolean`

Defined in: stores/SystemStore.d.ts:33

returns true if the gateway is not part of a redundant pair.  Defaults to independent

##### Returns

`boolean`

***

### isTrial

#### Get Signature

> **get** **isTrial**(): `boolean`

Defined in: stores/SystemStore.d.ts:29

##### Returns

`boolean`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: stores/SystemStore.d.ts:28

##### Returns

`string`

## Methods

### updateGatewayInfo()

> **updateGatewayInfo**(`gatewayInfo`): `void`

Defined in: stores/SystemStore.d.ts:39

method assigned to the 'systemStore/gateway-info' message handling protocol.  A json object with the shape
matching GatewayInfo should be returned when gateway details change.

#### Parameters

##### gatewayInfo

[`GatewayInfo`](../../../perspective-client/interfaces/GatewayInfo.md)

#### Returns

`void`

***

### updateLicenseState()

> **updateLicenseState**(`license`): `void`

Defined in: stores/SystemStore.d.ts:47

#### Parameters

##### license

[`LicenseState`](../../../perspective-client/interfaces/LicenseState.md)

#### Returns

`void`

***

### updateModuleInfo()

> **updateModuleInfo**(`modules`): `void`

Defined in: stores/SystemStore.d.ts:46

Updates the array of module infos, which is used to present module details in the client application.  Will
replace the existing array.  This method is assigned to the 'systemStore/module-info' handler.

#### Parameters

##### modules

[`ModuleInfo`](../../../perspective-client/interfaces/ModuleInfo.md)[]

an array containing objects with information for each module.

#### Returns

`void`
