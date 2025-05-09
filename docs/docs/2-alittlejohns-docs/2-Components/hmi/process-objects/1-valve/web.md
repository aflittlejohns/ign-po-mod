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

