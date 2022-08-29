import React from "react";
import { Link } from "react-router-dom";

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
          <Link to='/'><img className="tablet:w-60 tablet:h-20 phone:w-16 phone:h-6" src={LogoWhite} alt="ortho" /></Link>
          <Button onClick={props.onConfirm} className="bg-white tablet:font-bold phone:font-semibold tablet:text-lg phone:text-base rounded-lg tablet:py-5 tablet:px-6 phone:py-4 phone:px-5">Subscribe To Github</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
