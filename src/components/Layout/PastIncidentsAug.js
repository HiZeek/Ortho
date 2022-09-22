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
    button: true,
  },
  {
    id: "pil2",
    title:
      "[Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 - NIGERIA",
    description: "The scheduled maintenance has been completed",
    date: "Aug 18, 00:00 -03:00 2022 UTC",
    button: true,
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

const PastIncidentsAug = (props) => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const incidentsNumber = pastIncidentList.length;

  const dropdownHandler = () => {
    setDropdownIsActive((prevDropdownIsActive) => !prevDropdownIsActive);
  };

  const pastIncidentListItems = pastIncidentList.map((item) => (
    <li className="flex laptop:flex-row tablet:flex-col phone:flex-col phone:gap-y-2 justify-between tablet:py-8 phone:py-5" key={item.id}>
      <div>
        <p className="font-medium tablet:text-2xl phone:text-base underline tablet:mb-10 phone:mb-2">{item.title}</p>
        <p className="font-normal tablet:text-xl phone:text-base">{item.description}</p>
        <p className="font-medium tablet:text-xl phone:text-xs text-light-black mt-3">{item.date}</p>
      </div>
      {item.button ? (
        <div className="font-bold tablet:text-lg phone:text-base">
          <Button onClick={props.onView} className="bg-black text-white px-6 py-5 phone:py-4 rounded-lg phone:w-full phone:text-center">
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
      <div className="pt-14 pb-7">
        <div className="flex justify-between items-center border-b border-faint-black pb-4 mb-8">
          <p className="font-medium tablet:text-2xl phone:text-base">August 2022</p>
          <img
            onClick={dropdownHandler}
            className={`"tablet:w-6 tablet:h-6 phone:w-5 phone:h-5 cursor-pointer " ${
              dropdownIsActive ? "" : "rotate-90"
            }`}
            src={Arrow}
            alt="Arrow"
          />
        </div>
        {dropdownIsActive && <ul>{pastIncidentListItems}</ul>}
        <Button
          onClick={dropdownHandler}
          className="bg-black text-center text-white w-full py-3.5 rounded-lg font-medium tablet:text-2xl phone:text-base"
        >
          {dropdownIsActive
            ? "-Collapse Incidents"
            : `+show All ${incidentsNumber} Incidents`}
        </Button>
      </div>
    </Container>
  );
};

export default PastIncidentsAug;
