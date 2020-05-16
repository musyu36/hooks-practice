import React from "react";
import { DELETE_EVENT } from "../actions";

// event, dispatchを受け取り
const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント id ${id} を削除しても良いですか？`);

    if (result) {
      dispatch({ type: DELETE_EVENT, id });
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;