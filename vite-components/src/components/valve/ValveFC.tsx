import * as React from 'react'
import { type ReactNode } from 'react'
import type {
	ValveProps,
 } from '../../api/types'

import { getItemClassName, itemNames } from '../../api/utils'
import Item from '../item/item'
import { useCreateContext } from '../../utils/createContext'
import {VALVE_COMPONENT_TYPE
} from '../../api/types'
// import {valveStatus} from '../../api/initialState'
const COMPONENT_TYPE = VALVE_COMPONENT_TYPE;


// import {valveStatus} from './initialState'

type ValveCompoundProps = {

	valveProps:ValveProps,
	onActionPerformed: ()=> void
	children: ReactNode;
}




const [ValveContextProvider, useValveContext] =
	useCreateContext<ValveCompoundProps>("ValveCompound");

const Root = ({valveProps , children}:ValveCompoundProps) =>{

	const eventsEnabled= true;
	/**
	 * Handler for the component's action event.
	*/
	const onActionPerformed = () => {
		// If the designer is in "design" mode, don't do anything
		if (!eventsEnabled) {
			console.log("Valve is disabled in the design-scope");
			return;
		}
		console.log("Valve clicked!");
		// componentEvents. fireComponentEvent("onActionPerformed", {});
	};
  return (
	<ValveContextProvider
	{...{
		valveProps,
		onActionPerformed
	}}
	>
	{children}
	</ValveContextProvider>
  )
}
const valve = () => {
const {valveProps, onActionPerformed} = useValveContext("Valve");
const {ValveStatus} = valveProps;
const inCoord = false;
// Memoize the handleClick function
// const handleClick = React.useCallback(()=>{
// 	props.onActionPerformed();
// },[props]);
  // Memoize itemNames to prevent re-creation on every render
  const memoizedItemNames = React.useMemo(() => itemNames, []);
{console.log(`itemName ${memoizedItemNames}`)}
if (!inCoord){
	return (
				<div
				className={'hmi-component'}
				// {...emit({
					// 	classes: [`hmi-component hmi-component__column `],
					// })}
					data-component={COMPONENT_TYPE}
					>
					<div className="hmi-component__row">
						<div className="hmi-component-valve">
							{memoizedItemNames.map(
								({ value, index, key }) => (
									console.log(`re-rendered ,key ${key} value ${value} index ${index}`),
									(
										<Item
										itemClassName={
											value + " " + getItemClassName(index, ValveStatus)
										}
										handleClick={onActionPerformed}
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
		// {...emit({
		// 	classes: [`hmi-component hmi-component-valve `],
		// })}
		className={'hmi-component'}
		data-component={COMPONENT_TYPE}
		>
					{memoizedItemNames.map(
						({ value, index, key }) => (
							console.log(`re-rendered ,key ${key} value ${value} index ${index}`),
							(
								<Item
									itemClassName={
										value + " " + getItemClassName(index, ValveStatus)
									}
									handleClick={() => {onActionPerformed}}
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
	valve
}

