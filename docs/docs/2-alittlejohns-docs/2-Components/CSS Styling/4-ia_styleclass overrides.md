---
title: Perspective CSS Overrides
---
:::tip Reminder

The follow code snippet should be included in the advanced stylesheet in order to override some ia style rules for the Hmi Component module components to look as intended.
:::

```css
/* Direct stylesheet authoring is an advanced feature. Knowledge of CSS required.*/

/* Override Perspective reset */

/* Parameterlist .label */

:where(.parameter-list){ /* make label text on top border visible */
		padding-block-start: 0.5lh;
		padding-block-end: 0.2lh;
		margin-top: revert-layer;
}
:where(.field) {
	.label,.eu {
		margin-inline-start: var(--field-border-width);
	}
	&:focus-within,
	&:has(:where(input:not([type="color"]), textarea):not(:placeholder-shown)),
	&:has(option[value=""]:not(:checked)),
	&:has(option:checked:not([value=""])) {
		.label {
			margin-block-start: -2.2rem;
			margin-inline-start: var(--_field-padding-inline);
			}
		.eu{
			margin-inline-start: calc( 100% - 4ch);
			margin-block-start: -2.2rem;
			}

	}
	& input {
		padding: revert-layer;
	}
	&.small{
		padding: revert-layer;
		padding-block-start: 0.5lh;
		padding-block-end: 0.2lh;
	}
}
:where([class*=hmi-component]){
	padding: revert-layer;

	& *{ /* allow all child elements of hmi-components to have padding */
		padding: revert-layer;
	}
}
```
