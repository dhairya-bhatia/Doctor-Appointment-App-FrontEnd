import { combineReducers } from "redux";
import appointmentReducer from "./appointmentDataReducer";
import authReducer from "./authReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data: appointmentReducer,
    auth: authReducer,
  });

export default rootReducer;
