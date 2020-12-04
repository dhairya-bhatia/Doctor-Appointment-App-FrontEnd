import React, { useEffect } from 'react';
import doctorPic from '../images/doctor.jpg';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointmentData } from '../redux/action/actions';

function DoctorInfo() {

    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAppointmentData())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const doctorInfo = useSelector(state => state.data.doctorInfo);

    return (
        <div className="col-12 col-sm-12 col-lg-2 doctor-info-container m-0 p-5">
            <div className="mb-4">
                <h4> <button className="link-btn" onClick={() => history.push('/')} to='/' ><i className="fas fa-arrow-left ml-2"></i> </button> </h4>
            </div>
            <div className="profile-pic">
                <img src={doctorPic} className="rounded-circle" alt="Cinque Terre"></img>
            </div>
            <h5 className="text-muted mt-3"> Dr {doctorInfo.name} </h5>
            <h4 className="hospital-name mt-1"> {doctorInfo.hospitalName} </h4>
            <div className="duration">
                <i className="fas fa-clock pr-1 text-secondary"></i>
                <span className="text-muted"> {doctorInfo.appointmentduration} </span>
            </div>
            <div className="details">
                <i className="fas fa-video pr-2 text-secondary"></i>
                <span className="video-details text-muted"> Appointment details provided upon confirmation </span>
            </div>
            <div className="message">
                <br />
                <p> Hello, there ! </p>
                <p> Greetings! </p>
                <p> Please chose a <b> 1-hour time-slot </b> as per your availability. </p>
                <p> Thanks & Regards <br /> {doctorInfo.name} </p>
            </div>
        </div>
    )
}

export default DoctorInfo;