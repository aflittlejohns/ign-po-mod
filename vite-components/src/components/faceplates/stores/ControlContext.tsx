import React, { createContext,useReducer, useContext } from "react";
import controlsReducer, { initialControlState, Store } from "../controlReducer";
import { Commands_LowerSeat, Commands_Main, Commands_UpperSeat } from "../types/commands";

export interface ControlContextProps {
  state: Store;
  dispatch: React.Dispatch<Commands_Main | Commands_UpperSeat | Commands_LowerSeat>;
}

const ControlContext = createContext<ControlContextProps | undefined>(undefined);
type ControlProviderProps = {
  children: React.ReactNode;
};

export const ControlProvider: React.FC<ControlProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(controlsReducer, initialControlState);

  return (
    <ControlContext.Provider value={{ state, dispatch  }}>
      {children}
    </ControlContext.Provider>
  );
};

export const useControlContext = (): ControlContextProps => {
  const context = useContext(ControlContext);
  if (context === undefined) {
    throw new Error("useControlContext must be used within a ControlProvider");
  }
  return context;
};

// export const ThemeContext = createContext('light')

export const controlItem = {
      main: {
        label: "Main",
        auto: true,
        onActionPerformed__auto: () => console.log("Auto"),
        manual: false,
        onActionPerformed__manual: () => console.log("Manual"),
        off: false,
        onActionPerformed__off: () => console.log("Off"),
        on: false,
        onActionPerformed__on: () => console.log("On"),
      },
      upperSeat: {
        label: "Upper Seat",
        off: false,
        onActionPerformed__off: () => console.log("UpperSeat Off"),
        on: false,
        onActionPerformed__on: () => console.log("UpperSeat On"),
      },
      lowerSeat: {
        label: "Lower Seat",
        off: false,
        onActionPerformed__off: () => console.log("LowerSeat Off"),
        on: false,
        onActionPerformed__on: () => console.log("LowerSeat On"),
      },
    };
export const ctrlContext = createContext(controlItem);
