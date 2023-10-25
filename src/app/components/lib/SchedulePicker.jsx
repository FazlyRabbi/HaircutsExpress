import React from "react";
import TimeSlot from "./TimeSlot";

const SchedulePicker = ({
  availableSlots,
  onSlotClick,
  selectedDate,
  bookedSlots,
}) => {
  const slotsForSelectedDate = bookedSlots[selectedDate] || [];

  const filteredSlots = availableSlots.filter(
    (slot) => !slotsForSelectedDate.includes(slot)
  );

  console.log(filteredSlots);

  return (
    <div>
      <h2>Available Time Slots:</h2>
      {filteredSlots.map((slot) => (
        <TimeSlot key={slot} time={slot} onClick={() => onSlotClick(slot)} />
      ))}
    </div>
  );
};

export default SchedulePicker;
