---
title: CSS Styling
---

## 1. Add this to the Perspective advanced stylesheet

```css
/* Override Perspective reset */

/* Parameterlist .label */

:where(.field){
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
}
```
## Custom Variables for Component Customisation


