import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

function Chart(props) {
  const maximumValueToArray = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const maximumValue = Math.max(...maximumValueToArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
