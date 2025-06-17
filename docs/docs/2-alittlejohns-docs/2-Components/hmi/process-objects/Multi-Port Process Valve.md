---
title: Multi-port Process Valve
---

:::tip
The Multi-port process valve component appearance is configurable by providing a configuration value for the de-activated and activated position
states.
:::

## De-coding the configuration value

The valve component concise of two parts which we shall call v1 and v2.

v1 represents the top part, and v2 the bottom part.

v1 is always displayed, and is used to represent two and three port valves.
v2 is selectable, and together with v1, is used to represent multi-port and multi-port mix-proof process valves.

The visulisation of each dynamic valve component element depends on the boolean state of it's associated bit of the active or deactivate configuration value.

Therefore, the configuration value is the sum of all true bit weightings required for each position state visulisation.

### The Element Bit Positions

![Valve Bit Positions](../../../../../assets/valve-config.drawio.svg)


