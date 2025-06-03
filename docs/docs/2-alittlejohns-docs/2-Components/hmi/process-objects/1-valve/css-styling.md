---
title: CSS Styling
---


## Custom Variables for Component Customisation
#TODO update the custom vars below
```css
	--hmi-po-border-color: var(--neutral-50);
	--hmi-po-segment-color: var(--neutral-50);
	--hmi-po-activated-color: var(--neutral-70);
	--hmi-po-changing-color: var(--neutral-50);
	--hmi-po-deactivated-color: var(--neutral-20);
	--hmi-po-manual-color: var(--qual-2);
	--hmi-po-no-alarm-mask-color: var(--neutral-30);
	--hmi-po-alarm-start-color: var(--error);
	--hmi-po-alarm-end-color: var(--neutral-20);
	/* itemId Popover Positions */
	--_itemid-popup-position-right:var(--itemid-popup-position-right, translate(35%,10%));
	--_itemid-popup-position-left:var(--itemid-popup-position-right, translate(-100%,10%));
	--_itemid-popup-position-top-right:var(--itemid-popup-position-top-right, translate(35%,-75%));
	--_itemid-popup-position-top-left:var(--itemid-popup-position-top-left, translate(-100%,-75%));
	--_itemid-popup-position-bottom-right:var(--itemid-popup-position-bottom-right, translate(35%,100%));
	--_itemid-popup-position-bottom-left:var(--itemid-popup-position-bottom-left, translate(-100%,100%));
	/* Default itemId Popover Position */
	--_itemid-popup-position:var(--_itemid-popup-position-bottom-left, translate(-100%,100%));

	--_locate-item: var(--locate-item, purple);
	--_locate-small-keyframe-height-step-0-100: var(
		--locate-small-keyframe-height-step-0-100,
		50%
	);
	--_locate-small-keyframe-height-step-50: var(
		--locate-small-keyframe-height-step-50,
		25%
	);
	--_locate-large-keyframe-height-step-0-100: var(
		--locate-large-keyframe-height-step-0-100,
		100%
	);
	--_locate-large-keyframe-height-step-50: var(
		--locate-large-keyframe-height-step-50,
		50%
	);
	--_locate-top: var(--locate-small-top, 27.5%);
	--_locate-large-top: var(--locate-large-top, 50%);
	/* Default locate keyframe heights */
	--_locate-keyframe-height-step-0-100: var(
		--_locate-small-keyframe-height-step-0-100,
		25%
	);
	--_locate-keyframe-height-step-50: var(
		--_locate-small-keyframe-height-step-50,
		50%
	);
	--_min-size-1: var(--min-size-1, 1fr);
	--_min-size-2: var(--min-size-2, 2fr);
	--_min-size-3: var(--min-size-3, 3fr);
	--_max-size-1: var(--max-size-1, 1fr);
	--_max-size-2: var(--max-size-2, 2fr);
	--_max-size-3: var(--max-size-3, 3fr);
}
```


