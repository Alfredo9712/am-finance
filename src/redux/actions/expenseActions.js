export const addExpense = (expense, label, category) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: "ADD_EXPENSE",
    payload: {
      expense,
      label,
      category,
    },
  });

  localStorage.setItem(
    "expenseList",
    JSON.stringify(getState().expensesList.data)
  );
};
