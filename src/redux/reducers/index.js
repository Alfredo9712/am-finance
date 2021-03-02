import { combineReducers } from "redux";
import { expenseReducer } from "./expenseReducer";
import { budgetReducer } from "./budgetReducer";
import { planedBudgetReducer } from "./plannedBudget";
import { pieChartReducer } from "./pieChartReducer";
import { monthlyExpenseReducer } from "./monthlyExpensesReducer";
import { historyReducer } from "./historyReducer";

export default combineReducers({
  historyExpenses: historyReducer,
  expensesList: expenseReducer,
  budgetAmount: budgetReducer,
  plannedBudget: planedBudgetReducer,
  pieChart: pieChartReducer,
  monthExpenses: monthlyExpenseReducer,
});
