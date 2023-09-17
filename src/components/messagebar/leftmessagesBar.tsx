import { patients } from "@/common/constant/overview";
import React from "react";
import {
  CheckBadgeIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { profile } from "@/common/constant/profile";
import Link from "next/link";

const LeftMessagesBar = ({ onopen }: any) => {
  return (
    <div className="relative h-full shadow-lg">
      <div className="h-[155px] bg-">
        <p className="text-[20px] font-semibold flex px-4 pt-4 pb-2 items-center">
          Messages
        </p>
        <div className="px-4 pt-2 capitalize cursor-pointer  flex items-center">
          <div className="w-full">
            <p className="text-[16px] font-bold flex">
              Welcome DR.{profile.profile.name}
            </p>
            <div className="flex text-[12px] p-4 items-center justify-between">
              <input
                placeholder="search your Chats..."
                className="p-2 bg-white w-full rounded-xl"
              />
              <MagnifyingGlassCircleIcon className="pl-2 w-[30px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll h-[65vh]">
        {patients?.length > 0 &&
          patients?.map((e) => {
            return (
              <Link
                onClick={(e) => {
                  e.stopPropagation();
                  if (onopen) {
                    onopen(true);
                  }
                }}
                key={e?.id}
                href={`/chat/${e?.id}`}
                className=" shadow-md mb-[1px] border-dotted p-4 capitalize cursor-pointer hover:bg-orangePrimary flex items-center bg-white"
              >
                <img src={e.profile.pic} className="w-[50px] rounded-full" />
                <div className="pl-3 w-full">
                  <p className="text-[14px] font-semibold flex">
                    {e.profile.firstname + " " + e.profile.lastname}{" "}
                    <CheckBadgeIcon className="ml-2 text-[#51b375] w-[16px]" />
                  </p>
                  <div className="flex text-[12px] pt-[4px] items-center justify-between">
                    <p>{e.currentComplaint.concern[0]}</p>
                    <p>{new Date(e.health.lastVisit).toLocaleTimeString()}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default LeftMessagesBar;
