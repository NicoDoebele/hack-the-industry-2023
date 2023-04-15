import React, { useEffect, useState } from "react";
import { CChart } from '@coreui/react-chartjs';
    

export default function AvgCableInstallTime(){

    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchData(){
            const data = await fetch('http://localhost:3001/avgcableinstalltime').then(res => res.json());
            setData(data);
        }
        fetchData();
    },[]);

    const dataArray = [];
    const labelArray = [];

    if (Array.isArray(data)) {
        data.forEach((datapoint) => {
            labelArray.push(datapoint.cable_id);
            dataArray.push(datapoint.avg_installation_time);
        });
    }

    return(
        <CChart
            type="doughnut" 
            data={{
                labels: labelArray,
                datasets: [
                    {
                        label: "My Second dataset",
                        backgroundColor: ["rgba(220, 220, 220, 1)", "rgba(51,102,255,1)", "rgba(255, 255,0,1", "rgba(204,51,255,1)", "rgba(51,204,204,1)"],
                        borderColor: "rgba(255, 255, 255, 1)",
                        pointBackgroundColor: "rgba(220, 220, 220, 1)",
                        pointBorderColor: "#fff",
                        data: dataArray
                    }
                ],
            }}
        />
    );
}
