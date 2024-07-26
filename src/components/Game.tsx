import { useState } from "react";
import Board from "./Board";
import { SquareType } from "../types";
import { calculateWinner } from "../calculateWinner";

const initialSquares = Array(9).fill(null);

function Game({onWin}: {onWin:Function}) {
	const [history, setHistory] = useState<SquareType[][]>([initialSquares]);
	const [xIsNext, setXIsNext] = useState<boolean>(true);

	const currentSquares = history[history.length - 1];
	let status;
	const winner = calculateWinner(currentSquares);
	status = winner
		? `Winner: ${winner}`
		: "Next player: " + (xIsNext ? "x" : "o");

	function handlePlay(newSquares: SquareType[]) {
		setHistory([...history, newSquares]);
		setXIsNext(!xIsNext);
	}

	function restartGame() {
		setHistory([initialSquares]);
		setXIsNext(true);
    onWin(null);
	}

  if(winner) {
    onWin(winner);
  }

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-3xl text-center">{status}</h2>
			<Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
			{winner && (
				<button
					onClick={restartGame}
					className={`py-2.5 ${
						winner === "x" ? "bg-blue-600" : "bg-red-600"
					} text-lg text-white rounded duration-200 active:opacity-80`}
				>
					Restart
				</button>
			)}
		</div>
	);
}

export default Game;
