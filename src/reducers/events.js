import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from "../actions";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      // キー値と変数名が同じなら省略可能
      //   return [...state, { id: id, ...event }];
      return [...state, { id, ...event }];

    case DELETE_EVENT:
      //   渡されてきたid(削除したいid)以外のイベントをfilterで抽出して返す
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
