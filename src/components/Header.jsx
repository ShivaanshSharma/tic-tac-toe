import image from "../assets/game2.png";
import Card from "../Helpers/Card";

export default function Header() {
  return (
    <Card>
      <img src={image} id="header-img" />
      <h1>Tic-Tac-Toe test commit to github</h1>
    </Card>
  );
}
