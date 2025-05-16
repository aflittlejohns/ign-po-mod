package dev.aflittlejohns.perspective.hmi.common;

import java.util.Set;
import com.inductiveautomation.perspective.common.api.BrowserResource;

/**
 * This class defines common properties and resources for all example
 * components.
 * It specifies the category under which these components will appear in the
 * Perspective component palette
 * and declares the necessary browser resources (JS and CSS files) for the
 * components.
 */
public class Components {
	/**
	 * The category name for components in the Perspective component
	 * palette.
	 */
	public static final String COMPONENT_CATEGORY = "HMI Components";

	/**
	 * A set of BrowserResource objects representing the JavaScript and CSS files
	 * required by the example components on the client side.
	 */
	public static final Set<BrowserResource> BROWSER_RESOURCES = Set.of(
			// JavaScript resource for the example components
			new BrowserResource(
					"hmi-components-js",
					String.format("/res/%s/HmiComponents.js", Constants.MODULE_URL_ALIAS),
					BrowserResource.ResourceType.JS),
			// CSS resource for the example components
			new BrowserResource(
					"hmi-components-css",
					String.format("/res/%s/HmiComponents.css", Constants.MODULE_URL_ALIAS),
					BrowserResource.ResourceType.CSS));
}
