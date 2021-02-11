export const formatBudget = () => async (dispatch, getState) => {
  const test = 900;
  dispatch({
    type: "GET_BUDGET",
    payload: test,
  });
};

export const reduceBudget = () => async (dispatch, getState) => {
  let budget = getState().budgetAmount.budget;
  let expenses = getState().expensesList.data;
  let spending = 0;

  expenses.map((x) => {
    spending = spending + x.expense;
  });

  // map throught the whole state here and add the values and
  // then subtract

  let result = budget - spending;

  dispatch({
    type: "REDUCE_BUDGET",
    payload: result,
  });
};

export const newReduceExpense = (newExpense) => async (dispatch, getState) => {
  let budget = getState().budgetAmount.budget;
  let result = budget - newExpense;

  dispatch({
    type: "NEW_REDUCE_BUDGET",
    payload: result,
  });
};

// one action to grab whatever is in the current state
