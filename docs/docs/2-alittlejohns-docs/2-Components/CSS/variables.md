---
title: Global CSS Custom Variables
---

## HMI Component Theme

The HMI Component Theme employs the OpenPropsUI theme, however the user may
override the use of an OpenPropsUI custom property by providing a valid
--custom-variable for example;
Should the use define a value for the `--border-color` then the `--border-color`
variable will take precedence.

`--_border-color: var(--border-color, var(--gray-5));`

### Layer name

```css
@Layer hmi-theme
```
### Symbol Colors

```css
	--_border-color: var(--border-color, var(--gray-5));
	--_segment-color: var(--segment-color, var(--gray-5)); /* a segment is an internal element, not effected by states except positional feedback */
	--_activated-color: var(--activated-color, var(--gray-7)); /* indicates item is activated */
	--_deactivated-color: var(--deactivated-color, var(--gray-2)); /* indicates item is deactivated */
	--_manual-color: var(--manual-color, var(--blue)); /* indicates item is in manual mode */
	--_no-alarm-mask-color: var(--no-alarm-mask-color, var(--blue)); /* indicates an item's alarm state is masked */
	--_no-alarm-start-color: var(--no-alarm-start-color, var(--red)); /* indicates alarm state animation start color */
	--_no-alarm-end-color: var(--no-alarm-end-color, var(--grey-2)); /* indicates alarm state animation end color */
```

### Item Id Label Popover Positions
```css
	--_itemid-popup-position-right:var(--itemid-popup-position-right, translate(35%,10%));
	--_itemid-popup-position-left:var(--itemid-popup-position-left, translate(-100%,10%));
	--_itemid-popup-position-top-right:var(--itemid-popup-position-top-right, translate(35%,-75%));
	--_itemid-popup-position-top-left:var(--itemid-popup-position-top-left, translate(-100%,-75%));
	--_itemid-popup-position-bottom-right:var(--itemid-popup-position-bottom-right, translate(35%,100%));
	--_itemid-popup-position-bottom-left:var(--itemid-popup-position-bottom-left, translate(-100%,100%));
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
	--_locate--keyframe-height-step-50: var(
		--locate-keyframe-height-step-50,
		50%
	);
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
