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
  {
    id: "dl4",
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
    id: "dl5",
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
    id: "dl6",
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
    <li key={item.id}>
      <p className="mt-14 border-solid border-b pb-3 border-faint-black font-medium tablet:text-2xl phone:text-base">
        {item.date}
      </p>
      {item.description ? (
        <div className="text-justify">
          <p className="font-medium tablet:text-2xl phone:text-xs text-[#F24822] mt-2">
            {item.incident}
          </p>
          <p className="mt-5 font-bold tablet:text-xl phone:text-base">
            {item.resolved}-{" "}
            <span className="font-normal">{item.resolvedMessage}</span>
          </p>
          <p className="font-medium tablet:text-xl phone:text-base text-light-black">{item.date}</p>
          <p className="mt-5 font-bold tablet:text-xl phone:text-base">
            {item.update}-{" "}
            <span className="font-normal">{item.updateMessage}</span>
          </p>
          <p className="font-medium tablet:text-xl phone:text-base text-light-black">{item.date}</p>
          <p className="mt-5 font-bold tablet:text-xl phone:text-base">
            {item.investigating}-{" "}
            <span className="font-normal">
              {item.investigatingMessage}
            </span>
          </p>
          <p className="font-medium tablet:text-xl phone:text-base text-light-black">{item.date}</p>
        </div>
      ) : (
        <p className="text-light-black font-medium table:text-xl phone:text-xs mt-2 mb-14">
          No incident
        </p>
      )}
    </li>
  ));

  return (
    <Container>
      <ul>{dateListItems}</ul>
    </Container>
  );
};

export default PastIncidentsDates;
