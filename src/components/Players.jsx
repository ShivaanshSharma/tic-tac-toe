import Card from "../Helpers/Card";
import Player from "./Player";

export default function Players({activePlayer, currentPlayers, nameChange}) {

  return (
    <Card>
      <h2>Player Info</h2>
      <div id="player-info">
        <Player setNewName={nameChange} initialName={currentPlayers['O']} symbol='O' active={activePlayer === 'O'}/>
        <Player setNewName={nameChange} initialName={currentPlayers['X']} symbol='X' active={activePlayer === 'X'}/>
      </div>
    </Card>
  );
}
