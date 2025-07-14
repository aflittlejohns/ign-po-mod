import { create} from 'zustand';
import {immer } from 'zustand/middleware/immer';
import { createValveNodeInstance } from '../utils';

export type FlowProviderStore = {
	tagpaths:[];
	addTagpath: ()=> void;
	removeTagpath: ()=> void;
	getTagpath: ()=> string;

}

export const useFlowProviderStore = create<FlowProviderStore>()(
	immer((set) => ({
		tagpaths:[],
		addTagpath: ()=> {},
		removeTagpath: ()=> {},
		getTagpath: ()=> "",
		createValveNodeInstance: createValveNodeInstance
	})
))
