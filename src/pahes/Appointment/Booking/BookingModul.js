import React from "react";
import { format } from "date-fns";

const BookingModul = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    setTreatment(null);
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-6">
            <input
              name="slot"
              type="text"
              placeholder="Type here"
              value={date}
              className="input input-bordered input-primary w-full "
            />
            <select className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="YOur name"
              className="input input-bordered input-primary w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered input-primary w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-bordered input-primary w-full "
            />

            <input
              className="btn  btn-accent w-full "
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModul;
