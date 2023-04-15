import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";

export default function AverageTimePerTask() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/avgtasktimeperproject").then(res => res.json());
      setData(data);
    }
    fetchData();
  }, []);

  const dataArray = [];
  const labelArray = [];

  if (Array.isArray(data)) {
    data.forEach(datapoint => {
      labelArray.push(datapoint.project_id);
      dataArray.push(datapoint.average_task_time);
    });
  }

  return (
    <CChart
      type="doughnut"
      data={{
        labels: labelArray,
        datasets: [
          {
            label: "My Third dataset",
            backgroundColor: ["#ffd600", "#ff7043", "#8e24aa", "#0097a7", "#43a047"],
            borderColor: "rgba(255, 255, 255, 1)",
            pointBackgroundColor: "rgba(220, 220, 220, 1)",
            pointBorderColor: "#fff",
            data: dataArray
          }
        ]
      }}
      options={{
        legend: {
          position: "bottom"
        }
      }}
    />
  );
}
