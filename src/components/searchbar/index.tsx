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
    <div className="top-0 z-[10000] flex flex-col sm:flex-row justify-between items-center">
      <div className="invisible sm:visible flex w-full items-center justify-between sm:px-3 ">
        <MagnifyingGlassCircleIcon
          className={"w-[30px] sm:w-[40px] mr-2 sm:mx-3 text-black"}
        />
        <input
          placeholder="Search ... "
          className={"w-full p-3 outline-none bg-trans "}
        />
      </div>
      <div className="fixed z-[5] bg-background w-full sm:w-auto sm:relative  flex ltems-center justify-between">
        <button className="hidden sm:block hover:scale-[1.05] duration-300 cursor-pointer">
          <QuestionMarkCircleIcon
            className={"w-[25px] sm:w-[40px] mx-3 text-black "}
          />
        </button>
        <button className="hidden sm:block hover:scale-[1.05] duration-300 cursor-pointer">
          <BellAlertIcon className={"w-[25px] sm:w-[40px] mx-3 text-black"} />
        </button>
        <div className="flex p-3 cursor-pointer hover:bg-primarygrey rounded-lg ltems-center">
          <div className="w-[40px] h-[40px]">
            <Image src="/17.png" width={40} height={40} alt="Picture of logo" />
          </div>
          <div className="mx-3 text-black min-w-[100px] capitalize font-bold">
            <p className="text-sm">clian Johny</p>
            <p className="text-xs"> cardiologist</p>
          </div>
          <div className="hidden sm:block ">
            <ChevronDownIcon className={"w-[30px] mx-3 text-black"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
