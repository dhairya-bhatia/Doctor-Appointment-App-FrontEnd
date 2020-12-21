import AppointmentBooked from "../components/appointmentBookedPage";
import BookAppointmentForm from "../components/bookAppointmentForm";
import LandingPage from "../components/landingPage";
import LoginPage from "../components/LoginPage";
import MainAppPage from "../components/mainAppPage";

const routes = [
  {
    id: "1",
    path: "/user",
    exact: true,
    component: LandingPage,
  },
  {
    id: "2",
    path: "/user/showAppointments",
    exact: true,
    component: MainAppPage,
  },
  {
    id: "3",
    path: "/user/bookAppointments",
    exact: true,
    component: BookAppointmentForm,
  },
  {
    id: "4",
    path: "/user/appointmentBooked",
    exact: true,
    component: AppointmentBooked,
  },
  {
    id: "5",
    path: "/login",
    exact: true,
    component: LoginPage,
  },
];
export default routes;
