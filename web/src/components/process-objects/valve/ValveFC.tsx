import React, { useState, type ReactNode } from 'react'
import type {
	ValveProps,
 } from './types'
import type { ComponentProps } from '@inductiveautomation/perspective-client'
import { createContext } from '../../../utils/createContext'

type ValveCompoundProps<ComponentProps,ValveProps> = {
	componentProps:ComponentProps,
	valveProps:ValveProps,
	children: ReactNode;
}

const [ValveContextProvider, useValveContext] =
	createContext<ValveCompoundProps<any,any>>("ValveCompound");

const Root = ({valveProps, componentProps, children}:ValveCompoundProps<any,any>) =>{

  return (
	<ValveContextProvider
	{...{
		valveProps,
		componentProps,
	}}
	>
	{children}
	</ValveContextProvider>
  )
}
const Valve = () => {

}


export const ValveFCCompound = {
	Root,
}

