import * as type from "../action/Type";

const initialState = {
  username: "",
  email: "",
  accessToken: "",
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_USER_REQUESTED:
      return {
        ...state,
        apiStatus: "PROCESSING",
        loading: true,
      };
    case type.LOGIN_USER_SUCCESS:
      return {
        ...state,
        email: action.payload.data.email,
        accessToken: action.payload.data.accesstoken,
        apiStatus: "SUCCESS",
      };
    case type.LOGIN_USER_ERROR:
      return {
        ...state,
        apiStatus: "ERROR",
        error: action.payload,
      };
    case type.SIGNUP_USER_REQUESTED:
      return {
        ...state,
        apiStatus: "PROCESSING",
        loading: true,
      };
    case type.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.data.username,
        email: action.payload.data.email,
        accessToken: action.payload.data.accesstoken,
        apiStatus: "SUCCESS",
      };
    case type.SIGNUP_USER_ERROR:
      return {
        ...state,
        apiStatus: "ERROR",
        error: action.payload,
      };
    case type.SIGNOUT_USER:
      return {};
    default:
      return state;
  }
};

export default authReducer;
