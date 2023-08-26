import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { v4 as uuid } from "uuid";

 const Appointment = () => {
  const [events, setEvents] = useState([]);
  console.log(events)
  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };

  return (
    <div>
      <FullCalendar
        editable
        selectable
        eventColor="text-skyMain"
        events={events}
        select={handleSelect}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          end: "dayGridMonth dayGridWeek dayGridDay",
        }} 
        nowIndicator={true}
        resources={[
          { id: 'a', title: 'Auditorium A' },
          { id: 'b', title: 'Auditorium B', eventColor: 'green' },
          { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
        ]}
        eventContent={(info) => <EventItem info={info} />}
        plugins={[  
          daygridPlugin,
          interactionPlugin,
          ]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      />
    </div>
  );
};

export default Appointment;

const EventItem = ({ info }) => {
  const { event } = info;
  return (
    <div className="p-3 w-full bg-skyPrimary border-2 border-t-[5px] border-skyMain ">
      <p className="text-skyMain font-bold capitalize">{event.title}</p>
    </div>
  );
};