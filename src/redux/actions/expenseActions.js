export const addExpense = (expense, label, category) => {
  return {
    type: "ADD_EXPENSE",
    payload: {
      expense,
      label,
      category,
    },
  };
};
