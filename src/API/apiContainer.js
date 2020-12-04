import makeApiCall from "./apiHelper";
import moment from "moment-timezone";

const localApiUrl = "http://localhost:5000";

export const getAppointmentsFromAPI = (
  rangeStart = new Date(new Date().setDate(new Date().getDate() - 1)), //setting yesterday's date to include consider date as well
  rangeEnd = new Date(new Date().setMonth(new Date().getMonth() + 2)) // 2 months from the current date
) => {
  let paramsObj = {};
  paramsObj.body = {};
  paramsObj.body.rangeStart = rangeStart;
  paramsObj.body.rangeEnd = rangeEnd;

  paramsObj.method = "GET";
  let url =
    localApiUrl +
    `/getAllAppointments?range_start=${rangeStart}&range_end=${rangeEnd}`;

  let response = makeApiCall(url);
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
  paramsObj.headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  paramsObj.method = "POST";
  let url = localApiUrl + `/addAppointment`;
  let response = makeApiCall(url, paramsObj);
  return response;
};
