import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { saveAppointmentRequest, changeApiStatusToIdle } from "../redux/action/actions"
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment-timezone';


const BookAppointmentForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  let history = useHistory();
  const dispatch = useDispatch();

  const apiStatus = useSelector(state => state.data.postData.apiStatus);
  const lastAppointmentBooked = useSelector(state => state.data.postData.data);

  const onSubmit = (data) => {

    dispatch(saveAppointmentRequest({
      patient: data,
      selectedDate: moment(props.location.state.selectedDate).toDate()
    }));

  };
  useEffect(() => {
    if (apiStatus === "SUCCESS") {
      history.push("/user/appointmentBooked", {
        selectedDate: moment(lastAppointmentBooked.date).toDate(),
        patientName: lastAppointmentBooked.patientName,
        patientEmail: lastAppointmentBooked.patientEmail,
      });
      dispatch(changeApiStatusToIdle());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiStatus])

  useEffect(() => {
    if (lastAppointmentBooked.date && moment(props.location.state.selectedDate).format("DD-MM-YYYY") === moment(lastAppointmentBooked.date).format("DD-MM-YYYY")) {
      history.push('/user');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div className="d-flex">
      <div className="form-container">
        <label> Name : </label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          ref={register({
            required: "Name is Required",
            minLength: { value: 3, message: "Name should be atleast 3 characters long" }
          })} />
        {errors.name && <p className="text-danger ml-2">{errors.name.message}</p>}

        <label> E-Mail : </label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          name="email"
          ref={register({
            required: "E-Mail is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })} />
        {errors.email && <p className="text-danger ml-2">{errors.email.message}</p>}

        <label> Extra Instructions (Optional)</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Any Extra Instructions(optional)"
          name="instructions"
          ref={register}
        />

        <button className="btn btn-secondary mt-5" onClick={handleSubmit(onSubmit)} type="submit"> Book Appointment </button>
        <button onClick={() => history.go(-1)} className="btn btn-danger ml-4 mt-5"  > Cancel </button>

      </div>
    </div>
  );
};

export default BookAppointmentForm;
