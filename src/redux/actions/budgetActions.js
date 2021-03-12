export const initializeBudget = (budgetAmount) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: "INITIALIZE_BUDGET",
    payload: budgetAmount,
  });
  localStorage.setItem("budgetAmount", JSON.stringify(getState().budgetAmount));
};

export const reduceBudget = (amount) => async (dispatch, getState) => {
  // let num = Number(amount);
  let reduce = 0;
  let expenses = getState().expensesList.data;
  let planned = getState().plannedBudget;
  expenses.forEach((x) => {
    reduce += x.expense;
  });
  let current = planned - reduce;
  dispatch({
    type: "REDUCE_BUDGET",
    payload: current,
  });
  localStorage.setItem("budgetAmount", JSON.stringify(getState().budgetAmount));
};

export const clearBudget = () => async (dispatch, getState) => {
  dispatch({
    type: "CLEAR_BUDGET",
  });
  localStorage.setItem("budgetAmount", JSON.stringify(getState().budgetAmount));
};
