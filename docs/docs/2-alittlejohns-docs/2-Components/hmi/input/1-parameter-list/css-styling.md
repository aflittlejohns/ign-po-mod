---
title: CSS Styling
---

## 1. Add this to the Perspective advanced stylesheet

```css
/* Override Perspective reset */

/* Parameterlist .label */

/* Override Perspective reset */

/* Parameterlist .label */

:where(.parameter-list){ /* make label text on top border visible */
		padding-block: 0.5lh;
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
		padding: revert;
	}
}
```
## Custom Variables for Component Customisation


