import './../App.css';
import NavbarComponent from './../components/NavbarComponent';
import FooterComponent from './../components/FooterComponent';
import ChartComponent from './../components/ChartComponent';
import SecondsToCompleteComponent from './../components/SecondsToCompleteComponent';
import ChartBigComponent from './../components/ChartBigComponent';
import avgcableinstalltime from '../components/AvgCableInstallTime';
<<<<<<< HEAD
import Container from 'react-bootstrap/esm/Container';
=======
import AvgProjectDuration from '../components/AvgProjectDuration';
import AverageTimePerTask from '../components/AvarageTimePerTask';
>>>>>>> 4eb7d59ba19e537c8a17c5a114bb3eab12a991be

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