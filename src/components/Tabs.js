import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import ExpenseHistoryList from "./ExpenseHistoryList";
import { Link } from "react-router-dom";

const TabsComponent = () => {
  var date = new Date();
  var monthIndex = date.getMonth() + 1;
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={monthIndex}>
        <Row>
          <Col sm={3} style={{ marginTop: "8%" }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">
                  <p
                    style={{
                      color: "white",
                      margin: "2%",
                    }}
                  >
                    January
                  </p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">
                  <p style={{ color: "white", margin: "2%" }}>February</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">
                  <p style={{ color: "white", margin: "2%" }}>March</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">
                  {" "}
                  <p style={{ color: "white", margin: "2%" }}>April</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">
                  {" "}
                  <p style={{ color: "white", margin: "2%" }}>May</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">
                  <p style={{ color: "white", margin: "2%" }}>June</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">
                  <p style={{ color: "white", margin: "2%" }}>July</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="8">
                  <p style={{ color: "white", margin: "2%" }}>August</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="9">
                  <p style={{ color: "white", margin: "2%" }}>September</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="10">
                  <p style={{ color: "white", margin: "2%" }}>October</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="11">
                  <p style={{ color: "white", margin: "2%" }}>Novmeber</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="12">
                  <p style={{ color: "white", margin: "2%" }}>December</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} style={{ marginTop: "2%" }}>
            <Tab.Content>
              <Tab.Pane eventKey="1">
                <ExpenseHistoryList month={"january"} />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <ExpenseHistoryList month={"february"} />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <ExpenseHistoryList month={"march"} />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <ExpenseHistoryList month={"april"} />
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <ExpenseHistoryList month={"may"} />
              </Tab.Pane>
              <Tab.Pane eventKey="6">
                <ExpenseHistoryList month={"june"} />
              </Tab.Pane>
              <Tab.Pane eventKey="7">
                <ExpenseHistoryList month={"july"} />
              </Tab.Pane>
              <Tab.Pane eventKey="8">
                <ExpenseHistoryList month={"august"} />
              </Tab.Pane>
              <Tab.Pane eventKey="9">
                <ExpenseHistoryList month={"september"} />
              </Tab.Pane>
              <Tab.Pane eventKey="10">
                <ExpenseHistoryList month={"october"} />
              </Tab.Pane>
              <Tab.Pane eventKey="11">
                <ExpenseHistoryList month={"november"} />
              </Tab.Pane>
              <Tab.Pane eventKey="12">
                <ExpenseHistoryList month={"december"} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        <Link to="/" className="btn btn-primary mt-3">
          Go back
        </Link>
      </Tab.Container>
    </>
  );
};

export default TabsComponent;
