import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import ColorAxis from 'highcharts/modules/coloraxis';
import PatternFill from 'highcharts/modules/pattern-fill';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';
import { useEffect } from 'react';
import '../Sleep1.css';
import TreegraphComponent2 from '../Treegraph2';

HighchartsMore(Highcharts);
ColorAxis(Highcharts);
PatternFill(Highcharts);
Exporting(Highcharts);
ExportData(Highcharts);
Accessibility(Highcharts);

const data = JSON.parse(`[[
  { "x": 1, "y": 1, "z": 2, "t": 1 },
  { "x": 2, "y": 1, "z": 3, "t": 1 },
  { "x": 3, "y": 1, "z": 2, "t": 1 },
  { "x": 4, "y": 1, "z": 3, "t": 1 },
  { "x": 5, "y": 1, "z": 3, "t": 1 },
  { "x": 6, "y": 1, "z": 3, "t": 1 },
  { "x": 7, "y": 1, "z": 3, "t": 1 },
  { "x": 8, "y": 1, "z": 3, "t": 1 },
  { "x": 9, "y": 1, "z": 3, "t": 1 },
  { "x": 10, "y": 1, "z": 3, "t": 1 },
  { "x": 11, "y": 1, "z": 2, "t": 1 },
  { "x": 12, "y": 1, "z": 2, "t": 1 },
  { "x": 13, "y": 1, "z": 3, "t": 1 },
  { "x": 14, "y": 1, "z": 3, "t": 1 },
  { "x": 15, "y": 1, "z": 2, "t": 1 },
  { "x": 16, "y": 1, "z": 3, "t": 1 },
  { "x": 17, "y": 1, "z": 3, "t": 1 },
  { "x": 18, "y": 1, "z": 3, "t": 1 },
  { "x": 19, "y": 1, "z": 3, "t": 1 },
  { "x": 20, "y": 1, "z": 3, "t": 1 },
  { "x": 21, "y": 1, "z": 3, "t": 1 },
  { "x": 22, "y": 1, "z": 1, "t": 1 },
  { "x": 23, "y": 1, "z": 1, "t": 1 },
  { "x": 24, "y": 1, "z": 3, "t": 1 },
  { "x": 25, "y": 1, "z": 3, "t": 1 },
  { "x": 26, "y": 1, "z": 3, "t": 1 },
  { "x": 27, "y": 1, "z": 3, "t": 1 },
  { "x": 28, "y": 1, "z": 3, "t": 1 }
],
[
  { "x": 1, "y": 2, "z": 3, "t": 2 },
  { "x": 2, "y": 2, "z": 3, "t": 2 },
  { "x": 3, "y": 2, "z": 1, "t": 2 },
  { "x": 4, "y": 2, "z": 1, "t": 2 },
  { "x": 5, "y": 2, "z": 2, "t": 2 },
  { "x": 6, "y": 2, "z": 2, "t": 2 },
  { "x": 7, "y": 2, "z": 3, "t": 2 },
  { "x": 8, "y": 2, "z": 0, "t": 2 },
  { "x": 9, "y": 2, "z": 0, "t": 2 },
  { "x": 10, "y": 2, "z": 0, "t": 2 },
  { "x": 11, "y": 2, "z": 0, "t": 2 },
  { "x": 12, "y": 2, "z": 3, "t": 2 },
  { "x": 13, "y": 2, "z": 2, "t": 2 },
  { "x": 14, "y": 2, "z": 2, "t": 2 },
  { "x": 15, "y": 2, "z": 3, "t": 2 },
  { "x": 16, "y": 2, "z": 2, "t": 2 },
  { "x": 17, "y": 2, "z": 3, "t": 2 },
  { "x": 18, "y": 2, "z": 2, "t": 2 },
  { "x": 19, "y": 2, "z": 1, "t": 2 },
  { "x": 20, "y": 2, "z": 2, "t": 2 },
  { "x": 21, "y": 2, "z": 2, "t": 2 },
  { "x": 22, "y": 2, "z": 3, "t": 2 },
  { "x": 23, "y": 2, "z": 2, "t": 2 },
  { "x": 24, "y": 2, "z": 2, "t": 2 },
  { "x": 25, "y": 2, "z": 3, "t": 2 },
  { "x": 26, "y": 2, "z": 0, "t": 2 },
  { "x": 27, "y": 2, "z": 1, "t": 2 },
  { "x": 28, "y": 2, "z": 2, "t": 2 }
],
[
  { "x": 1, "y": 3, "z": 2, "t": 3 },
  { "x": 2, "y": 3, "z": 3, "t": 3 },
  { "x": 3, "y": 3, "z": 3, "t": 3 },
  { "x": 4, "y": 3, "z": 1, "t": 3 },
  { "x": 5, "y": 3, "z": 0, "t": 3 },
  { "x": 6, "y": 3, "z": 1, "t": 3 },
  { "x": 7, "y": 3, "z": 1, "t": 3 },
  { "x": 8, "y": 3, "z": 3, "t": 3 },
  { "x": 9, "y": 3, "z": 0, "t": 3 },
  { "x": 10, "y": 3, "z": 3, "t": 3 },
  { "x": 11, "y": 3, "z": 3, "t": 3 },
  { "x": 12, "y": 3, "z": 0, "t": 3 },
  { "x": 13, "y": 3, "z": 1, "t": 3 },
  { "x": 14, "y": 3, "z": 1, "t": 3 },
  { "x": 15, "y": 3, "z": 1, "t": 3 },
  { "x": 16, "y": 3, "z": 1, "t": 3 },
  { "x": 17, "y": 3, "z": 3, "t": 3 },
  { "x": 18, "y": 3, "z": 1, "t": 3 },
  { "x": 19, "y": 3, "z": 1, "t": 3 },
  { "x": 20, "y": 3, "z": 3, "t": 3 },
  { "x": 21, "y": 3, "z": 3, "t": 3 },
  { "x": 22, "y": 3, "z": 0, "t": 3 },
  { "x": 23, "y": 3, "z": 0, "t": 3 },
  { "x": 24, "y": 3, "z": 1, "t": 3 },
  { "x": 25, "y": 3, "z": 2, "t": 3 },
  { "x": 26, "y": 3, "z": 2, "t": 3 },
  { "x": 27, "y": 3, "z": 3, "t": 3 },
  { "x": 28, "y": 3, "z": 3, "t": 3 }
],
[
  { "x": 1, "low": 0, "high": 130, "week": 1, "avg": 37, "highscore": 73, "topEarner": "Deep Sleep" },
  { "x": 2, "low": 0, "high": 190, "week": 1, "avg": 63, "highscore": 92, "topEarner": "Deep Sleep" },
  { "x": 3, "low": 0, "high": 136, "week": 1, "avg": 45, "highscore": 83, "topEarner": "Light Sleep" },
  { "x": 4, "low": 0, "high": 81, "week": 1, "avg": 27, "highscore": 37, "topEarner": "REM" },
  { "x": 5, "low": 0, "high": 107, "week": 1, "avg": 35, "highscore": 63, "topEarner": "Deep Sleep" },
  { "x": 6, "low": 0, "high": 120, "week": 1, "avg": 40, "highscore": 75, "topEarner": "REM" },
  { "x": 7, "low": 0, "high": 125, "week": 1, "avg": 42, "highscore": 78, "topEarner": "Light Sleep" },
  { "x": 8, "low": 0, "high": 148, "week": 2, "avg": 49, "highscore": 71, "topEarner": "Light Sleep" },
  { "x": 9, "low": 0, "high": 141, "week": 2, "avg": 47, "highscore": 86, "topEarner": "REM" },
  { "x": 10, "low": 0, "high": 201, "week": 2, "avg": 67, "highscore": 92, "topEarner": "REM" },
  { "x": 11, "low": 0, "high": 126, "week": 2, "avg": 42, "highscore": 65, "topEarner": "Light Sleep" },
  { "x": 12, "low": 0, "high": 120, "week": 2, "avg": 40, "highscore": 75, "topEarner": "Deep Sleep" },
  { "x": 13, "low": 0, "high": 130, "week": 2, "avg": 43, "highscore": 80, "topEarner": "REM" },
  { "x": 14, "low": 0, "high": 135, "week": 2, "avg": 45, "highscore": 85, "topEarner": "Light Sleep" },
  { "x": 15, "low": 0, "high": 192, "week": 3, "avg": 64, "highscore": 84, "topEarner": "Deep Sleep" },
  { "x": 16, "low": 0, "high": 217, "week": 3, "avg": 72, "highscore": 97, "topEarner": "REM" },
  { "x": 17, "low": 0, "high": 277, "week": 3, "avg": 92, "highscore": 96, "topEarner": "Light Sleep" },
  { "x": 18, "low": 0, "high": 217, "week": 3, "avg": 72, "highscore": 92, "topEarner": "REM" },
  { "x": 19, "low": 0, "high": 169, "week": 3, "avg": 56, "highscore": 83, "topEarner": "REM" },
  { "x": 20, "low": 0, "high": 170, "week": 3, "avg": 57, "highscore": 70, "topEarner": "Light Sleep" },
  { "x": 21, "low": 0, "high": 175, "week": 3, "avg": 58, "highscore": 75, "topEarner": "Deep Sleep" },
  { "x": 22, "low": 0, "high": 157, "week": 4, "avg": 52, "highscore": 94, "topEarner": "Deep Sleep" },
  { "x": 23, "low": 0, "high": 112, "week": 4, "avg": 37, "highscore": 63, "topEarner": "Deep Sleep" },
  { "x": 24, "low": 0, "high": 158, "week": 4, "avg": 52, "highscore": 67, "topEarner": "Deep Sleep" },
  { "x": 25, "low": 0, "high": 239, "week": 4, "avg": 79, "highscore": 96, "topEarner": "REM" },
  { "x": 26, "low": 0, "high": 175, "week": 4, "avg": 58, "highscore": 82, "topEarner": "REM" },
  { "x": 27, "low": 0, "high": 124, "week": 5, "avg": 41, "highscore": 65, "topEarner": "Light Sleep" },
  { "x": 28, "low": 0, "high": 187, "week": 5, "avg": 62, "highscore": 78, "topEarner": "Deep Sleep" }
]
]`);

