import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppontmentOption from "../Appointment/appontmentOption/AppontmentOption";
import BookingModul from "../Appointment/Booking/BookingModul";

const AbalableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);

  return (
    <section className="my-16">
      <p className="text-center text-primary font-bold">
        Available Services on {format(selectedDate, "PP")}.
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppontmentOption
            key={option.id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppontmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModul
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModul>
      )}
    </section>
  );
};

export default AbalableAppointment;
