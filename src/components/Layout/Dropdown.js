import React, { useState } from 'react';

// Component
import Container from '../UI/Container';

const Dropdown = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const dropdownHandler = () => {
    setDropdownIsActive(!dropdownIsActive);
  };

  return (
    <div>
        {props.children}
    </div>
  );
};

export default Dropdown;