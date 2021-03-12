import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import AddSpending from "./AddSpending";
import { Container } from "@nivo/core";

import EditExpense from "./EditExpense";
const SpendingList = () => {
  const expensesList = useSelector((state) => state.expensesList);

  const { data } = expensesList;

  return (
    <Container fluid className="mt-1" style={{ marginBottom: "1000px" }}>
      <Row>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item className="text-center">
              <h3>Housing</h3>
            </ListGroup.Item>

            {data
              .filter((x) => x.category === "housing")
              .map((x) => (
                <ListGroup.Item key={x.id}>
                  <Row>
                    <Col xs={1}>
                      {" "}
                      <EditExpense
                        id={x.id}
                        category={x.category}
                        label={x.label}
                        expense={x.expense}
                      />
                    </Col>
                    <Col xs={7} className="text-muted test">
                      <i
                        className="fas fa-circle"
                        style={{ color: "#E8C1A0" }}
                      ></i>{" "}
                      {x.label.charAt(0).toUpperCase() + x.label.slice(1)}
                    </Col>
                    <Col xs={4}>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> {x.expense}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}

            {/* {data.map((x) => (
              <ListGroup.Item>
                {" "}
                <i class="fas fa-dollar-sign"></i> {x.expense}
              </ListGroup.Item>
            ))} */}
            <ListGroup.Item>
              <AddSpending category={"housing"} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* .............................................................................. */}

        <Col md={6}>
          <ListGroup className="mobile-space ">
            <ListGroup.Item className="text-center">
              <h3>Food</h3>
            </ListGroup.Item>

            {data
              .filter((x) => x.category === "food")
              .map((x) => (
                <ListGroup.Item key={x.id}>
                  <Row>
                    <Col xs={1}>
                      <EditExpense
                        id={x.id}
                        category={x.category}
                        label={x.label}
                        expense={x.expense}
                      />
                    </Col>

                    <Col xs={7} className="text-muted test">
                      <i
                        className="fas fa-circle"
                        style={{ color: "#F47560" }}
                      ></i>{" "}
                      {x.label.charAt(0).toUpperCase() + x.label.slice(1)}
                    </Col>
                    <Col xs={4}>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> {x.expense}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            <ListGroup.Item>
              <AddSpending category={"food"} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* .............................................................................. */}

      <Row>
        <Col md={6} className="mobile-space" style={{ marginTop: "15px" }}>
          <ListGroup>
            <ListGroup.Item className="text-center">
              <h3>Personal</h3>
            </ListGroup.Item>

            {data
              .filter((x) => x.category === "personal")
              .map((x) => (
                <ListGroup.Item key={x.id}>
                  <Row>
                    <Col xs={1}>
                      <EditExpense
                        id={x.id}
                        category={x.category}
                        label={x.label}
                        expense={x.expense}
                      />
                    </Col>
                    <Col xs={7} className="text-muted test">
                      <i
                        className="fas fa-circle"
                        style={{ color: "#F1E15B" }}
                      ></i>{" "}
                      {x.label.charAt(0).toUpperCase() + x.label.slice(1)}
                    </Col>
                    <Col xs={4}>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> {x.expense}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}

            <ListGroup.Item>
              <AddSpending category={"personal"} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* .............................................................................. */}

        <Col md={6} className="mobile-space" style={{ marginTop: "15px" }}>
          <ListGroup>
            <ListGroup.Item className="text-center">
              <h3>Utilities</h3>
            </ListGroup.Item>

            {data
              .filter((x) => x.category === "utilities")
              .map((x) => (
                <ListGroup.Item key={x.id}>
                  <Row>
                    <Col xs={1}>
                      <EditExpense
                        id={x.id}
                        category={x.category}
                        label={x.label}
                        expense={x.expense}
                      />
                    </Col>
                    <Col xs={7} className="text-muted test">
                      <i
                        className="fas fa-circle"
                        style={{ color: "#E8A838" }}
                      ></i>{" "}
                      {x.label.charAt(0).toUpperCase() + x.label.slice(1)}
                    </Col>
                    <Col xs={4}>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> {x.expense}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            <ListGroup.Item>
              <AddSpending category={"utilities"} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* .............................................................................. */}
      <Row style={{ marginBottom: "5%" }}>
        <Col md={6} className="mobile-space" style={{ marginTop: "15px" }}>
          <ListGroup>
            <ListGroup.Item className="text-center">
              <h3>Debt</h3>
            </ListGroup.Item>

            {data
              .filter((x) => x.category === "debt")
              .map((x) => (
                <ListGroup.Item key={x.id}>
                  <Row>
                    <Col xs={1}>
                      <EditExpense
                        id={x.id}
                        category={x.category}
                        label={x.label}
                        expense={x.expense}
                      />
                    </Col>
                    <Col xs={7} className="text-muted test">
                      <i
                        className="fas fa-circle"
                        style={{ color: "#61CDBB" }}
                      ></i>{" "}
                      {x.label.charAt(0).toUpperCase() + x.label.slice(1)}
                    </Col>
                    <Col xs={4}>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> {x.expense}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            <ListGroup.Item>
              <AddSpending category={"debt"} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* .............................................................................. */}
        <Col md={6} className="mobile-space" style={{ marginTop: "15px" }}>
          <ListGroup>
            <ListGroup.Item className="text-center">
              <h3>Transportation</h3>
            </ListGroup.Item>
            {data
              .filter((x) => x.category === "transportation")
              .map((x) => (
                <ListGroup.Item key={x.id}>
                  <Row>
                    <Col xs={1}>
                      <EditExpense
                        id={x.id}
                        category={x.category}
                        label={x.label}
                        expense={x.expense}
                      />
                    </Col>
                    <Col xs={7} className="text-muted test">
                      <i
                        className="fas fa-circle"
                        style={{ color: "#97E3D5" }}
                      ></i>{" "}
                      {x.label.charAt(0).toUpperCase() + x.label.slice(1)}
                    </Col>
                    <Col xs={4}>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> {x.expense}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}

            <ListGroup.Item>
              <AddSpending category={"transportation"} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SpendingList;
