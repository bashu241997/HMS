import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { createPortal } from "react-dom";
import AddEventModal from "@/common/components/Model/addeventModal";
import Modal from "@/components/modal/modal";

const Data_generators = () => {
  const names = [
    "Taylor Palmer",
    "Abbey Mcpherson",
    "Diego Hood",
    "Salvador Mendoza",
    "Micah Arellano",
    "Lola Chen",
    "Evan Mckenzie",
    "Emelia Simmons",
    "Beckett Pollard",
    "Emilie Pennington",
    "Jayda Bradford",
    "Deshawn Pena",
    "Aldo Neal",
    "Erin Prince",
    "Savanah Boone",
    "Nolan Murray",
    "Reese Dunn",
    "Alonzo Clements",
    "Johnathon Marshall",
    "Kimora Lyons",
    "Zara Savage",
    "Miya Turner",
    "Marques Richards",
    "Jay Nash",
    "Ruben Hood",
    "Lizbeth Rubio",
    "Darian Hall",
    "Mohammad Whitehead",
    "Phillip Elliott",
    "Thaddeus Shaw",
    "Curtis Turner",
    "Daniela Ryan",
    "Kian Powell",
  ];
  const funct = [
    "flu",
    "common cold",
    "respiratory syncytial virus infection",
    "adenovirus infection",
    "parainfluenza virus infection",
    "severe acute respiratory syndrome (SARS)",
    "norovirus infection",
    "rotavirus infection",
    "some adenovirus infections",
    "astrovirus infection",
    "measles",
    "rubella",
    "chickenpox/shingles",
    "roseola",
    "smallpox",
    "fifth disease",
    "chikungunya virus infection",
    "hepatitis A",
    "hepatitis B",
    "hepatitis C",
    "hepatitis D",
    "hepatitis E",
    "warts, including genital warts",
    "oral herpes",
    "genital herpes",
    "molluscum contagiosum",
  ];
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  let res = [];
  let months = new Date().getMonth();
  let years = new Date().getFullYear();
  const date = new Date().getDate();
  const currentMonthdays = daysInMonth(months, years);
  for (let i = date; i < currentMonthdays; i+=2) {
    const data_gen = {
      start: new Date(years, months, i).toISOString(),
      end: new Date(years, months, i + 1).toISOString(),
      title: names[Math.floor(Math.random() * 10)],
    };
    res.push(data_gen);
  }
  return res;
};

const Appointment = () => {
  const patientsData = Data_generators();
  const [events, setEvents] = useState(patientsData || []);
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
    console.log(events);
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
    <div className="p-3 w-full bg-grey-200 border-2 border-t-[5px] border-slate-500 ">
      <p className="text-slate-500 font-bold capitalize">{event.title}</p>
    </div>
  );
};
