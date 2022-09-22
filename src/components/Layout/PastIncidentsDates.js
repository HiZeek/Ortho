import React, { useState, useEffect } from "react";
import Container from "../UI/Container";

const PastIncidentsDates = () => {
  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/dataList')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setDateList(data)
    });
  }, [])
  

  const dateListItems = dateList.map((item) => (
    <li key={item.id}>
      <p className="mt-14 border-solid border-b pb-3 border-faint-black font-medium tablet:text-2xl phone:text-base">
        {item.date}
      </p>
      {item.description ? (
        <div className="text-justify">
          <p className="font-medium tablet:text-2xl phone:text-xs text-[#F24822] mt-2">
            {item.incident}
          </p>
          <p className="mt-5 font-bold tablet:text-xl phone:text-base">
            {item.resolved}-{" "}
            <span className="font-normal">{item.resolvedMessage}</span>
          </p>
          <p className="font-medium tablet:text-xl phone:text-base text-light-black">{item.date}</p>
          <p className="mt-5 font-bold tablet:text-xl phone:text-base">
            {item.update}-{" "}
            <span className="font-normal">{item.updateMessage}</span>
          </p>
          <p className="font-medium tablet:text-xl phone:text-base text-light-black">{item.date}</p>
          <p className="mt-5 font-bold tablet:text-xl phone:text-base">
            {item.investigating}-{" "}
            <span className="font-normal">
              {item.investigatingMessage}
            </span>
          </p>
          <p className="font-medium tablet:text-xl phone:text-base text-light-black">{item.date}</p>
        </div>
      ) : (
        <p className="text-light-black font-medium table:text-xl phone:text-xs mt-2 mb-14">
          No incident
        </p>
      )}
    </li>
  ));

  return (
    <Container>
      {dateList && <ul>{dateListItems}</ul>}
    </Container>
  );
};

export default PastIncidentsDates;
