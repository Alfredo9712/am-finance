import React, { useState, useRef } from "react";
//prettier-ignore
import {Jumbotron, Button, Row, Col, Modal, Alert, Form, InputGroup, FormControl,} from "react-bootstrap";
import AddPlannedBudgetModal from "./AddPlannedBudgetModal";
import { initializeBudget } from "../redux/actions/budgetActions";
import { initializePlannedBudget } from "../redux/actions/plannedBudget";
import { useDispatch } from "react-redux";

const InitialPage = () => {
  const dispatch = useDispatch();
  const [invalidExpense, setInvalidExpense] = useState(false);
  const [text, setText] = useState("");
  const expenseRef = useRef();
  const addPlannedBudgetHandler = () => {
    if (expenseRef.current.value === "" || expenseRef.current.value === 0) {
      setText("Invalid Input");
      setInvalidExpense(true);
      setTimeout(function () {
        setInvalidExpense();
      }, 2000);
    } else {
      dispatch(initializeBudget(Number(expenseRef.current.value)));
      dispatch(initializePlannedBudget(Number(expenseRef.current.value)));
    }
  };

  return (
    <Jumbotron
      style={{ color: "white", marginTop: "4%" }}
      className="bg-transparent"
      fluid
    >
      <Row>
        <Col md={6} xs={{ order: "last" }} md={{ order: "first" }}>
          <h1 style={{ color: "white", marginLeft: "0" }}>
            Keep track of your expenses here. Please enter a planned budget
            amount to proceed
          </h1>
          <Form>
            {invalidExpense === true && (
              <Alert variant="danger" block>
                {text}
              </Alert>
            )}
            <InputGroup className="mt-4">
              <InputGroup.Prepend>
                <InputGroup.Text style={{ height: "94%" }}>$</InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                placeholder="Add here"
                aria-label="Amount (to the nearest dollar)"
                ref={expenseRef}
                type="number"
                required="true"
              />
              <Button
                variant="primary"
                type="submit"
                onClick={addPlannedBudgetHandler}
                style={{ marginLeft: "1.5" }}
              >
                <i class="fas fa-sign-in-alt"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col md={2}></Col>
        <Col md={4}>
          <i
            class="fas fa-money-check-alt"
            style={{ fontSize: "14rem", color: "#E8E8E8" }}
          ></i>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default InitialPage;
