import React from "react";

// Components
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

// Assets
import Logo from "../../assets/logo-black1.png";
import CloseBtn from "../../assets/x-circle.png";
import PaymentListL1 from "../../assets/Group189.png";
import PaymentListL2 from "../../assets/Group189-1.png";
import Lock from "../../assets/lock.png";

const paymentList = [
  {
    id: "pl1",
    title: "Transactions informations is encrypted end-to-end.",
    icon: PaymentListL1,
  },
  {
    id: "pl2",
    title: "Your credentials will never be accessible to [name-of-provider]",
    icon: PaymentListL2,
  },
];

const PaymentPage = (props) => {
  const paymentListItems = paymentList.map((item) => (
    <li className="flex items-center gap-x-5 p-4" key={item.id}>
      <img className="w-8 h-11" src={item.icon} alt="secured payment" />
      <p className="font-normal text-xl">{item.title}</p>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-xl w-[680px] h-[662px] p-14 text-center m-0 m-auto">
          <img
            onClick={props.onClose}
            className="w-14 h-14 absolute top-4 right-16 cursor-pointer"
            src={CloseBtn}
            alt="Close"
          />
          <img className="w-32 h-11 m-auto mt-5 mb-11" src={Logo} alt="Ortho" />
          <p className="font-normal text-3xl mb-9">
            You are about to make a payment of{" "}
            <span className="font-medium">$20,000</span>
          </p>
          <Card className="rounded-xl text-left w-[567px] h-auto bg-gray-rgba mb-9">
            <ul>{paymentListItems}</ul>
          </Card>
          <Button className="font-bold text-lg py-7 px-60 bg-yellow-ortho rounded-lg mb-9">
            Continue
          </Button>
          <p className="font-normal text-base">
            By clicking on continue you agree to Ortho’s{" "}
            <a className="font-medium underline" href="#home">
              End User Agreement
            </a>
          </p>
        </div>
        <div className="flex items-center mt-12">
          <img className="w-6 h-6 mr-5" src={Lock} alt="Secured" />
          <p className="text-white">Secured by Ortho</p>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentPage;
