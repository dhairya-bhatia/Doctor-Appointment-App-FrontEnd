import React from "react";
import DoctorInfo from "./doctorInfo";
import AppointmentCalendar from "./calendar";

const MainAppPage = () => {
  return (
    <div className="container">
      <div className="row main-area">
        <DoctorInfo />
        <AppointmentCalendar handleClick />
      </div>
    </div>
  );
};

export default MainAppPage;
