import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import reducer from "../reducers";
// indexのインポートはindexの部分を省略可
// import reducer from "../reducers/index.js";

const App = () => {
  // 状態遷移をさせたい時にdispatchを呼ぶ,引数には少なくともactionを渡す
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      {/* state と dispatch を渡す */}
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
