import { combineReducers } from "redux";
import events from "./events";
import operationLog from "./operationLogs";

// combineReducersでreducerをここでまとめる
export default combineReducers({ events, operationLog });
