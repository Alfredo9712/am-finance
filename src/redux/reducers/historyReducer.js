const data = localStorage.getItem("historyExpenses")
  ? JSON.parse(localStorage.getItem("historyExpenses"))
  : [];

const initialState = {
  data,
};

export function historyReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_HISTORY":
      const historyItem = action.payload;

      const exist = state.data.find(
        (x) => x.currMonth === historyItem.currMonth
      );

      if (exist) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          data: [...state.data, historyItem],
        };
      }

    case "CLEAR_HISTORY":
      return {
        data: [],
      };
    default:
      return state;
  }
}
