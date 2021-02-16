const budget = localStorage.getItem("budgetAmount")
  ? JSON.parse(localStorage.getItem("budgetAmount"))
  : 0;
export function budgetReducer(state = budget, action) {
  switch (action.type) {
    case "INITIALIZE_BUDGET":
      return (state = action.payload);
    case "REDUCE_BUDGET":
      return state - action.payload;
    case "CLEAR_BUDGET":
      return (state = 0);
    default:
      return state;
  }
}
