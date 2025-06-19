---
title: Status List
---

import Gif from "@site/static/img/status.gif";
import Icon from "@site/static/img/status-icon.svg";

<img src={Gif} />

#### Component Palette Icon:

<Icon title="Component Palette Icon" className="component-palette-icon" />
<br />
<br />

A component for process object status visualisation. The appearence may be appropriately styled. Full menu of [style options](https://www.docs.inductiveautomation.com/docs/8.1/appendix/reference-pages/style-reference) is available for text, background, margin and padding, border, shape and miscellaneous. You can also specify a [style class](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/styles/style-classes).

## Properties

Most Properties have binding options. For more information on Bindings, see [Types of Bindings in Perspective.](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/working-with-perspective-components/bindings-in-perspective) This section only documents the Props Category of properties. The other Categories are described on the [Perspective Component Properties](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/working-with-perspective-components/perspective-component-properties) page.

| Name   | Description                                                                                                                                                                                                                                                                                                                                                                            | Property Type |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| status | A list of status objects                                                                                                                                                                                                                                                                                                                                                               | array         |
| style  | Sets a style for this chart. Full menu of [style options](https://www.docs.inductiveautomation.com/docs/8.1/appendix/reference-pages/style-reference) is available for text,background, margin and padding, border, shape and miscellaneous. You can also specify a [style class](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/styles/style-classes) | object        |

### status Properties

| Name   | Description           | Property Type |
| :----- | :-------------------- | :------------ |
| label  | Description of Status | string        |
| status | Boolean status        | boolean       |

:::tip
The `label` and `status` properties are attributes of the html tags `<label>` and `<input>` type checkbox. <br />
Further info on the html [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) and [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) tag can be found at mdn web docs website, with info for the OpenPropsUI Textfield Component at [OpenPropsUI > Components > Input > Textfield](https://open-props-ui.netlify.app/components/inputs/text-field.html#input-types) site page.
:::

## Component Events

The component supports the "Action Performed Event".

Further information regarding the Action Performed Event can be found a the [Perspective Event](https://www.docs.inductiveautomation.com/docs/8.1/appendix/reference-pages/perspective-event-types-reference) Types Reference page.
The [Component Events and Actions](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/working-with-perspective-components/component-events-and-actions) page shows how to configure events and actions on a Perspective component. Component scripting is handled separately and can be accessed from the Component menubar or by right clicking on the component.
