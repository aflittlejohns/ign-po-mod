import { useEffect, useRef } from "react";
import { useGenericContext } from "../stores/DraggableGenericContext";

export function Valve({onClick, id="valve"}){
const context = useGenericContext();
const elementRef = useRef(null);
const {state, dispatch} = context;
	function handleClick(){
		console.log('clicked');
		onClick && onClick();
	}
	useEffect(() => {
		const getPosition = () => {
			const element = elementRef.current;
			if(element){
			const	{top, left} = element.getBoundingClientRect();
			dispatch({
				type: "UPDATE_POSITION",
				payload:{
					componentId:id,
					data:{
						x: left,
						y: top,
					},
				} ,
			})
			}
		}
		getPosition();
	//   return () => {
	// 	second
	//   }
	}, []);



	return (
		<div
		ref = {elementRef}
		onClick={handleClick}
		className={"valve anchor"}
		>
			<p>valve</p>
		</div>
	)
}
