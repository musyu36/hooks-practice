import React, { useState } from "react";

//親コンポーネントから渡されるstate, dispatchを使用
const EventForm = ({ state, dispatch }) => {
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

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを削除しても良いですか？");
    if (result) {
      dispatch({
        type: "DELETE_ALL_EVENTS",
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
            disabled={state.length === 0}
          >
            全てのイベントを削除する
          </button>
        </div>
      </form>
    </>
  );
};

export default EventForm;
