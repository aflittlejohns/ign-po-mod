---
title: Valve Command
---

import Gif from "@site/static/img/command-valve-mp.gif";
import Icon from "@site/static/img/command-valve-mp.svg";

<img src={Gif} />

#### Component Palette Icon:

<Icon title="Component Palette Icon" className="component-palette-icon" />
<br />
<br />

A faceplate component for aauthorised user multi-port valve control. The appearence may be appropriately styled. Full menu of [style options](https://www.docs.inductiveautomation.com/docs/8.1/appendix/reference-pages/style-reference) is available for text, background, margin and padding, border, shape and miscellaneous. You can also specify a [style class](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/styles/style-classes).

## Properties

Most Properties have binding options. For more information on Bindings, see [Types of Bindings in Perspective.](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/working-with-perspective-components/bindings-in-perspective) This section only documents the Props Category of properties. The other Categories are described on the [Perspective Component Properties](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/working-with-perspective-components/perspective-component-properties) page.

| Name       | Description                                                                                                                                                                                                                                                                                                                                                                             | Property Type |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| parameters | A list of parameter objects                                                                                                                                                                                                                                                                                                                                                             | array         |
| style      | Sets a style for this chart. Full menu of [style options](https://www.docs.inductiveautomation.com/docs/8.1/appendix/reference-pages/style-reference) is available for text, background, margin and padding, border, shape and miscellaneous. You can also specify a [style class](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/styles/style-classes) | object        |

### parameter Properties

| Name  | Description                                   | Property Type |
| :---- | :-------------------------------------------- | :------------ |
| label | Configuration of parameter `label` properties | object        |
| input | Configuration of parameter `input` properties | object        |

:::tip
The `label` and `input` properties are attributes of the html tags `<label>` and `<input>`. <br />
Further info on the html [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) and [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) tag can be found at mdn web docs website, with info for the OpenPropsUI Textfield Component at [OpenPropsUI > Components > Input > Textfield](https://open-props-ui.netlify.app/components/inputs/text-field.html#input-types) site page.
:::

#### `label`

| Name  | Description                                   | Property Type |
| :---- | :-------------------------------------------- | :------------ |
| text | Parameter Description | object        |

#### `input`

| Name  | Description                                   | Property Type |
| :---- | :-------------------------------------------- | :------------ |
| type | A string specifying the type of control to display. <br /> Options are; <br /> - text <br /> - button <br /> - checkbox <br /> - radio <br /> - date <br /> - datetime-local <br /> - time <br /> - week | string        |
| inputmode | A string providing a hint to browsers as to the type of virtual keyboard to display. <br /> Options are; <br /> - text <br /> - numeric <br /> - none  | string        |
| placeholder | Text string which appears when no input value is set | string        |
| editable | If true the input field is editable  | boolean        |
| pattern | A regex pattern for browser side data validation. :bulb: _Note does not prevent entry of invalid data_ Suggestions are; <br /> - `[0-9]*` for integers <br /> - `^\\d+(\\.\\d{1,2})?$` for floating-point numbers with 1 or 2 decimal places.  | string        |
| min | Minimum value | string        |
| max | Maximum value | string        |
| eu | Displayed Engineering Unit | string        |
| value | Parameter Value | number        |



## Component Events

The component supports the "Action Performed Event".

Further information regarding the Action Performed Event can be found a the [Perspective Event](https://www.docs.inductiveautomation.com/docs/8.1/appendix/reference-pages/perspective-event-types-reference) Types Reference page.
The [Component Events and Actions](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/perspective/working-with-perspective-components/component-events-and-actions) page shows how to configure events and actions on a Perspective component. Component scripting is handled separately and can be accessed from the Component menubar or by right clicking on the component.
