
import {ParamCompound, ParamItem} from './ParamsCompound';

type ParamProps = {
	paramItem: ParamItem;
}
export const Param: React.FC<ParamProps> = ({paramItem}) => {
	const { label, input } = paramItem;
	return (
		<ParamCompound.Root paramItem={paramItem}>
		<label className="field small error">

			<span className="label">{label.text}</span>
			<span className="eu">{input.eu}</span>

			<input type="text"
			inputMode="numeric"
			pattern="[0-9]*"
			placeholder={input.placeholder}
			value={input.value}
			/>
			<span className="supporting-text">{input.inputmode}</span>
		</label>
		</ParamCompound.Root>
		)

}
