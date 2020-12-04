import * as type from "../action/Type";

const initialState = {
  appointmentList: [], //contains patient email, date and time of appointment,
  postData: {
    apiStatus: "IDLE",
    loading: false,
    error: null,
    data: {},
  },
  doctorInfo: {},
  loading: false,
  error: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_APPOINTMENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.GET_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointmentList: action.payload.appointmentObj.appointments,
        doctorInfo: action.payload.appointmentObj.doctorInfo,
      };

    case type.GET_APPOINTMENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case type.SAVE_APPOINTMENT_REQUEST:
      return {
        ...state,
        postData: {
          loading: true,
          apiStatus: "PROCESSING",
        },
      };
    case type.SAVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        postData: {
          loading: false,
          apiStatus: "SUCCESS",
          data: action.payload.appointment,
        },
      };
    case type.SAVE_APPOINTMENT_ERROR:
      return {
        ...state,
        postData: {
          apiStatus: "ERROR",
        },
        error: action.payload,
      };

    case type.SET_API_STATUS_TO_IDLE:
      return {
        ...state,
        postData: {
          ...state.postData,
          apiStatus: "IDLE",
        },
      };

    default:
      return state;
  }
};

export default appointmentReducer;
