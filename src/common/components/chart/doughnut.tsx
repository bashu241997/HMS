import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);
const data = {
  labels: ["Male", "Female", "Child"],
  datasets: [
    {
      data: [65, 59, 83],
      backgroundColor: [
        "#9287FE",
        "#FFA901",
        "#24A8FA",
      ],
    },
  ],
};

const Doughnuts =  () => {
    return (
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    );
  }

export default Doughnuts
