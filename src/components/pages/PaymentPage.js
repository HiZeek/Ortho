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
import LockDark from "../../assets/lockdark.png";

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
      <p className="font-normal tablet:text-xl phone:text-base ">{item.title}</p>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className="flex flex-col items-center tablet:bg-transparent tablet:p-0 phone:bg-white phone:pb-14">
        <div className="bg-white rounded-xl tablet:w-[680px] tablet:h-[662px] phone:w-full phone:h-[auto] phone:m-auto p-14 text-center m-auto overflow-auto">
          <img
            onClick={props.onClose}
            className="tablet:w-14 tablet:h-14 phone:w-12 phone:h-12 absolute tablet:top-4 right-16 cursor-pointer"
            src={CloseBtn}
            alt="Close"
          />
          <img className="tablet:w-32 tablet:h-11 m-auto mt-5 mb-11 phone:w-24 phone:h-9" src={Logo} alt="Ortho" />
          <p className="font-normal tablet:text-3xl mb-9 phone:text-xl">
            You are about to make a payment of{" "}
            <span className="font-medium">$20,000</span>
          </p>
          <Card className="rounded-xl text-left tablet:w-[567px] phone:w-[374px] phone:m-auto h-auto bg-gray-rgba">
            <ul>{paymentListItems}</ul>
          </Card>
          <Button className="font-bold tablet:text-lg tablet:py-7 tablet:px-60 phone:py-4 phone:px-36 bg-yellow-ortho rounded-lg my-9 phone:text-base">
            Continue
          </Button>
          <p className="font-normal text-base">
            By clicking on continue you agree to Ortho’s{" "}
            <a className="font-medium underline" href="#home">
              End User Agreement
            </a>
          </p>
        </div>
        <div className="flex items-center tablet:mt-12 phone:mt-5">
          <img className="w-6 h-6 mr-5 phone:hidden tablet:block" src={Lock} alt="Secured" />
          <img className="w-6 h-6 mr-5 tablet:hidden" src={LockDark} alt="Secured" />
          <p className="tablet:text-white phone:text-black tablet:text-xl font-medium phone:text-base">Secured by Ortho</p>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentPage;
