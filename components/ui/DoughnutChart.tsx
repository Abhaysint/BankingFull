"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {
  accounts: number[]; // This expects an array of numbers (account balances)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DoughnutChart = ({ accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks", // Fixed the typo 'lable' -> 'label'
        data: [12500, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"], // Fixed the typo 'lables' -> 'labels'
  };

  return <Doughnut data={data} />; // Passed the 'data' object correctly
};

export default DoughnutChart;
