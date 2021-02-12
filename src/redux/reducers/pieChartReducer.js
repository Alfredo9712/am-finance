const initialState = {
  data: [],
};

export function pieChartReducer(state = initialState, action) {
  switch (action.type) {
    case "POPULATE_GRAPH":
      return {
        data: action.payload,
      };

    default:
      return state;
  }
}
