import React from "react";
import { format } from "date-fns";

const AbalableAppointment = ({ selectedDate }) => {
  return (
    <section className="mt-26">
      <p className="text-center text-primary font-bold">
        Available Services on {format(selectedDate, "PP")}.
      </p>
      ;
    </section>
  );
};

export default AbalableAppointment;
