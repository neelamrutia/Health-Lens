import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data_30 from './yourself_data.js';
import '../../App.css'
// import { data11, data12 } from './p1_data.js';


// Import Highcharts modules
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsMore from 'highcharts/highcharts-more';

// Initialize Highcharts modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);


const Linechart = (props) => {
  const chartRef = useRef(null);
  console.log(props.date_used);
  const data1 = [];
  for (let hour = 0; hour < 24; hour++) {
    const hourString = hour.toString().padStart(2, '0') + ':00';
    data1.push(data_30[props.date_used-1][hourString]['Yourself']);
  }
  useEffect(() => {
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartRef.current) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  const config = {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    xAxis: {
      title: {
        text: 'Time of Day',
      },
      labels: {
        style: {
          fontSize: '20px' // Adjust the font size as needed
        }
      },
      categories: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
        '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
        '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
      ]
    },
    yAxis: {
      min: 0.00,
      max: 21000.00,
      tickAmount: 10,
      title: {
        text: 'Number of Steps',
      },
      labels: {
        style: {
          fontSize: '20px' // Adjust the font size as needed
        }
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'daily',  
      data: data1
    }, {
      name: 'average',
      data: [121, 160, 200, 218, 219, 220, 220, 245, 479, 1743, 2577, 3206, 3893, 4737, 5718, 6296, 6875, 7494, 8446, 9678, 10828, 11525, 12093, 13145]
    }]
  };

  const text1 = {
    fontSize: '15px',
    
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '20px',
  };


  return (
    // <HighchartsReact highcharts={Highcharts} options={config} ref={chartRef} />
    // <div className='wrapperstepline'>
    <div className='box'>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        left: '8vw',
        height: '100vh', /* Optional: makes the container full height of the viewport */
      }}>
        <div style={{
          border: '1px solid #ccc',
          width: '600px',
          padding: '40px',
          borderRadius: '5px',
        }}>
          <div style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px',color:'#F2613F'}}>Step Analysis over 24hr</div>
          
          <p style={text1}> 
            The following graph shows the number of steps taken by yourself and the average number of steps taken by you in the past days as you over a 24 hour period.
          </p>
          <HighchartsReact highcharts={Highcharts} options={config} ref={chartRef} />
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Linechart;
