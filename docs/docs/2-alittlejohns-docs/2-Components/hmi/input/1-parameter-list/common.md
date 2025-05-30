---
title: 'Common Scope'
---

## 1. Project Structure

:::warning NOT UPDATED FOR ParameterList Component

:::tip
The common scope establishes the core structure of our components, defining its properties, events, and component descriptor's. Because we are building the package dev.aflittlejohns.perspective.hmi, we'll place our files in the common directory under src/main/java and src/main/resources.

```
ign-po-mod/
├── common/
│   ├── src/main/java/...package.../common/
|   |   ├── components/
│   │   |    ├── level2/
│   │   |    ├── level3/
│   │   |    └── level4/
|   |   |        ├── process-objects/
|   |   |        |    ├── Valve.java
|   |   |        |    └── Motor.java
|   |   |        ├── input/
|   |   |        └── display/
|   |   ├── utilities/
|   |   |   ├── ComponentUtilities.java
|   |   |   ├── DelegatingComponentDescriptor.java
|   |   |   └── ImageUtilities.java
|   |   ├── Constants.java
|   |   └── Components.java
│   └── src/main/resources/
│       ├── props/
|       ├── images/
│       └── events/
|
├── designer/
|   ├── src/main/java/...package.../
|   |   ├── DesignerHook.java
|   |   ├── IconUtilities.java
|   |   └── ComponentUtilities.java
|   └── src/main/resources/
|       └── images/
|
├── gateway/
|   └── src/main/java/...package.../
|       └── GatewayHook.java
|
└── web/
    └── src/
        ├── assets
        ├── components/
            ├── process-objects
            |    ├── valve/
            |    ├── Valve.tsx
            |    └── valve.css
            ├── display/
            └── input/
```

Anything below the common directory can be changed and modified to suit your needs. We've chosen a structure that works well for us, but you can adjust it as needed.
:::

## 2. Define Component Constants

:::tip Component Naming
`{hmi}.{category}.{component}`
:::

:::warning NOT UPDATED FOR ParameterList Component
Valve Class Constants:

```java
    // Unique ID of the component, matching the ID in the tsx implementation
    public static final String COMPONENT_ID = "hmi.process-object.valve";
   // Component name displayed in the palette
    private static final String COMPONENT_NAME = "Valve";
    // Description of the component that is displayed in the palette as a tooltip
    private static final String COMPONENT_DESCRIPTION =
        "A configurable process valve component";
    // Default name for the component instance in a view
    private static final String COMPONENT_DEFAULT_NAME = "valve";
```

## 3. Create Props Schema

```java ign-po-mod/common/src/main/resources/props/hmi/process-objects/valve.props.json
{
 "type": "object",
 "properties": {
  "ValveStatus": {
   "type": "object",
   "properties": {
    "TagName": {
     "type": "string",
     "default": "\"\"",
     "description": "Name of the valve"
    },
    "ActivatedConfig": {
     "type": "number",
     "default": 12,
     "description": "Activated configuration"
    },
    "DeactivatedConfig": {
     "type": "number",
     "default": 12,
     "description": "De-activated configuration"
    },
    "Alarm": {
     "type": "boolean",
     "default": false,
     "description": "Alarm status"
    },
    "ActFB": {
     "type": "boolean",
     "default": false,
     "description": "Activated feedback"
    },
    "DeActFB": {
     "type": "boolean",
     "default": false,
     "description": "De-activated feedback"
    },
    "Manual": {
     "type": "boolean",
     "default": false,
     "description": "Manual mode"
    },
    "Masked": {
     "type": "boolean",
     "default": false,
     "description": "Masked"
    },
    "Changing": {
     "type": "boolean",
     "default": false,
     "description": "Changing"
    }
   }
  },
  "style": {
   "$ref": "urn:ignition-schema:schemas/style-properties.schema.json",
   "default": {
    "classes": ""
   }
  }
 }
}
```

## 4. Create Events Schema

```java ign-po-mod/common/src/main/resources/events/hmi/process-objects/valve/onActionPerformed.json
{
 "name": "onActionPerformed",
 "description": "This event is fired when the 'action' of the component occurs.",
 "documentationUrl": "https://links.inductiveautomation.com/81-action-performed-event",
 "schema": {
  "type": "object"
 }
}
```

## 5. Create the Component Class

```java
package dev.aflittlejohns.perspective.hmi.common.components.level4.process-objects;

import java.util.List;
import com.inductiveautomation.perspective.common.api.ComponentDescriptor;
import com.inductiveautomation.perspective.common.api.ComponentDescriptorImpl;
import dev.aflittlejohns.perspective.hmi.common.Constants;
import dev.aflittlejohns.perspective.hmi.common.Components;
import dev.aflittlejohns.perspective.hmi.common.utilities.ComponentUtilities;

public class Valve {
    // Unique identifier for the component
    public static final String COMPONENT_ID = "hmi.process-object.valve";

    // Component name displayed in the palette
    private static final String COMPONENT_NAME = "Valve";
    // Description of the component that is displayed in the palette as a tooltip
    private static final String COMPONENT_DESCRIPTION =
        "A configurable process valve component";
    // Default name for the component instance in a view
    private static final String COMPONENT_DEFAULT_NAME = "valve";

    /*
    * Descriptor for the onActionPerformed event of the component
    */
    static ComponentEventDescriptor OnActionPerformedDescriptor = ComponentUtilities
        .getEventDescriptor(
            "events/hmi/process-objects/valve/onActionPerformed.json",
            "onActionPerformed",
            "This event is fired when Valve is clicked."
            );

    // Create the component descriptor
    public static final ComponentDescriptor DESCRIPTOR = ComponentDescriptorImpl
        .ComponentBuilder.newBuilder()
        .setPaletteCategory(Components.COMPONENT_CATEGORY)
        .setId(COMPONENT_ID)
        .setModuleId(Constants.MODULE_ID)
        .setSchema(ComponentUtilities.getSchemaFromFilePath(
            "/props/hmi/process-objects/valve.props.json"))
        .addPaletteEntry(
            "", // Variant used for the palette entry, empty string is the default variant
            COMPONENT_NAME,
            COMPONENT_DESCRIPTION,
            null, // Thumbnail image path, located in the resources directory
            null)
        .setName(COMPONENT_NAME)
        .setDefaultMetaName(COMPONENT_DEFAULT_NAME)
        .setResources(Components.BROWSER_RESOURCES) // Connect the component to the javascript and css resources defined in Components.java
        .setEvents(List.of(OnActionPreformedDescriptor)) // Register events with the component descriptor, making them available for use as a Perspective component event.
        .build();
}
```
:::
