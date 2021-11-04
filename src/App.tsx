import React from 'react';
import style from "./Main.module.scss";
import {ChessBoard} from "./components/ChessBoard";

export const App = () => {
  return (
    <div className={style.wrapper}>
      <ChessBoard/>
    </div>
  )
};
