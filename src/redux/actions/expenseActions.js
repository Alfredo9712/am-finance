export const addExpense = (expense, label, category, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: "ADD_EXPENSE",
    payload: {
      expense,
      label,
      category,
      id,
    },
  });

  localStorage.setItem(
    "expenseList",
    JSON.stringify(getState().expensesList.data)
  );
};

export const clearExpenses = () => async (dispatch, getState) => {
  dispatch({
    type: "CLEAR_EXPENSES",
  });
  localStorage.setItem(
    "expenseList",
    JSON.stringify(getState().expensesList.data)
  );
};
