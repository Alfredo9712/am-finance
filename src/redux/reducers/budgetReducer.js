let budget = 0;
const intitialState = {
  budget,
};

export function budgetReducer(state = intitialState, action) {
  switch (action.type) {
    case "GET_BUDGET":
      return {
        budget: action.payload,
      };
    default:
      return state;
  }
}
