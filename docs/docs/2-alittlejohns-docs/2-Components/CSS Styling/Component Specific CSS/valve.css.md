---
title: Valve Component CSS
---
## Layer Name

```css
@Layer hmi-components
```

## Valve specific css rules

```css
:where(.valve_mp){
	display: grid;
	aspect-ratio: 5/10;
	grid-template-columns:
		minmax(var(--_min-size-1), var(--_max-size-1)) minmax(
			var(--_min-size-3),
			var(--_max-size-3)
		)
		minmax(var(--_min-size-2), var(--_max-size-2)) minmax(
			var(--_min-size-3),
			var(--_max-size-3)
		)
		minmax(var(--_min-size-1), var(--_max-size-1));
	grid-template-rows:
		minmax(var(--_min-size-2), var(--_max-size-2)) minmax(
			var(--_min-size-1),
			var(--_max-size-1)
		)
		minmax(var(--_min-size-3), var(--_max-size-3))
		minmax(var(--_min-size-2), var(--_max-size-2))
		minmax(var(--_min-size-3), var(--_max-size-3)) minmax(
			var(--_min-size-1),
			var(--_max-size-1)
		)
		minmax(var(--_min-size-3), var(--_max-size-3))
		minmax(var(--_min-size-2), var(--_max-size-2))
		minmax(var(--_min-size-3), var(--_max-size-3)) minmax(
			var(--_min-size-1),
			var(--_max-size-1)
		)
		minmax(var(--_min-size-2), var(--_max-size-2));

	border: var(--_size-5) solid var(--_border-color);
	border-radius: var(--_size-5);
	& [class^="v"][class*="b"]{
		background-color: var(--_segment-color);
		z-index: 1;
	}
	& .v1b1{
		grid-area: 1/3/5/4;
	}
	& .v1b2{
		grid-area: 3/3/4/6;
	}
	& .v1b3{
		grid-area:4/3/7/4;
	}
	& .v1b4{
		grid-area:3/1/4/4;
	}
	& .v2b1{
		grid-area: 7/3/9/4;
	}
	& .v2b2{
		grid-area: 9/3/10/6;
	}
	& .v2b3{
		grid-area:8/3/12/4;
	}
	& .v2b4{
		grid-area:9/1/10/4;
	}
	& .v1 {
		grid-area: 1/1/7/6;
	}
	& .v2 {
		grid-area: 6/1/12/6;
		border-top: solid transparent;
	}
	& .usl,.lsl{
		background-color: var(--_activated-color)
	}
	& .usl {
		grid-area: 1/2/2/5;
	}
	& .lsl {
		grid-area: 11/2/12/5;
	}

	& .v2.alarm{
		border-top: transparent;
	}
}


```
