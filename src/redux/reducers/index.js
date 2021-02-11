import { combineReducers } from "redux";
import { expenseReducer } from "./expenseReducer";
import { budgetReducer } from "./budgetReducer";

export default combineReducers({
  expensesList: expenseReducer,
  budget: budgetReducer,
});
