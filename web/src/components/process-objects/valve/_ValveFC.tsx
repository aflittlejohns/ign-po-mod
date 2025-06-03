import * as React from 'react'
import { type ReactNode } from 'react'
import type {
	ValveProps,
 } from '../../../api/types'
import type { ComponentProps } from '@inductiveautomation/perspective-client'
import { COMPONENT_TYPE } from '../../Valve'
import { getItemClassName, itemNames } from './utils'
import Item from './item'
import { useCreateContext } from '../../../utils/createContext'
import { useValveReducer } from '../../../api/hooks'

type ValveCompoundProps = {
	componentProps:ComponentProps<any,any>,
	valveProps:ValveProps,
	onActionPerformed: ()=> void
	children: ReactNode;
}

const [ValveContextProvider, useValveContext] =
	useCreateContext<ValveCompoundProps>("ValveCompound");

const Root = ({valveProps, componentProps, onActionPerformed, children}:ValveCompoundProps) =>{


  return (
	<ValveContextProvider
	{...{
		valveProps,
		componentProps,
		onActionPerformed,
		useValveReducer // update PropertyTree from Actions on Component
	}}
	>
	{children}
	</ValveContextProvider>
  )
}
const Valve = () => {
const {valveProps, componentProps, onActionPerformed} = useValveContext("Valve");
const {ValveStatus} = valveProps;
const {position, emit} = componentProps;
const inCoord = position?.x ?? false;
//Memoize the handleClick function
// const handleClick = React.useCallback(()=>{
// 	props.onActionPerformed();
// },[props]);
 // Memoize itemNames to prevent re-creation on every render
  const memoizedItemNames = React.useMemo(() => itemNames, []);
{console.log(`itemName ${memoizedItemNames}`)}
if (!inCoord){
	return (
				<div
					{...emit({
						classes: [`hmi-component hmi-component__column `],
					})}
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
		{...emit({
			classes: [`hmi-component hmi-component-valve `],
		})}
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
	Valve
}

