import React from "react";

import { Table, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const ExpenseHistoryList = ({ month }) => {
  const historyExpenses = useSelector((state) => state.historyExpenses);
  const { data } = historyExpenses;

  // const empty = data.find
  return (
    <>
      <div className="mt-3">
        {data
          .filter((item) => item.currMonth === month)
          .map((item) => (
            <Row style={{ textAlign: "center" }}>
              <Col xs={4}>
                <h3 style={{ color: "white" }}>Planned</h3>
                <Row>
                  <Col>
                    {" "}
                    <h5 style={{ marginRight: "3%", color: "white" }}>
                      {" "}
                      ${item.plannedBudget.toLocaleString()}
                    </h5>
                  </Col>
                </Row>
              </Col>
              <Col xs={4}>
                <h3 style={{ color: "white" }}>Spent</h3>

                <Row>
                  <Col>
                    {" "}
                    <h5 style={{ marginRight: "3%", color: "white" }}>
                      ${item.spent.toLocaleString()}{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
              <Col xs={4}>
                <h3 style={{ color: "white" }}>Not used</h3>
                <Row>
                  <Col>
                    <h5 style={{ color: "white" }}> ${item.budgetAmount}</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}

        {/* <Table
        striped
        bordered
        className="mt-2 border"
        style={{
          color: "white",
          backgroundColor: "#202020",
          border: "1px solid white;",
        }}
      >
        <thead>
          <tr>
            <th>Month</th>
            <th>Planned</th>

            <th>spent</th>
            <th>Budget amount left</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                {item.currMonth.charAt(0).toUpperCase() +
                  item.currMonth.slice(1)}
              </td>
              <td>{item.plannedBudget}</td>
              <td>{item.spent}</td>
              <td>{item.budgetAmount}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}

        <Table
          striped
          bordered
          style={{
            backgroundColor: "#F8F8F8",
            border: "1px solid white;",
            color: "black",
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>Amount</th>
              <th>Expense</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => item.currMonth === month)
              .map(
                (item) =>
                  item.expensesList.map((listItem) => (
                    <tr>
                      <td>$ {listItem.expense}</td>
                      <td>
                        {listItem.label.charAt(0).toUpperCase() +
                          listItem.label.slice(1)}
                      </td>
                      <td>
                        {listItem.category.charAt(0).toUpperCase() +
                          listItem.category.slice(1)}
                      </td>
                    </tr>
                  ))

                // <tr>

                //   <td>
                //     {item.currMonth.charAt(0).toUpperCase() +
                //       item.currMonth.slice(1)}
                //   </td>
                //   <td>{item.plannedBudget}</td>
                //   <td>{item.spent}</td>
                //   <td>{item.budgetAmount}</td>
                // </tr>
              )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ExpenseHistoryList;
