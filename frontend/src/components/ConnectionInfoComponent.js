import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";

export default function ConnectionInfoComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/connectioninfo").then(res => res.json());
      setData(data);
    }
    fetchData();
  }, []);

  const labels = [];
  const averageData = [];
  const minimumData = [];
  const maximumData = [];

  if (Array.isArray(data)) {
    data.forEach(datapoint => {
      labels.push(datapoint.connection_id);
      averageData.push(datapoint.average);
      minimumData.push(datapoint.minimum);
      maximumData.push(datapoint.maximum);
    });
  }

  return (
    <CChart
      type="bar"
      data={{
        labels: labels,
        datasets: [
          {
            label: "Average",
            backgroundColor: "#ffd600",
            data: averageData,
            stack: "stack1"
          },
          {
            label: "Minimum",
            backgroundColor: "#ff7043",
            data: minimumData,
            stack: "stack1"
          },
          {
            label: "Maximum",
            backgroundColor: "#8e24aa",
            data: maximumData,
            stack: "stack1"
          },
        ]
      }}
      options={{
        scales: {
          xAxes: [
            {
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: "Connection ID"
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: "Value"
              }
            }
          ]
        }
      }}
    />
  );
}
