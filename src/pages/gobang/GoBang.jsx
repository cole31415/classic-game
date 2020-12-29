import React, { useEffect } from "react";
import HeadNav from "../../components/headNav";
import "./gobang.less";

const GoBang = () => {
  useEffect(() => {
    const initialBoard = () => {
      let chess = document.getElementById("chess");
      let context = chess.getContext("2d");
      context.strokeStyle = "#bfbfbf"; // 设置线颜色
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
      /*添加背景颜色*/
      context.fillStyle = "#000";
      context.fillRect(0, 0, 450, 450);
      drawChess();
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
