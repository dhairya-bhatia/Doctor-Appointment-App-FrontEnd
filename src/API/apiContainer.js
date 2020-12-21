import makeApiCall from "./apiHelper";
import moment from "moment-timezone";

const localApiUrl = "http://localhost:5000";

export const getAppointmentsFromAPI = (accessToken) => {
  const rangeStart = new Date(new Date().setDate(new Date().getDate() - 1)); //setting yesterday's date to include consider date as well
  const rangeEnd = new Date(new Date().setMonth(new Date().getMonth() + 2)); // 2 months from the current date

  let paramsObj = {};

  if (accessToken) {
    var bearerToken = "Bearer " + accessToken;
    paramsObj.headers = {
      "Content-Type": "application/json",
      Authorization: bearerToken,
    };
  }
  paramsObj.method = "GET";
  let url =
    localApiUrl +
    `/user/getAllAppointments?range_start=${rangeStart}&range_end=${rangeEnd}`;

  let response = makeApiCall(url, paramsObj);
  return response;
};

export const saveAppointmentData = (payload) => {
  moment(payload.payload.selectedDate).format();

  let paramsObj = {};
  let appointment = {
    timezone: moment.tz.guess(payload.payload.selectedDate),
    slot: "3 P.M.",
    date: moment
      .tz(
        `${moment(payload.payload.selectedDate).format("YYYY-MM-DD")} 15:00`,
        "Asia/Calcutta"
      )
      .format(),
    patient: {
      patientName: payload.payload.patient.name,
      patientEmail: payload.payload.patient.email,
      extraNotes: payload.payload.patient.instructions,
    },
  };
  paramsObj.body = JSON.stringify({ appointment });

  let { accessToken } = payload;
  if (accessToken) {
    var bearerToken = "Bearer " + accessToken;
    paramsObj.headers = {
      "Content-Type": "application/json",
      Authorization: bearerToken,
    };
  }

  paramsObj.method = "POST";
  let url = localApiUrl + `/user/addAppointment`;
  let response = makeApiCall(url, paramsObj);
  return response;
};

export const signUpUser = async (payload) => {
  try {
    let paramsObj = {};
    let userData = {
      username: payload.userData.username,
      email: payload.userData.email,
      password: payload.userData.password,
    };
    paramsObj.body = JSON.stringify({ userData });
    paramsObj.headers = {
      "Content-Type": "application/json;charset=utf-8",
    };

    paramsObj.method = "POST";
    let url = localApiUrl + `/signUp`;
    let response = await makeApiCall(url, paramsObj);
    if (response?.error) {
      alert(response.error);
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (payload) => {
  try {
    let paramsObj = {};
    let userData = {
      email: payload.userData.email,
      password: payload.userData.password,
    };
    paramsObj.body = JSON.stringify({ userData });
    paramsObj.headers = {
      "Content-Type": "application/json;charset=utf-8",
    };

    paramsObj.method = "POST";
    let url = localApiUrl + `/login`;
    let response = await makeApiCall(url, paramsObj);
    if (response?.error) {
      alert(response.error);
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
