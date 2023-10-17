import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentColor } = useStateContext();
  const stackedChartData = [
    [
      { x: "Jan", y: 111.1 },
      { x: "Feb", y: 127.3 },
      { x: "Mar", y: 143.4 },
      { x: "Apr", y: 159.9 },
      { x: "May", y: 159.9 },
      { x: "Jun", y: 159.9 },
      { x: "July", y: 159.9 },
    ],
    [
      { x: "Jan", y: 111.1 },
      { x: "Feb", y: 127.3 },
      { x: "Mar", y: 143.4 },
      { x: "Apr", y: 159.9 },
      { x: "May", y: 159.9 },
      { x: "Jun", y: 159.9 },
      { x: "July", y: 159.9 },
    ],
  ];
  const stackedCustomSeries = [
    {
      dataSource: stackedChartData[0],
      xName: "x",
      yName: "y",
      name: "Budget",
      type: "StackingColumn",
      background: "blue",
      fill: currentColor,
    },

    {
      dataSource: stackedChartData[1],
      xName: "x",
      yName: "y",
      name: "Expense",
      type: "StackingColumn",
      background: "red",
    },
  ];
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
