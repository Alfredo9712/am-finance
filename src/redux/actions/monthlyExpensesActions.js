let data = {};
function formatExpense(amount) {
  var date = new Date();
  var monthIndex = date.getMonth();
  //prettier-ignore
  const months = ["Jan", "Feb","Mar","Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  months.map((x, index) => {
    if (monthIndex === index) {
      data = {
        month: x,
        amount: amount,
      };
    }
  });
  return data;
}

export const addMonthlyExpense = (amount) => async (dispatch, getState) => {
  let result = formatExpense(amount);

  dispatch({
    type: "ADD_MONTHLY_EXPENSE",
    payload: result,
  });
  localStorage.setItem(
    "montlyExpenses",
    JSON.stringify(getState().monthExpenses.data)
  );
};

export const clearMonthlyExpense = () => async (dispatch, getState) => {
  dispatch({
    type: "DELETE_MONTHLY_EXPENSE",
  });
  localStorage.setItem(
    "montlyExpenses",
    JSON.stringify(getState().monthExpenses.data)
  );
};
