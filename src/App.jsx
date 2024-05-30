import React, { useState, useEffect } from "react";
import * as d3 from "d3";

import LineBarSeries from "./components/ChartBar/LineBarSeries";

import ChartWithPanel from "./components/ChartPanel/ChartWithPanel";
import { Provider } from "./components/ChartPanel/Provider";
import { getData, csv_data } from "./utils/getData";
import Togglebutton from "./utils/Togglebutton";
// import LineGraph from "./components/LinePLot/LineGraph";
import StepCountsGraph from "./components/LinePLot/LineGraph";
import useTheme from "./contexts/ProvideContext";
import './App.css'

const metricsAttrs = { position: 'top', value: "maximum", categories: { 'heart_rate': 'Heart Rate' } }
import { ThemeProvider } from "./contexts/ProvideContext";

const App = ({ isloading, changer }) => {
  // console.log(changer)
  var lol = 0;
  const [data, setData] = useState(null)
  const LineBarChart = ChartWithPanel((props) => <LineBarSeries {...props} />)
  //const milliseconds = 60000 //this will update the chart every minute
  const milliseconds = 2000 //this will update the chart every second (for testing purposes)
  const timeFormat = milliseconds === 2000 ? d3.timeFormat("%H:%M:%S %p") : d3.timeFormat("%H:%M %p")
  var f = 0;
  useEffect(() => {
  }, [])

  useEffect(() => {
    csv_data()

    // setData(getData(milliseconds,lol))

    const interval = setInterval(() => {
      if (f == 0) {
        f = 1;
        changer();
      }
      const current = new Date()

      let dataInitial = getData(milliseconds, lol)
      console.log("end")
      lol += 1


      setData(dataInitial)
      setDateTime({ 'start': new Date(new Date().setHours(new Date().getHours() + dataInitial.hours)), 'current': current })

      if (data) {
        setData({ 'heart': [{ ...data.heart }] })
      }

    }, milliseconds);
    return () => clearInterval(interval);

  }, []);
  // const [themeMode, setThemeMode] = useState('light');
  // const darkTheme = () => {
  //     setThemeMode('dark');
  // }
  // const lightTheme = () => {
  //     setThemeMode('light');
  // }
  // useEffect(() => {}, [themeMode]);
  const { themeMode } = useTheme();
  if (isloading) {
    return (
      <div style={{height:"100vh", width:"100vw" , position:"relative"}}>
        <div className="loader"></div>
      </div>
    )
  }

  const heading = {
    textAlign: "center",
    color: themeMode === "light" ? "#333333" : "#ffffff",
  };

  const containerStyle1 = {
    display: 'flex',
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
};

const textStyle1 = {
  flex: '1', // Allow text to grow and take up remaining space
  textAlign: 'center',
  padding: '0 20px', // Add padding for spacing
  transition: 'transform 0.3s ease-in-out', // Add transition for animation
};

const heading1 = {
  fontSize: '40px',
  fontWeight: 'bold',
  fontFamily: 'Poppins',
  marginLeft:'100px',
  color: '#F2613F',
};

const text1 = {
  fontSize: '20px',
  fontWeight: 'lighter',

};

const text2 = {
  fontSize: '20px',
  fontWeight: '',
  
};
  
  return (
    <div style={{ width: "50px" }} >
      {/* <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}> */}
      {data && (
        <div
          className="wrapper"
          style={{
            backgroundColor: themeMode === "light" ? "#ffffff" : "#333333",
            color: themeMode === "light" ? "#333333" : "#ffffff",
          }}
        >
          {/* <div className="header">
            <h2>Health Lens</h2>
  
          </div> */}
          <div className="box">
          <div style={containerStyle1}>
                <div style={textStyle1}>
                    <h1 style={heading1}>Heart Rate Tracker</h1>
                    <hr />
                    <br>
                    </br>
                    <p style={{fontWeight:'',fontSize:'20px'}}>
                        This Chart shows the heart rate of the user in real time.
                        dashed line is recommended heart rate and solid line is recommended heart rate
                        intensity of the heart rate is shown by the color of the line
                    </p>
                    
                  </div>
            </div>
            <br>
            </br>
            <Provider>
              <LineBarChart
                data={data}
                metrics={metricsAttrs}
                timeformat={timeFormat}
              />
            </Provider>
          </div>
        </div>

      )}

      {/* </ThemeProvider>

      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}> */}
      {/* {data && (
         <div
         className="wrapper"
         style={{
           backgroundColor: themeMode === "light" ? "#ffffff" : "#333333",
           color: themeMode === "light" ? "#333333" : "#ffffff",
         }}
       >
        <div className="box">
            <StepCountsGraph />
          </div>
        </div>
        
      )} */}


      {/* </ThemeProvider> */}


    </div>

  );
}

export default App