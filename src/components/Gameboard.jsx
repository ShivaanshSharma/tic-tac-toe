// import { useState } from "react";
import Card from "../Helpers/Card";
// import {WINNING_COMBINATIONS} from '../winning-combinations';

// const initialBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];

export default function Gameboard({activePlayer, onPlayerChange, gameBoard, clickHandler}) {

    // const [board, setBoard] = useState(initialBoard);

    // let winner = '';

    // for (const item of WINNING_COMBINATIONS) {
    //     const firstSymbol = board[item[0].row][item[0].column];
    //     const secondSymbol = board[item[1].row][item[1].column];
    //     const thirdSymbol = board[item[2].row][item[2].column];

    //     if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
    //         winner = firstSymbol;
    //     }
    // }

    // console.log(winner);

    // const buttonClickHandler = (row, col) => {
    //     setBoard((prev) => {
    //         const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
    //         updatedBoard[row][col] = activePlayer;
    //         return updatedBoard;
    //     })
    //     onPlayerChange();
    // }

    return (
        <Card>
            <div id="main-container">
                {gameBoard.map((row, rowIndex) => <span key={rowIndex}>
                    <div className="inner-container">
                        {row.map((item, colIndex) => <span key={colIndex} className="each-btn-span"><button disabled={item !== null} onClick={() => clickHandler(rowIndex, colIndex)} className="board-btn">{item}</button></span>)}
                    </div>
                </span>)}
            </div>
        </Card>
    )
}