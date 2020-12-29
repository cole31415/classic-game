import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
/*====== 引入分片式懒路由加载 =====*/
import { lazyLoad } from "./utils/loadable";
const Admin = lazyLoad(() => import("./pages/admin/Admin"));
const GoBang = lazyLoad(() => import("./pages/gobang/GoBang"));
const GreedySnake = lazyLoad(() => import("./pages/greedy-snake/GreedySnake"));
const Tetris = lazyLoad(() => import("./pages/tetris/Tetris"));
const Lian2Kan = lazyLoad(() => import("./pages/lian2kan/Lian2Kan"));
const Sokoban = lazyLoad(() => import("./pages/sokoban/Sokoban"));

const App = () => {
  return (
    <HashRouter>
      <Switch>
        {/* 只会匹配其中一个 */}
        <Route path="/gobang" component={GoBang} />
        <Route path="/greedy-snake" component={GreedySnake} />
        <Route path="/tetris" component={Tetris} />
        <Route path="/lian2kan" component={Lian2Kan} />
        <Route path="/sokoban" component={Sokoban} />
        <Route path="/" component={Admin} />
      </Switch>
    </HashRouter>
  );
};

export default App;
