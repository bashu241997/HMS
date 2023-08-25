import { patients } from "@/common/constant/overview";
import React from "react";
import { XCircleIcon ,CheckCircleIcon} from '@heroicons/react/24/solid'


const Patientslist = ({ istoday }: any) => {
  return (
    <div>
      {patients.map((e: any) => {
        return (
          <div
            key={e?.id}
            className="cursor-pointer hover:bg-skyPrimary px-[20px] duration-300 hover:scale-110 py-3 flex items-center justify-between"
          >
            <div className="flex items-center justify-start">
              <img
                src={e?.profile?.pic}
                alt={e?.profile?.firstname}
                className="w-[40px]"
              />
              <div className="pl-[10px] capitalize">
                <h4 className="font-semibold text-[16px]">
                  {e?.profile?.firstname} {e?.profile?.lastname}
                </h4>
                <h5 className="font-semibold text-[14px]">
                  {e?.profile?.gender}, {e?.profile?.dob}
                </h5>
              </div>
            </div>
            {istoday ? (
              <div>
                {new Date(
                  e?.currentComplaint?.appointmentDate
                ).toLocaleTimeString()}
              </div>
            ) : (
              <div>{e?.currentComplaint?.status != "inprogress" ? <div className={`${e?.currentComplaint?.status == "declined" ? "bg-redPrimary text-redSecondary" : "bg-skyPrimary text-skySecondary" } capitalize rounded-[10px] text-[12px] text-center w-[80px] py-2 font-bold `}>{e?.currentComplaint?.status}</div>:<div className="w-[80px] flex items-center justify-between">
                <XCircleIcon className="w-8 text-redSecondary"/>
                <CheckCircleIcon  className="w-8 text-skySecondary"/></div>}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Patientslist;
