import React from "react";
import "./ExpenseTracker.css";

const Balance = (props) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>Rs. {props.total}</h1>
    </>
  );
};

export default Balance;
