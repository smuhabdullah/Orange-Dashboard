import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const ctx = document.getElementById('bar-chart');

    setChart(new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }));

    // Clean up function to remove the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <canvas id="bar-chart"></canvas>
  );
};

export default BarChart;

