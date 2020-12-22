import React from 'react';
import UtilsCard from './components/UtilsCard';
import gobang from './assets/images/gobang.png';

const App = () => {
  return (
    <div>
      <div style={{textAlign:'center'}}>导航栏</div>
      <div
        style={{
          backgroundColor: "lightgrey",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <UtilsCard title="黑白对弈-五子棋" url={gobang} />
        <UtilsCard title="无敌贪吃蛇" url={gobang} />
        <UtilsCard title="俄罗斯方块" url={gobang} />
        <UtilsCard title="连连看" url={gobang} />
        <UtilsCard title="推箱子" url={gobang} />
      </div>
    </div>
  );
}

export default App;
