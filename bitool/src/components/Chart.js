import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  return <article className='chart'>

<Bar data={props.data || {}} options={options} />
  </article>;
};

export default Chart;
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };