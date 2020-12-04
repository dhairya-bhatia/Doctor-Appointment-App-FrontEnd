import React from 'react';
import { useHistory } from "react-router-dom";
import moment from 'moment-timezone';

const AppointmentBooked = (props) => {

    let history = useHistory();
    const dateOfAppointment = moment(props.location.state.selectedDate).format("MMM Do YYYY");
    const dayName = moment(props.location.state.selectedDate).format('dddd');
    const patientName = props.location.state.patientName;
    const patientEmail = props.location.state.patientEmail;

    return (

        <div className="bg-light w-50 p-4 booked-msg-container">
            <h5 className="text-secondary"> The Appointment for {patientName} was successfully scheduled for {dayName}, {dateOfAppointment} </h5>
            <h5 className="text-primary">Email for the same was sent to {patientEmail} </h5>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success mt-4" onClick={() => history.go(-3)}>Ok</button>
            </div>
        </div>


    );
}

export default AppointmentBooked;
