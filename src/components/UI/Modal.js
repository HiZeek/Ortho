import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="fixed w-full z-40 h-screen bg-black" id="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed overflow-auto phone:h-screen z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
