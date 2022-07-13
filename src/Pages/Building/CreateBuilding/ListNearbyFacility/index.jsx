import React from "react";
import ButtonIconDelete from "../../../../Components/ButtonIconDelete";
import ButtonIconEdit from "../../../../Components/ButtonIconEdit";

export default function ListNearbyFacility(props) {
  const { nearby } = props;
  return (
    <div className="w-full flex flex-col gap-4 justify-items-start">
      <h4 className="text-lg font-bold">List Nearby facilities</h4>
      <div className="w-3/5 bg-primary-gray3 flex flex-col">
        <div className="flex items-center gap-24 p-4 w-full">
          <div className="flex flex-col">
            <h4>RS Columbia Asia Medan</h4>
            <p className=" text-textColor-blackThin">15 min - 1.5 km</p>
          </div>
          <h5>Hospital</h5>
          <div className="flex gap-4">
            <button>
              <ButtonIconEdit />
            </button>
            <button>
              <ButtonIconDelete />
            </button>
          </div>
          </div>
          {/* <div className="flex items-center gap-24 p-4 w-full">
            <div className="flex flex-col">
              <h4>RS Columbia Asia Medan</h4>
              <p className=" text-textColor-blackThin">15 min - 1.5 km</p>
            </div>
            <h5>Hospital</h5>
            <div className="flex gap-4">
              <button>
                <ButtonIconEdit />
              </button>
              <button>
                <ButtonIconDelete />
              </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}