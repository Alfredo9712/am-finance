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

export const editExpenses = (expense, label, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: "EDIT_EXPENSE",
    payload: {
      expense,
      label,
      id,
    },
  });
  localStorage.setItem(
    "expenseList",
    JSON.stringify(getState().expensesList.data)
  );
};

export const deleteExpense = (id) => async (dispatch, getState) => {
  dispatch({
    type: "DELETE_EXPENSE",
    payload: {
      id,
    },
  });
  localStorage.setItem(
    "expenseList",
    JSON.stringify(getState().expensesList.data)
  );
};
