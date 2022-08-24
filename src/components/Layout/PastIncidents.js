import React from "react";
import Container from "../UI/Container";
import PastIncidentsDates from "./PastIncidentsDates";

const PastIncidents = () => {
  return (
    <Container>
      <div className="mt-14">
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl">Past Incidents</p>
          <a
            className="underline font-bold text-lg text-light-black"
            href="#home"
          >
            Incident Histoty
          </a>
        </div>
        <PastIncidentsDates />
        <PastIncidentsDates />
      </div>
    </Container>
  );
};

export default PastIncidents;
