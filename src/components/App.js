import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Event from "./Event";
// indexのインポートはindexの部分を省略可
import reducer from "../reducers";

const App = () => {
  // 状態遷移をさせたい時にdispatchを呼ぶ,引数には少なくともactionを渡す
  const [state, dispatch] = useReducer(reducer, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    // デフォルト挙動を防止，画面全体の更新を防止
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button className="btn btn-primary" onClick={addEvent}>
            イベントを作成する
          </button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </div>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            // event, dispatchを受け渡し
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
