import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment-timezone';
import Slots from './slotsArea';

const AppointmentCalendar = (props) => {
    const [date, setDate] = useState(new Date());
    const [apppointmentDates, setAppointmentdate] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [showConfirmationBox, setShowConfirmationBox] = useState(false); //Slots component state

    const appointmentList = useSelector(state => state.data.appointmentList);

    //will contain all booked dates


    useEffect(() => {
        let dates = []
        appointmentList.forEach((appointment) => {
            dates.push(moment(appointment.date).format("MM-DD-YYYY"))
        })
        setAppointmentdate(dates);
    }, [appointmentList])


    let onChange = date => setDate(date);  //function onChange

    let currentDate = new Date();
    var maxDate = new Date(currentDate.setMonth(currentDate.getMonth() + 2)); // 2 months from the current date


    const isAppointmentBooked = (currentDate) => {
        if (moment(currentDate).format('dddd') === "Saturday" || moment(currentDate).format('dddd') === "Sunday") {
            return true;
        }
        currentDate = moment(currentDate).format("MM-DD-YYYY");
        return apppointmentDates.includes(currentDate);
    }

    return (
        <>
            <div className="col-12 col-sm-12 col-lg-5 m-0 p-5 d-flex pr-3 calendar-container">
                <div className="calendar-area">
                    <div className="heading">
                        <h4 className="text-muted">Select a Date & Time </h4>
                        <h5 className="text-muted"> ( Mon- Fri ) </h5>
                    </div>
                    <Calendar className="pt-5"
                        onChange={onChange}
                        next2Label={null}
                        prev2Label={null}
                        minDate={new Date()}
                        maxDate={maxDate}
                        value={date}
                        tileDisabled={({ date }) => isAppointmentBooked(date)}
                        onClickDay={(day) => {
                            setSelectedDate(day);
                            setShowConfirmationBox(false)
                        }}
                    />
                </div>
            </div>
            {selectedDate ? <Slots selectedDate={selectedDate} showConfirmationBox={showConfirmationBox} setShowConfirmationBox={setShowConfirmationBox} /> : ''}

        </>

    );
}

export default AppointmentCalendar;