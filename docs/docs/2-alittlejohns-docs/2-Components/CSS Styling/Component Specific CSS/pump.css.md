---
title: Pump Component CSS
---
## Layer Name

```css
@Layer hmi-components
```

## Pump specific css rules

```css
:where(.pump) {

	display: grid;
	grid-template-columns:repeat(10, var(--_size-10));
	grid-template-rows:repeat(10, var(--_size-10));


	& .base-1 {
		grid-area: 1/1/-1/-1;
		border: var(--_size-10) solid var(--_border-color);
		border-radius: 50%;
	}
	& .base-2 {
		grid-area: 1/6/6/-1;
		background: linear-gradient(
				45deg,
				transparent 47%,
				var(--_border-color) 50%,
				transparent 53%
			);
			background-size: 200% 200%; /* Makes the gradient larger or smaller */
			background-position: 92% 84%; /* Moves the gradient within the cell */
	}
		& .base-3 {
			grid-area: -1/6/6/-1;
			background: linear-gradient(
				135deg,
				transparent 47%,
				var(--_border-color) 50%,
				transparent 53%
			);
			background-size: 200% 200%; /* Makes the gradient larger or smaller */
			background-position: 32% 75%; /* Moves the gradient within the cell */
		}
				& .symbol-1.centrifugal {
			grid-area: 5/1/7/-1;
			background: linear-gradient(
				0deg,
				transparent 47%,
				var(--_border-color) 50%,
				transparent 53%
			);
			background-size: 800% 800%; /* Makes the gradient larger or smaller */
			background-position: 0% 50%; /* Moves the gradient within the cell */
		}
		& .symbol-1.diaphragm {
			/* diaphragm */
			grid-area: 1/3/-1/6;
			background: var(--_border-color);
			--mask: radial-gradient(
					55cqmin at 200% 50%,
					#0000 calc(99% - 4cqmin),
					#000 calc(101% - 1cqmin) 101%,
					#0000 101%
				)
				content-box border-box 50% 50% / 100% 100%;

			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
		& .symbol-1.gear {
			/* gear */
			grid-area: 5/4/9/8;
			border-color: var(--_border-color);
			border-radius: 50%;
			border-width: calc(var(--_size-2)+(var(--_size-01)*5));
			background-color: var(--containerRoot);
		}
		& .symbol-2.gear {
			/* gear */
			grid-area: 3/4/7/8;
			border-color: var(--_border-color);
			border-radius: 50%;
			border-width: calc(var(--_size-2)+(var(--_size-01)*5));
			z-index: 1;
			background-color: var(--grey-1);
		}
		& .symbol-1.positive-displacment {
			/* positive displacement */
			grid-area: 5/5/7/7;
			border:  calc(var(--_size-2)+(var(--_size-01)*5)) solid var(--_border-color);
		}
		& .symbol-1.liquid-ring {
			/* liquid ring */
			grid-area: 3/2/5/8;
			background: var(--_border-color);
			--mask: radial-gradient(
					36cqi at 50% -85%,
					#0000 calc(99% - 5cqmin),
					#000 calc(101% - 1cqmin) 101%,
					#0000 101%
				)
				content-box border-box 50% 50% / 100% 100%;

			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
		& .symbol-2.liquid-ring {
			/* liquid ring */
			grid-area: 9/2/7/8;
			background: var(--_border-color);
			--mask: radial-gradient(
					36cqi at 50% 190%,
					#0000 calc(99% - 5cqi),
					#000 calc(101% - 1cqi) 101%,
					#0000 101%
				)
				content-box border-box 50% 50% / 100% 100%;

			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
		& .symbol-1.progressive-cavity {
			/* cavity */
			grid-area: 5/2/7/8;
			background: var(--_border-color);
			--mask: radial-gradient(
						6.9cqi at 50% calc(50% + 4cqi),
						#0000 calc(99% - 2cqi),
						#000 calc(101% - 2cqi) 102%,
						#0000 101%
					)
					11% calc(50% - 4cqi) / 24cqi 8cqi repeat-x,
				radial-gradient(
						6.9cqi at 50% calc(50% - 4cqi),
						#0000 calc(99% - 2cqi),
						#000 calc(101% - 2cqi) 102%,
						#0000 101%
					)
					44% calc(50% + 4cqi) / 24cqi 8cqi repeat-x;
			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
		& .symbol-1.positive-screw {
			/* screw */
			grid-area: 4/2/6/8;
			background: var(--_border-color);
			--mask: radial-gradient(
						6.9cqi at 50% calc(50% + 4cqi),
						#0000 calc(99% - 2cqi),
						#000 calc(101% - 2cqi) 102%,
						#0000 101%
					)
					11% calc(50% - 4cqi) / 24cqi 8cqi repeat-x,
				radial-gradient(
						6.9cqi at 50% calc(50% - 4cqi),
						#0000 calc(99% - 2cqi),
						#000 calc(101% - 2cqi) 102%,
						#0000 101%
					)
					44% calc(50% + 4cqi) / 24cqi 8cqi repeat-x;
			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
		& .symbol-2.positive-screw {
			/* screw */
			grid-area: 6/2/8/8;
			background: var(--_border-color);
			--mask: radial-gradient(
						6.9cqi at 50% calc(50% + 4cqi),
						#0000 calc(99% - 2cqi),
						#000 calc(101% - 2cqi) 102%,
						#0000 101%
					)
					11% calc(50% - 4cqi) / 24cqi 8cqi repeat-x,
				radial-gradient(
						6.9cqi at 50% calc(50% - 4cqi),
						#0000 calc(99% - 2cqi),
						#000 calc(101% - 2cqi) 102%,
						#0000 101%
					)
					44% calc(50% + 4cqi) / 24cqi 8cqi repeat-x;
			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
	}


```
