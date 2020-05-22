import React, { useContext, useState } from "react";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";

import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

//親コンポーネントから渡されるstate, dispatchを使用
const EventForm = () => {
  // contextによる,App.jsからの値の受け取り
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    // デフォルト挙動を防止，画面全体の更新を防止
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8601(),
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを削除しても良いですか？");
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS,
      });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました．",
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
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

          <button
            className="btn btn-primary"
            onClick={addEvent}
            disabled={unCreatable}
          >
            イベントを作成する
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteAllEvents}
            disabled={state.events.length === 0}
          >
            全てのイベントを削除する
          </button>
        </div>
      </form>
    </>
  );
};

export default EventForm;
