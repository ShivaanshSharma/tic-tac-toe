import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Players from "./components/Players";
import Card from "./Helpers/Card";

function App() {

  const [player, setPlayer] = useState('O');

  const playerChangeHandler = () => {
    if (player === 'O') {
      setPlayer('X');
    } else {
      setPlayer('O');
    }
  }

  return (
      <>
      <Header />
      <Players activePlayer={player} />
      <Gameboard activePlayer={player} onPlayerChange={playerChangeHandler}/>
      </>
  );
}

export default App;
