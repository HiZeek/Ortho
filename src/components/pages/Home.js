import React, { Fragment, useState } from 'react'

// Components
import Header from '../Layout/Header';
import NameOfService from '../Layout/NameOfService';
import PastIncidents from '../Layout/PastIncidents';
import SubHeading from '../Layout/SubHeading';
import PaymentPage from "./PaymentPage";

const Home = () => {
  const [confirmPayment, setConfirmPayment] = useState(false);

  const paymentHandler = () => {
    setConfirmPayment(true);
  };

  const closePaymentHandler = () => {
    setConfirmPayment(false);
  };

  return (
    <Fragment>
      {confirmPayment && <PaymentPage onClose={closePaymentHandler} />}
      <Header onConfirm={paymentHandler} />
      <SubHeading pageTitle="All systems are operational" />
      <NameOfService />
      <PastIncidents />
    </Fragment>
  )
}

export default Home;