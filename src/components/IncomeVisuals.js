import React, { useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { data } from "./data";
import { useSelector, useDispatch } from "react-redux";

import SpendingList from "./SpendingList";
import {
  formatBudget,
  reduceBudget,
  newReduceExpense,
} from "../redux/actions/budgetActions";
import { Button } from "react-bootstrap";

const IncomeVisuals = () => {
  const changedTheme = {
    textColor: "#ffffff",
  };

  const budgetAmount = useSelector((state) => state.budgetAmount);
  let { budget } = budgetAmount;
  let plannedBudget = 10000;
  const dispatch = useDispatch();
  const testHandler = () => {};
  useEffect(() => {
    dispatch(formatBudget());
    dispatch(reduceBudget());
  }, [dispatch]);
  return (
    <>
      <h1 style={{ color: "white", marginTop: "5px" }}>
        Budget: {plannedBudget}
      </h1>
      <h3 style={{ color: "white", marginTop: "5px" }}>Left: {budget}</h3>
      {budget < 0 && <h4 className="text-muted">Over budget</h4>}
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
                  itemTextColor: "#ffffff",
                },
              },
            ],
          },
        ]}
      />
      <SpendingList />
    </>
  );
};

export default IncomeVisuals;
