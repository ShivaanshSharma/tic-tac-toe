import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Players from "./components/Players";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

let counter = 0;

function App() {

  const [players, setPlayers] = useState({
    O: 'Player 1',
    X: 'Player 2'
  })

  const [player, setPlayer] = useState('O');
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

      const buttonClickHandler = (row, col) => {
        setBoard((prev) => {
            const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
            updatedBoard[row][col] = player;
            return updatedBoard;
        })
        playerChangeHandler();
        counter++;
    }

  const playerChangeHandler = () => {
    if (player === 'O') {
      setPlayer('X');
    } else {
      setPlayer('O');
    }
  }

  function playerNameChangeHandler (newName, symb) {
    const newPlayers = {...players};
    newPlayers[symb] = newName;
    console.log(newPlayers);
    setPlayers(newPlayers);
  }

  function restartHandler() {
    setBoard(initialBoard);
    setPlayer('O');
    counter = 0;
  }

  return (
      <>
      {winner ? <dialog id="winner-box" open>Winner is {players[winner]} ({winner})!<p><button onClick={restartHandler} className="btn">Restart the game</button></p></dialog> : null}
      {counter === 9 ? <dialog id="winner-box" open>It's a Draw!<p><button onClick={restartHandler} className="btn">Restart the game</button></p></dialog> : null}
      <Header />
      <Players nameChange={playerNameChangeHandler} activePlayer={player} currentPlayers={players} />
      <Gameboard clickHandler={buttonClickHandler} gameBoard={board} activePlayer={player} onPlayerChange={playerChangeHandler} />
      </>
  );
}

export default App;
