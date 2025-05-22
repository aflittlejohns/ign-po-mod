

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	itemId: string;
	noteLink?: React.ReactNode; // Will need to build this out
	handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

