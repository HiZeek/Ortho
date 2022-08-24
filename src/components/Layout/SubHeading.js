import React from "react";

// Components
import Container from "../UI/Container";

const SubHeading = (props) => {
  return (
    <Container>
      <div className="bg-yellow-ortho py-4 px-10 rounded-lg mt-10">
        <p className="font-bold text-2xl">{props.pageTitle}</p>
      </div>
    </Container>
  );
};

export default SubHeading;
