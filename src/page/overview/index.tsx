import React from "react";
import Heading from "@/common/components/Heading/index";
import { cards, patients } from "@/common/constant/overview";
import DashboardCard from "@/common/components/cards/dashboardcard";
import PatientsTable from "@/common/components/table/PatientsTable";
import Patientslist from "@/common/components/Lists/Patientslist";
import WorkWeek from "@/common/components/cards/WorkWeek";
import CardHeading from "@/common/components/Heading/CardHeading";

import Doughnuts from "@/common/components/chart/doughnut";
import { weekdata } from "@/common/utils/utility";
import { AnyAaaaRecord } from "dns";
const data = {
  labels: ["Male", "Female", "Child"],
  datasets: [
    {
      data: [65, 59, 83],
      backgroundColor: ["#9287FE", "#FFA901", "#24A8FA"],
    },
  ],
};
const PatientsType = {
  labels: ["New Patients", "Old Patients"],
  datasets: [
    {
      data: [63, 37],
      backgroundColor: ["#FFA901", "#24A8FA"],
    },
  ],
};
const Index = () => {
  return (
    <div className="p-4">
      <Heading
        title={"clian Murphy"}
        subheading="Good Morning, Have nice day at work"
      />
      <div className="flex py-4 flex-col sm:flex-row justify-between">
        {cards?.map((e, i) => {
          return <DashboardCard key={i} {...e} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-[15px] md:grid-cols-3">
        <div className="p-2">
          <CardHeading
            leftlabel={"appointment requests"}
            rightlabel={"see all"}
          />
          <div className=" bg-white rounded-[10px] h-[500px]  overflow-y-auto  shadow- xl ">
            <Patientslist />
          </div>
        </div>

        <div className="p-2">
          <CardHeading leftlabel={"patients"} rightlabel={"see all"} />
          <div className="bg-white rounded-[10px] py-4 overflow-y-auto  shadow- xl ">
            {/* <DetailsCard /> */}
            <Doughnuts _data={PatientsType} />
          </div>
          <CardHeading leftlabel={"genders"} rightlabel={"see all"} />
          <div className="bg-white rounded-[10px] py-4 h-[250px] overflow-y-auto  shadow- xl ">
            <Doughnuts _data={data} />
          </div>
        </div>

        <div className="p-2">
          <CardHeading leftlabel={"Today Appointments"} />
          <div className="bg-white rounded-[10px] py-4 h-[300px] overflow-y-auto  shadow- xl ">
            <Patientslist istoday={true} />
          </div>
          <div className="px-3 bg-white">
            <p className="py-2 text-[16px] capitalize font-bold text-violetMain">{weekdata()[1]}</p>
            <div className="flex justify-between items-center">
              {weekdata()[0]?.map((e: any,i:number) => {
                return (
                  <div key={i} className={`p-2 m-2 text-[14px] rounded-[10px] font-bold ${i===0?"bg-skyPrimary text-skyMain":""}`}>
                    <p className="pb-2"> {e?.date?.split("-")[2]}</p>
                    <p> {e?.day}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <WorkWeek />
        </div>
      </div>

      <CardHeading leftlabel={"recent appointments"} />
      <PatientsTable patients={patients.slice(0, 6)} />
    </div>
  );
};

export default Index;
