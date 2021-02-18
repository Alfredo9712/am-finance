import React from "react";
import { Row, Col, Jumbotron, Button, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import MonthlyCard from "./MonthlyCard";
import AddPlannedBudgetModal from "./AddPlannedBudgetModal";
import InitialPage from "./InitialPage";
import DeleteAll from "./DeleteAll";
const StartScreen = () => {
  const dispatch = useDispatch();
  const pieChart = useSelector((state) => state.pieChart);
  const { data } = pieChart;
  const budgetAmount = useSelector((state) => state.budgetAmount);
  const plannedBudget = useSelector((state) => state.plannedBudget);

  const changedTheme = {
    textColor: "#ffffff",
  };

  let input = 2000;
  let spentAmount = plannedBudget - budgetAmount;
  let percentageUtilized = Math.round(
    ((plannedBudget - budgetAmount) / plannedBudget) * 100
  )
    ? Math.round(((plannedBudget - budgetAmount) / plannedBudget) * 100)
    : 0;

  return (
    <>
      {budgetAmount === 0 ? (
        <InitialPage />
      ) : (
        <>
          <Container className="startContainer">
            <Row>
              <Col lg={6} className="colBot ">
                <Jumbotron
                  style={{
                    backgroundColor: "#262a32",
                    color: "white",
                    paddingTop: "0",
                    height: "99.5%",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingTop: "5%",
                      marginBottom: "0",
                    }}
                  >
                    Budget
                  </h1>
                  <div
                    style={{
                      height: 277,
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "0px",
                      color: "black",
                    }}
                  >
                    <ResponsivePie
                      data={data}
                      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                      innerRadius={0.7}
                      padAngle={0.7}
                      cornerRadius={3}
                      colors={{ scheme: "nivo" }}
                      borderWidth={1}
                      borderColor={{
                        from: "color",
                        modifiers: [["darker", 0.2]],
                      }}
                      enableRadialLabels={false}
                      radialLabelsSkipAngle={10}
                      theme={changedTheme}
                      radialLabelsTextColor="#333333"
                      radialLabelsLinkColor={{ from: "color" }}
                      sliceLabelsSkipAngle={10}
                      // isInteractive={false}
                      sliceLabelsTextColor="#333333"
                      legends={[
                        {
                          anchor: "bottom-left",
                          direction: "column",
                          justify: false,
                          translateX: -70,
                          translateY: 5,
                          itemsSpacing: 2,
                          itemWidth: 100,
                          itemHeight: 18,
                          itemTextColor: "#999",
                          itemDirection: "left-to-right",
                          itemOpacity: 1,
                          symbolSize: 18,
                          symbolShape: "circle",
                          effects: [
                            {
                              on: "hover",
                              style: {
                                itemTextColor: "#97A0A6",
                              },
                            },
                          ],
                        },
                      ]}
                    />
                  </div>
                  <Row style={{ textAlign: "center" }}>
                    <Col xs={4}>
                      <h5 style={{ color: "white" }}>Planned</h5>
                      <Row>
                        <Col>
                          {" "}
                          <h5 style={{ marginRight: "3%", color: "white" }}>
                            {" "}
                            ${plannedBudget.toLocaleString()}
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={4}>
                      <h5 style={{ color: "white" }}>Spent</h5>

                      <Row>
                        <Col>
                          {" "}
                          <h5 style={{ marginRight: "3%", color: "white" }}>
                            ${spentAmount.toLocaleString()}{" "}
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={4}>
                      <h5 style={{ color: "white" }}>Utilized</h5>
                      <Row>
                        <Col>
                          <h5 style={{ color: "white" }}>
                            {" "}
                            {percentageUtilized}%
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Link
                        to="/budget"
                        className="btn btn-primary"
                        style={{ display: "block", marginTop: "3%" }}
                      >
                        Manage budget <i className="fas fa-chart-pie"></i>
                      </Link>
                    </Col>
                  </Row>
                </Jumbotron>
              </Col>
              <Col lg={6} className="padLeft">
                <Jumbotron
                  style={{
                    backgroundColor: "#262a32",
                    color: "white",
                    paddingTop: "0",
                    height: "99.5%",
                  }}
                >
                  <MonthlyCard />
                </Jumbotron>
              </Col>
            </Row>
          </Container>
          <DeleteAll />
        </>
      )}
    </>
  );
};

export default StartScreen;
