
export type STD_Valve_Ctrl = number
export type STD_Valve_Status = number
export type STD_Valve_Par = {
	Configuration: number;
	MainOpCounter?: number;
	MainFaultCounter?: number;
	MainDynActAlaramDelay: number;
	MainDynDeactAlarmDelay: number;
	MainStaticAlaramDelay: number;
	UpperSeatActAlaramDelay: number;
	UpperSeatDeactAlarmDelay: number;
	LowerSeatActAlaramDelay: number;
	LowerSeatDeactAlarmDelay: number;
	UpperSeatOpCounter?: number;
	UpperSeatFaultCount?: number;
	UpperSeatDynActAlaramDelay: number;
	UpperSeatDynDeactAlarmDelay: number;
	UpperSeatStaticAlaramDelay: number;
	LowerSeatOpCounter?: number;
	LowerSeatFaultCount?: number;
	LowerSeatDynActAlaramDelay: number;
	LowerSeatDynDeactAlarmDelay: number;
	LowerSeatStaticAlaramDelay: number;
}
