import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { fetchAppointmentData, signoutUser } from '../redux/action/actions';
import { useSelector, useDispatch } from 'react-redux';
import doctorPic from '../images/doctor.jpg';

const LandingPage = () => {

    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAppointmentData())
    }, [dispatch]);

    const doctorInfo = useSelector(state => state.data.doctorInfo);


    const logoutUser = () => {
        dispatch(signoutUser());
        history.push('/login')
    }

    return (
        <div className="d-flex">
            <div className="info-page">
                <div className="profile-pic mt-3 d-inline">
                    <img src={doctorPic} className="rounded-circle" alt="Doctor"></img>
                </div>
                <button className="btn btn-danger mt-1 float-right" onClick={logoutUser}>Logout</button>
                <h4 className="mt-5 mb-5"> <i className="fas fa-calendar-alt"> <span className="text-muted">  Schedule an appointment with the doctor </span> </i> </h4>

                <div className="doc-card .bg-info border border-primary">
                    <h4 className="text-dark"> Dr {doctorInfo.name} </h4>
                    <h5 className="text-info mt-1"> {doctorInfo.docDegree} </h5>
                    <h5 className="text-muted"> Click Below to check available dates </h5>

                    <button className="link-btn" onClick={() => history.push('user/showAppointments')} > Check <i className="fas fa-arrow-right ml-2"></i> </button>
                </div>


            </div>
        </div>
    );
}

export default LandingPage;