import React from 'react';
import LandingPage from '../components/landingPage';
import mainAppPage from '../components/mainAppPage';
import bookAppointmentForm from '../components/bookAppointmentForm';
import appointmentBooked from '../components/appointmentBookedPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppNavigator = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/showAppointments" exact component={mainAppPage} />
                <Route path="/bookAppointments" exact component={bookAppointmentForm} />
                <Route path="/appointmentBooked" exact component={appointmentBooked} />
            </Switch>
        </Router>
     );
}
 
export default AppNavigator;