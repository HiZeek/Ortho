import React from "react";
import { Link } from "react-router-dom";

// Component
import Container from "../UI/Container";
import PastIncidentsDates from "./PastIncidentsDates";

const PastIncidents = () => {
  return (
    <Container>
      <div className="pb-14 pt-7">
        <div className="flex justify-between items-center">
          <p className="font-bold tablet:text-3xl phone:text-base">Past Incidents</p>
          <Link
            className="underline font-bold tablet:text-lg phone:text-xs text-light-black hover:text-black"
            to="/pastincidents"
          >
            Incident Histoty
          </Link>
        </div>
        <PastIncidentsDates />
      </div>
    </Container>
  );
};

export default PastIncidents;
