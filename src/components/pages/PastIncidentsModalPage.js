import React from "react";
import PastIncidentsModal from "../UI/PastIncidentsModal";
import CloseBtn from "../../assets/x-circle1.png";

const PastIncidentsModalPage = (props) => {
  return (
    <PastIncidentsModal onClose={props.onClose}>
      <div className="bg-white w-[953px] h-[724.91px] p-14 rounded-2xl">
        <img
            onClick={props.onClose}
          className="w-14 h-14 absolute top-4 right-16 cursor-pointer"
          src={CloseBtn}
          alt="Close"
        />
        <div className="mt-14">
          <p className="font-medium text-2xl underline mb-14">
            [Scheduled] [Zenith Bank] - Scheduled Maintenance - 16 August 2022 -
            NIGERIA
          </p>
          <div className="mb-5">
            <p className="font-bold text-xl mb-3">
              Resolved-{" "}
              <span className="font-normal">
                this incident has been resolved
              </span>
            </p>
            <p className="font-medium text-xl text-light-black">Aug 18, 2022</p>
          </div>
          <div className="mb-5">
            <p className="font-bold text-xl mb-3">
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
            <p className="font-medium text-xl text-light-black">Aug 18, 2022</p>
          </div>
          <div>
            <p className="font-bold text-xl mb-3">
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
            <p className="font-medium text-xl text-light-black">Aug 18, 2022</p>
          </div>
        </div>
      </div>
    </PastIncidentsModal>
  );
};

export default PastIncidentsModalPage;
