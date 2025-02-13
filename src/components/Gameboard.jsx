
import Card from "../Helpers/Card";

export default function Gameboard({gameBoard, clickHandler, isWinner}) {

    return (
        <Card>
            <div id="main-container">
                {gameBoard.map((row, rowIndex) => <span key={rowIndex}>
                    <div className="inner-container">
                        {row.map((item, colIndex) => <span key={colIndex} className="each-btn-span"><button disabled={item !== null || isWinner.length > 0} onClick={() => clickHandler(rowIndex, colIndex)} className="board-btn">{item}</button></span>)}
                    </div>
                </span>)}
            </div>
        </Card>
    )
}