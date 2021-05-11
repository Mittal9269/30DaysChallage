import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "M10",
    "M11",
    "M12",
    "M13",
    "M14",
    "M15",
    "M16",
    "M17",
    "M18",
    "M19",
    "M20",
    "M21",
    "M22",
    "M23",
    "M24",
    "M25",
    "M26",
    "M27",
    "M28",
    "M29",
    "M30",
    "M31",
    "J01",
    "J02",
    "J03",
    "J04",
    "J05",
    "J06",
    "J07",
    "J08"
  ],
  datasets: [
    {
      label: "Marks",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [
        localStorage.getItem("May 10"),
        localStorage.getItem("May 11"),
        localStorage.getItem("May 12"),
        localStorage.getItem("May 13"),
        localStorage.getItem("May 14"),
        localStorage.getItem("May 15"),
        localStorage.getItem("May 16"),
        localStorage.getItem("May 17"),
        localStorage.getItem("May 18"),
        localStorage.getItem("May 19"),
        localStorage.getItem("May 20"),
        localStorage.getItem("May 21"),
        localStorage.getItem("May 22"),
        localStorage.getItem("May 23"),
        localStorage.getItem("May 24"),
        localStorage.getItem("May 25"),
        localStorage.getItem("May 26"),
        localStorage.getItem("May 27"),
        localStorage.getItem("May 28"),
        localStorage.getItem("May 29"),
        localStorage.getItem("May 30"),
        localStorage.getItem("May 31"),
        localStorage.getItem("June 1"),
        localStorage.getItem("June 2"),
        localStorage.getItem("June 3"),
        localStorage.getItem("June 4"),
        localStorage.getItem("June 5"),
        localStorage.getItem("June 6"),
        localStorage.getItem("June 7"),
        localStorage.getItem("June 8")
      ]
    }
  ]
};

export default function BarFunction() {
  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 10
          },
          legend: {
            display: true,
            position: "right"
          },
          scales: {
            xAxes: [
              {
                barThickness: 0.4, // number (pixels) or 'flex'
                maxBarThickness: 8 // number (pixels)
              }
            ]
          }
        }}
      />
    </div>
  );
}
