import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Tooltip from "@mui/material/Tooltip";
const chartSetting = {
  yAxis: [
    {
      label: "données",
    },
  ],
  width: 300,
  height: 250, 

};

// const valueFormatter = (value) => `${value} mg/Nm³`; // Adjusted valueFormatter



const chartStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

export default function BarsDataset({ mesure }) {
  let { MO, Pr, VI, VQ, TI, LI, LQ } = mesure.valeurs[0]["24heure"];
  const dataset = [
    {
      MO,
      Pr,
      VI,
      VQ,
      TI,
      LI,
      LQ,
      daily: "24 Hours",
    },
  ];
  return (
    <div style={chartStyle}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "daily" }]}
        series={[
          { dataKey: "MO",label: "MO", },
          { dataKey: "Pr",label: "Pr", },
          { dataKey: "VI",label: "VI", },
          { dataKey: "VQ",label: "VQ", },
          { dataKey: "TI",label: "TI", },
          { dataKey: "LI",label: "LI", },
          { dataKey: "LQ",label: "LQ", },
        ]}
        {...chartSetting}
        style={{ fontSize: "10px" }} // Adjusted fontSize
      >
        {dataset.map((entry, index) => (
          <Tooltip key={index} title={`Value: ${entry.daily}`} arrow>
            <div />
          </Tooltip>
        ))}
      </BarChart>
    </div>
  );
}
