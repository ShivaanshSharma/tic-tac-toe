import Card from "../Helpers/Card";
import Player from "./Player";

export default function Players({activePlayer}) {

  return (
    <Card>
      <h2>Player Info</h2>
      <div id="player-info">
        <Player initialName='Player 1' active={activePlayer === 'O'}/>
        <Player initialName='Player 2' active={activePlayer === 'X'}/>
      </div>
    </Card>
  );
}
