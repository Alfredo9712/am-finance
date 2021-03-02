export const addHistory = (plannedBudget, budgetAmount, spentAmount) => async (
  dispatch,
  getState
) => {
  var date = new Date();
  var monthIndex = date.getMonth();

  let currMonth = "";
  //prettier-ignore
  const months = ["january", "february","march","april", "may", "june","july", "august", "september", "october", "november", "december" ];

  months.map((x, index) => {
    if (monthIndex === index) {
      currMonth = x;
    }
  });
  let expensesList = getState().expensesList.data;

  dispatch({
    type: "ADD_HISTORY",
    payload: {
      currMonth,
      plannedBudget,
      budgetAmount,
      spent: spentAmount,
      expensesList,
    },
  });

  localStorage.setItem(
    "historyExpenses",
    JSON.stringify(getState().historyExpenses.data)
  );
};

export const clearHistory = () => async (dispatch, getState) => {
  dispatch({
    type: "CLEAR_HISTORY",
  });
  localStorage.setItem(
    "historyExpenses",
    JSON.stringify(getState().historyExpenses.data)
  );
};
