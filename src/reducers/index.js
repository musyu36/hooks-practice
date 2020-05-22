import { combineReducers } from "redux";
import events from "./events";
import operationLogs from "./operationLogs";

// combineReducersでreducerをここでまとめる
export default combineReducers({ events, operationLogs });
