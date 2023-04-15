import React, { useEffect, useState } from "react";
import {CChart} from '@coreui/react-chartjs';
    

export default function SecondsToCompleteComponent(){

    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchData(){
            const data = await fetch('http://localhost:3001/secondstocompletetasks').then(res => res.json());
            console.log(data)
            setData(data);
        }
        fetchData();
},[]);


    const dataArray = [];
    const labelArray = [];

    data.forEach((datapoint) => {
        dataArray.push(datapoint.seconds_to_complete ?? 0);
        labelArray.push(datapoint.task_id)
    });

    return(
        <CChart
            type="line" 
            data={{
                labels: labelArray,
                datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                    borderColor: "rgba(0, 230, 77, 1)",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: dataArray
                },
                
                ],
            }}
        />
    );
}



  

