import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image
import Arrow from "../../assets/Vector.png";

// Components
import Container from "../UI/Container";
import Button from "../UI/Button";

const PastIncidentsJune = (props) => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const [junDataList, setJunDataList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/dataList')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setJunDataList(data);
    });
  }, [])

  const incidentsNumber = junDataList.length;

  const dropdownHandler = () => {
    setDropdownIsActive((prevDropdownIsActive) => !prevDropdownIsActive);
  };

  const pastIncidentListItems = junDataList.map((item) => (
    <li
      className="flex laptop:flex-row tablet:flex-col phone:flex-col phone:gap-y-2 justify-between tablet:py-8 phone:py-5"
      key={item.id}
    >
      <div>
        <p className="font-medium tablet:text-2xl phone:text-base underline tablet:mb-10 phone:mb-2">
          {item.title}
        </p>
        <p className="font-normal tablet:text-xl phone:text-base">
          {item.description}
        </p>
        <p className="font-medium tablet:text-xl phone:text-xs text-light-black mt-3">
          {item.mDate}
        </p>
      </div>
      {item.button ? (
        <div className="font-bold tablet:text-lg phone:text-base">
          {/* <Link to={`/dataList/${junDataList.id}`}> */}
            <Button
              onClick={props.onView}
              className="bg-black text-white px-6 py-5 phone:py-4 rounded-lg phone:w-full phone:text-center"
            >
              Suscribe To Github
            </Button>
          {/* </Link> */}
        </div>
      ) : (
        ""
      )}
    </li>
  ));

  return (
    <Container>
      <div className="py-7">
        <div className="flex justify-between items-center border-b border-faint-black pb-4 mb-8">
          <p className="font-medium tablet:text-2xl phone:text-base">June 2022</p>
          <img
            onClick={dropdownHandler}
            className={`"tablet:w-6 tablet:h-6 phone:w-5 phone:h-5 cursor-pointer " ${
              dropdownIsActive ? "rotate-0 duration-500" : "rotate-90 duration-500"
            }`}
            src={Arrow}
            alt="Arrow"
          />
        </div>
        {dropdownIsActive && <ul>{pastIncidentListItems}</ul>}
        <Button
          onClick={dropdownHandler}
          className="duration-300 bg-black text-center text-white w-full py-3.5 rounded-lg font-medium tablet:text-2xl phone:text-base"
        >
          {dropdownIsActive ? '-Collapse Incidents' : `+show All ${incidentsNumber} Incidents`}
        </Button>
      </div>
    </Container>
  );
};

export default PastIncidentsJune;
