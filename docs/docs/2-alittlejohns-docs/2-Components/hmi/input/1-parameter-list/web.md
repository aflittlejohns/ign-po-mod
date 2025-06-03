---
title: 'Web Scope'
---
:::tip 📝
The web scope contains the actual React component implementation, TypeScript definitions, and styling. This is where we define how our component looks and behaves in the browser.
:::
:::warning NOT UPDATED FOR ParameterList Component
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

### Example of a React Component writing back to Ignition PropertyTree.
```ts
export interface CheckboxProps {
    text?: string;
    checked?: boolean;
}

export class Checkbox extends Component<ComponentProps<CheckboxProps>, any> {

    handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.store.props.write('checked', event.target.checked);
    }

    render() {
        const { props: { text, checked }, emit } = this.props;
        return (
            <div {...emit()}>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={this.handleCheckboxChange}
                    />
                    {text}
                </label>
            </div>
        );
    }
}
``
