import React, { createContext, useReducer, useContext, ReactNode } from "react";

interface GenericState<T> {
  // Define your state properties here
  [key: string]: T;
}

interface GenericAction {
  type: string;
  payload?: any;
}

interface GenericContextProps<T> {
  state: GenericState<T>;
dispatch: React.Dispatch<GenericAction>;
}

const GenericContext = createContext<GenericContextProps<any> | undefined>(undefined);
// const state: GenericState<any> = {}; // Initial state
const genericReducer = (state: GenericState<any>, action: GenericAction): GenericState<any> => {
  switch (action.type) {
    // Define your reducer cases here
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
