import React, { Fragment } from "react";

// Component
import Container from "../UI/Container";
import SubHeading from "../Layout/SubHeading";
import Header from "../Layout/Header";
import PastIncidentsAug from "../Layout/PastIncidentsAug";
import PastIncidentsJune from "../Layout/PastIncidentsJune";

const PastIncidentsPage = (props) => {
  return (
    <Fragment>
      <Header onConfirm={props.onConfirm} />
      <Container>
        <SubHeading pageTitle="Past Incidents" date='June 2022 - August 2022' leftIcon='<' rightIcon='>'  />
        <PastIncidentsAug />
        <PastIncidentsJune />
      </Container>
    </Fragment>
  );
};

export default PastIncidentsPage;
