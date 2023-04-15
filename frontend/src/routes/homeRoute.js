import './../App.css';
import NavbarComponent from './../components/NavbarComponent';
import FooterComponent from './../components/FooterComponent';
import ChartComponent from './../components/ChartComponent';
import SecondsToCompleteComponent from './../components/SecondsToCompleteComponent';
import SampleChart from './../components/SampleChart';
import ChartBigComponent from './../components/ChartBigComponent';
import avgcableinstalltime from '../components/AvgCableInstallTime';

export default function homeRoute(){
    return(
        <div className="App">

            <NavbarComponent />

            <div className='page1'>

                <div className='chartsDiv'>

                <ChartComponent title={"Real Data"} component={SecondsToCompleteComponent} />

                <ChartComponent title={"Real Data 2"} component={avgcableinstalltime} />

                <ChartComponent title={"Real Data 3"} component={SampleChart} />

                <ChartComponent title={"Real Data 4"} component={SampleChart} />

                </div>

                <ChartBigComponent title={"Big Real Data 1"} component={avgcableinstalltime} />

            </div>

            <FooterComponent />
      </div>
    );
}