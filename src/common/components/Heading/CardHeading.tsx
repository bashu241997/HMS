import React from "react";
import { XCircleIcon } from '@heroicons/react/24/solid'

const CardHeading = ({ leftlabel, rightlabel }: any) => {
  return (
    <div className="py-[20px] flex items-center justify-between">
      <span>{leftlabel && <p className="text-black capitalize text-[16px] font-bold ">{leftlabel}</p>}</span>
      <span>{rightlabel && <p className="text-skySecondary capitalize text-[14px] cursor-pointer font-bold ">{rightlabel}</p>}</span>
    </div>
  );
};

export default CardHeading;
