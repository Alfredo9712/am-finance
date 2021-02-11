export const formatBudget = () => async (dispatch, getState) => {
  // const { data } = getState().expensesList;
  const test = 5000;
  dispatch({
    type: "GET_BUDGET",
    payload: test,
  });
};
