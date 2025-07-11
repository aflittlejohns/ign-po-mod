import { useImmerReducer } from "use-immer";

// Define the state shape
interface FlowProviderState {
    tagpaths: string[];
    nodes: any[];
    // add other state properties as needed
}

// Define action types
type FlowProviderAction =
    | { type: 'SET_TAGPATH'; payload: { index: number; tagpath: string } }
    | { type: 'ADD_NODE'; payload: any }
    | { type: 'REMOVE_NODE'; payload: { id: string } };

// Define the reducer function
function flowProviderReducer(draft: FlowProviderState, action: FlowProviderAction) {
    switch (action.type) {
        case 'SET_TAGPATH':
            draft.tagpaths[action.payload.index] = action.payload.tagpath;
            break;
        case 'ADD_NODE':
            draft.nodes.push(action.payload);
            break;
        case 'REMOVE_NODE':
            draft.nodes = draft.nodes.filter(node => node.id !== action.payload.id);
            break;
        default:
            break;
    }
}

// Define action creators
type UseFlowProviderActions = {
    setTagpath: (index: number, newTagpath: string) => void;
    addNode: (node: any) => void;
    removeNode: (id: string) => void;
    // add more handlers as required
};

// Create the hook
function useFlowProviderReducer(initialState: FlowProviderState): [FlowProviderState, UseFlowProviderActions] {
    const [state, dispatch] = useImmerReducer(flowProviderReducer, initialState);

    const actions: UseFlowProviderActions = {
        setTagpath: (index: number, newTagpath: string) => {
            dispatch({ type: 'SET_TAGPATH', payload: { index, tagpath: newTagpath } });
        },
        addNode: (node: any) => {
            dispatch({ type: 'ADD_NODE', payload: node });
        },
        removeNode: (id: string) => {
            dispatch({ type: 'REMOVE_NODE', payload: { id } });
        },
    };

    return [state, actions];
}

export { useFlowProviderReducer, type FlowProviderState, type UseFlowProviderActions };
