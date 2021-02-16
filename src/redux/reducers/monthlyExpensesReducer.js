const data = localStorage.getItem("montlyExpenses")
  ? JSON.parse(localStorage.getItem("montlyExpenses"))
  : [];

const initialState = {
  data,
};

export function monthlyExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MONTHLY_EXPENSE":
      const monthlyExpense = action.payload;
      return {
        ...state,
        data: [...state.data, monthlyExpense],
      };
    default:
      return state;
  }
}
