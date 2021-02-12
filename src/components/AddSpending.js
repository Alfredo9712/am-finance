import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expenseActions";
import { newReduceExpense, reduceBudget } from "../redux/actions/budgetActions";
import { Modal, Button, InputGroup, FormControl, Alert } from "react-bootstrap";

const AddSpending = ({ category }) => {
  const [show, setShow] = useState(false);
  const [invalidExpense, setInvalidExpense] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const expenseRef = useRef();
  const labelRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const test = () => console.log(category);

  const addExpenseHandler = () => {
    if (expenseRef.current.value === "" || labelRef.current.value === "") {
      setText("Invalid Input");
      setInvalidExpense(true);
      setTimeout(function () {
        setInvalidExpense();
      }, 2000);
    } else {
      handleClose();
      dispatch(
        addExpense(expenseRef.current.value, labelRef.current.value, category)
      );
      dispatch(reduceBudget(expenseRef.current.value));
      // dispatch(newReduceExpense(expenseRef.current.value));

      test();
      setInvalidExpense(false);
    }
  };

  return (
    <>
      <Button variant="dark" block onClick={handleShow}>
        <i className="fas fa-plus"></i> Add expense
      </Button>

      <Modal show={show} onHide={handleClose}>
        {invalidExpense === true && <Alert variant="danger">{text}</Alert>}

        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
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
          <InputGroup size="md" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm" required>
                Label
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="e.g Gas"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              ref={labelRef}
              type="text"
              required
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addExpenseHandler}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSpending;
