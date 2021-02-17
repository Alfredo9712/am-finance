import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useSelector, useDispatch } from "react-redux";
import SpendingList from "./SpendingList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { clearExpenses } from "../redux/actions/expenseActions";
import { clearPieChart } from "../redux/actions/pieChartActions";
import { clearBudget } from "../redux/actions/budgetActions";
import { clearPlannedBudget } from "../redux/actions/plannedBudget";
import { addMonthlyExpense } from "../redux/actions/monthlyExpensesActions";
import {} from "../redux/actions/plannedBudget";

const IncomeVisuals = () => {
  const budgetAmount = useSelector((state) => state.budgetAmount);
  const plannedBudget = useSelector((state) => state.plannedBudget);
  const expensesList = useSelector((state) => state.expensesList);

  let spentAmount = plannedBudget - budgetAmount;
  const pieChart = useSelector((state) => state.pieChart);
  const dispatch = useDispatch();
  const { data } = pieChart;
  const changedTheme = {
    textColor: "#ffffff",
  };

  const clearExpensesHandler = () => {
    dispatch(clearExpenses());
    dispatch(clearPieChart());
    dispatch(clearBudget());
    dispatch(clearPlannedBudget());
    dispatch(addMonthlyExpense(Number(spentAmount)));
  };
  return (
    <>
      <h1 style={{ color: "white", marginTop: "5px" }}>
        Budget: ${plannedBudget.toLocaleString()}
      </h1>
      <h3 style={{ color: "white", marginTop: "5px" }}>
        Left: ${budgetAmount.toLocaleString()}
      </h3>
      <Link to="/" className="btn btn-primary">
        Go back
      </Link>
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
            textColor: "#999",
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
      <Button
        onClick={clearExpensesHandler}
        className="bg-transparent check"
        style={{ marginTop: "0" }}
        disabled={expensesList.data.length === 0}
      >
        New Month <i class="fas fa-check-circle"></i>
      </Button>
      <SpendingList />
      {/* this will be used before the budget page is set up all its for is to
      intialize budget */}
    </>
  );
};

export default IncomeVisuals;
