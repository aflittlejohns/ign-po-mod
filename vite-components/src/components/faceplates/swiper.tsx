import React  from "react";
import ReactDOMServer from "react-dom/server";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef, SwiperProps } from "swiper/react";
//import {SwiperRef} from 'swiper/types';
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/swiper-bundle.css";

import { StatusIcon, SettingsIcon, TuneIcon } from "../utils/icons";

const bulletSVGList = [<StatusIcon fill="var(--orange-20)" />, <SettingsIcon fill="var(--orange-20)" />, <TuneIcon fill="var(--orange-20)" />];

const SwiperPanel: React.FC<
	SwiperProps & React.RefAttributes<SwiperRef>
> = (props): React.ReactElement => {
	const { children } = props;
	// Pagination options
	const pagination = {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: (index: number, className: string) => {
			const svgIcon = bulletSVGList[index % bulletSVGList.length];
			return `<span class="${className}">${ReactDOMServer.renderToStaticMarkup(svgIcon)}</span>`;
		},
	};

	return (
		<>
			<Swiper
				pagination={pagination}
				modules={[Pagination]}
				className="lif-valve-faceplate__swiper"
			>
				{React.Children.map(children, (child, index) => (
					<SwiperSlide key={index}>{child}</SwiperSlide>
				))}
				<div className="swiper-pagination"></div>
			</Swiper>
		</>
	);
};

export default SwiperPanel;
