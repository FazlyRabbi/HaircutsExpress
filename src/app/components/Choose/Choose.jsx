import React, { useState } from "react";
import moment from "moment";
import SchedulePicker from "../lib/SchedulePicker";

const generateTimeSlots = (selectedDay) => {
  const localDay = moment().add(selectedDay, "days").startOf("day");
  const timeSlots = [];
  for (let j = 12; j <= 18; j++) {
    for (let k = 0; k < 60; k += 20) {
      const localTime = localDay.clone().set({ hour: j, minute: k }).format("HH:mm");
      timeSlots.push(localTime);
    }
  }
  return timeSlots;
};

function Choose() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(generateTimeSlots(selectedDay));
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState("");

  const handleDayClick = (day) => {
    setSelectedDay(day);
    const localDay = moment().add(day, "days").startOf("day").format("YYYY-MM-DD");
    setSelectedDate(localDay);
    setAvailableSlots(generateTimeSlots(day));
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot) => {
    const updatedBookedSlots = {
      ...bookedSlots,
      [selectedDate]: [...(bookedSlots[selectedDate] || []), slot],
    };
    setBookedSlots(updatedBookedSlots);
    setAvailableSlots((prevSlots) => prevSlots.filter((s) => s !== slot));
    setSelectedSlot(slot);
  };

  return (
    <section className="bg-[#F5EEE7] h-full ">
      <div className="mt-[20rem]">
        <h1>Appointment Scheduling System</h1>
        <div>
          {[...Array(7).keys()].map((day) => (
            <button key={day} onClick={() => handleDayClick(day)}>
              Day {day + 1}
            </button>
          ))}
        </div>
        {selectedSlot ? (
          <div>
            <h2>Selected Time Slot:</h2>
            <p>{selectedSlot}</p>
          </div>
        ) : (
          <SchedulePicker availableSlots={availableSlots} onSlotClick={handleSlotClick} selectedDate={selectedDate} bookedSlots={bookedSlots} />
        )}
      </div>
    </section>
  );
}

export default Choose;
