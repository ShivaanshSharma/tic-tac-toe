import Card from "../Helpers/Card";
import Player from "./Player";

export default function Players({activePlayer}) {

  return (
    <Card>
      <h2>Player Info</h2>
      <div id="player-info">
        <Player initialName='Player 1' symbol='O' active={activePlayer.symbol === 'O'}/>
        <Player initialName='Player 2' symbol='X' active={activePlayer.symbol === 'X'}/>
      </div>
    </Card>
  );
}
