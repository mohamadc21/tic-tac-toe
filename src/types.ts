export type SquareType = "x" | "o" | null;

export type SquareComponentType = {
	value: SquareType;
	onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
};

