import './../styles/chartComponent.css';
import SecondsToCompleteComponent from './SecondsToCompleteComponent';

export default function ChartComponent(){

    return(
        <div className="chartComponent">
            <h3>Real Data</h3>
            <SecondsToCompleteComponent />
        </div>
    );

}