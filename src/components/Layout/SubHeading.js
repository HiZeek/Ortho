import React from "react";

// Components
import Container from "../UI/Container";

const SubHeading = (props) => {
  return (
    <Container>
      <div className="font-bold bg-yellow-ortho py-4 tablet:px-10 phone:px-3 rounded-lg mt-10 flex justify-between items-center">
        <p className="tablet:text-2xl phone:text-sm">{props.pageTitle}</p>
        <p className="tablet:text-lg phone:text-xs text-light-black">
          <a className="tablet:mr-7 phone:mr-2.5 text-black" href="#home">{props.leftIcon}</a>
          {props.date}
          <a className="tablet:ml-7 phone:ml-2.5" href="#home">{props.rightIcon}</a>
        </p>
      </div>
    </Container>
  );
};

export default SubHeading;
