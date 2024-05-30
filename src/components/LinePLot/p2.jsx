import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';


import frienddata from './friend_data.js'
import data_30 from './yourself_data.js'
import MyResponsiveAreaBump from '../../Rank-2.jsx';

// console.log(frienddata);
// console.log(yourselfgenerate);

function processData(data1) {
  var sendback = [];
  var allids = ['Yourself', 'Friend 1', 'Friend 2', 'Friend 3', 'Friend 4', 'Friend 5', 'Friend 6'];
  for (var i = 0; i < allids.length; i++) {
    sendback.push({
      id: allids[i],
      data: []
    });
    sendback[i].data = Object.keys(data1).map(function (key) {
      return {
        x: key,
        y: data1[key][allids[i]]
      };
    });
  }
  return sendback;
}



const combineData = (frienddata, yourselfgenerate) => {
  const data = {};
  for (let hour = 0; hour < 24; hour++) {
    const hourString = hour.toString().padStart(2, '0') + ':00';
    const hourData = {};
    for (let friend = 1; friend <= 6; friend++) {
      const friendName = 'Friend ' + friend;
      hourData[friendName] = frienddata[hourString][friendName];
    }
    hourData['Yourself'] = yourselfgenerate[hourString]['Yourself'];
    data[hourString] = hourData;
  }
  return data;
}

const Race2 = (props) => {
  const chartRef = useRef(null);

  const allData = combineData(frienddata, data_30[props.date_used - 1]);

  useEffect(() => {
    let root = am5.Root.new(chartRef.current);

    root.numberFormatter.setAll({
      numberFormat: "#a",
      bigNumberPrefixes: [
        { number: 1e6, suffix: "M" },
        { number: 1e9, suffix: "B" }
      ],
      smallNumberPrefixes: []
    });

    var stepDuration = 1000;

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "none",
      wheelY: "none",
      paddingLeft: 0
    }));

    chart.zoomOutButton.set("forceHidden", true);

    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 20,
      inversed: true,
      minorGridEnabled: true
    });

    yRenderer.grid.template.set("visible", false);

    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer
    }));

    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      strictMinMax: true,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(root, {})
    }));

    xAxis.set("interpolationDuration", stepDuration / 10);
    xAxis.set("interpolationEasing", am5.ease.linear);

    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network"
    }));

    series.columns.template.setAll({ cornerRadiusBR: 5, cornerRadiusTR: 5 });

    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: 1,
        sprite: am5.Label.new(root, {
          text: "{valueXWorking.formatNumber('#.# a')}",
          fill: root.interfaceColors.get("alternativeText"),
          centerX: am5.p100,
          centerY: am5.p50,
          populateText: true
        })
      });
    });

    var label = chart.plotContainer.children.push(am5.Label.new(root, {
      text: "00:00",
      fontSize: "8em",
      opacity: 0.2,
      x: am5.p100,
      y: am5.p100,
      centerY: am5.p100,
      centerX: am5.p100
    }));

    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        var dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }

    function sortCategoryAxis() {
      // sort by value
      series.dataItems.sort(function (x, y) {
        return y.get("valueX") - x.get("valueX"); // descending
        //return x.get("valueX") - y.get("valueX"); // ascending
      });

      // go through each axis item
      am5.array.each(yAxis.dataItems, function (dataItem) {
        // get corresponding series item
        var seriesDataItem = getSeriesItem(dataItem.get("category"));

        if (seriesDataItem) {
          // get index of series data item
          var index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          var deltaPosition =
            (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          if (dataItem.get("index") != index) {
            dataItem.set("index", index);
            // set deltaPosition instanlty
            dataItem.set("deltaPosition", -deltaPosition);
            // animate delta position to 0
            dataItem.animate({
              key: "deltaPosition",
              to: 0,
              duration: stepDuration / 2,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
      });
      // sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set, they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }

    var hour = "00:00";

    var interval = setInterval(function () {
      var hourParts = hour.split(":");
      var nextHour = parseInt(hourParts[0]) + 1;
      if (nextHour < 10) {
        nextHour = "0" + nextHour;
      }
      if (nextHour > 23) {
        clearInterval(interval);
        clearInterval(sortinterval);
      } else {
        hour = nextHour + ":00";
        updateData();
      }
    }, stepDuration);

    var sortInterval = setInterval(function () {
      sortCategoryAxis();
    }, 100);

    function setInitialData() {
      var d = allData[hour];
      // Assign the sorted data back to d
      for (var n in d) {
        series.data.push({ network: n, value: d[n] });
        yAxis.data.push({ network: n });
      }
    }


    function updateData() {
      var itemsWithNonZero = 0;

      if (allData[hour]) {
        label.set("text", hour.toString());

        am5.array.each(series.dataItems, function (dataItem) {
          var category = dataItem.get("categoryY");
          var value = allData[hour][category];

          if (value > 0) {
            itemsWithNonZero++;
          }

          dataItem.animate({
            key: "valueX",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
          dataItem.animate({
            key: "valueXWorking",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
        });

        yAxis.zoom(0, itemsWithNonZero / yAxis.dataItems.length);
      }
    }


    setInitialData();
    setTimeout(function () {
      var hourParts = hour.split(":");
      var nextHour = parseInt(hourParts[0]) + 1;
      if (nextHour < 10) {
        nextHour = "0" + nextHour;
      }
      if (nextHour > 23) {
        clearInterval(interval);
      } else {
        hour = nextHour + ":00";
        updateData();
      }
    }, 50);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [props.date_used]);
  console.log(allData);
  const newdata  = processData(allData);

  //   return <div ref={chartRef} style={{ width: '600px', height: '800px' }} />;
  return (
    <>
    <p>
          <div style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px',color:'#F2613F' }}>Analysis of steps With your friends over 24hr</div>
          <p style={{ fontSize: '15px', textAlign: 'center',marginBottom: '10px' , fontFamily: 'Poppins, sans-serif'}}>
            The following graph shows the number of steps taken by yourself and the average number of steps taken by you in the past days as you over a 24 hour period.
          </p>
        </p>
    <div style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh', /* Optional: makes the container full height of the viewport */
        marginBottom: '150px',
        marginLeft:'25vw'
      }}>
        <div style={{
          border: '2px solid #ccc',
          width: '800px',
          height: '600px',
          padding: '0px',
          borderRadius: '5px',
          marginTop:'80px',
        }}
       ref={chartRef}>
        
       </div>

<div style={{display:'block',marginBottom:'100px',marginTop:'100px',fontSize:'2vw',marginLeft:'100px',color:'#F2613F'}}>Static visualization of ranking in 24hrs</div>


    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', /* Optional: makes the container full height of the viewport */
    }}>

<MyResponsiveAreaBump data={newdata}/>
    </div>
    </>
  );
};

export default Race2;