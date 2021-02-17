const data = localStorage.getItem("pieChart")
  ? JSON.parse(localStorage.getItem("pieChart"))
  : [
      {
        id: "Empty",
        label: "Add data to visualize expenses",

        color: "hsl(348, 70%, 50%)",
      },
    ];

const initialState = {
  data,
};

export function pieChartReducer(state = initialState, action) {
  switch (action.type) {
    case "POPULATE_PIE_CHART":
      return {
        data: action.payload,
      };
    case "CLEAR_PIE_CHART":
      return {
        data: [
          {
            id: "Empty",
            label: "Add data to visualize expens",

            color: "hsl(348, 70%, 50%)",
          },
        ],
      };

    default:
      return state;
  }
}
