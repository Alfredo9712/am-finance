import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expenseActions";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const AddSpending = ({ category }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const expenseRef = useRef();
  const labelRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const test = () => console.log(category);

  return (
    <>
      <Button variant="dark" block onClick={handleShow}>
        <i className="fas fa-plus"></i> Add expense
      </Button>

      <Modal show={show} onHide={handleClose}>
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
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Label</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="e.g Gas"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              ref={labelRef}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(
                addExpense(
                  expenseRef.current.value,
                  labelRef.current.value,
                  category
                )
              );
              test();
            }}
          >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSpending;
