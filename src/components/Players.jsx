import Card from "../Helpers/Card";
import Player from "./Player";

export default function Players() {

  return (
    <Card>
      <h2>Player Info</h2>
      <div id="player-info">
        <Player initialName='Player 1' />
        <Player initialName='Player 2' />
      </div>
    </Card>
  );
}
