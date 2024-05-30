import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsHeatmap from 'highcharts/modules/heatmap';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import { useState } from "react";
import StepCountsGraph from './components/LinePLot/LineGraph';
import "./App.css";

highchartsHeatmap(Highcharts);
highchartsExporting(Highcharts);
highchartsAccessibility(Highcharts);

const data = [{
    date: '2023-07-01',
    Stepcount: 13217
},
{
    date: '2023-07-02',
    Stepcount: 9440
},
{
    date: '2023-07-03',
    Stepcount: 11252
},
{
    date: '2023-07-04',
    Stepcount: 10532
},
{
    date: '2023-07-05',
    Stepcount: 11560
},
{
    date: '2023-07-06',
    Stepcount: 11505
},
{
    date: '2023-07-07',
    Stepcount: 11805
},
{
    date: '2023-07-08',
    Stepcount: 11840
},
{
    date: '2023-07-09',
    Stepcount: 11658
},
{
    date: '2023-07-10',
    Stepcount: 14211
},
{
    date: '2023-07-11',
    Stepcount: 11457
},
{
    date: '2023-07-12',
    Stepcount: 11169
},
{
    date: '2023-07-13',
    Stepcount: 10981
},
{
    date: '2023-07-14',
    Stepcount: 12794
},
{
    date: '2023-07-15',
    Stepcount: 11166
},
{
    date: '2023-07-16',
    Stepcount: 12720
},
{
    date: '2023-07-17',
    Stepcount: 12817
},
{
    date: '2023-07-18',
    Stepcount: 10179
},
{
    date: '2023-07-19',
    Stepcount: 11709
},
{
    date: '2023-07-20',
    Stepcount: 10737
},
{
    date: '2023-07-21',
    Stepcount: 10445
},
{
    date: '2023-07-22',
    Stepcount: 12511
},
{
    date: '2023-07-23',
    Stepcount: 12568
},
{
    date: '2023-07-24',
    Stepcount: 14331
},
{
    date: '2023-07-25',
    Stepcount: 11353
},
{
    date: '2023-07-26',
    Stepcount: 10405
},
{
    date: '2023-07-27',
    Stepcount: 12257
},
{
    date: '2023-07-28',
    Stepcount: 12604
},
{
    date: '2023-07-29',
    Stepcount: 13782
},
{
    date: '2023-07-30',
    Stepcount: 9922
},
{
    date: '2023-07-31',
    Stepcount: 11658
}];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// The function takes in a dataset and calculates how many empty tiles needed
// before and after the dataset is plotted.
function generateChartData(data) {
  // Calculate the starting weekday index (0-6 of the first date in the given array)
  const firstWeekday = new Date(data[0].date).getDay(),
    monthLength = data.length,
    lastElement = data[monthLength - 1].date,
    lastWeekday = new Date(lastElement).getDay(),
    lengthOfWeek = 6,
    emptyTilesFirst = firstWeekday,
    chartData = [];

  // Add the empty tiles before the first day of the month with null values to
  // take up space in the chart
  for (let emptyDay = 0; emptyDay < emptyTilesFirst; emptyDay++) {
    chartData.push({
      x: emptyDay,
      y: 5,
      value: null,
      date: null,
      custom: {
        empty: true,
      },
    });
  }

  // Loop through and populate with Stepcount and dates from the dataset
  for (let day = 1; day <= monthLength; day++) {
    // Get date from the given data array
    const date = data[day - 1].date;
    // Offset by the number of empty tiles
    const xCoordinate = (emptyTilesFirst + day - 1) % 7;
    const yCoordinate = Math.floor((firstWeekday + day - 1) / 7);
    const id = day;

    // Get the corresponding Stepcount for the current day from the given array
    const Stepcount = data[day - 1].Stepcount;

    chartData.push({
      x: xCoordinate,
      y: 5 - yCoordinate,
      value: Stepcount,
      date: new Date(date).getTime(),
      custom: {
        monthDay: id,
      },
    });
  }

  // Fill in the missing values when dataset is looped through.
  const emptyTilesLast = lengthOfWeek - lastWeekday;
  for (let emptyDay = 1; emptyDay <= emptyTilesLast; emptyDay++) {
    chartData.push({
      x: (lastWeekday + emptyDay) % 7,
      y: 0,
      value: null,
      date: null,
      custom: {
        empty: true,
      },
    });
  }
  return chartData;
}

const chartData = generateChartData(data);

