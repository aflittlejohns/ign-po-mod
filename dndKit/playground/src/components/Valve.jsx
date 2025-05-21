
export function Valve({onClick, x=50 , y=50, className="valve"}){

	function handleClick(e){
		console.log('clicked');
		onClick && onClick(e);
	}
const style = {
	display: "flex",
	textBoxTrim:"trim-both" ,
	left: x,
	top: y,
	width: "50px",
	justifyContent: "center",
	alignItems:"center",
}

	return (
		<div
		style={style}
		className={`${className} anchor`}
		onClick={handleClick}
		>
			<p>{className}</p>
		</div>
	)
}
