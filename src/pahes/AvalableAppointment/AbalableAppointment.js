import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppontmentOption from "../Appointment/appontmentOption/AppontmentOption";
import BookingModul from "../Appointment/Booking/BookingModul";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import Loading from "../../Shared/Loading/Loading";

const AbalableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOption", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOption?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOption"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointmentOption").then((res) =>
  //       res.json()
  //     ),
  // });
  /////////////////////////////////////////////////
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOption")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOption(data));
  // }, []);

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
          refetch={refetch}
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModul>
      )}
    </section>
  );
};

export default AbalableAppointment;
