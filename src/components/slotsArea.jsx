import React from 'react';
import { useHistory } from "react-router-dom";

const SlotsArea = ({ selectedDate, showConfirmationBox, setShowConfirmationBox }) => {


    let history = useHistory();

    return (

        <div className="col-12 col-sm-12 col-lg-3 ml-4 slots-colum">
            {showConfirmationBox ?
                <div className="confirmation mt-3">
                    <button onClick={() => history.push('/user/bookAppointments', { selectedDate })} className="btn btn-sm btn-primary mr-3">Proceed</button>
                    <button className="btn btn-sm btn-danger" onClick={() => setShowConfirmationBox(false)}>Cancel</button>
                </div>
                : <button onClick={() => setShowConfirmationBox(true)} className="btn btn-outline-primary">3 P.M.</button>}

        </div>

    );
}

export default SlotsArea;