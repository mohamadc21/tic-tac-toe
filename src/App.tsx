import { useState } from "react";
import Game from "./components/Game";
import { SquareType } from "./types";

function App() {

  const [winner, setWinner] = useState<SquareType>(null);

  function onWin(winner:SquareType) {
    setWinner(winner);
  }

  return (
		<div
			className={`flex pt-36 justify-center min-h-screen font-poppins ${winner ? (winner === 'x' ? 'bg-red-600' : 'bg-blue-600') : 'bg-gray-950'} text-white overflow-hidden`}
		>
			<Game onWin={onWin} />
		</div>
	);
}

export default App;
