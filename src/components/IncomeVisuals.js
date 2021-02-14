import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux";
import SpendingList from "./SpendingList";

const IncomeVisuals = () => {
  const budgetAmount = useSelector((state) => state.budgetAmount);
  const plannedBudget = useSelector((state) => state.plannedBudget);

  const pieChart = useSelector((state) => state.pieChart);
  const { data } = pieChart;
  const changedTheme = {
    textColor: "#ffffff",
  };

  return (
    <>
      <h1 style={{ color: "white", marginTop: "5px" }}>
        Budget: {plannedBudget.toLocaleString()}
      </h1>
      <h3 style={{ color: "white", marginTop: "5px" }}>
        Left: {budgetAmount.toLocaleString()}
      </h3>
      {budgetAmount < 0 && <h5 style={{ color: "red" }}>Over budget</h5>}
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        theme={changedTheme}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 40,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            textColor: "#ffffff",
            itemTextColor: "#ffffff",

            itemDirection: "top-to-bottom",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#97A0A6",
                },
              },
            ],
          },
        ]}
      />
      <SpendingList />
      {/* this will be used before the budget page is set up all its for is to
      intialize budget */}
    </>
  );
};

export default IncomeVisuals;
