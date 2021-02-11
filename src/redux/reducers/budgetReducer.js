let budget = 0;

export function budgetReducer(state = budget, action) {
  switch (action.type) {
    case "GET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "REDUCE_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "NEW_REDUCE_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
}
