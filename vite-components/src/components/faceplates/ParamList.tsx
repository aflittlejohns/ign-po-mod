
import {ParamCompound, type ParamItem} from './ParamsCompound';

type ParamListProps = {
	paramItemList: ParamItem [];
}
export const ParamList: React.FC<ParamListProps> = ({paramItemList}) => {
	return(
		<ul className="definition-list">
		{paramItemList.map((paramItem, index) => {
		return (
			<ParamCompound.Root key={index} paramItems={paramItem}>
			<li className="field small error">
				<ParamCompound.Param index={index}/>
			</li>
			</ParamCompound.Root>
			);
	})}
	</ul>
)};





