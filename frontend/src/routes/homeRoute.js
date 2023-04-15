import './../App.css';
import NavbarComponent from './../components/NavbarComponent';
import FooterComponent from './../components/FooterComponent';
import ChartComponent from './../components/ChartComponent';
import SecondsToCompleteComponent from './../components/SecondsToCompleteComponent';
import ChartBigComponent from './../components/ChartBigComponent';
import avgcableinstalltime from '../components/AvgCableInstallTime';
import AvgProjectDuration from '../components/AvgProjectDuration';
import AverageTimePerTask from '../components/AvarageTimePerTask';

export default function homeRoute(){
    return(
        <div className="App">

            <NavbarComponent />

            <div className='page1'>

                <div className='chartsDiv'>

                <ChartComponent title={"Seconds To Complete"} component={SecondsToCompleteComponent} />

                <ChartComponent title={"Avarage Cable Install Time"} component={avgcableinstalltime} />

                <ChartComponent title={"Avarage Project Duration"} component={AvgProjectDuration} />

                <ChartComponent title={"Average Time Per Task"} component={AverageTimePerTask} />

                </div>

                <ChartBigComponent title={"Avarage Time For Cable Install"} component={avgcableinstalltime} />

            </div>

            <FooterComponent />
      </div>
    );
}