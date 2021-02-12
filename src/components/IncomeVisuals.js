import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { data } from "./data";
import { useSelector, useDispatch } from "react-redux";

import SpendingList from "./SpendingList";
import { initializeBudget } from "../redux/actions/budgetActions";
import { Button } from "react-bootstrap";

const IncomeVisuals = () => {
  const dispatch = useDispatch();
  const budgetAmount = useSelector((state) => state.budgetAmount);
  const changedTheme = {
    textColor: "#ffffff",
  };
  let input = 700;
  const [plannedBudget, setPlannedBudget] = useState(0);

  // let { budget } = budgetAmount;

  const testHandler = () => {
    dispatch(initializeBudget(input));
    setPlannedBudget(input);
  };

  return (
    <>
      <h1 style={{ color: "white", marginTop: "5px" }}>
        Budget: {plannedBudget}
      </h1>
      <h3 style={{ color: "white", marginTop: "5px" }}>Left: {budgetAmount}</h3>
      {/* {budget < 0 && <h4 className="text-muted">Over budget</h4>} */}
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
      {/* this will be used before the budget page is set up all its for is to
      intialize budget */}
      <Button onClick={testHandler}>Click for budget</Button>
    </>
  );
};

export default IncomeVisuals;
