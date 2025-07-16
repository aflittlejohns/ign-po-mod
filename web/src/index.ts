import { ComponentMeta, ComponentRegistry } from '@inductiveautomation/perspective-client';
import { Valve, ValveMeta } from './components/Valve';
import { Pump, PumpMeta } from './components/Pump';
import { HeatExchanger, HeatExchangerMeta } from './components/HeatExchanger';
import { ParameterListComponent, ParameterListComponentMeta} from './components/ParameterList'
import { CommandValveMp, CommandValveMpMeta } from './components/CommandValveMp';
import { StatusValveMp, StatusValveMpMeta } from './components/StatusValveMp';
import { FlowProvider, FlowProviderMeta } from './components/FlowProvider';
import { JsonViewComponent, JsonViewComponentMeta } from './components/perspective/JsonView';

// Export components for external reference
export {
	Valve ,
	Pump ,
	HeatExchanger ,
	ParameterListComponent,
	CommandValveMp,
	StatusValveMp,
	FlowProvider,
	JsonViewComponent
	};

// Import component styles
import './index.css';

// Array of component metadata
const components: Array<ComponentMeta> = [
	new ValveMeta(),
	new PumpMeta(),
	new HeatExchangerMeta(),
	new ParameterListComponentMeta(),
	new CommandValveMpMeta(),
	new StatusValveMpMeta(),
	new FlowProviderMeta(),
	new JsonViewComponentMeta(),

];

// Register each component with the Perspective ComponentRegistry
components.forEach((c: ComponentMeta) => ComponentRegistry.register(c));
// Add this after registration
setTimeout(() => {
  const registered = ComponentRegistry.getMeta('hmi.component.JsonView');
  console.log('Component registered:', !!registered);
}, 1000);
