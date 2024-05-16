import { Box,useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";

export default function PieChart() {
  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetch("http://localhost:9000/mesures")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects and you want to show only the first object
        const mesure = data;
        const transformedData = [
          {
            id: "NOx",
            value: mesure[0].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "SO2",
            value: mesure[1].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "CO",
            value: mesure[2].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "O2",
            value: mesure[3].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "Poussieres four",
            value: mesure[4].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "déba four",
            value: mesure[5].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "Poussieres Refoidisseur",
            value: mesure[6].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "températeur Refoidisseur",
            value: mesure[7].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "tdéba Refoidisseur",
            value: mesure[8].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "COT",
            value: mesure[9].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "HF",
            value: mesure[10].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
          {
            id: "H2O",
            value: mesure[11].valeurs[0]["valeur"], // You can choose any attribute for the value
          },
        ];
        setData(transformedData);
      });
  }, []);

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsivePie
        data={data}
        
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: theme.palette.text.primary,
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: theme.palette.text.primary,
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "30 minutes",
            },
            id: "dots",
          },
          {
            match: {
              id: "1 hour",
            },
            id: "dots",
          },
          {
            match: {
              id: "24 hours",
            },
            id: "dots",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.text.primary,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
