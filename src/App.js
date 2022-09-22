import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component
import Home from "./components/pages/Home";
import PastIncidentsModalPage from "./components/pages/PastIncidentsModalPage";
import PastIncidentsPage from "./components/pages/PastIncidentsPage";
import PaymentPage from "./components/pages/PaymentPage";

function App() {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [viewPastIncidents, setViewPastIncidents] = useState(false);

  const paymentHandler = () => {
    setConfirmPayment(true);
  };

  const closePaymentHandler = () => {
    setConfirmPayment(false);
  };

  const pastIncidentsHandler = (id) => {
    setViewPastIncidents(true);
  };

  const closePastIncidentsHandler = () => {
    setViewPastIncidents(false);
  };

  return (
    <Fragment>
      <Router>
        {confirmPayment && <PaymentPage onClose={closePaymentHandler} />}
        {viewPastIncidents && <PastIncidentsModalPage onClose={closePastIncidentsHandler} />}
        <Routes>
          <Route exact path="/" element={<Home onConfirm={paymentHandler} />} />
          <Route
            path="/pastincidents"
            element={
              <PastIncidentsPage
                onConfirm={paymentHandler}
                onView={pastIncidentsHandler}
              />
            }
          />
          {/* {viewPastIncidents && (
            <Route
              path="/dataList/:id"
              element={
                <PastIncidentsModalPage onClose={closePastIncidentsHandler} />
              }
            />
          )} */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
