import React from "react";
import "./App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import { heatmapdata } from "./submission_calendar_data";
import { DatePicker, Space, Tree } from "antd";
const { RangePicker } = DatePicker;
import { useState } from "react";
import "./submission_calendar.css";
import PieChart from "./Calorie";
import TreegraphComponent from "./Treegraph";
const today = new Date();
const map_month_to_number = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};
function Heatmap() {
  const [goal, setGoal] = useState(3000);
  const [clickedDate, setClickedDate] = useState(null);
  const [globaldata, setglobaldata] = useState(heatmapdata.reverse());
  const [heatmap, setheatmap] = useState(heatmapdata.reverse());
  const globaldata2 = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: heatmap[index],
    };
  });
  const data = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: heatmap[index],
    };
  });
  function handleChange(dates) {
    console.log("viola");
    if (dates == null) {
      setheatmap(globaldata);
    }
    var newdating = [];
    for (var i = 0; i < data.length; i++) {
      const date = globaldata2[i].date; // Assuming data[i].date is a Date object

      // Extracting month, day, and year
      const month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
      const day = date.getDate();
      const year = date.getFullYear();

      if (
        new Date(year, month, day) >= dates[0].$d &&
        new Date(year, month, day) <= dates[1].$d
      ) {
        newdating.push(globaldata2[i].count);
      } else {
        newdating.push(0);
      }
    }
    console.log(newdating);
    setheatmap(newdating);
  }
  const colorRanges = [
    { label: "Less than 1400", color: "#d6e685" },   // Color for values between 1200 and 1399
    { label: "Less than 1600", color: "#8cc665" },   // Color for values between 1400 and 1599
    { label: "Less than 1800", color: "#44a340" },   // Color for values between 1600 and 1799
    { label: "Greater than or equal to 1800", color: "#1e6823" },  // Color for values greater than or equal to 1800
  ];
  return (
    // <div className="wrappercf">
    <div className="box" >
      <div
        style={{
          width: "80vw",
          position: "relative",
          top: "10vh",
          marginLeft: "10vw",
        }}

      >
        
        <div style={{fontSize:'2vw',marginLeft:'35vw',fontFamily:'Poppins',color:'#F2613F',fontWeight:'bold',marginBottom:'1vw'}}>Calories Tracker</div>
        <hr style={{marginBottom:'2vw'}}/>
        <CalendarHeatmap
          startDate={shiftDate(today, -365)}
          endDate={today}
          values={data}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            const count = value.count;
            if (count < 1200) {
              return "color-github-0"; // Color for values less than 5
            } else if (count < 1400) {
              // Adjust the ranges as needed
              return "color-github-2"; // Color for values between 5 and 100
            } else if (count < 1600) {
              return "color-github-3"; // Color for values between 100 and 500
            } else if (count < 1800) {
              return "color-github-4"; // Color for values between 500 and 1000
            } else {
              return "color-github-5"; // Color for values greater than or equal to 1000
            }
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `${value.count} submissions on ${value.date
                .toString()
                .slice(4, 15)}`,
            };
          }}
          showWeekdayLabels={true}
          onClick={(value) => setClickedDate(value.date)}
        />
        <div style={{ position: "absolute" }}>
          <span style={{ marginRight: "1vw" }}>Custom Range:</span>
          <Space direction="vertical" size={12}>
            <RangePicker
              onChange={(dates) => {
                handleChange(dates);
              }}
            />
          </Space>
        </div>

        <div style={{ position: "absolute", left: "60vw" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {colorRanges.map((range, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", margin: "5px" }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: range.color,
                    marginRight: "5px",
                  }}
                ></div>
                <span>{range.label}</span>
              </div>
            ))}
          </div>
        </div>

        {clickedDate && (
          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "8px",
              border: "1px solid gray",
              left: "20vw",
              width: "40vw",
              top: "10vw",
            }}
          >
            <PieChart
              key={`${goal}-${
                data.find(
                  (d) => d.date.toDateString() === clickedDate.toDateString()
                )?.count
              }`}
              achieved={
                data.find(
                  (d) => d.date.toDateString() === clickedDate.toDateString()
                )?.count || 0
              }
              goal={goal}
            />
            <div style={{ display: "flex", gap: "5vw" }}>
              <p>Date: {clickedDate.toString().slice(0, 15)}</p>
              <p>
                Calories:{" "}
                {data.find(
                  (d) => d.date.toDateString() === clickedDate.toDateString()
                )?.count || 0}
              </p>
            </div>
            <input
              type="text"
              style={{
                padding: "10px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
              onChange={(e) => {
                setGoal(e.target.value);
              }}
              placeholder="Set your Goal"
            ></input>
          </div>
        )}
      </div>
      <div style={{position:'relative',top:'30vh'}}>
<TreegraphComponent/>
      </div>
      
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Heatmap;
