import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";


export default function AvgProjectDuration(){

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const data = await fetch("http://localhost:3001/timeneedeperproject").then(res => res.json());
          setData(data);
        }
        fetchData();
      }, []);

    const dataArray = [];
    const labelArray = [];

    if (Array.isArray(data)) {
        data.forEach(datapoint => {
            labelArray.push(datapoint.project_id);
            dataArray.push(datapoint.time_needed ?? 0);
        });
    }

    const avg =
    dataArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    dataArray.length;

    const avgLine = {
        label: "Average",
        type: "line",
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 0,
        data: Array(dataArray.length).fill(avg.toFixed(0)),
        zIndex: 100
    };

    return(
        <CChart
            type="bar"
            data={{
                labels: labelArray,
                datasets: [
                {
                    label: "Avarage Project Duration",
                    backgroundColor: ["#ffd600", "#ff7043", "#8e24aa", "#0097a7", "#43a047"],
                    borderColor: "rgba(255, 255, 255, 1)",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: dataArray,
                },
                avgLine,
                ],
            }}
            options={{
                legend: {
                position: "bottom",
                },
            }}
            />
    );
}