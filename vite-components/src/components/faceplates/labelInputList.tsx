import React  from "react";
import { tExtdParam, tExtdParamsProps } from "./types/extdparams";
import { LabelInput } from "./labelInput";
const LabelInputList: React.FC<tExtdParamsProps> = ({ extdParamItems }): React.ReactElement => {
	const [items, setItems] = React.useState<tExtdParam[]>(extdParamItems);
	const handleChange = (index: number, value: string): void => {
		const newItems = [...items];
		newItems[index].value = value;
		setItems(newItems);
	};
	return (
		<div className="lif-label-input-list">
			{extdParamItems.map((item, index) => {
				return (
				<LabelInput key={index} payload={item.payload} />
				)
			})}
		</div>
	);
};
LabelInputList.displayName = "LabelInputList";
export default LabelInputList;
