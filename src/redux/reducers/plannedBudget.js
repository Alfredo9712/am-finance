const plannedBudget = localStorage.getItem("plannedBudget")
  ? JSON.parse(localStorage.getItem("plannedBudget"))
  : 0;
export function planedBudgetReducer(state = plannedBudget, action) {
  switch (action.type) {
    case "INITIALIZE_PLANNED_BUDGET":
      return (state = action.payload);
    case "CLEAR_PLANNED_BUDGET":
      return (state = 0);
    default:
      return state;
  }
}
