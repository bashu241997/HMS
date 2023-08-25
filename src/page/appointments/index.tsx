import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Appointment = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} className={`p-4 bg-transparent text-semibold text-black`} />
    </div>
  );
};

export default Appointment;
