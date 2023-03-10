import React, { useState } from "react";
import AppointmentBanner from "../Appointmentbanner/AppointmentBanner";
import AbalableAppointment from "../AvalableAppointment/AbalableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AbalableAppointment selectedDate={selectedDate}></AbalableAppointment>
    </div>
  );
};

export default Appointment;
