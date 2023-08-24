import React from "react";
import {
  QuestionMarkCircleIcon,
  BellAlertIcon,
  MagnifyingGlassCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex justify-between items-center bg-transparent">
      <div className="flex w-full items-centerpx-3 bg-transparent">
        <MagnifyingGlassCircleIcon className={"w-[40px] mx-3 text-black"} />
        <input
          placeholder="Search ... "
          className={"w-full p-3 outline-none bg-trans "}
        />
      </div>
      <div className="flex ltems-center justify-between">
        <button className="hover:scale-110 duration-300 cursor-pointer">
          <QuestionMarkCircleIcon className={"w-[40px] mx-3 text-black "} />
        </button>
        <button className="hover:scale-110 duration-300 cursor-pointer">
          <BellAlertIcon className={"w-[40px] mx-3 text-black"} />
        </button>
        <div className="flex p-3 cursor-pointer hover:bg-primarygrey rounded-lg ltems-center">
          <div className="w-[40px] h-[40px]">
          <Image
            src="/profile.png"
            width={40}
            height={40}
            alt="Picture of logo"
          />
          </div>
          <div className="mx-3 text-black min-w-[100px] capitalize font-bold">
            <p className="text-sm">clian murphy</p>
            <p className="text-xs"> cardiologist</p>
          </div>
          <div>
            <ChevronDownIcon className={"w-[30px] mx-3 text-black"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
