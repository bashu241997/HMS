import React from "react";
import { ArrowTrendingUpIcon, UserIcon } from "@heroicons/react/24/solid";

const DetailsCard = () => {
  const data = [24.4, 15];
  return (
    <div>
      {data.map((e: any) => {
        return (
          <div className="px-[20px] py-[10px] flex items-center justify-between">
            <div className="flex items-center justify-start">
             <div className={`${
                  (e + 1) % 2 == 0 ? "bg-skyPrimary" : "bg-redPrimary"
                } p-[10px] rounded-full mr-4`}>
             <UserIcon
                className={`${
                  (e + 1) % 2 == 0 ? "text-skySecondary" : "text-redSecondary"
                } w-[30px]`}
              /></div>
              <div className="capitalize">
                <div className="text-[20px] font-bold">{e}K</div>
                <div className="text-[18px]">
                  {e % 2 == 0 ? "old patients" : "new patients"}
                </div>
              </div>
            </div>
            <ArrowTrendingUpIcon className="text-violetMain w-[40px]" />
          </div>
        );
      })}
    </div>
  );
};

export default DetailsCard;
