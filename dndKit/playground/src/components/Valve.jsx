
export function Valve({onClick, x=50 , y=50 }){

	function handleClick(e){
		console.log('clicked');
		onClick && onClick(e);
	}
const style = {
	left: {x},
	top: {y}
}

	return (
		<div
		style={style}
		className={'valve anchor'}
		onClick={handleClick}
		>
			<p>valve</p>
		</div>
	)
}
