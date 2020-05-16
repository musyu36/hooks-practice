import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";
// indexのインポートはindexの部分を省略可
// import reducer from "../reducers/index.js";

const App = () => {
  // 状態遷移をさせたい時にdispatchを呼ぶ,引数には少なくともactionを渡す
  const [state, dispatch] = useReducer(reducer, []);

  return (
    // contextによる値の受け渡し
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
