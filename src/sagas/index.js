import { fork } from "redux-saga/effects";
import appointmentsSaga from "./appointmentsSaga";

export default function* rootSaga() {
  yield fork(appointmentsSaga);
}
