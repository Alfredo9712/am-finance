const data = localStorage.getItem("expenseList")
  ? JSON.parse(localStorage.getItem("expenseList"))
  : [];

const initialState = {
  data,
};

export function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const expense = action.payload;
      return {
        ...state,
        data: [...state.data, expense],
      };
    case "CLEAR_EXPENSES":
      return {
        data: [],
      };
    default:
      return state;
  }
}
