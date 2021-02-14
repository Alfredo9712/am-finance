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
