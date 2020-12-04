import * as type from "../action/Type";

//Fetching appointment Data

export const fetchAppointmentData = () => {
  return {
    type: type.GET_APPOINTMENTS_REQUESTED,
  };
};

export const getAppointmentsSuccess = (data) => {
  return {
    type: type.GET_APPOINTMENTS_SUCCESS,
    payload: data,
  };
};

export const getAppointmentsError = (msg) => {
  return {
    type: type.GET_APPOINTMENTS_ERROR,
    payload: msg,
  };
};

//Saving new Appointment

export const saveAppointmentRequest = (data) => {
  return {
    type: type.SAVE_APPOINTMENT_REQUEST,
    payload: data,
  };
};

export const saveAppointmentSuccess = (data) => {
  return {
    type: type.SAVE_APPOINTMENT_SUCCESS,
    payload: data,
  };
};

export const saveAppointmentError = (msg) => {
  return {
    type: type.SAVE_APPOINTMENT_ERROR,
    payload: msg,
  };
};

export const changeApiStatusToIdle = () => {
  return {
    type: type.SET_API_STATUS_TO_IDLE,
  };
};
