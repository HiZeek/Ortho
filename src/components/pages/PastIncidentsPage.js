import React, { Fragment } from "react";

// Component
import Container from "../UI/Container";
import SubHeading from "../Layout/SubHeading";
import Header from "../Layout/Header";
import PastIncidentsAug from "../Layout/PastIncidentsAug";
import PastIncidentsJune from "../Layout/PastIncidentsJune";
import PastIncidentsJuly from "../Layout/PastIncidentsJuly";

const PastIncidentsPage = (props) => {
  return (
    <Fragment>
      <Header onConfirm={props.onConfirm} />
      <SubHeading
        pageTitle="Past Incidents"
        date="June 2022 - August 2022"
        leftIcon="<"
        rightIcon=">"
      />
      <PastIncidentsAug onView={props.onView} />
      <PastIncidentsJune onView={props.onView} />
      <PastIncidentsJuly onView={props.onView} />
    </Fragment>
  );
};

export default PastIncidentsPage;