class HighchartsChart extends Component {
  componentDidMount() {
    // Copy the JavaScript code from test5.js here
   let scoreData,
     colors,
     monthExtremes,
     weekExtremes,
     paneOpeningAngles,
     noLabelProp,
     specialSeriesProps,
     toggleableGradient,
     setGradient,
     asColFieldStr,
     teamNames,
     teamColors,
     teamSeries,
     weekLabels;

   scoreData = data[3];
   
   colors = Highcharts.getOptions().colors.map(Highcharts.Color.parse);
   monthExtremes = { min: 0, max: 28 };
   weekExtremes = { min: 1, max: 5 };
   paneOpeningAngles = { startAngle: 40.5, endAngle: 319.5 };
   noLabelProp = { labels: { enabled: false } };
   specialSeriesProps = {
     showInLegend: false,
     groupPadding: 0,
     pointPadding: 0,
   };
   toggleableGradient = {
     pattern: undefined,
     radialGradient: [1, 0.25, 0.1],
     stops: [
       [0, "#1f1836"],
       [1, "#45445d"],
     ],
   };
   setGradient = function () {
     const chart = this.series.chart;
     chart.setMidPaneBg({
       backgroundColor: toggleableGradient,
       outerRadius: "75%",
     });
     chart.subtitle.element.style.opacity = 1;
   };
   asColFieldStr = (str) =>
     '<span class="col-display-fieldwrap">' +
     '<span class="symbolSize" ' +
     'style="color:{point.color};">●</span> ' +
     str +
     "</span>";
   teamNames = ["REM", "Deep Sleep", "Light Sleep"];
   teamColors = [
     colors[9 % colors.length].tweenTo(colors[0], 0.25),
     colors[9 % colors.length].tweenTo(colors[8 % colors.length], 0.65),
     colors[9 % colors.length].tweenTo(colors[3], 0.85),
   ];
   teamSeries = Array(3)
     .fill({
       type: "bubble",
       shadow: true,
       maxSize: "4%",
       minSize: "1%",
       clip: false,
       point: {
         events: {
           mouseOver: function () {
             const chart = this.series.chart;
             chart.subtitle.element.style.opacity = 0;
             chart.setMidPaneBg({
               backgroundColor: teamColors[this.series.index],
               innerRadius: "0%",
             });
           },
           mouseOut: setGradient,
         },
       },
       colorKey: "t",
       tooltip: {
         headerFormat:
           '<div class="team-day center">' +
           '<span class="team-header">' +
           '<b class="team-index">Day {point.x}</b></span>' +
           '<span class="team-name" style="' +
           "border: 0 outset {series.color};" +
           'border-block-end: 0 outset {series.color};">' +
           "<b>{series.name}</b></span>",
         pointFormat:
           '<span class="team-points">' +
           '<span class="team-salescount-header">Number of Hours:</span>' +
           "</br>" +
           '<span class="team-salescount">{point.z}</span>',
         footerFormat: "</div>",
       },
     })
     .map((seriesProps, i) => ({
       ...seriesProps,
       name: teamNames[i],
       data: data[i],
       color: teamColors[i],
       marker: {
         fillColor: teamColors[i],
         fillOpacity: 1,
         lineColor: "#46465C",
         lineWidth: 2,
       },
     }));
weekLabels = Array(4)
  .fill(0)
  .map((_value, index) => ({
    dataLabels: {
      format: "Week {x}",
      enabled: true,
      inside: true,
      style: {
        textOutline: undefined,
        fontSize: "0.7em",
        fontWeight: "700",
        textTransform: "uppercase",
        fontStyle: "normal",
        letterSpacing: "0.01em",
      },
      textPath: {
        enabled: true,
        attributes: {
          startOffset:
            (index + 1) % 3 ? "75%" : (index + 1) % 2 ? "22%" : "28%",
          dx: (index + 1) % 2 ? "-2%" : "0%",
          dy: (index + 1) % 3 ? "2.8%" : "3.3%",
        },
      },
    },
    x: index + 1,
    y: 1.5,
  }));

    Highcharts.chart("container", {
      chart: {
        polar: true,
        height: "100%",
        events: {
          load: function () {
            const midPane = this.pane[1];

            // Our custom background functions are actually wrappers of the
            // function defined below. This function needs to be defined in
            // the load-event so that it is able to reference an instance
            // of Highcharts, without Highcharts being instantiated yet.
            this.setMidPaneBg = function (background) {
              midPane.update({ background: background });
            };
          },

          // We assign a function which positions our  dynamically
          // regardless of viewport or chart dimensions.
          render: function () {
            if (this.legend.group) {
              const { chartWidth, chartHeight, legend } = this,
                { legendWidth, legendHeight } = legend;

              legend.group.translate(
                (chartWidth - legendWidth) / 2,
                legendHeight * (chartWidth / chartHeight)
              );
            }
          },
        },
      },
      credits:{
        enabled:false
    },
      title: {
        text: "",
        },
      subtitle: {
        text: "Sleep",
        useHTML: "true",
        align: "center",
        y: 35,
        verticalAlign: "middle",
        style: {
          fontSize: "1vw",
          color: "white",
          textAlign: "center",
        },
      },
      tooltip: {
        animation: false,
        backgroundColor: undefined,
        hideDelay: 0,
        useHTML: true,

        // This function positions our tooltip in the center,
        // regardless of viewport or chart dimensions.
        positioner: function (labelWidth, labelHeight) {
          const { chartWidth, chartHeight } = this.chart;
          return {
            x: chartWidth / 2 - labelWidth / 2,
            y: chartHeight / 2 - labelHeight / 2,
          };
        },
      },
      colorAxis: [
        {
          minColor: colors[0].brighten(0.05).get("rgba"),
          maxColor: colors[5].brighten(0.05).get("rgba"),
          showInLegend: false,
          ...weekExtremes,
        },
        {
          minColor: colors[1].tweenTo(colors[5], 0.5),
          maxColor: colors[8 % colors.length].tweenTo(
            colors[8 % colors.length],
            0.5
          ),
          showInLegend: false,
          ...monthExtremes,
        },
      ],

      // Our chart is made of 3 different panes/circles
      pane: [
        {
          size: "80%",
          innerSize: "75%",
          ...paneOpeningAngles,
          background: {
            borderColor: colors[4],
            backgroundColor: toggleableGradient,
            innerRadius: "40%",
          },
        },
        {
          size: "55%",
          innerSize: "45%",
          ...paneOpeningAngles,
          background: {
            borderWidth: 0,
            backgroundColor: toggleableGradient,
            outerRadius: "75%",
          },

          // ...And this the one we alter
        },
        {
          size: "100%",
          innerSize: "88%",
          startAngle: 16.5,
          endAngle: 343.5,
          background: {
            borderWidth: 1,
            borderColor: colors[4],
            backgroundColor: "#46465C",
            innerRadius: "55%",
            outerRadius: "100%",
          },
        },
      ],
      xAxis: [
        {
          pane: 0,
          tickInterval: 1,
          lineWidth: 0,
          gridLineWidth: 0,
          min: 1,
          max: 28,
          ...noLabelProp,
        },
        {
          pane: 1,
          linkedTo: 0,
          gridLineWidth: 0,
          lineWidth: 0,

          // We put some plotbands on the chart to represent weekends
          // when no datapoints occur.
          //   plotBands: Array(3)
          //     .fill(7)
          //     .map((weekendOffset, week) => {
          //       const from = weekendOffset * (week + 1),
          //         to = from - 1;
          //       return { from, to, color: "#BBBAC5" };
          //     }),
          plotBands: Array(3)
            .fill(7)
            .map((weekendOffset, week) => {
              const from = (weekendOffset + 2) * (week + 1), // Adjusted to include gap
                to = from - 1; // Adjusted to include gap
              return { from, to, color: "#BBBAC5" };
            }),

          ...monthExtremes,
          ...noLabelProp,
        },
        {
          pane: 2,
          tickAmount: 4,
          tickInterval: 0.5,
          gridLineWidth: 0,
          lineWidth: 0,
          ...weekExtremes,
          ...noLabelProp,
        },
      ],
      yAxis: [
        {
          pane: 0,
          gridLineWidth: 0.5,
          gridLineDashStyle: "longdash",
          tickInterval: 1,
          title: null,
          ...noLabelProp,
          min: 1,
          max: 3,
        },
        {
          pane: 1,
          reversed: true,
          gridLineWidth: 0,
          tickInterval: 100,
          min: 0,
          max: 12,
          title: null,
          ...noLabelProp,
        },
        {
          pane: 2,
          tickInterval: 0.25,
          gridLineWidth: 0,
          gridLineColor: colors[1].brighten(0.05).get("rgba"),
          min: -3,
          max: 1,
          title: null,
          ...noLabelProp,
        },
      ],
      legend: {
        enabled: true,
        floating: true,
        layout: "vertical",
        verticalAlign: "center",
        align: "center",
        backgroundColor: "#1f1836",
        borderRadius: 14,
        borderColor: "transparent",
        borderWidth: 0,
        lineHeight: 8,
        itemStyle: {
          color: "#FFF",
          fontSize: "0.8em",
        },
        itemHoverStyle: {
          color: "#BBBAC5",
          fontSize: "0.9em",
        },
        padding: 2,
        itemDistance: 0,
        symbolPadding: 8,
        symbolHeight: 8,
        width: "36%",
        maxHeight: "14%",
      },
      plotOptions: {
        columnrange: {
          custom: {
            textSizeClass: "small-size",
          },
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              minWidth: 400,
            },
            chartOptions: {
              legend: {
                lineHeight: 16,
                padding: 3,
                borderWidth: 0.5,
                itemStyle: {
                  fontSize: "0.9em",
                },
                itemHoverStyle: {
                  fontSize: "1.1em",
                },
                width: "34%",
              },
              subtitle: {
                style: {
                  fontSize: "1em",
                },
              },
            },
          },
          {
            condition: {
              minWidth: 520,
            },
            chartOptions: {
              legend: {
                borderWidth: 1,
                itemStyle: {
                  fontSize: "1.1em",
                },
                itemHoverStyle: {
                  fontSize: "1.25em",
                },
                width: "30%",
              },
              subtitle: {
                style: {
                  fontSize: "1.4em",
                },
              },
            },
          },
          {
            condition: {
              minWidth: 600,
            },
            chartOptions: {
              legend: {
                borderWidth: 1.5,
                itemStyle: {
                  fontSize: "1.2em",
                },
                itemHoverStyle: {
                  fontSize: "1.4em",
                },
                width: "26%",
              },
              plotOptions: {
                columnrange: {
                  custom: {
                    textSizeClass: "mid-size",
                  },
                },
              },
              subtitle: {
                style: {
                  fontSize: "1.8em",
                },
              },
            },
          },
          {
            condition: {
              minWidth: 680,
            },
            chartOptions: {
              legend: {
                borderWidth: 2,
                symbolPadding: 12,
                symbolHeight: 12,
                itemStyle: {
                  fontSize: "1.4em",
                },
                itemHoverStyle: {
                  fontSize: "1.6em",
                },
              },
              plotOptions: {
                columnrange: {
                  custom: {
                    textSizeClass: "large-size",
                  },
                },
              },
              subtitle: {
                style: {
                  fontSize: "2em",
                },
              },
            },
          },
        ],
      },
      series: [
        ...teamSeries,
        {
          ...specialSeriesProps,
          animation: false,
          name: "Month",
          type: "column",
          data: weekLabels,
          xAxis: 2,
          yAxis: 2,
          borderRadius: 50,
          colorKey: "x",
          pointWidth: 1.2,
          pointPlacement: "between",
          enableMouseTracking: false,
        },
        {
          showInLegend: false,
          ...specialSeriesProps,
          animation: false,
          name: "Total",
          type: "columnrange",
          data: scoreData,
          xAxis: 1,
          yAxis: 1,
          shadow: false,
          colorAxis: 1,
          colorKey: "x",
          borderColor: "#46465C",
          borderWidth: 2,
          pointPlacement: "on",
          pointStart: 1,
          point: {
            events: {
              // Here we change our circle once again but this time
              // it is when the innermost column series is hovered.
              mouseOver: function () {
                const chart = this.series.chart;
                chart.setMidPaneBg({
                  backgroundColor: toggleableGradient,
                  outerRadius: "75%",
                });
                chart.subtitle.element.style.opacity = 0;
              },

              // We reuse our originally defined "setGradient" function
              // to reset the circles background when the mouse leaves
              // a hovered column.
              mouseOut: setGradient,
            },
          },

          // ...And here is the custom tooltip content for the columns
          tooltip: {
            headerFormat:
              '<span class="team-day center">' +
              '<span class="{series.options.custom.textSizeClass}">' +
              '<b style="color:{point.color};">Day {point.x}</b></span>',
            hideDelay: 0,
            pointFormat:
              asColFieldStr("<b>Total Sleep: </b><span>{point.high}</span>") +
              asColFieldStr(
                "<b>Highest Amount: </b><span>{point.highscore}</span>"
              ) +
              asColFieldStr(
                "<b>Type: </b><span>{point.topEarner}</span>"
              ),
            
          },
        },
      ],
    });

      // ... rest of the code ...
  }

  render() {
    return (
      <div>
        <div style={{fontSize:'2vw',fontFamily:'Poppins',fontWeight:'bold',color:'#F2613F',marginLeft:'43vw',marginBottom:'5vh'}}>Sleep Tracker</div>
       <div style={{width:'80vw',marginLeft:'10vw',marginBottom:'3vw'}}>
       <hr />
        </div>   
        <figure className="highcharts-figure">
          <div id="container"></div>
         
        </figure>
        <TreegraphComponent2/>
      </div>
    );
  }
}

export default HighchartsChart;