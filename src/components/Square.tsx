import { SquareComponentType } from "../types";

function Square({value, onSquareClick}: SquareComponentType) {
  return (
		<button
			className={`text-6xl leading-none size-[85px] odd:border-l odd:border-r border-gray-600 ${value === 'x' ? 'text-rose-600' : 'text-blue-600'} active:bg-gray-900 duration-200`}
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
}

export default Square;
