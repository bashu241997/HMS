import { docchat, patients } from "@/common/constant/overview";
import React from "react";
import {
  BellAlertIcon,
  InformationCircleIcon,
  CalendarIcon,
  CheckBadgeIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  MicrophoneIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";

const MessageContainer = ({ param }: any) => {
  const patient = patients.filter((e) => e?.id === param)[0];
  console.log(patient);
  return (
    <div className="h-full w-full bg-white overflow-hidden">
      <div className=" px-4 h-[80px] text-white bg-skySecondary items-center flex w-full">
        <img src={patient.profile.pic} className="w-[50px] rounded-full" />
        <div className="pl-3 w-full">
          <p className="text-[16px] font-semibold flex items-center ">
            {patient.profile.firstname + " " + patient.profile.lastname}{" "}
            <CheckBadgeIcon className="ml-2 w-[25px]" />
          </p>
          <p className="text-[12px] font-bold ">online</p>
        </div>
        <div className="flex">
          <BellAlertIcon className="w-[25px] text-white" />
          <CalendarIcon className="ml-3 w-[25px] text-white" />
          <InformationCircleIcon className="mx-3 w-[25px] text-white" />
        </div>
      </div>

      <div className="bg-skyPrimary relative h-[65vh] sm:h-[75vh] overflow-y-scroll">
        <div className="overflow-y-scroll h-[55vh] sm:h-[65vh]">
          {docchat.conversation.map((e, i) => {
            return (
              <>
                {e.role === "doctor" ? (
                  <div className="flex mx-4  items-start flex-col">
                    <div className="bg-white text-left px-4 py-2 mx-2 my-4 w-[300px] rounded-2xl">
                      <p
                        className="text-primary text-[14px] capitalize"
                      >
                        {e.message}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex mx-4 items-end flex-col">
                    <div className="bg-skyMain text-right px-4 py-2 mx-2 my-4 w-[300px] rounded-2xl">
                      <p
                        className="text-white text-[14px] capitalize"
                      >
                        {e.message}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="absolute flex items-center bg-[#EDEDED] p-4 w-full bottom-0">
          <span>
            <FaceSmileIcon className="cursor-pointer text-skyMain w-[25px] mx-3" />
          </span>
          <input
            placeholder="Enter Message"
            className="capitalize w-full px-3 rounded-lg py-2 mx-2 bg-white"
          />
          <span>
            <PaperClipIcon className="cursor-pointer text-skyMain w-[25px] ml-3" />
          </span>
          <span>
            <MicrophoneIcon className="cursor-pointer text-skyMain w-[25px] ml-3" />
          </span>
          <span>
            <PaperAirplaneIcon className="cursor-pointer text-skyMain w-[25px] mx-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
