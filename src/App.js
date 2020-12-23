import React from "react";
import Admin from "./pages/admin/Admin";
import { Route, Switch, HashRouter } from "react-router-dom";
import GoBang from "./pages/gobang/GoBang";
import GreedySnake from "./pages/greedy-snake/GreedySnake";
import Tetris from "./pages/tetris/Tetris";
import Lian2Kan from "./pages/lian2kan/Lian2Kan";
import Sokoban from "./pages/sokoban/Sokoban";

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
