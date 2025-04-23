
export function Valve({onClick}){

	function handleClick(){
		console.log('clicked');
		onClick && onClick();
	}


	return (
		<div
		onClick={handleClick}
		className={"valve anchor"}
		>
			<p>valve</p>
		</div>
	)
}
