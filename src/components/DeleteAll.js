import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearExpenses } from "../redux/actions/expenseActions";
import { clearPieChart } from "../redux/actions/pieChartActions";
import { clearBudget } from "../redux/actions/budgetActions";
import { clearPlannedBudget } from "../redux/actions/plannedBudget";
import { clearMonthlyExpense } from "../redux/actions/monthlyExpensesActions";
import { Button, Modal } from "react-bootstrap";

const DeleteAll = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteDataHandler = () => {
    dispatch(clearExpenses());
    dispatch(clearPieChart());
    dispatch(clearBudget());
    dispatch(clearPlannedBudget());
    dispatch(clearMonthlyExpense());
  };
  return (
    <div>
      <Button
        variant="danger"
        onClick={handleShow}
        style={{
          marginTop: "0",
          color: "#D95450",
          marginTop: ".8%",
          padding: "0",
        }}
        className="bg-transparent"
      >
        Delete data <i class="fas fa-trash-alt"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Warning</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Continue if you wish to delete all inputed data{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={handleClose}
            onClick={deleteDataHandler}
          >
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteAll;
