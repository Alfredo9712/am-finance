import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearExpenses } from "../redux/actions/expenseActions";
import { clearPieChart } from "../redux/actions/pieChartActions";
import { clearBudget } from "../redux/actions/budgetActions";
import { clearPlannedBudget } from "../redux/actions/plannedBudget";
import { addMonthlyExpense } from "../redux/actions/monthlyExpensesActions";
import { addHistory } from "../redux/actions/historyActions";
const NewMonthModal = ({ newMonth }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  //Variables
  const budgetAmount = useSelector((state) => state.budgetAmount);
  const plannedBudget = useSelector((state) => state.plannedBudget);
  const expensesList = useSelector((state) => state.expensesList);
  let spentAmount = plannedBudget - budgetAmount;

  const dispatch = useDispatch();

  function clearExpensesHandler() {
    dispatch(addHistory(plannedBudget, budgetAmount, Number(spentAmount)));
    dispatch(clearExpenses());
    dispatch(clearPieChart());
    dispatch(clearBudget());
    dispatch(clearPlannedBudget());
    dispatch(addMonthlyExpense(Number(spentAmount)));
  }

  return (
    <div>
      <Button
        onClick={handleShow}
        className="bg-transparent check"
        style={{ marginTop: "0" }}
        disabled={expensesList.data.length === 0}
      >
        New Month <i class="fas fa-check-circle"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Clicking confirm will store your spending in the history section. You
          will be redirected to input a new planned budget
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            onClick={() => {
              clearExpensesHandler();
              history.push("/");
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewMonthModal;
