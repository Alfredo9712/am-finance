import { combineReducers } from "redux";
import { expenseReducer } from "./expenseReducer";
import { budgetReducer } from "./budgetReducer";
import { pieChartReducer } from "./pieChartReducer";

export default combineReducers({
  expensesList: expenseReducer,
  budgetAmount: budgetReducer,
  pieChart: pieChartReducer,
});
