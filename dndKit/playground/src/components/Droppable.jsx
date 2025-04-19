import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
	const {isOver, setNodeRef} = useDroppable({
		id: 'droppable'
	});
	const style = {
		color: isOver ? 'geen' : undefined,
	};
	return (
		<div ref={setNodeRef} style={style}>
		{props.children}
		</div>
	);
}
