import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Male", "Female", "Unknown"],
        datasets: [
          {
            data: data,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Empty dependency array means this effect runs once after the initial render

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChartComponent;
