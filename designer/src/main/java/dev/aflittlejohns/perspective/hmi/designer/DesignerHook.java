
package dev.aflittlejohns.perspective.hmi.designer;

import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.designer.model.AbstractDesignerModuleHook;
import com.inductiveautomation.ignition.designer.model.DesignerContext;
import com.inductiveautomation.perspective.designer.DesignerComponentRegistry;
import com.inductiveautomation.perspective.designer.api.PerspectiveDesignerInterface;

import dev.aflittlejohns.perspective.hmi.designer.ComponentUtilities;
import dev.aflittlejohns.perspective.hmi.designer.IconUtilities;
import dev.aflittlejohns.perspective.hmi.common.Constants;

import dev.aflittlejohns.perspective.hmi.common.components.level4.process_objects.Valve;
import dev.aflittlejohns.perspective.hmi.common.components.level4.process_objects.Pump;
import dev.aflittlejohns.perspective.hmi.common.components.level4.process_objects.HeatExchanger;
import dev.aflittlejohns.perspective.hmi.common.components.level4.input.ParameterList;
import dev.aflittlejohns.perspective.hmi.common.components.level4.input.CommandValveMp;
import dev.aflittlejohns.perspective.hmi.common.components.level4.display.StatusValveMp;



/**
 * Designer module hook for the HMI Component Library.
 * This class is responsible for initializing and managing the module's
 * lifecycle in the Ignition Designer.
 */
public class DesignerHook extends AbstractDesignerModuleHook {
 private static final LoggerEx log = LoggerEx.newBuilder().build(DesignerHook.class);

 private DesignerContext context;
 private DesignerComponentRegistry registry;

 /**
  * Initializes the module in the Designer scope.
  *
  * @param context         The DesignerContext for this module.
  * @param activationState The current license state.
  */
 @Override
 public void startup(DesignerContext context, LicenseState activationState) {
  log.trace("Starting up HMI Component Library Designer Hook");
  this.context = context;
  init();
 }

 /**
  * Initializes the component registry and registers components.
  */
 private void init() {

  PerspectiveDesignerInterface pdi = PerspectiveDesignerInterface.get(context);
  registry = pdi.getDesignerComponentRegistry();
//#TODO: Change the following to match the new components
  // Each component must be registered, with an optional icon, to the component registry.
  ComponentUtilities.registerComponentWithIcon(registry, Valve.DESCRIPTOR, "/images/process-objects/valve-mp/valve-mp-icon.svg");
  ComponentUtilities.registerComponentWithIcon(registry, Pump.DESCRIPTOR, "/images/process-objects/pump/base-icon.svg");
  ComponentUtilities.registerComponentWithIcon(registry, HeatExchanger.DESCRIPTOR, "/images/process-objects/heat-exchanger/base-icon.svg");
  ComponentUtilities.registerComponentWithIcon(registry, ParameterList.DESCRIPTOR, "/images/input/parameter-list/component.icon.svg");
  ComponentUtilities.registerComponentWithIcon(registry, CommandValveMp.DESCRIPTOR, "/images/input/command-valve-mp/component.icon.svg");
  ComponentUtilities.registerComponentWithIcon(registry, StatusValveMp.DESCRIPTOR, "/images/display/status-valve-mp/component.icon.svg");
  }

 /**
  * Shuts down the module and unregisters components.
  */
 @Override
 public void shutdown() {
  log.trace("Shutting down HMI Component Library Designer Hook");
  removeComponents();
 }

 /**
  * Removes registered components from the registry.
  */
 private void removeComponents() {
  registry.removeComponent(Valve.COMPONENT_ID);
  registry.removeComponent(Pump.COMPONENT_ID);
  registry.removeComponent(HeatExchanger.COMPONENT_ID);
  registry.removeComponent(ParameterList.COMPONENT_ID);
  registry.removeComponent(CommandValveMp.COMPONENT_ID);
  registry.removeComponent(StatusValveMp.COMPONENT_ID);
 }
}



