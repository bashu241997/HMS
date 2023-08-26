import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import { Chart } from 'chart.js/auto'
Chart.register(ArcElement);

const Doughnuts =  ({_data}:any) => {

  
    return (
      <Doughnut
        data={_data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    );
  }

export default Doughnuts
