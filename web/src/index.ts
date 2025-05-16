import { ComponentMeta, ComponentRegistry } from '@inductiveautomation/perspective-client';
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
import { Valve, ValveMeta } from './components/Valve';


// Export components for external reference
export {  Valve };

// Import component styles
import './index.css';

// Array of component metadata
const components: Array<ComponentMeta> = [ new ValveMeta()];

// Register each component with the Perspective ComponentRegistry
components.forEach((c: ComponentMeta) => ComponentRegistry.register(c));
