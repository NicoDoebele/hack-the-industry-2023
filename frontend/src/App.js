import { Route, Routes } from 'react-router-dom';
import homeRoute from './routes/homeRoute';
import projectRoute from './routes/projectRoute';


function App() {
  return (
    <div className="App">

      
        <div>
          <Routes>
            <Route exact path="/" Component={homeRoute} />
            <Route path="/projects" Component={projectRoute} /> 
          </Routes>
             
        </div>
      
      
    </div>
  );
}

export default App;
