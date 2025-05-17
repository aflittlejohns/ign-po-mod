import type {ValveState} from '../../../../web/src/api/types'
export type DevEnvCompoundConextType ={
	valveState: ValveState;
	reducer: (dispatch:string)=>void;
}

export type EditDevEnvCompoundProps ={
	valveState: ValveState;
	reducer: (dispatch:string)=>void;
	children: React.ReactNode;
}
