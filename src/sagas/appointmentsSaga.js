import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  getAppointmentsSuccess,
  getAppointmentsError,
  saveAppointmentSuccess,
  saveAppointmentError,
} from "../redux/action/actions";

import * as type from "../redux/action/Type";

import {
  getAppointmentsFromAPI,
  saveAppointmentData,
} from "../API/apiContainer";

function* fetchAppointments() {
  try {
    let currentState = yield select();
    let accessToken = currentState?.auth?.accessToken;
    const appointmentsData = yield call(getAppointmentsFromAPI, accessToken);
    yield put(getAppointmentsSuccess(appointmentsData));
  } catch (error) {
    yield put(alert("Something went wrong"));
    yield put(getAppointmentsError(error.message));
  }
}

function* saveAppointment(payload) {
  try {
    let currentState = yield select();
    let accessToken = currentState?.auth?.accessToken;
    payload.accessToken = accessToken;
    const appointmentObj = yield call(saveAppointmentData, payload);
    yield put(saveAppointmentSuccess(appointmentObj));
  } catch (error) {
    yield put(alert("Something went wrong"));
    yield put(saveAppointmentError(error.message));
  }
}

function* appointmentsSaga() {
  yield takeEvery(type.GET_APPOINTMENTS_REQUESTED, fetchAppointments);

  yield takeEvery(type.SAVE_APPOINTMENT_REQUEST, saveAppointment);
}

export default appointmentsSaga;
