import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Players from "./components/Players";
import Card from "./Helpers/Card";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {

  const [player, setPlayer] = useState({ symbol: 'O', name: 'Player 1'});
  const [board, setBoard] = useState(initialBoard);

  let winner = '';

      for (const item of WINNING_COMBINATIONS) {
          const firstSymbol = board[item[0].row][item[0].column];
          const secondSymbol = board[item[1].row][item[1].column];
          const thirdSymbol = board[item[2].row][item[2].column];
  
          if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
              winner = firstSymbol;
          }
      }

      console.log(winner);

      const buttonClickHandler = (row, col) => {
        setBoard((prev) => {
            const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
            updatedBoard[row][col] = player.symbol;
            return updatedBoard;
        })
        playerChangeHandler();
    }

  const playerChangeHandler = () => {
    if (player.symbol === 'O') {
      setPlayer({...player, symbol: 'X'});
    } else {
      setPlayer({...player, symbol: 'O'});
    }
  }

  return (
      <>
      {winner ? <div id="winner-board">Winner is ABC</div> : null}
      <Header />
      <Players activePlayer={player} />
      <Gameboard clickHandler={buttonClickHandler} gameBoard={board} activePlayer={player} onPlayerChange={playerChangeHandler}/>
      </>
  );
}

export default App;
