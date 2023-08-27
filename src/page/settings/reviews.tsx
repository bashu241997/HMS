import { ratings } from "@/common/constant/profile";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Review = () => {
  return (
    <div className="my-[15px] min-h-[70vh] shadow-xl p-3 rounded-lg bg-white">
      {ratings.map((e: any, i: number) => {
        return (
          <div key={i} className="border-b-[1px] border-dotted p-3">
            <div className="py-2 flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={e?.pic} className="w-[50px]" />
                <div className="pl-3 capitalizs">
                  <p className="text-[18px] font-bold">{e?.firstname}</p>
                  <p className="text-[14px] font-semibold">{e?.profession}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex py-2 items-center justify-end">
                  {[1, 2, 3, 4, 5].map((e) => {
                    return (
                      <StarIcon
                        key={e}
                        className="w-[20px] ml-2 text-orangeMain"
                      />
                    );
                  })}
                </div>
                <div className="text-[12px] font-semibold">
                  {e?.ratings + "/5"}
                </div>
              </div>
            </div>
            <div className="text-[12px] font-semibold">{e?.about}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
