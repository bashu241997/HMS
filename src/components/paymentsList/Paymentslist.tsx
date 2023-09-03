"use client";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Paymentslist = ({ payment }: any) => {
  return (
    <>
      <td scope="col" className="w-[200px] py-[10px] px-4">
        <div className="py-[10px] flex items-center">
          <EllipsisVerticalIcon className="w-[20px]" /> {payment?.orderId}
        </div>
      </td>
      <td scope="col" className="w-[200px] py-[10px] px-4">
        <div className="py-[10px]"> {payment?.profile?.name}</div>
      </td>
      <td scope="col" className="w-[200px] py-[10px] px-4">
        <div className="py-[10px]"> {payment?.payment?.mode}</div>
      </td>
      <td scope="col" className="w-[200px] py-[10px] px-4">
        <div className="py-[10px]"> {payment?.payment?.TransactionNo}</div>
      </td>
      <td scope="col" className="w-[200px] py-[10px] px-4">
        <div className="py-[10px]"> {payment?.payment?.mobile}</div>
      </td>
      <td scope="col" className="w-[200px] py-[10px] px-4">
        <div className="py-[10px]"> {payment?.totalamount}</div>
      </td>
    </>
  );
};

export default Paymentslist;
