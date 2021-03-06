import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/actions/expenseActions";
import { reduceBudget } from "../redux/actions/budgetActions";
import { populatePieChart } from "../redux/actions/pieChartActions";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Alert,
  Form,
} from "react-bootstrap";
import uniqid from "uniqid";

const AddSpending = ({ category }) => {
  const [show, setShow] = useState(false);
  const [invalidExpense, setInvalidExpense] = useState(false);
  const [text, setText] = useState("");
  const plannedBudget = useSelector((state) => state.plannedBudget);
  const dispatch = useDispatch();

  const expenseRef = useRef();
  const labelRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let id = uniqid();
  const addExpenseHandler = (e) => {
    e.preventDefault(); //prevents refresh
    if (expenseRef.current.value === "" || labelRef.current.value === "") {
      setText("Invalid Input");
      setInvalidExpense(true);
      setTimeout(function () {
        setInvalidExpense();
      }, 2000);
    } else {
      handleClose();
      dispatch(
        addExpense(
          Number(expenseRef.current.value),
          labelRef.current.value,
          category,
          id
        )
      );
      //next time add number to it that way it wont be a string
      // dispatch(reduceBudget(Number(expenseRef.current.value)));
      dispatch(reduceBudget());
      // dispatch(newReduceExpense(expenseRef.current.value));

      setInvalidExpense(false);
      dispatch(populatePieChart());
    }
  };

  return (
    <>
      <Button
        variant="dark"
        block
        onClick={handleShow}
        disabled={plannedBudget === 0}
      >
        <i className="fas fa-plus"></i> Add expense
      </Button>

      <Modal show={show} onHide={handleClose}>
        {invalidExpense === true && <Alert variant="danger">{text}</Alert>}

        <Modal.Header closeButton>
          <Modal.Title>
            Add {category.charAt(0).toUpperCase() + category.slice(1)} Expense
          </Modal.Title>
        </Modal.Header>
        <Form>
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
            <Button type="submit" variant="primary" onClick={addExpenseHandler}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddSpending;
