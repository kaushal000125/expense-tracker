import React from "react";
import "./ExpenseTracker.css";
const IncomeExpense = (props) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">Rs. {props.income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">Rs. {props.expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
