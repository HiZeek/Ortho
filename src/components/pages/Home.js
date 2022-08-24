import React, { Fragment } from 'react'

// Components
import Header from '../Layout/Header';
import NameOfService from '../Layout/NameOfService';
import PastIncidents from '../Layout/PastIncidents';
import SubHeading from '../Layout/SubHeading';
import SystemMatrics from '../Layout/SystemMatrics';

const Home = (props) => {
  return (
    <Fragment>
      <Header onConfirm={props.onConfirm} />
      <SubHeading pageTitle="All systems are operational" />
      <NameOfService />
      <SystemMatrics />
      <PastIncidents />
    </Fragment>
  )
}

export default Home;