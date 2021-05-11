import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export default function Chart(props) {
  // const array = JSON.parse(localStorage.getItem(props.name))

  const state = {
    labels: ["Done", "Not Done"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#2FDE00", "#B21F00"],
        hoverBackgroundColor: ["#175000", "#501800"],
        data: [props.value, 100 - props.value]
      }
    ]
  };
  return (
    <div>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "right"
          }
        }}
      />
    </div>
  );
}
