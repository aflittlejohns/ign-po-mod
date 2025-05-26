import * as React from "react";
// import EditNoteIcon from "@mui/icons-material/EditNote";
import IconButton from "@mui/material/IconButton";
import { NoteIcon } from  '../utils/icons';
import type { HeaderProps } from "./types/header";



const Header: React.FC<HeaderProps> = ({ itemId }): React.ReactElement => {



	return (

		<div className="lif-valve-faceplate__header">
		<span className="lif-valve-faceplate__header__title">{itemId}</span>
		<IconButton className="lif-valve-faceplate__header__note" size="small" color="primary" aria-label="edit note">
			{/* <EditNoteIcon /> */}
			<NoteIcon fill="var(--green-100)"/>
		</IconButton>
		</div>


	);
};
Header.displayName = "Header";
export default Header;
