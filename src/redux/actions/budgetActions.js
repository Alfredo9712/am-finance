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
  let num = Number(amount);

  dispatch({
    type: "REDUCE_BUDGET",
    payload: num,
  });
  localStorage.setItem("budgetAmount", JSON.stringify(getState().budgetAmount));
};

// export const reduceBudget = () => async (dispatch, getState) => {
//   let budget = getState().budgetAmount.budget;
//   let expenses = getState().expensesList.data;
//   let spending = 0;

//   expenses.map((x) => {
//     spending = spending + x.expense;
//   });

//   // map throught the whole state here and add the values and
//   // then subtract

//   let result = budget - spending;

//   dispatch({
//     type: "REDUCE_BUDGET",
//     payload: result,
//   });
// };

// export const newReduceExpense = (newExpense) => async (dispatch, getState) => {
//   let budget = getState().budgetAmount.budget;
//   let result = budget - newExpense;

//   dispatch({
//     type: "NEW_REDUCE_BUDGET",
//     payload: result,
//   });
// };

// one action to grab whatever is in the current state
