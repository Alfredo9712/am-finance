import React from "react";
import { Row, Col, Jumbotron, Button, Container } from "react-bootstrap";
import { initializeBudget } from "../redux/actions/budgetActions";
import { initializePlannedBudget } from "../redux/actions/plannedBudget";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
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

  const testHandler = () => {
    dispatch(initializeBudget(input));
    dispatch(initializePlannedBudget(input));
  };
  return (
    <>
      <Container className="startContainer">
        <Row>
          <Col lg={6}>
            <Jumbotron
              style={{
                backgroundColor: "#262a32",
                color: "white",
                paddingTop: "0",
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
                  height: 250,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "0px",
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
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  enableRadialLabels={false}
                  radialLabelsSkipAngle={10}
                  theme={changedTheme}
                  radialLabelsTextColor="#333333"
                  radialLabelsLinkColor={{ from: "color" }}
                  sliceLabelsSkipAngle={10}
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
                            itemTextColor: "#000",
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
              <Row style={{ textAlign: "center" }}>
                <Col sm={4}>
                  <h5 style={{ color: "white" }}>Planned</h5>
                  <Row>
                    <Col>{plannedBudget}</Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <h5 style={{ color: "white" }}>Spent</h5>

                  <Row>
                    <Col>{plannedBudget - budgetAmount}</Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <h5 style={{ color: "white" }}>Utilized</h5>
                  <Row>
                    <Col>
                      {" "}
                      {((plannedBudget - budgetAmount) / plannedBudget) * 100}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
          <Col lg={6}>
            <Jumbotron style={{ backgroundColor: "#262a32", color: "white" }}>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          {/* <Button onClick={testHandler} style={{ marginLeft: "50%" }}>
            Click for budget
          </Button> */}
        </Col>
      </Row>
    </>
  );
};

export default StartScreen;
