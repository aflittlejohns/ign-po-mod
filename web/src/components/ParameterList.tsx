import * as React from "react";
import { PropertyTree } from "@inductiveautomation/perspective-client";
import type {
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
} from "@inductiveautomation/perspective-client";

// import { useCreateContext } from "src/utils/createContext";
import { ParametersListState, ParamItem } from "../api/types";
import {
	PARAMETER_LIST_COMPONENT_TYPE,
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
} from "../constants";

type ParametersListComponentProps = {
	parameters: ParamItem[];
};
const initParameters = [
	{
		label: {
			text: "text",
		},
		input: {
			value: null,
			placeholder: "Enter a Number",
		},
	},
];

export const COMPONENT_TYPE = PARAMETER_LIST_COMPONENT_TYPE;

export const ParameterListComponent = (
	props: ComponentProps<ParametersListComponentProps>
) => {
	const transformedProps = React.useMemo(() => {
		const { parameters } = props.props || initParameters;
		return parameters;
	}, [props.props.parameters]);
	const { emit } = props;
	const componentClassName = "parameter-list";

	return (
		<div
			{...emit({
				classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
			})}
			data-component={COMPONENT_TYPE}
		>
			<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
				<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
					<div className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}>
						{transformedProps.map((param: ParamItem, index: number) => {
							const { label, input } = param;
							return (
								<label
									key={`${label.text}-parameter${index}`}
									className="field small"
								>
									<span className="label">{label.text}</span>
									<span className="eu">{input.eu}</span>
									<input
										type="text"
										id={`${label.text}-parameter${index}`}
										inputMode={input.inputmode}
										pattern={input.pattern || "[0-9]*"}
										placeholder={input.placeholder}
										disabled={!input.editable}
										min={input.min}
										max={input.max}
										value={input.value}
										onChange={(e) => {
											props.store.props.write(
												`parameters[${index}].input.value`,
												e.currentTarget.value
											);
											// updateValue(parseFloat(parseFloat(e.target.value).toFixed(2)), index);
										}}
									/>
								</label>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export class ParameterListComponentMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 240,
			height: 240,
		};
	}

	getPropsReducer(tree: PropertyTree): ParametersListState {
		return {
			parameters: tree.read("parameters", [
				{
					label: {
						text: "label",
						className: "",
						tooltipText: "",
						tooltipPosition: "",
						tooltipClassName: "",
						tooltipId: "",
					},
					input: {
						type: "text",
						inputmode: "numeric",
						placeholder: "Enter a number",
						editable: true,
						pattern: "^[0-9]*[.,]?[0-9]*$",
						min: 0,
						max: 100,
						decimalPlaces: 2,
						eu: "\u00B5C",
						value: 0,
					},
				},
			]),
		};
	}

	getViewComponent(): PComponent {
		return ParameterListComponent as PComponent;
	}
}
