"use client";
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export const options = {
  // indexAxis: "y",
  scales: {
    x: {
      grid: {
        lineWidth: 0.2,
        // display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ["January", "February", "March", "April"];
const data1 = [-400, 400, 100, 300];
const data2 = [400, 100, 150, -300];
const data3 = [-100, 200, -100, 250];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: data1,
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: data2,
      borderColor: "white",
      borderWidth: 2,
      barThickness: 40,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: data3,
      barThickness: 40,
    },
  ],
};

export function BarGraph() {
  return <Chart type="bar" options={options} data={data} />;
}
