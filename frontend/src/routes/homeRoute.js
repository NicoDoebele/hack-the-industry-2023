import './../App.css';
import NavbarComponent from './../components/NavbarComponent';
import FooterComponent from './../components/FooterComponent';
import ChartComponent from './../components/ChartComponent';
import SecondsToCompleteComponent from './../components/SecondsToCompleteComponent';
import SampleChart from './../components/SampleChart';
import ChartBigComponent from './../components/ChartBigComponent';
import avgcableinstalltime from '../components/AvgCableInstallTime';
import AvgProjectDuration from '../components/AvgProjectDuration';

export default function homeRoute(){
    return(
        <div className="App">

            <NavbarComponent />

            <div className='page1'>

                <div className='chartsDiv'>

                <ChartComponent title={"Seconds To Complete"} component={SecondsToCompleteComponent} />

                <ChartComponent title={"Real Data 2"} component={avgcableinstalltime} />

                <ChartComponent title={"Avarage Project Duration"} component={AvgProjectDuration} />

                <ChartComponent title={"Real Data 4"} component={SampleChart} />

                </div>

                <ChartBigComponent title={"Avarage Time For Cable Install"} component={avgcableinstalltime} />

            </div>

            <FooterComponent />
      </div>
    );
}