
export function Valve({onClick}){

	function handleClick(){
		console.log('clicked');
		onClick && onClick();
	}


	return (
		<div
		onClick={handleClick}
		style={{
			position: 'absolute',
			width: '30px',
			aspectRatio: '1:1',
			left: 50,
			top: 50,
			backgroundColor: 'aqua'
		}}
		>
			<p>valve</p>
		</div>
	)
}
