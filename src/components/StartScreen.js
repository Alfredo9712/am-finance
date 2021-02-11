import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const StartScreen = () => {
  return (
    <div className="startCard" style={{ color: "white" }}>
      <Row>
        <Col sm={12} className="startText ">
          <Jumbotron>
            <h1>Welcome</h1>
            <p className="descriptionText text-muted">
              Manage your finance here
            </p>
            <p>
              <Link to="/budget">
                <Button>Start</Button>
              </Link>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
};

export default StartScreen;
