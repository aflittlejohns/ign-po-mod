---
title: 'Web Scope'
---
:::tip 📝
The web scope contains the actual React component implementation, TypeScript definitions, and styling. This is where we define how our component looks and behaves in the browser.
:::

## Project Structure

```txt
ign-po-mod/
├── common/.../
|
├── designer/.../
|
├── gateway/.../
|  
└── web/
    └── src/
        ├── api/
        |   ├── hooks.ts **custom hooks**
        |   └── initialise.ts **initial states for component props**
        ├── assets
        ├── components/
        |   ├── process-objects
        |   |   ├── valve/
        |   |   |   ├── ValveFC.tsx 
        |   |   |   └── valve.module.css
        |   |   └── Valve.tsx **Wrapper Class**
        |   |   
        |   ├── display/
        |   └── input/
        |
        └── utils/
            └── createContext.tsx
```

## React Component Design Pattern Guidelines

It is intended to;

- Employ the Compound Component pattern when creating React components
- Employ  a wrapper Class for each functional component, thereby simplifing the interface to java and enabling the use of vite in development of React components.

```ts
import React, { useMemo } from "react";
import Item from "./valve-process/item";
import { ItemNameEnum } from "./valve-process/types";
import { v4 as uuidv4 } from "uuid";

export const COMPONENT_TYPE = "hmi.level4.process_objects.Valve";

type ValveStatus = {
    Alarm?: boolean;
    ActFB?: boolean;
    DeActFB?: boolean;
    ActivatedConfig?: number;
    DeactivatedConfig?: number;
    TagName?: string;
    Manual?: boolean;
    Masked?: boolean;
    Changing?: boolean;
}

export type ValveProps = {
    ValveStatus?: ValveStatus;
    handleClick?: () => void;
    position?: { x: boolean };
    eventsEnabled?: boolean;
    componentEvents?: {
        fireComponentEvent: (eventName: string, eventData: any) => void;
    };
}

const bit = (n: number, i: number): number => {
    return (n >> i) & 1;
};

const ValveFunctional: React.FC<ValveProps> = (props) => {
    const { ValveStatus, position, eventsEnabled, componentEvents } = props;

    // Derived state for item names
    const itemNames = useMemo(() => {
        return Object.keys(ItemNameEnum).map((itemName) => ({
            key: uuidv4(),
            name: itemName,
            value: ItemNameEnum[itemName as keyof typeof ItemNameEnum],
            index: Object.keys(ItemNameEnum).indexOf(itemName),
        }));
    }, []);

    // Derived state for inCoord
    const inCoord = position?.x ?? false;

    // Function to calculate item class name
    const getItemClassName = (index: number, valveStatus?: ValveStatus): string => {
        let className = "";
        const ActivatedConfigValue = valveStatus?.ActivatedConfig ?? 0;
        const DeactivatedConfigValue = valveStatus?.DeactivatedConfig ?? 0;

        if (index < 12) {
            if (
                (bit(ActivatedConfigValue, index) && valveStatus?.ActFB) ||
                (bit(DeactivatedConfigValue, index) && valveStatus?.DeActFB)
            ) {
                className = "show item";
            } else {
                className = "hide item";
            }
        } else if (index === 14) {
            className = "show";
        } else if (index === 12 || index === 13) {
            if (
                bit(ActivatedConfigValue, index) ||
                bit(DeactivatedConfigValue, index)
            ) {
                className = "show";
            } else {
                className = "hide";
            }
        } else if (index === 15 || index === 16) {
            if (bit(ActivatedConfigValue, 12) || bit(DeactivatedConfigValue, 12)) {
                className = "show";
            } else {
                className = "hide";
            }
        } else if (index === 17 || index === 18) {
            if (bit(ActivatedConfigValue, 13) || bit(DeactivatedConfigValue, 13)) {
                className = "show";
            } else {
                className = "hide";
            }
        } else {
            className = "hide";
        }

        return className;
    };

    // Event handler for button click
    const onActionPerformed = () => {
        if (!eventsEnabled) {
            console.log("Valve is disabled in the design-scope");
            return;
        }
        console.log("Valve clicked!");
        componentEvents?.fireComponentEvent("onActionPerformed", {});
    };

    // Render logic
    return (
        <div
            className={`lif-symbolComponent ${
                inCoord ? "lif-valve-component" : "lif-symbolComponent__column"
            }`}
            data-component={COMPONENT_TYPE}
        >
            <div className={inCoord ? "" : "lif-symbolComponent__row"}>
                <div className="lif-valve-component">
                    {itemNames.map(({ value, index, key }) => (
                        <Item
                            itemClassName={
                                value + " " + getItemClassName(index, ValveStatus)
                            }
                            handleClick={onActionPerformed}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ValveFunctional;
``