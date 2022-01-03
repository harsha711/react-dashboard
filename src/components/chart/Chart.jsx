import React from "react";
import LineChart from "./LineChart";
import PieChartPreview from "./PieChartPreview";

export default function Chart() {
  return (
    <div className="charts">
      <LineChart />
      <PieChartPreview />
    </div>
  );
}
