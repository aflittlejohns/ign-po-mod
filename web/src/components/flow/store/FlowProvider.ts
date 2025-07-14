import { create} from 'zustand';
import {immer } from 'zustand/middleware/immer';
import { createValveFlowNode } from '../utils';

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
		createValveFlowNode: createValveFlowNode
	})
))
