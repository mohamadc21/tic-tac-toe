import Square from "./Square";
import { calculateWinner } from "../calculateWinner";
import { SquareType } from "../types";

// const initialSquares = Array(9).fill(null);
type BoardTypes = {
	squares: SquareType[],
	xIsNext: boolean,
	onPlay: Function,
};

function Board({squares, xIsNext, onPlay}:BoardTypes) {

  function handleClick(i:number) {
    const newSquares = [...squares];
    if(calculateWinner(squares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? 'x' : 'o';
    calculateWinner(newSquares);
    onPlay(newSquares);
  }

  return (
		<div className="flex flex-col bg-gray-950">
      <div>
        <div className="flex border-t border-b border-gray-600">
          <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
          <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
          <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
        </div>
        <div className="flex border-b border-gray-600">
          <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
          <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
          <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
        </div>
        <div className="flex border-b border-gray-600">
          <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
          <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
          <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
        </div>
      </div>
		</div>
	);
}

export default Board;
