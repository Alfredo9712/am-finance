import { combineReducers } from "redux";
import { expenseReducer } from "./expenseReducer";
import { budgetReducer } from "./budgetReducer";
import { planedBudgetReducer } from "./plannedBudget";
import { pieChartReducer } from "./pieChartReducer";
import { monthlyExpenseReducer } from "./monthlyExpensesReducer";

export default combineReducers({
  expensesList: expenseReducer,
  budgetAmount: budgetReducer,
  plannedBudget: planedBudgetReducer,
  pieChart: pieChartReducer,
  monthExpenses: monthlyExpenseReducer,
});
