import React, {FC} from "react";
import style from "./ChessBoard.module.scss";

const verticalLine: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalLine: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export const ChessBoard: FC = () => {
    let board = [];

    for (let j = verticalLine.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalLine.length; i++) {
            const number = j + i + 2;
            board.push(<div
                className={number % 2 === 0 ? style.blackColor : style.whiteColor}
                key={`${horizontalLine[i]}${verticalLine[j]}`}
            >
                [{horizontalLine[i]}{verticalLine[j]}]
            </div>)
        }
    }

    return (
        <div className={style.chessboard}>
            {board}
        </div>
    )
};