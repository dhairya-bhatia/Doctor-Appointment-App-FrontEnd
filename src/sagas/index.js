import { all } from "redux-saga/effects";
import appointmentsSaga from "./appointmentsSaga";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([appointmentsSaga(), authSaga()]);
}
