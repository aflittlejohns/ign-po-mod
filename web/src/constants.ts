import type { ElementVariantList } from "./api/utils";
import { HxModes } from "./ar-types/processObjects/heatExchangers/hx-types";
import { getHxModeClassNames } from "./ar-utils/processObjects/heatExchangers/hx-utils";

/**
 * HMI Component Module Constants
 */
export const IA_SYMBOL_COMPONENT_COLUMN =
	"ia_symbolComponent ia_symbolComponent__column";
export const IA_SYMBOL_COMPONENT_ROW = "ia_symbolComponent__row";
export const IA_SYMBOL_COMPONENT_WRAPPER = "ia_symbolComponent__wrapper";
export const HMI_COMPONENT_CLASS = "hmi-component";

export const VALVE_COMPONENT_TYPE = "hmi.process_objects.Valve";
export const PUMP_COMPONENT_TYPE = "hmi.process_objects.Pump";
export const STATUS_COMPONENT_TYPE = "hmi.display.StatusValveMp";
export const PARAMETER_LIST_COMPONENT_TYPE = "hmi.input.ParameterList";
export const COMMAND_VALVE_MP_COMPONENT_TYPE = "hmi.input.CommandValveMp";
export const HX_COMPONENT_TYPE = "hmi.process_objects.HeatExchanger";


// Component Element Construction

export const hxElements: ElementVariantList = [
{ baseClass: getHxModeClassNames("plate",HxModes.heating) },
{ statusKey: {actFB: {trueString:"activated"}} },
{ statusKey: {deActFB: {trueString:"deactivated"}} },
{ statusKey: {alarm: {trueString:"alarm"}} },
]
