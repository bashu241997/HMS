import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center flex-col py-4 rounded-lg shadow-lg bg-white">
      <div className="py-3">
        <Image src="/17.png" width={150} height={150} alt="Picture of logo" />
      </div>
      <div className="my-3 text-black min-w-[100px] text-center capitalize font-bold">
        <p className="text-xl py-2">clian Johny</p>
        <p className="text-md pb-2"> cardiologist</p>
      </div>
      <button className="bg-violetMain text-white font-semibold rounded-md border-0 capitalize text-[16px] px-3 py-2">
        Edit Profile
      </button>

      <div className="pt-6">
        <p className="text-center font-medium">146 ratings</p>
        <div className="flex py-2 items-center justify-end">
          {[1, 2, 3, 4, 5].map((e) => {
            return (
              <StarIcon key={e} className="w-[20px] ml-2 text-orangeMain" />
            );
          })}
        </div>
      </div>
      <div className="w-full px-6 pt-6 text-[12px] flex items-center justify-between text-center font-medium">
        <p>people&lsquo;s trust</p>
        <p>97</p>
      </div>
      <div className="w-full px-6 py-4 bg-neutral-200 dark:bg-neutral-600">
        <div className="bg-[#52b375] w-[97%] p-0.5 text-center text-xs font-medium leading-none text-white">
          97
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
