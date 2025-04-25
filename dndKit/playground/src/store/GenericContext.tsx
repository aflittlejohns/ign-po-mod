import React, { createContext, useReducer, useContext, ReactNode } from "react";

interface GenericState<T extends object> {
  // Define your state properties here
  [key: string]: T;
}

interface GenericAction {
  type: string;
  payload?: any;
}

interface GenericContextProps<T extends object> {
  state: GenericState<T>;
dispatch: React.Dispatch<GenericAction>;
}

const GenericContext = createContext<GenericContextProps<any> | undefined>(undefined);

const genericReducer = <T extends object> (state: GenericState<T>, action: GenericAction): GenericState<T> => {
  switch (action.type) {
    // Define your reducer cases here
	case "UPDATE":
		{
			return {
				...state,
				[action.payload?.componentId]: action.payload?.data
		};}

    default:
      return state;
  }
};

export const GenericProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(genericReducer, {});

  return (
    <GenericContext.Provider value={{ state, dispatch }}>
      {children}
    </GenericContext.Provider>
  );
};

export const useGenericContext = () => {
  const context = useContext(GenericContext);
  if (context === undefined) {
    throw new Error("useGenericContext must be used within a GenericProvider");
  }
  return context;
};
