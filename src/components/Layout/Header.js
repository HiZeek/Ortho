import React from "react";

// Components
import Button from "../UI/Button";
import Container from "../UI/Container";

// Images
import LogoWhite from "../../assets/logo-white.png";

const Header = (props) => {
  return (
    <header className="bg-black py-5">
      <Container>
        <div className="flex justify-between items-center">
          <img className="w-60 h-20" src={LogoWhite} alt="ortho" />
          <Button onClick={props.onConfirm} className="bg-white font-bold text-lg rounded-lg py-5 px-6">Subscribe To Github</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
