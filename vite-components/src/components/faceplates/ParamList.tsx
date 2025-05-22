
import {ParamCompound, ParamItem} from './ParamsCompound';

type ParamListProps = {
	paramItemList: ParamItem [];
}
export const ParamList: React.FC<ParamListProps> = ({paramItemList}) => {
	return(
		<ul className="definition-list">
		{paramItemList.map((paramItem, index) => {
		return (
			<ParamCompound.Root key={index} paramItem={paramItem}>
			<li className="field small error">
				<ParamCompound.Param />
			</li>
			</ParamCompound.Root>
			);
	})}
	</ul>
)};





