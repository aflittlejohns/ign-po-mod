---
title: Global CSS Custom Variables
---

## HMI Component Theme

The HMI Component Theme employs the OpenPropsUI theme, however the user may
override, so called, private custom variable values by providing a valid
--custom-variable for example;
Should the user define a value for the `--border-color` then this
variable will take precedence.

For example, take;

`--_border-color: var(--border-color, var(--gray-5));`

where;

- --\_border-Colors: is a private custom variable. **not to be overridden**
- **--border-color : is a public custom variable which the user may use to override...**
- var(--gray-5) : --gray-5 is an OpenPropsUI defined custom variable

### Layer name

```css
@layer hmi-theme;
```

### Symbol Colors

```css
/* component border color */
--_border-color: var(--border-color, var(--gray-5));
/* a segment is an internal element, not effected by states except positional feedback */
--_segment-color: var(--segment-color, var(--gray-5));
/* component activated */
--_activated-color: var(--activated-color, var(--gray-7));
/* component de-activated */
--_deactivated-color: var(--deactivated-color, var(--gray-2));
/* component in manual control mode*/
--_manual-color: var(--manual-color, var(--blue));
/* component in changing position*/
--_changing-color: var(--changing-color, var(--oklch-yellow));
/* component alarm masked*/
--_no-alarm-mask-color: var(--no-alarm-mask-color, var(--orange));
/* component locate */
--_locate-color: var(--locate-color, var(--color-5));
/* component alarm animation start color */
--_alarm-start-color: var(--alarm-start-color, var(--_error));
/* component alarm animation end color */
--_alarm-end-color: var(--alarm-end-color, var(--grey-2));
/* General Error or Alarm */
--_error: var(--hmi-error-color, var(--error, red));

/* Equipment Mode Indication Colors */
--_heating: var(--hmi-heating-color, var(--heating, orange));
--_cooling: var(--hmi-cooling-color, var(--cooling, blue));

/* Chemical or CIP pipeline*/
--_cip: var(--hmi-cip-color, var(--cip, purple));

/* Utility pipeline*/
--_utility: var(--hmi-utility-color, var(--utility, purple));

/* Raw Product pipeline*/
--_product: var(--hmi-product-color, var(--product, var(--_segment-color)));

/** OPTIONAL **/

/* Sterile Zone pipeline */
--_sterile: var(--hmi-sterile-color, var(--sterile, red));

/* Clean pipeline */
--_clean: var(--hmi-clean-color, var(--clean, lightblue));
```

### Item Id Label Popover Positions

```css
--_itemid-popup-position-right: var(
	--itemid-popup-position-right,
	translate(35%, 10%)
);
--_itemid-popup-position-left: var(
	--itemid-popup-position-left,
	translate(-100%, 10%)
);
--_itemid-popup-position-top-right: var(
	--itemid-popup-position-top-right,
	translate(35%, -75%)
);
--_itemid-popup-position-top-left: var(
	--itemid-popup-position-top-left,
	translate(-100%, -75%)
);
--_itemid-popup-position-bottom-right: var(
	--itemid-popup-position-bottom-right,
	translate(35%, 100%)
);
--_itemid-popup-position-bottom-left: var(
	--itemid-popup-position-bottom-left,
	translate(-100%, 100%)
);
```

### Item Location Animation

```css
--_locate-color: var(--locate-color, --color-5);

--_locate-small-keyframe-height-step-0-100: var(
	--locate-small-keyframe-height-step-0-100,
	50%
); /* used for two-three port valves*/
--_locate-small-keyframe-height-step-50: var(
	--locate-small-keyframe-height-step-50,
	25%
); /* used for two-three port valves*/

--_locate-keyframe-height-step-0-100: var(
	--locate-keyframe-height-step-0-100,
	100%
);
--_locate--keyframe-height-step-50: var(--locate-keyframe-height-step-50, 50%);
--_locate-top: var(--locate-small-top, 27.5%);

--_locate-large-top: var(--locate-top, 50%);
```

### Grid row and column sizes

```css
--_min-size-1: var(--min-size-1, 1fr);
--_min-size-2: var(--min-size-2, 2fr);
--_min-size-3: var(--min-size-3, 3fr);
--_max-size-1: var(--max-size-1, 1fr);
--_max-size-2: var(--max-size-2, 2fr);
--_max-size-3: var(--max-size-3, 3fr);
```

### General Container sizes

```css
--_size-100: var(--hmi-size-100, 100cqmin);
--_size-20: var(--hmi-size-20, 20cqmin);
--_size-10: var(--hmi-size-10, 10cqmin);
--_size-5: var(--hmi-size-5, 5cqmin);
--_size-2: var(--hmi-size-2, 2cqmin);
--_size-1: var(--hmi-size-1, 1cqmin);
--_size-01: var(--hmi-size-01, 0.1cqmin);



```
