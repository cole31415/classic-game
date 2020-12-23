import React from "react";
import { withRouter } from "react-router-dom";
import UtilsCard from "../../components/UtilsCard";
import gobangImg from "../../assets/images/gobang.png";
import greedySnakeImg from "../../assets/images/greedy-snake.jpg";
import tetrisImg from "../../assets/images/tetris.jpeg";
import lian2kanImg from "../../assets/images/lian-2-kan.jpg";
import sokobanImg from "../../assets/images/sokoban.gif";

const Admin = ({ history }) => {
  const gobang = () => {
    history.push("/gobang");
  };

  const greedySnake = () => {
    history.push("/greedy-snake");
  };

  const tetris = () => {
    history.push("/tetris");
  };

  const lian2kan = () => {
    history.push("/lian2kan");
  };

  const sokoban = () => {
    history.push("/sokoban");
  };

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <UtilsCard title="黑白对弈-五子棋" url={gobangImg} onclick={gobang} />
      <UtilsCard
        title="无敌贪吃蛇"
        url={greedySnakeImg}
        onclick={greedySnake}
      />
      <UtilsCard title="俄罗斯方块" url={tetrisImg} onclick={tetris} />
      <UtilsCard title="连连看" url={lian2kanImg} onclick={lian2kan} />
      <UtilsCard title="推箱子" url={sokobanImg} onclick={sokoban} />
    </div>
  );
};

export default withRouter(Admin);
