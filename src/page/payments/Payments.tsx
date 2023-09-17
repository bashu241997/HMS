"use client";
import CardHeading from "@/common/components/Heading/CardHeading";
import OrderCard from "@/common/components/cards/ordercard";
import Doughnuts from "@/common/components/chart/doughnut";
import { paymntsMade } from "@/common/constant/payments";
import Addcredit from "@/components/creditcards/Addcredit";
import Creditcard from "@/components/creditcards/Creditcard";
import Paymentslist from "@/components/paymentsList/Paymentslist";
import React, { useState } from "react";

const PatientspaymentType = {
  labels: ["cash", "UPI / Card", "Insurance"],
  datasets: [
    {
      data: [46, 24, 30],
      backgroundColor: ["#FFA901", "#24A8FA", "#52b375"],
    },
  ],
};

const Payments = () => {
  const img = [
    "https://i.imgur.com/Zi6v09P.png",
    "https://i.imgur.com/kGkSg1v.png",
  ];
  const [Show, setShow] = useState({id:0,data:paymntsMade[0]});
  return (
    <div className="p-4">
      <CardHeading leftlabel={"Payment methods"} />
      <div className="flex flex-col sm:flex-row items-center py-[15px] justify-start">
        {img.map((e) => (
          <div key={e} className="sm:px-[15px] mx-2 my-4  sm:m-0">
            <Creditcard bgimg={e} />
          </div>
        ))}
        <Addcredit />
      </div>
      <CardHeading leftlabel={"payments"} />
      <div className="grid gap-6 grid-cols-12">
        <div className="bg-white max-h-[75vh] overflow-y-auto shadow-2xl mt-4 col-span-12 sm:col-span-9">
          <table className=" w-full text-sm text-left text-gray-500">
            <thead className="text-[16px] bg-violetMain text-white capitalize text-gray-700 uppercase py-4 bg-gray-50">
              <tr>
                <th scope="col" className="w-[200px]">
                  <div className="py-[10px] px-4"> Invoice Id</div>
                </th>
                <th scope="col" className="w-[200px]">
                  <div className="py-[10px] px-4"> Name </div>
                </th>
                <th scope="col" className="w-[200px]">
                  <div className="py-[10px] px-4"> payment type </div>
                </th>
                <th scope="col" className="w-[200px]">
                  <div className="py-[10px] px-4"> Transaction No </div>
                </th>
                <th scope="col" className="w-[200px]">
                  <div className="py-[10px] px-4"> mobile No </div>
                </th>
                <th scope="col" className="w-[200px]">
                  <div className="py-[10px] px-4"> total Amount </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {paymntsMade?.map((e,i) => {
                return (
                  <tr
                    key={e.id}
                    onClick={()=>setShow({
                      id:i,
                      data:e
                    })}
                    className={`duration-300 text-[14px] bg-white cursor-pointer hover:bg-violetPrimary font-medium capitalize ${ i == Show.id ? "!bg-violetPrimary" : "" }` }
                  >
                    <Paymentslist payment={e} show={Show} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-span-12 sm:col-span-3 mt-4">
          <div className="bg-orangeMain text-white min-h-[45vh] rounded-[10px] px-4 mb-4 shadow-2xl">
            <OrderCard order={Show.data}/>
          </div>
          <div className="bg-white rounded-[10px] px-4 pb-4 shadow-2xl">
            <CardHeading leftlabel={"Payments Mode"} />
            <div>
              <Doughnuts _data={PatientspaymentType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
