---
title: Heat Exchanger Component CSS
---

## Layer Name

```css
@layer hmi-components;

```

## Heat Exchanger Specific CSS Styling

```css
@layer hmi-components {
	:where(.heat-exchanger) {
		display: grid;
		grid-template-columns: repeat(10, var(--_size-10));
		grid-template-rows: repeat(20, var(--_size-10));
		& [class*="base"] {
			--_plate-color: var(--plate-color, var(--hmi-plate-color, black));
			--_route-top-color: var(
				--route-top-color,
				var(--hmi-route-top-color, black)
			);
			--_route-bottom-color: var(
				--route-bottom-color,
				var(--hmi-route-bottom-color, black)
			);
			--_route-line-width: var(
				--route-line-width,
				clamp(2px, var(--_size-2, 2%), 5px)
			);
			--_route-center: var(--route-line-center, 50%);
			border: var(--_size-2) solid var(--_border-color);
		}
		&.tubular {
			/* outer border */
			& .base-1 {
				grid-area: 1 / 1 / 21 / 21;
				/* tubes */
				width: 100%; /* 100% of container width */
				height: 100%; /* 100% of container height */
				background: repeating-linear-gradient(
					to right,
					var(--_plate-color) 0 5%,
					transparent 5% 20%
				);
				background-size: 40% 100%;
			}

			/* route path top left */
			& .base-2 {
				grid-area: 1 / 2 / 5 / 2;
				border: none;
				border-left: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* route path top right */
			& .base-3 {
				grid-area: 1 / 9 / 5 / 9;
				border: none;
				border-right: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* port plate - left */
			& .base-4 {
				grid-area: 5 / 2 / 5 / 4;
				border: none;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* top route diagonal - left */
			& .base-5 {
				grid-area: 5 / 3 / 8 / 6;
				border: none;
				width: 100%; /* 100% of container width */
				height: 100%; /* 100% of container height */
				background: linear-gradient(
					70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-top-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-top-color) var(--_route-center),
					var(--_route-top-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 68% 90%; /* Moves the gradient within the cell */
			}
			/* top route - bottom horiz*/
			& .base-6 {
				grid-area: 7 / 5 / 7 / 7;
				border: none;
				border-bottom: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* top route - right diagonal */
			& .base-7 {
				grid-area: 5 / 6 / 8 / 9;
				border: none;
				border-color: transparent;
				background: linear-gradient(
					-70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-top-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-top-color) var(--_route-center),
					var(--_route-top-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 41% 71%; /* Moves the gradient within the cell */
			}
			/* top route - right horiz */
			& .base-8 {
				grid-area: 5 / 8 / 5 / 10;
				border: none;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* route path bottm left */
			& .base-9 {
				grid-area: -1 / 2 / -5 / 2;
				border: none;
				border-left: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* route path bottom right */
			& .base-10 {
				grid-area: -1 / 9 / -5 / 9;
				border: none;
				border-right: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* port plate - left */
			& .base-11 {
				grid-area: -5 / 2 / -5 / 4;
				border: none;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* top route diagonal - left */
			& .base-12 {
				grid-area: -5 / 3 / -8 / 6;
				border: none;
				width: 100%; /* 100% of container width */
				height: 100%; /* 100% of container height */
				background: linear-gradient(
					-70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-top-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-top-color) var(--_route-center),
					var(--_route-top-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 37% 90%; /* Moves the gradient within the cell */
			}
			/* top route - bottom horiz*/
			& .base-13 {
				grid-area: -8 / 5 / -8 / 7;
				border: none;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* top route - right diagonal */
			& .base-14 {
				grid-area: -5 / 6 / -8 / 9;
				border: none;
				border-color: transparent;
				background: linear-gradient(
					70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-top-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-top-color) var(--_route-center),
					var(--_route-top-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 56% 71%; /* Moves the gradient within the cell */
			}
			/* top route - right horiz */
			& .base-15 {
				grid-area: -5 / 8 / -5 / 10;
				border: none;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
		}
		&.plate {
			/* left leg */
			& .base-1 {
				grid-area: 1 / 1 / 19 / 3;
			}
			/* beam */
			& .base-2 {
				grid-area: 1 / 3 / 3 / 9;
			}
			/* right leg */
			& .base-3 {
				grid-area: 1 / 9 / 19 / 11;
			}
			/* port plate - left */
			& .base-4 {
				grid-area: 3 / 3 / 19 / 4;
			}
			/* plates */
			& .base-5 {
				grid-area: 3 / 4 / 18 / 9;
				border: none;
				width: 100%; /* 100% of container width */
				height: 100%; /* 100% of container height */
				background: repeating-linear-gradient(
					to right,
					var(--_plate-color) 0 5%,
					transparent 5% 10%
				);
				background-size: 10% 100%;
			}
			/* plate support */
			& .base-6 {
				grid-area: 18 / 4 / 19 / 9;
			}
			/* left foot */
			& .base-7 {
				grid-area: 19 / 1 / 21 / 3;
				border-bottom: calc(var(--_size-1) * 20) solid var(--_border-color);
				border-left: calc(var(--_size-1) * 4) solid transparent;
				border-right: calc(var(--_size-1) * 4) solid transparent;
			}
			/* right foot */
			& .base-8 {
				grid-area: 19 / 9 / 21 / 11;
				border-bottom: calc(var(--_size-1) * 20) solid var(--_border-color);
				border-left: calc(var(--_size-1) * 4) solid transparent;
				border-right: calc(var(--_size-1) * 4) solid transparent;
			}
			/* top route path - left entry */
			& .base-9 {
				grid-area: 5 / 1 / 5 / 4;
				/* --_route-color: var(--route-color, black); */
				border-color: transparent;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* top route path - right entry */
			& .base-10 {
				grid-area: 5 / 9 / 5 / 11;
				/* --_route-color: var(--route-color, black); */
				border-color: transparent;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* top route path - route bottom */
			& .base-11 {
				grid-area: 8 / 5 / 8 / 8;
				border-color: transparent;
				border-top: var(--_route-line-width) solid var(--_route-top-color);
			}
			/* route path top left diagonal */
			& .base-12 {
				grid-area: 5/3/8/7;
				border-color: transparent;
				background: linear-gradient(
					70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-top-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-top-color) var(--_route-center),
					var(--_route-top-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 74% 90%; /* Moves the gradient within the cell */
			}
			/* route path top right diagonal */
			& .base-13 {
				grid-area: 5/6/8/10;
				border-color: transparent;
				background: linear-gradient(
					-70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-top-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-top-color) var(--_route-center),
					var(--_route-top-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 31% 71%; /* Moves the gradient within the cell */
			}
			/* bottom route path - left entry */
			& .base-14 {
				grid-area: 15 / 1 / 15 / 4;
				/* --_route-color: var(--route-color, black); */
				border-color: transparent;
				border-top: var(--_route-line-width) solid var(--_route-bottom-color);
			}
			/* bottom route path - right entry */
			& .base-15 {
				grid-area: 15 / 9 / 15 / 11;
				/* --_route-color: var(--route-color, black); */
				border-color: transparent;
				border-top: var(--_route-line-width) solid var(--_route-bottom-color);
			}
			/* bottom route path - route top */
			& .base-16 {
				grid-area: 12 / 5 / 15 / 8;
				border-color: transparent;
				border-top: var(--_route-line-width) solid var(--_route-bottom-color);
			}
			/* route path bottom left diagonal */
			& .base-17 {
				grid-area: 12/3/15/7;
				border-color: transparent;
				background: linear-gradient(
					-70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-bottom-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-bottom-color) var(--_route-center),
					var(--_route-bottom-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 53% 90%; /* Moves the gradient within the cell */
			}
			/* route path bottom right diagonal */
			& .base-18 {
				grid-area: 12/6/15/10;
				border-color: transparent;
				background: linear-gradient(
					70deg,
					transparent calc(var(--_route-center) - calc(var(
											--_route-line-width
										) / 2)),
					var(--_route-bottom-color) calc(
							var(--_route-center) - calc(var(--_route-line-width) / 2)
						),
					var(--_route-bottom-color) var(--_route-center),
					var(--_route-bottom-color) calc(
							var(--_route-center) + calc(var(--_route-line-width) / 2)
						),
					transparent calc(var(--_route-center) + calc(var(
											--_route-line-width
										) / 2))
				);
				background-size: 200% 200%; /* Makes the gradient larger or smaller */
				background-position: 41% 71%; /* Moves the gradient within the cell */
			}
		}
	}
}
```
