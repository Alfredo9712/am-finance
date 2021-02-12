export const populatePieChart = () => async (dispatch, getState) => {
  let expenses = getState().expensesList.data;
  let housingExpenses = 0,
    foodExpenses = 0,
    transportationExpenses = 0,
    debtExpenses = 0,
    utilitiesExpenses = 0,
    personaleExpenses = 0;

  expenses.map((x) => {
    if (x.category === "housing") {
      housingExpenses = housingExpenses + x.expense;
    }
    if (x.category === "food") {
      foodExpenses = foodExpenses + x.expense;
    }
    if (x.category === "transportation") {
      transportationExpenses = transportationExpenses + x.expense;
    }
    if (x.category === "debt") {
      debtExpenses = debtExpenses + x.expense;
    }
    if (x.category === "utilities") {
      utilitiesExpenses = utilitiesExpenses + x.expense;
    }
    if (x.category === "personal") {
      personaleExpenses = personaleExpenses + x.expense;
    }
  });

  let counter = 0;
  expenses.map((x) => {
    counter = counter + Number(x.expense);
  });

  dispatch({
    type: "POPULATE_PIE_CHART",
    payload: [
      {
        id: "Housing",
        label: "Housing",
        value: housingExpenses,
        color: "hsl(264, 70%, 50%)",
      },

      {
        id: "Food",
        label: "Food",
        value: foodExpenses,
        color: "hsl(348, 70%, 50%)",
      },
      {
        id: "Transportation",
        label: "Transportation",
        value: transportationExpenses,
        color: "hsl(185, 70%, 50%)",
      },
      {
        id: "Utilities",
        label: "Utilities",
        value: utilitiesExpenses,
        color: "hsl(153, 70%, 50%)",
      },
      {
        id: "Debt",
        label: "Debt",
        value: debtExpenses,
        color: "hsl(251, 70%, 50%)",
      },
      {
        id: "Personal",
        label: "Personal",
        value: personaleExpenses,
        color: "hsl(251, 70%, 50%)",
      },
    ],
  });
};
