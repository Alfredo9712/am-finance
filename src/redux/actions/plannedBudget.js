export const initializePlannedBudget = (budgetAmount) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: "INITIALIZE_PLANNED_BUDGET",
    payload: budgetAmount,
  });
  localStorage.setItem(
    "plannedBudget",
    JSON.stringify(getState().plannedBudget)
  );
};

export const clearPlannedBudget = () => async (dispatch, getState) => {
  dispatch({
    type: "CLEAR_PLANNED_BUDGET",
  });
  localStorage.setItem(
    "plannedBudget",
    JSON.stringify(getState().plannedBudget)
  );
};
