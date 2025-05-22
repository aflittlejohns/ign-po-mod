import * as React from "react";
import { tExtdParam, tExtdParamsProps } from "./types/extdparams";
import ParamNumberField from "../../util/ParamNumberField";

const ExtdParams: React.FC<tExtdParamsProps> = ({
	extdParamItems,
}): React.ReactElement => {
	const [items, setItems] = React.useState<tExtdParam[]>(extdParamItems);
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number,
		value: number
	) => {
		event.preventDefault();
		const newItems = [...items];
		newItems[index].input.value = value;
		setItems(newItems);
	};

	return (
		<div className="lif-valve-faceplate__extd-params">
			{items.map((item, index) => {
				const { label, input } = item;
				return (
					<ParamNumberField key={index} label={label} input={input} />
				);
			})}
		</div>
			)
		// <div className="lif-valve-faceplate__extd-params">
		//  	{extdParamItems.map((item, index) => {
		// 		const isHeaderClass: string = item.label.isHeader
		// 			? "--header"
		// 			: "-label";
		// 		const input = item.label.isHeader ? null : (
		// 			<input
		// 				key={index}
		// 				className="lif-valve-faceplate__extd-params__item-input"
		// 				type={item.input.type}
		// 				value={item.input.value}
		// 				onChange={(e) => {
		// 					handleChange(e, index, e.target.value);
		// 				}}
		// 				disabled={!item.input.editable ? true : false}
		// 				required={item.input.editable ? true : false}
		// 				min={item.input.min}
		// 				max={item.input.max}
		// 				pattern={item.input.pattern}
		// 			/>

		// 		);

		// 		return (
		// 			<form key={index} className="lif-valve-faceplate__extd-params__item">
		// 				{/* Prevent implicit submission of the form */}
		// 				<button
		// 					key={index}
		// 					aria-hidden="true"
		// 					className="hidden"
		// 					disabled
		// 					type="submit"
		// 				></button>
		// 				<label
		// 					key={index}
		// 					className={`lif-valve-faceplate__extd-params__item${isHeaderClass}`}
		// 				>
		// 					{item.label.value}
		// 					{input}
		// 				</label>
		// 				<span key={index}	className="lif-valve-faceplate__extd-params__item-eu">
		// 					{item.input.eu ?? ""}
		// 				</span>
		// 			</form>
	// 			);
	// 		})}
	// 		<ParamNumberField />
	// 	</div>
	// );
};
ExtdParams.displayName = "ExtdParams";
export default ExtdParams;
