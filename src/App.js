import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component
import Home from "./components/pages/Home";
import PastIncidentsPage from "./components/pages/PastIncidentsPage";
import PaymentPage from "./components/pages/PaymentPage";

function App() {
  const [confirmPayment, setConfirmPayment] = useState(false);

  const paymentHandler = () => {
    setConfirmPayment(true);
  };

  const closePaymentHandler = () => {
    setConfirmPayment(false);
  };

  return (
    <Fragment>
      <Router>
        {confirmPayment && <PaymentPage onClose={closePaymentHandler} />}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home onConfirm={paymentHandler}/>
            }
          />
          <Route path="/pastincidents" element={<PastIncidentsPage onConfirm={paymentHandler} />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
