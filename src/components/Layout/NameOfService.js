import React from "react";

// Components
import Card from "../UI/Card";
import Container from "../UI/Container";

const serviceList = [
  {
    id: "sl1",
    name: "Name of service",
    service: "Operational",
  },
  {
    id: "sl2",
    name: "Name of service",
    service: "Operational",
  },
  {
    id: "sl3",
    name: "Name of service",
    service: "Operational",
  },
  {
    id: "sl4",
    name: "Name of service",
    service: "Operational",
  },
  {
    id: "sl5",
    name: "Name of service",
    service: "Operational",
  },
  {
    id: "sl6",
    name: "Name of service",
    service: "Operational",
  },
  {
    id: "sl7",
    name: "Name of service",
    service: "Operational",
  },
];

const NameOfService = () => {
  const serviceListItems = serviceList.map((item) => (
    <li
      className="border-solid border-b border-faint-black pb-4 mb-8 flex justify-between items-center tablet:text-xl phone:text-base last:mb-0"
      key={item.id}
    >
      <p className="font-medium">{item.name}</p>
      <p className="font-bold text-[#14AE5C]">{item.service}</p>
    </li>
  ));

  return (
    <Container>
      <Card className="border-solid border rounded-lg border-faint-black tablet:p-10 phone:p-4 mt-14">
        <ul>{serviceListItems}</ul>
      </Card>
    </Container>
  );
};

export default NameOfService;
