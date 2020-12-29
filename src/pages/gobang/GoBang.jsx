import React, { useEffect } from "react";
import HeadNav from "../../components/headNav";
import "./gobang.less";

const GoBang = () => {
  useEffect(() => {
    const initialBoard = () => {
      let chess = document.getElementById("chess");
      let context = chess.getContext("2d");
      /*设置线颜色*/
      context.strokeStyle = "#bfbfbf";
      /*添加背景颜色*/
      context.fillStyle = "grey";
      context.fillRect(0, 0, 450, 450);
      /*绘制棋盘*/
      let drawChess = function () {
        for (let i = 0; i < 15; i++) {
          /*=== 竖线 ===*/
          context.moveTo(15 + i * 30, 15);
          context.lineTo(15 + i * 30, 435);
          context.stroke();
          /*=== 横线 ===*/
          context.moveTo(15, 15 + i * 30);
          context.lineTo(435, 15 + i * 30);
          context.stroke();
        }
      };
      drawChess();
      /*绘制棋子*/
      let oneStep = function (i, j, me) {
        context.beginPath();
        context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
        context.closePath();
        /*渐变*/
        let gradient = context.createRadialGradient(
          15 + i * 30 + 2,
          15 + j * 30 - 2,
          13,
          15 + i * 30,
          15 + j * 30,
          0
        );
        if(me) {
          gradient.addColorStop(0, "#0a0a0a");
          gradient.addColorStop(1, "#636765");
        } else {
          gradient.addColorStop(0, "#d1d1d1");
          gradient.addColorStop(1, "#f9f9f9");
        }
        context.fillStyle = gradient;
        context.fll();
      };
      /*棋子落下事件*/
      let arr = [];
      let chessBoard = [];
      for(let i=0;i<15;i++) {
        arr[i] = [];
        for(let j=0;j<15;j++) {
          arr[i][j] = 0;
        }
      }
      let me = true;
      chess.onclick = function(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let i = Math.floor(x/30);
        let j = Math.floor(y/30);
        if(chessBoard[i][j] == 0) {
          oneStep(i,j,me);
          if(me) {
            chessBoard[i][j] = 1;
          } else {
            chessBoard[i][j] = 2;
          }
          me = !me;
        }
      };
    };
    initialBoard();
  }, []);

  return (
    <div>
      <HeadNav />
      <div className="gobang">
        <canvas id="chess" width="450px" height="450px"></canvas>
      </div>
    </div>
  );
};

export default GoBang;
