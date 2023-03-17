import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PieChart from "./PieChart";

const BarChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    if (chart.current) {
      chart.current.destroy();
    }

    const ctx = chartContainer.current.getContext("2d");

    chart.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            label: "Bar Chart",
            data: data.map((item) => item.value),
            backgroundColor: "#3f51b5",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return (
    <>
      <div
        className="continer"
        style={{ position: "relative", backgroundColor: "whitesmoke" }}
      >
        <h3 className="py-3 px-5">
          Security Insight Dashboard |{" "}
          <span style={{ color: "GreyText" }}> Inside Hosts</span>
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: 800, height: 500 }}>
            <canvas ref={chartContainer} />
          </div>
          <div
            className="py-4 w-100 row justify-content-md-center "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="col bg-white p-3 m-2">
              <h4 className="text-center">Top Alarming Hosts</h4>
              <a href="Hostreport">
                <img
                  src="/Host-Category.png"
                  className=" d-inline-block  img-fluid"
                  alt="Host Category"
                  width={"250"}
                />
              </a>
            </div>
            <div className="col bg-white p-3 m-2">
              <h4 className="text-center">Alarms By Type</h4>
              <img
                src="/eventcount.png"
                className="d-inline-block img-fluid"
                alt="EventCount"
                width={"250"}
              />
            </div>
            <div className="col bg-white p-3 m-2">
              <h4 className="text-center">Today's Alarm</h4>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
