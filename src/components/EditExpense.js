import React, { useState, useRef } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { editExpenses, deleteExpense } from "../redux/actions/expenseActions";
import { populatePieChart } from "../redux/actions/pieChartActions";
import { reduceBudget } from "../redux/actions/budgetActions";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Form,
  Alert,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
const EditExpense = ({ id, category, label, expense }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const expenseRef = useRef();
  const labelRef = useRef();
  const [invalidExpense, setInvalidExpense] = useState(false);
  const [text, setText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editExpenseHandler = (id, e) => {
    e.preventDefault();
    if (expenseRef.current.value === "" || labelRef.current.value === "") {
      setText("Invalid Input");
      setInvalidExpense(true);
      setTimeout(function () {
        setInvalidExpense();
      }, 2000);
    } else {
      handleClose();

      dispatch(
        editExpenses(
          Number(expenseRef.current.value),
          labelRef.current.value,
          id
        )
      );
      dispatch(populatePieChart());
      dispatch(reduceBudget());
    }
  };
  return (
    <>
      <div
        onClick={() => {
          handleShow();
        }}
      >
        <EditIcon style={{ cursor: "pointer" }} />
      </div>

      <Modal show={show} onHide={handleClose}>
        {invalidExpense === true && <Alert variant="danger">{text}</Alert>}
        <Modal.Header closeButton>
          <Modal.Title>
            Edit {category?.charAt(0).toUpperCase() + category?.slice(1)}{" "}
            Expense
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={expense}
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
                placeholder={label?.charAt(0).toUpperCase() + label?.slice(1)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                ref={labelRef}
                type="text"
                required
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <div
              variant="danger"
              onClick={() => {
                dispatch(deleteExpense(id));
                dispatch(reduceBudget());
              }}
              className="hover"
              style={{
                marginRight: "auto",
                padding: "5px 10px",
                cursor: "pointer",
                color: "#A04646",
              }}
            >
              <i className="fas fa-trash-alt" style={{ fontSize: "18px" }}></i>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={(e) => {
                editExpenseHandler(id, e);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditExpense;
