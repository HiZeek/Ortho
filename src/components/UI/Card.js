import React from "react";

const Card = (props) => {
  return (
    <div>
      <div
        className={`'absolute m-0 m-auto' ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;