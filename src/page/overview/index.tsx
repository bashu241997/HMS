import React from "react";
import Heading from "@/common/components/Heading/index";
import { cards } from "@/common/constant/overview";
import DashboardCard from "@/common/components/cards/dashboardcard";

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
    </div>
  );
};

export default Index;
