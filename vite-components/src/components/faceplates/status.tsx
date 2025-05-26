import * as React from "react";
import type { StatusProps } from "./types/status";

const Status: React.FC<StatusProps> = ({ statusItems }): React.ReactElement => {
	return (
		<div className="lif-valve-faceplate__status">
			{statusItems.map((item, index) => {
				const statusColorClass: string = item.status
					? "--activated"
					: "--deactivated";
				return (
					<div key={index} className="lif-valve-faceplate__status__item">
						<span className="lif-valve-faceplate__status__item-label">
							{item.label}
						</span>
						<div className={`lif-valve-faceplate__status__item-status${statusColorClass}`}></div>
					</div>
				);
			})}
		</div>
	);
};
Status.displayName = "Status";
export default Status;
