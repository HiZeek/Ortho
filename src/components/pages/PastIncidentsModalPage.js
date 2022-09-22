import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import PastIncidentsModal from "../UI/PastIncidentsModal";
import CloseBtn from "../../assets/x-circle1.png";

const PastIncidentsModalPage = (props) => {

  // const { id } = useParams()

  const [incidentPopup, setIncidentPopup] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/dataList")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIncidentPopup(data);
      });
  }, []);

  const incidentPopupItem = incidentPopup.map((item) => (
    <li key={item.id}>
      <img
        onClick={props.onClose}
        className="tablet:w-14 tablet:h-14 phone:w-7 phone:h-7 absolute top-4 right-16 cursor-pointer"
        src={CloseBtn}
        alt="Close"
      />
      <div className="mt-14">
        <p className="font-medium tablet:text-2xl phone:text-base underline tablet:mb-14 phone:mb-7">
          {item.title}
        </p>
        <div className="mb-5 tablet:text-xl phone:text-base">
          <p className="font-bold mb-3">
            {item.resolved} -{" "}
            <span className="font-normal">{item.resolvedMessage}</span>
          </p>
          <p className="font-medium text-light-black">{item.date}</p>
        </div>
        <div className="mb-5 tablet:text-xl phone:text-base">
          <p className="font-bold mb-3">
            {item.update} -{" "}
            <span className="font-normal">{item.updateMessage}</span>
          </p>
          <p className="font-medium text-light-black">{item.date}</p>
        </div>
        <div className="tablet:text-xl phone:text-base">
          <p className="font-bold mb-3">
            {item.investigating} -{" "}
            <span className="font-normal">{item.investigatingMessage}</span>
          </p>
          <p className="font-medium text-light-black">{item.date}</p>
        </div>
      </div>
    </li>
  ));
  
  return (
    <PastIncidentsModal onClose={props.onClose} className='animate-fade-out'>
      <div className="animate-fade-in bg-white laptop:w-[953px] laptop:h-[724.91px] tablet:w-[768px] tablet:h-[700px] phone:w-[400px] phone:h-[422px] overflow-auto tablet:p-14 phone:p-5 tablet:rounded-2xl phone:rounded">
        <ul>{incidentPopupItem}</ul>
      </div>
    </PastIncidentsModal>
  );
};

export default PastIncidentsModalPage;
