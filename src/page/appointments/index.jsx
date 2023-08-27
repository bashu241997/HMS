import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { createPortal } from "react-dom";
import AddEventModal from "@/common/components/Model/addeventModal";
import Modal from "@/components/modal/modal";

const Appointment = () => {
  const [events, setEvents] = useState([]);
  const [isModal, setModal] = useState(false);
  const handleSelect = (info) => {
    const { start, end } = info;
    setModal(true);
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
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
          left: "prev,next today",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        nowIndicator={true}
        resources={[
          { id: "a", title: "Auditorium A" },
          { id: "b", title: "Auditorium B", eventColor: "green" },
          { id: "c", title: "Auditorium C", eventColor: "orange" },
        ]}
        eventContent={(info) => <EventItem info={info} />}
        plugins={[daygridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      />
      {/* {isModal &&
        createPortal(
          <Modal onclose={setModal(false)}>
            <AddEventModal />
          </Modal>,
          document.getElementById("addeventModal")
        )} */}
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
