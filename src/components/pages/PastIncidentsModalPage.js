import React from "react";
import PastIncidentsModal from "../UI/PastIncidentsModal";
import CloseBtn from "../../assets/x-circle1.png";

const PastIncidentsModalPage = (props) => {
  return (
    <PastIncidentsModal onClose={props.onClose}>
      <div className="bg-white laptop:w-[953px] laptop:h-[724.91px] tablet:w-[768px] tablet:h-[700px] phone:w-[450px] phone:h-[422px] overflow-auto tablet:p-14 phone:p-5 tablet:rounded-2xl phone:rounded">
        <img
            onClick={props.onClose}
          className="tablet:w-14 tablet:h-14 phone:w-7 phone:h-7 absolute top-4 right-16 cursor-pointer"
          src={CloseBtn}
          alt="Close"
        />
        <div className="mt-14">
          <p className="font-medium tablet:text-2xl phone:text-base underline tablet:mb-14 phone:mb-7">
            [Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 -
            NIGERIA
          </p>
          <div className="mb-5 tablet:text-xl phone:text-base">
            <p className="font-bold mb-3">
              Resolved-{" "}
              <span className="font-normal">
                this incident has been resolved
              </span>
            </p>
            <p className="font-medium text-light-black">Aug 18, 2022</p>
          </div>
          <div className="mb-5 tablet:text-xl phone:text-base">
            <p className="font-bold mb-3">
              Update-{" "}
              <span className="font-normal">
                this incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been{" "}
              </span>
            </p>
            <p className="font-medium text-light-black">Aug 18, 2022</p>
          </div>
          <div className="tablet:text-xl phone:text-base">
            <p className="font-bold mb-3">
              Investigating-{" "}
              <span className="font-normal">
                this incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been
                resolvedthis incident has been resolvedthis incident has been{" "}
              </span>
            </p>
            <p className="font-medium text-light-black">Aug 18, 2022</p>
          </div>
        </div>
      </div>
    </PastIncidentsModal>
  );
};

export default PastIncidentsModalPage;
