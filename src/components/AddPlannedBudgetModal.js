import React, { useState, useRef } from "react";
import { Button, Modal, Alert, InputGroup, FormControl } from "react-bootstrap";
import { initializeBudget } from "../redux/actions/budgetActions";
import { initializePlannedBudget } from "../redux/actions/plannedBudget";
import { useDispatch } from "react-redux";
const AddPlannedBudgetModal = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [invalidExpense, setInvalidExpense] = useState(false);
  const [text, setText] = useState("");
  const expenseRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addPlannedBudgetHandler = () => {
    if (expenseRef.current.value === "") {
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
    <>
      <Button onClick={handleShow}>
        <i className="fas fa-plus"></i> Add Planned Budget
      </Button>

      <Modal show={show} onHide={handleClose}>
        {invalidExpense === true && <Alert variant="danger">{text}</Alert>}

        <Modal.Header closeButton>
          <Modal.Title>Add Planned Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Add here"
              aria-label="Amount (to the nearest dollar)"
              ref={expenseRef}
              type="number"
              required="true"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addPlannedBudgetHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPlannedBudgetModal;
