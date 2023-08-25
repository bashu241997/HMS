import React from "react";
import Heading from "@/common/components/Heading/index";
import { cards, patients } from "@/common/constant/overview";
import DashboardCard from "@/common/components/cards/dashboardcard";
import PatientsTable from "@/common/components/table/PatientsTable";
import Patientslist from "@/common/components/Lists/Patientslist";
import WorkWeek from "@/common/components/cards/WorkWeek";
import CardHeading from "@/common/components/Heading/CardHeading";
import DetailsCard from "@/common/components/cards/detailscard";
import Doughnuts from "@/common/components/chart/doughnut"

const Index = () => {
  return (
    <div className="p-4">
      <Heading
        title={"clian Murphy"}
        subheading="Good Morning, Have nice day at work"
      />
      <div className="flex py-4 justify-between">
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
          <DetailsCard />
          </div>
          <CardHeading leftlabel={"genders"} rightlabel={"see all"} />
          <div className="bg-white rounded-[10px] py-4 h-[250px] overflow-y-auto  shadow- xl ">
         <Doughnuts />
          </div>
        </div>

        <div className="p-2">
          <CardHeading leftlabel={"Today Appointments"} />
          <div className="bg-white rounded-[10px] py-4 h-[300px] overflow-y-auto  shadow- xl ">
            <Patientslist istoday={true} />
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
