import type { UseValveReducer } from '../../api/types';

export type DevEnvCompoundContextType ={
	useReducer: UseValveReducer
}

export type EditDevEnvCompoundProps ={
	useReducer: UseValveReducer
	children: React.ReactNode;
}
