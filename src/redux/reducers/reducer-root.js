import { combineReducers } from 'redux';
import appointmentReducer from './appointmentDataReducer';

const rootReducer = combineReducers({
    data: appointmentReducer,
  });
  
  export default rootReducer;