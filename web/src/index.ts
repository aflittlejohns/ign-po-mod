import { ComponentMeta, ComponentRegistry } from '@inductiveautomation/perspective-client';
//import { Button, ButtonMeta } from './components/Button';
//import { Valve, ValveMeta } from "./components/Valve";
import { Valve, ValveMeta } from './components/Valve';
import { ParameterListComponent, ParameterListComponentMeta} from './components/ParameterList'
import { CommandValveMp, CommandValveMpMeta } from './components/CommandValveMp';
import { StatusValveMp, StatusValveMpMeta } from './components/StatusValveMp';

// Export components for external reference
export {
	Valve ,
	ParameterListComponent,
	CommandValveMp,
	StatusValveMp
	};

// Import component styles
import './index.css';

// Array of component metadata
const components: Array<ComponentMeta> = [
	new ValveMeta(),
	new ParameterListComponentMeta(),
	new CommandValveMpMeta(),
	new StatusValveMpMeta(),

];

// Register each component with the Perspective ComponentRegistry
components.forEach((c: ComponentMeta) => ComponentRegistry.register(c));
