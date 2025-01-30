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
            <div id="main-container">
                {board.map((row, rowIndex) => <span key={rowIndex}>
                    <div className="inner-container">
                        {row.map((item, colIndex) => <span key={colIndex} className="each-btn-span"><button onClick={() => buttonClickHandler(rowIndex, colIndex)} className="board-btn">{item}</button></span>)}
                    </div>
                </span>)}
            </div>
        </Card>
    )
}