---
title: Animations
---

## HMI Component Animations

### Layer name

```css
@Layer hmi
```
### Item Alarm
```css
@keyframes alarm-state-anim {
	0% {
		border-color: var(--_alarm-start-color);
		border-width: var(--_size-2);

	}
	100% {
		border-color: var(--_alarm-end-color);
		border-width: var(--_size-5);
	}
}
```
### Item Locate

```css
@keyframes locate {
	0% {
		width: 100%;
		height: var(--_locate-keyframe-height-step-0-100);
	}
	50% {
		width: 50%;
		height: var(--_locate-keyframe-height-step-50);
	}
	100% {
		width: 100%;
		height: var(--_locate-keyframe-height-step-0-100);
	}
}
```
