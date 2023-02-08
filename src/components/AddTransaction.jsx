import React, { useState } from "react";
import "./ExpenseTracker.css";

const AddTransaction = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState('');

  const addText = (event) => {
    setInputText(event.target.value);
  };
  const addAmount = (event) => {
    setInputAmount(event.target.value);
  };

  const addUserData = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0 && inputAmount === 0) {
      return alert("please enter details of expese or income.");
    }

    if (inputText.trim().length === 0) {
      return alert("text field can not be empty.");
    }
    if (inputAmount.trim().length === 0) {
      return alert("amount field can not be empty.");
    }

    props.onAddData(inputText, inputAmount);
    setInputText("");
    setInputAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addUserData}>
        <div className="form-control">
          <label >Text</label>
          <input
            type="text"
            value={inputText}
            onChange={addText}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label >
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={inputAmount}
            onChange={addAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};



export default AddTransaction;
