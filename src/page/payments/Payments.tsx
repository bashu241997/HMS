"use client";
import Doughnuts from "@/common/components/chart/doughnut";
import { paymntsMade } from "@/common/constant/payments";
import Paymentslist from "@/components/paymentsList/Paymentslist";
import React from "react";

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
  return (
    <div className="p-4">
      <div className="text-base font-bold capitalize">Recent Payments</div>

      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-9">
          {paymntsMade?.map((e, i) => {
            return (
              <div key={i}>
                <Paymentslist {...e} />
              </div>
            );
          })}
        </div>
        <div className="col-span-3">
          <div className="">
            <p>payments made</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
