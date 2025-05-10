import * as React from 'react'
import { type ReactNode } from 'react'
import type {
	ValveProps,
 } from './types'
import type { ComponentProps } from '@inductiveautomation/perspective-client'
import { createContext } from '../../../utils/createContext'
import { COMPONENT_TYPE } from '../../Valve'
import { getItemClassName, itemNames } from './utils'
import Item from './item'

type ValveCompoundProps = {
	componentProps?:ComponentProps<any,any>,
	valveProps:ValveProps,
	children: ReactNode;
}

const [ValveContextProvider, useValveContext] =
	createContext<ValveCompoundProps>("ValveCompound");

const Root = ({valveProps, componentProps, children}:ValveCompoundProps) =>{
	const {props} = componentProps ?? {};
	/**
	 * Handler for the component's action event.
	 */
	const onActionPerformed = () => {
		// If the designer is in "design" mode, don't do anything
		if (!props.eventsEnabled) {
			console.log("Valve is disabled in the design-scope");
			return;
		}
		console.log("Valve clicked!");
		props.componentEvents.fireComponentEvent("onActionPerformed", {});
	};
  return (
	<ValveContextProvider
	{...{
		valveProps,
		componentProps,
		onActionPerformed
	}}
	>
	{children}
	</ValveContextProvider>
  )
}
const Valve = () => {
const {valveProps, componentProps} = useValveContext("Valve");
const {ValveStatus} = valveProps;
const {position, props} = componentProps ?? {};
const inCoord = position?.x ?? false;
if (!inCoord){
	return (
				<div
					{...componentProps?.emit({
						classes: [`hmi-component hmi-component__column `],
					})}
					data-component={COMPONENT_TYPE}
				>
					<div className="hmi-component__row">
						<div className="hmi-component-valve">
							{itemNames.map(
								({ value, index, key }) => (
									//console.log("re-rendered ", index),
									(
										<Item
											itemClassName={
												value + " " + getItemClassName(index, ValveStatus)
											}
											handleClick={props.onActionPerformed}
											key={key}
										/>
									)
								)
							)}
						</div>
					</div>
				</div>
	)
} else {
			return (
				<div
					{...componentProps?.emit({
						classes: [`hmi-component hmi-component-valve `],
					})}
					data-component={COMPONENT_TYPE}
				>
					{itemNames.map(
						({ value, index, key }) => (
							//console.log("re-rendered ", index),
							(
								<Item
									itemClassName={
										value + " " + getItemClassName(index, ValveStatus)
									}
									handleClick={props.onActionPerformed}
									key={key}
								/>
							)
						)
					)}
				</div>
			);
		}
}

export const ValveFCCompound = {
	Root,
	Valve
}