const options = {
  chart: {
    type: "heatmap",
  },
  title: {
    text: "Day Stepcount of Person in July",
    align: "center",
    
  },
  accessibility: {
    landmarkVerbosity: "one",
  },
  tooltip: {
    enabled: true,
    outside: true,
    zIndex: 20,
    headerFormat: "",
    pointFormat:
      "{#unless point.custom.empty}{point.date:%A, %b %e, %Y}{/unless}",
    nullFormat: "No data",
  },
  xAxis: {
    categories: weekdays,
    opposite: true,
    lineWidth: 26,
    offset: 13,
    lineColor: "rgba(27, 26, 37, 0.2)",
    labels: {
      rotation: 0,
      y: 20,
      style: {
        textTransform: "uppercase",
        fontWeight: "bold",
      },
    },
    accessibility: {
      description: "weekdays",
      rangeDescription:
        "X Axis is showing all 7 days of the week, starting with Sunday.",
    },
  },
  yAxis: {
    min: 0,
    max: 5,
    accessibility: {
      description: "weeks",
    },
    visible: false,
  },
  legend: {
    align: "right",
    layout: "vertical",
    verticalAlign: "middle",
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#AED6F1"],
      [0.4, "#85C1E9"],
      [0.6, "#58D68D"],
      [0.9, "#2874A6"],
    ],
    labels: {
      format: "{value} steps",
    },
  },
  series: [
    {
      keys: ["x", "y", "value", "date", "id"],
      data: chartData,
      nullColor: "rgba(196, 196, 196, 0.2)",
      borderWidth: 2,
      borderColor: "rgba(196, 196, 196, 0.2)",
      dataLabels: [
        {
          enabled: true,
          format: "{#unless point.custom.empty}{point.value:.1f}°{/unless}",
          style: {
            textOutline: "none",
            fontWeight: "normal",
            fontSize: "1vw",
            
          },
          y: 4,
        },
        {
          enabled: true,
          align: "left",
          verticalAlign: "top",
          format:
            "{#unless point.custom.empty}{point.custom.monthDay}{/unless}",
          backgroundColor: "whitesmoke",
          padding: 2,
          style: {
            textOutline: "none",
            color: "rgba(70, 70, 92, 1)",
            fontSize: "1vw",
            fontWeight: "bold",
            opacity: 0.5,
            // color:'red'
          },
          x: 1,
          y: 1,
        },
      ],
      
    },
  ],
};

const HeatmapChart = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handlePointClick = (event) => {
      const clickedPoint = event.point;
      //console.log(clickedPoint);
      if (clickedPoint && !clickedPoint.custom.empty) {
        // console.log(clickedPoint.date);
        setSelectedDate(clickedPoint.custom.monthDay);
      }
      console.log(selectedDate);
    };
  return (
    <div>
      <div className="wrapperstep">
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: "heatmap",
            },
            title: {
              text: "Day Stepcount of Person July 2023",
              align: "center",
            },
            accessibility: {
              landmarkVerbosity: "one",
            },
            tooltip: {
              enabled: true,
              outside: true,
              zIndex: 20,
              headerFormat: "",
              pointFormat:
                "{#unless point.custom.empty}{point.date:%A, %b %e, %Y}{/unless}",
              nullFormat: "No data",
            },
            xAxis: {
              categories: weekdays,
              opposite: true,
              lineWidth: 26,
              offset: 13,
              lineColor: "rgba(27, 26, 37, 0.2)",
              labels: {
                rotation: 0,
                y: 20,
                style: {
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "1vw",
                  
                },
              },
              accessibility: {
                description: "weekdays",
                rangeDescription:
                  "X Axis is showing all 7 days of the week, starting with Sunday.",
              },
            },
            yAxis: {
              min: 0,
              max: 5,
              accessibility: {
                description: "weeks",
              },
              visible: false,
            },
            legend: {
              align: "right",
              layout: "vertical",
              verticalAlign: "middle",
            },
            credits:{
              enabled:false
          },
            colorAxis: {
              min: 0,
              stops: [
                [0.2, "#AED6F1"],
                [0.4, "#85C1E9"],
                [0.6, "#3498DB"],
                [0.9, "#2874A6"],
              ],
              labels: {
                format: "{value} steps",
              },
            },
            series: [
              {
                keys: ["x", "y", "value", "date", "id"],
                data: chartData,
                nullColor: "rgba(196, 196, 196, 0.2)",
                borderWidth: 2,
                borderColor: "rgba(196, 196, 196, 0.2)",
                dataLabels: [
                  {
                    enabled: true,
                    format:
                      "{#unless point.custom.empty}{point.value}{/unless}",
                    style: {
                      textOutline: "none",
                      fontWeight: "normal",
                      fontSize: "1.3vw",
                    },
                    y: 4,
                  },
                  {
                    enabled: true,
                    align: "left",
                    verticalAlign: "top",
                    format:
                      "{#unless point.custom.empty}{point.custom.monthDay}{/unless}",
                    backgroundColor: "whitesmoke",
                    padding: 2,
                    style: {
                      textOutline: "none",
                      color: "rgba(70, 70, 92, 1)",
                      fontSize: "1vw",
                      fontWeight: "bold",
                      opacity: 0.5,
                    },
                    x: 1,
                    y: 1,
                  },
                ],
                events: {
                  click: handlePointClick,
                },
              },
            ],
          }}
        />
      </div>
      {selectedDate && <StepCountsGraph date_sent={selectedDate} />}
    </div>
  );
};

export default HeatmapChart;