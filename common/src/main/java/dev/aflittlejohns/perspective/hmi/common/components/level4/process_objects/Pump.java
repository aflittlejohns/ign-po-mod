package dev.aflittlejohns.perspective.hmi.common.components.level4.process_objects;

import java.awt.image.BufferedImage;
import java.util.List;

import com.inductiveautomation.perspective.common.api.ComponentDescriptor;
import com.inductiveautomation.perspective.common.api.ComponentDescriptorImpl;
import com.inductiveautomation.perspective.common.api.ComponentEventDescriptor;

import dev.aflittlejohns.perspective.hmi.common.Constants;
import dev.aflittlejohns.perspective.hmi.common.Components;
import dev.aflittlejohns.perspective.hmi.common.utilities.ComponentUtilities;
import dev.aflittlejohns.perspective.hmi.common.utilities.ImageUtilities;

/**
 * This class describes the Valve component to the Java registry.
 * It provides the necessary information for both the Gateway and Designer
 * to recognize and utilize the front-end Valve component.
 */
public class Pump {

	// Unique ID of the component, matching the ID in the JavaScript implementation
	public static String COMPONENT_ID = "hmi.process_objects.Pump";

	// Path to the thumbnail image for the component palette
	private static final String THUMBNAIL_PATH = "/images/process-objects/pump/thumbnail/base.png"; // TODO: Change this to a valve image
	private static final int THUMBNAIL_WIDTH = 40;
	private static final int THUMBNAIL_HEIGHT = 40;

	// Path to the JSON schema defining the component's properties
	private static final String PROPS_SCHEMA_PATH = "/props/process-object-pump.props.json";

	// Component metadata
	private static final String COMPONENT_NAME = "Pump";
	private static final String COMPONENT_DESCRIPTION = "A configurable Process Pump";
	private static final String COMPONENT_DEFAULT_NAME = "process-pump";

	/**
	 * Descriptor for the onActionPerformed event of the component.
	 */
	static ComponentEventDescriptor ActionPerformedDescriptor = ComponentUtilities.getEventDescriptor(
			"events/process-objects/valve/onActionPerformed.json",
			"onActionPerformed",
			"This event is fired when pump is clicked.");

	// Load the thumbnail image for the component palette
	static BufferedImage thumbnail = ImageUtilities.loadThumbnailFromFilePath(THUMBNAIL_PATH, THUMBNAIL_WIDTH,
			THUMBNAIL_HEIGHT);

	/**
	 * The ComponentDescriptor for the Valve component.
	 * This descriptor provides all necessary information for the Perspective system
	 * to recognize, display, and utilize the Valve component.
	 */
	public static ComponentDescriptor DESCRIPTOR = ComponentDescriptorImpl.ComponentBuilder.newBuilder()
			.setPaletteCategory(Components.COMPONENT_CATEGORY)
			.setId(COMPONENT_ID)
			.setModuleId(Constants.MODULE_ID)
			.setSchema(ComponentUtilities.getSchemaFromFilePath(PROPS_SCHEMA_PATH))
			.setEvents(List.of(ActionPerformedDescriptor))
			.setName(COMPONENT_NAME)
			.addPaletteEntry("", COMPONENT_NAME, COMPONENT_DESCRIPTION, thumbnail, null)
			.setDefaultMetaName(COMPONENT_DEFAULT_NAME)
			.setResources(Components.BROWSER_RESOURCES)
			.build();

}
