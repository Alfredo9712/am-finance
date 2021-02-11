const initialState = {
  data: [],
  // data: [
  //   { expense: 145, category: "housing", label: "hoa" },
  //   { expense: 86, category: "food", label: "groceries" },
  //   { expense: 34, category: "transportation", label: "gas" },
  //   { expense: 104, category: "housing", label: "light bill" },
  //   { expense: 126, category: "utilities", label: "water bill" },
  //   { expense: 325, category: "debt", label: "school loan" },
  //   { expense: 45, category: "personal", label: "pants" },
  // ],
};

export function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const expense = action.payload;
      return {
        ...state,
        data: [...state.data, expense],
      };
    default:
      return state;
  }
}
