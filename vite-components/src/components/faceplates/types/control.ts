export interface ControlItem {
	security?:{
		enabled: boolean;
		accesslevel: number;
		userNames: string[];
		userRoles: string[];},
	interlocks?:{
		main: boolean[];
		upperSeat: boolean[];
		lowerSeat: boolean[];},
	main?:{
	label: string;
	auto: boolean;
	onActionPerformed__auto: () => void;
	manual: boolean;
	onActionPerformed__manual: () => void;
	off: boolean;
	onActionPerformed__on: () => void;
	on: boolean;
	onActionPerformed__off: () => void;},
	upperSeat?:{
	label: string;
	off: boolean;
	on: boolean;
	onActionPerformed__off: React.MouseEventHandler ;
	onActionPerformed__on: React.MouseEventHandler ;}
	lowerSeat?:{
	label: string;
	off: boolean;
	on: boolean;
	onActionPerformed__off: React.MouseEventHandler ;
	onActionPerformed__on: React.MouseEventHandler ;}
}

export interface ControlProps {
	controlItem: ControlItem;
}
