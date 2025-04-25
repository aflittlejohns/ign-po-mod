// Compound Component Example
import { ReactNode, useState } from 'react';
import { createContext } from './createContext';

type ItemType<S, A> = {
	id: string;
	active: boolean;
	command: ({ state, action}:{state : S; action: A})=> void // call reducer
}
type AuthType = {
	userName: string;
	password: string;
	authorised: ()=> boolean
}

type ExampleContextType<S, A> = {
item: ItemType<S , A>;
updateItemState: ()=> void;
auth: AuthType
}
 type ExampleCompoundComponentProps = {
	itemId: string;
	close: ()=> void;
	children: ReactNode;
 }

const [ExampleContextProvider, useExampleContextProvider] =
	createContext<ExampleContextType<any, any>>("ExampleContext")

// Root Component provides Context
const Root = ({itemId, close, children}: ExampleCompoundComponentProps ) => {
	const [itemState, updateItemState ] = useState({
		itemId:"",
		active: false,
	});

}
