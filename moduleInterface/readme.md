
# Interfacing a React Web Component Palette with Ignition 8.1

## Document Purpose

The of this document is to serve as a quick reference for developing a HMI/SCADA Component palette module to extend the Ignition Perspective Module.

## Common Scope
#### Required to update the above file.
- Component Class Name - for example `Valve`
- COMPONENT_ID - for example "hmi.processObjects.valve"
- COMPONENT_NAME - for example "Process Valve"
- COMPONENT_DESCRIPTION - for example "A Configurable Process Valve"
- COMPONENT_DEFAULT_NAME - for example "process valve"
- Props Schema. Create a json file



## Designer Scope

## Gateway Scope

### TODO's

In File `NamedComponentLibraryHook.java`
#### Required to update the above file.
- Package Name i e.g "pf.aLittlejohns.perspective"
- Module Name e.g "Hmi"
- Component names- e.g. "Valve", "Motor"

- [ ]  1. Update Gatewayhook class name to match package name
- [ ]  2. Provide the class name for the new ComponentLibrary logger
- [ ]  3. Register each new component DESCRIPTOR in the startup method
- [ ]  4. Remove each new component in the shutdown method.


### Explaination of Tasks
#### Define a static logger for the Component Palette Class

The `LifComponentLibraryGatewayHook` class uses the `LoggerEx` utility from the Ignition SDK. Here's an explanation of the selected line and its purpose:

```java
private static final LoggerEx log = LoggerEx.newBuilder().build(LifComponentLibraryGatewayHook.class);
```

### Explanation:
1. **`LoggerEx`**:
   - `LoggerEx` is a utility class provided by the Ignition SDK for logging messages. It is commonly used in Ignition modules to log information, warnings, errors, and debug messages.

2. **`newBuilder()`**:
   - This method creates a new builder instance for configuring the logger. The builder allows you to customize the logger's behavior, such as its name, format, or other properties.

3. **`build(Class<?> clazz)`**:
   - The build method finalizes the logger configuration and creates a logger instance. The class passed as an argument (`LifComponentLibraryGatewayHook.class`) is used as the logger's name or context, making it easier to identify which class generated a particular log message.

4. **`private static final`**:
   - The logger is declared as `private` because it is only intended to be used within the `LifComponentLibraryGatewayHook` class.
   - It is `static` because logging is not tied to a specific instance of the class; it is shared across all instances.
   - It is `final` to ensure that the logger reference cannot be reassigned after initialization.

### Purpose:

The logger is used throughout the class to log important events, such as errors, warnings, or informational messages. For example:

- **Error Logging**:
  ```java
  log.error("Reference to component registry not found, Lifton UI Components will fail to function!");
  ```
  This logs an error message if the `componentRegistry` is null during startup.

- **Info Logging**:
  ```java
  log.info("Shutting down Lifton UI module and removing registered components.");
  ```
  This logs an informational message when the module is shutting down.

- **Warning Logging**:
  ```java
  log.warn("Component registry was null, could not unregister Lifton UI Components.");
  ```
  This logs a warning if the `componentRegistry` is null during shutdown.

### Summary:

The `LoggerEx` instance (`log`) is a utility for logging messages in the `LifComponentLibraryGatewayHook` class. It helps track the module's lifecycle events, such as startup, shutdown, and errors, making it easier to debug and monitor the module's behavior in the Ignition Gateway.


## Task 2 - Register Components

The selected code snippet is part of the `startup` method in the `LifComponentLibraryGatewayHook` class. It is responsible for registering components with the `ComponentRegistry` during the module's startup process in the Ignition Gateway.

### Code Explanation

```java
if (this.componentRegistry != null) {
    this.componentRegistry.registerComponent(ValveFaceplate.DESCRIPTOR);
    this.componentRegistry.registerComponent(Valve.DESCRIPTOR);
} else {
    log.error("Reference to component registry not found, Lifton UI Components will fail to function!");
}
```

1. **`this.componentRegistry != null`**:
   - This checks whether the `componentRegistry` object is initialized. The `componentRegistry` is retrieved from the `PerspectiveContext` earlier in the `startup` method.
   - If it is `null`, it means the `PerspectiveContext` failed to provide a valid `ComponentRegistry`.

2. **`registerComponent`**:
   - If the `componentRegistry` is not `null`, the `registerComponent` method is called to register components with the registry.
   - Two components are being registered here:
     - `ValveFaceplate.DESCRIPTOR`: This is likely a descriptor object that defines the metadata and behavior of the `ValveFaceplate` component.
     - `Valve.DESCRIPTOR`: Similarly, this is a descriptor for the `Valve` component.

3. **Error Logging**:
   - If the `componentRegistry` is `null`, an error is logged using the `LoggerEx` instance (`log`).
   - The error message indicates that the `ComponentRegistry` is missing, which will prevent the Lifton UI components from functioning properly.

### Purpose

This code ensures that the `ValveFaceplate` and `Valve` components are registered with the `ComponentRegistry` during the module's startup. These components are likely custom Perspective components that need to be available for use in the Ignition Designer and runtime.

If the `ComponentRegistry` is not available, the module logs an error, as this is a critical failure that will prevent the components from being used.

### Example Scenario

- **Successful Registration**:
  - If the `ComponentRegistry` is available, the `ValveFaceplate` and `Valve` components are registered successfully. These components can then be used in Perspective views.

- **Failure Case**:
  - If the `ComponentRegistry` is `null`, the error message is logged:
    ```
    Reference to component registry not found, Lifton UI Components will fail to function!
    ```
  - This indicates a problem with the `PerspectiveContext` or the module's initialization process.

### Summary

This snippet is a critical part of the module's startup process. It ensures that custom components (`ValveFaceplate` and `Valve`) are registered with the `ComponentRegistry`. If the registry is unavailable, an error is logged to help diagnose the issue. This ensures that the module's components are properly integrated into the Ignition Gateway.  - This indicates a problem with the `PerspectiveContext` or the module's initialization process.


