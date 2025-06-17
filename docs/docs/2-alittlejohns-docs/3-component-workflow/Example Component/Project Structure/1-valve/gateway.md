---
title: 'Getway Scope'
---

## Gateway Scope Implementation

:::tip 📝
The gateway scope handles server-side component registration and resource management. This is where your component becomes available to the Perspective module and where its resources are made accessible to clients.
:::

## Project Structure

```txt
ign-po-mod/
├── common/.../
|
├── designer/.../
|
├── gateway/
|   └── src/main/java/...package.../
|       └── GatewayHook.java
└── web/.../

```

## Create Gateway Hook

```java
package dev.aflittlejohns.perspective.hmi.gateway;

import java.util.Optional;

import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.model.AbstractGatewayModuleHook;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.inductiveautomation.perspective.common.api.ComponentRegistry;
import com.inductiveautomation.perspective.gateway.api.PerspectiveContext;


import dev.aflittlejohns.perspective.hmi.common.Constants;
import dev.aflittlejohns.perspective.hmi.common.components.level4.process-objects.Valve;;

/**
 * Gateway module hook for the Component Library.
 * This class is responsible for initializing and managing the module's
 * lifecycle in the Ignition Gateway.
 */
 // #TODO Task 1 Update the package name
public class GatewayHook extends AbstractGatewayModuleHook {
 // #TODO Update Logger name to match your module
 private static final LoggerEx log = LoggerEx.newBuilder().build(Constants.MODULE_ID, GatewayHook.class);

 private GatewayContext gatewayContext;
 private PerspectiveContext perspectiveContext;
 private ComponentRegistry componentRegistry;

 /**
  * Called before startup. This is where we can add extension points and update
  * persistent records and schemas.
  *
  * @param context The GatewayContext for this module.
  */
 @Override
 public void setup(GatewayContext context) {
  this.gatewayContext = context;
 }

 /**
  * Initializes the module. Called once during startup.
  *
  * @param activationState The current license state.
  */
 @Override
 public void startup(LicenseState activationState) {
  this.perspectiveContext = PerspectiveContext.get(this.gatewayContext);
  this.componentRegistry = this.perspectiveContext.getComponentRegistry();

  if (this.componentRegistry != null) {
   // #TODO Task 3 Update component names
   this.componentRegistry.registerComponent(Valve.DESCRIPTOR);
  } else {
   log.error("Reference to component registry not found, " + Constants.MODULE_ID + " will fail to function!");
  }
 }

 /**
  * Shuts down the module and unregisters components.
  */
 @Override
 public void shutdown() {
  log.info("Shutting down " + Constants.MODULE_ID + " module and removing registered components.");
  if (this.componentRegistry != null) {
   // #TODO Task 4 Update component names
   this.componentRegistry.removeComponent(Valve.COMPONENT_ID);
  } else {
   log.warn("Component registry was null, could not unregister " + Constants.MODULE_ID + ".");
  }
 }

 /**
  * @return The path to the mounted resource folder.
  */
 @Override
 public Optional<String> getMountedResourceFolder() {
  return Optional.of("mounted");
 }

 /**
  * @return The alias for the module's mount path.
  */
 @Override
 public Optional<String> getMountPathAlias() {
  return Optional.of(LifConstants.MODULE_URL_ALIAS);
 }

 /**
  * @return true if this is a free module (doesn't require licensing).
  */
 @Override
 public boolean isFreeModule() {
  return true;
 }
}

```
