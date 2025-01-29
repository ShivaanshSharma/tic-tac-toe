import { useState } from "react";
import Card from "../Helpers/Card";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard() {

    const [board, setBoard] = useState(initialBoard);

    const buttonClickHandler = (row, col) => {
        setBoard((prev) => {
            const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
            updatedBoard[row][col] = 'O';
            return updatedBoard;
        })
    }

    return (
        <Card>
            <div id="board-div">
            {board.map((row, rowIndex) => <div key={rowIndex} className="row-div">
                {row.map((item, colIndex) => <button key={colIndex} onClick={() => buttonClickHandler(rowIndex, colIndex)} className="board-btn">{item}</button>)}
            </div>)}
            </div>
        </Card>
    )
}