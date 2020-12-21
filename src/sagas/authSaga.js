import { call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as type from "../redux/action/Type";
import {
  signUpUserSuccess,
  signUpUserError,
  loginUserError,
  loginUserSuccess,
} from "../redux/action/actions";
import { signUpUser, loginUser } from "../API/apiContainer";

function* userSignUp({ payload }) {
  try {
    const userData = yield call(signUpUser, payload);
    yield put(signUpUserSuccess(userData));
    yield put(push("/user"));
  } catch (error) {
    yield put(signUpUserError(error.message));
  }
}

function* userLogin({ payload }) {
  try {
    const userData = yield call(loginUser, payload);
    yield put(loginUserSuccess(userData));
    yield put(push("/user"));
  } catch (error) {
    yield put(loginUserError(error.message));
  }
}

function* authSaga() {
  yield takeEvery(type.SIGNUP_USER_REQUESTED, userSignUp);

  yield takeEvery(type.LOGIN_USER_REQUESTED, userLogin);
}

export default authSaga;
