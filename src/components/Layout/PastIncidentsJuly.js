import React, { useState } from "react";

// Image
import Arrow from "../../assets/Vector.png";

// Components
import Container from "../UI/Container";
import Button from "../UI/Button";

const pastIncidentList = [
  {
    id: "pil1",
    title:
      "[Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 - NIGERIA",
    description: "The scheduled maintenance has been completed",
    date: "Aug 18, 00:00 -03:00 2022 UTC",
    button: false,
  },
  {
    id: "pil2",
    title:
      "[Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 - NIGERIA",
    description: "The scheduled maintenance has been completed",
    date: "Aug 18, 00:00 -03:00 2022 UTC",
    button: false,
  },
  {
    id: "pil3",
    title:
      "[Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 - NIGERIA",
    description: "The scheduled maintenance has been completed",
    date: "Aug 18, 00:00 -03:00 2022 UTC",
    button: false,
  },
  {
    id: "pil4",
    title:
      "[Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 - NIGERIA",
    description: "The scheduled maintenance has been completed",
    date: "Aug 18, 00:00 -03:00 2022 UTC",
    button: false,
  },
  {
    id: "pil5",
    title:
      "[Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 - NIGERIA",
    description: "The scheduled maintenance has been completed",
    date: "Aug 18, 00:00 -03:00 2022 UTC",
    button: false,
  },
];

const PastIncidentsJuly = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const incidentsNumber = pastIncidentList.length;

  const dropdownHandler = () => {
    setDropdownIsActive(!dropdownIsActive);
  };

  const pastIncidentListItems = pastIncidentList.map((item) => (
    <li className="flex justify-between py-8" key={item.id}>
      <div>
        <p className="font-medium text-2xl underline mb-10">{item.title}</p>
        <p className="font-normal text-xl">{item.description}</p>
        <p className="font-medium text-xl text-light-black mt-3">{item.date}</p>
      </div>
      {item.button ? (
        <div className="font-bold text-lg">
          <Button className="bg-black text-white px-6 py-5 rounded-lg">
            Suscribe To Github
          </Button>
        </div>
      ) : (
        ""
      )}
    </li>
  ));

  return (
    <Container>
      <div className="pt-7 pb-14">
        <div className="flex justify-between items-center border-b border-faint-black pb-4 mb-8">
          <p className="font-medium text-2xl">July 2022</p>
          <img
            onClick={dropdownHandler}
            className={`"w-6 h-6 cursor-pointer " ${
              dropdownIsActive ? "" : "rotate-90"
            }`}
            src={Arrow}
            alt="Arrow"
          />
        </div>
        {dropdownIsActive && <ul>{pastIncidentListItems}</ul>}
        <Button
          onClick={dropdownHandler}
          className="bg-black text-center text-white w-full py-3.5 rounded-lg font-medium text-2xl"
        >
          {dropdownIsActive ? '-Collapse Incidents' : `+show All ${incidentsNumber} Incidents`}
        </Button>
      </div>
    </Container>
  );
};

export default PastIncidentsJuly;
