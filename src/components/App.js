import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";
// indexのインポートはindexの部分を省略可
// import reducer from "../reducers/index.js";

const APP_KEY = "appWithRedux";

const App = () => {
  // localStorageから値を取り出し
  const appState = localStorage.getItem(APP_KEY);
  // localStorageに値があればparseで文字列からオブジェクトに変換してから格納
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };

  // 状態遷移をさせたい時にdispatchを呼ぶ,引数には少なくともactionを渡す
  // useReducer(reducer, 管理するデータ(今回はイベント一覧))
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffectでstateの値を監視
  useEffect(() => {
    // local storageに保存できるように文字列化して保存
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    // contextによる値の受け渡し
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
