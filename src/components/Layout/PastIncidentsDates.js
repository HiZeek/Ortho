import React from "react";
import Container from "../UI/Container";

const dateList = [
  {
    id: "dl1",
    description: false,
    date: "Aug 18, 2022",
    incident: "Delay in processing transfers",
    resolved: "Resolved",
    resolvedMessage: "this incident has been resolved",
    update: "Update",
    updateMessage:
      "this incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolved",
    investigating: "Investigating",
    investigatingMessage:
      "this incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolved",
  },
  {
    id: "dl2",
    description: false,
    date: "Aug 18, 2022",
    incident: "Delay in processing transfers",
    resolved: "Resolved",
    resolvedMessage: "this incident has been resolved",
    update: "Update",
    updateMessage:
      "this incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolved",
    investigating: "Investigating",
    investigatingMessage:
      "this incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolved",
  },
  {
    id: "dl3",
    description: true,
    date: "Aug 18, 2022",
    incident: "Delay in processing transfers",
    resolved: "Resolved",
    resolvedMessage: "this incident has been resolved",
    update: "Update",
    updateMessage:
      "this incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolved",
    investigating: "Investigating",
    investigatingMessage:
      "this incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolvedthis incident has been resolved",
  },
];

const PastIncidentsDates = () => {
  // const [availableDescription, setAvailableDescription] = useState(false);

  const dateListItems = dateList.map((item) => (
    <li className="" key={item.id}>
      <p className="border-solid border-b pb-3 border-faint-black font-medium text-2xl">
        {item.date}
      </p>
      {item.description ? (
        <div className="text-justify">
          <p className="font-medium text-2xl text-[#F24822] mt-2">
            {item.incident}
          </p>
          <p className="mt-5 font-bold text-xl">
            {item.resolved}-{" "}
            <span className="font-normal text-xl">{item.resolvedMessage}</span>
          </p>
          <p className="font-medium text-xl text-light-black">{item.date}</p>
          <p className="mt-5 font-bold text-xl">
            {item.update}-{" "}
            <span className="font-normal text-xl">{item.updateMessage}</span>
          </p>
          <p className="font-medium text-xl text-light-black">{item.date}</p>
          <p className="mt-5 font-bold text-xl">
            {item.investigating}-{" "}
            <span className="font-normal text-xl">
              {item.investigatingMessage}
            </span>
          </p>
          <p className="font-medium text-xl text-light-black">{item.date}</p>
        </div>
      ) : (
        <p className="text-light-black font-medium text-xl mt-2 mb-14">
          No incident
        </p>
      )}
    </li>
  ));

  return (
    <Container>
      <ul className="mt-14">{dateListItems}</ul>
    </Container>
  );
};

export default PastIncidentsDates;
