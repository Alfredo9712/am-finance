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

    case "EDIT_EXPENSE":
      let expenseEdit = action.payload.expense;
      let labelExpense = action.payload.label;
      let id = action.payload.id;
      return {
        ...state,
        data: state.data.map((x) =>
          x.id === id ? { ...x, expense: expenseEdit, label: labelExpense } : x
        ),
      };
    case "DELETE_EXPENSE":
      const removeId = action.payload.id;
      return {
        ...state,
        data: state.data.filter((x) => x.id !== removeId),
      };

    case "CLEAR_EXPENSES":
      return {
        data: [],
      };
    default:
      return state;
  }
}
