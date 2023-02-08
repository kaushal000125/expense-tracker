import React, { useState } from "react";
import "./ExpenseTracker.css";
import Balance from "./Balance";
import History from "./History";
import AddTransaction from "./AddTransaction";
import IncomeExpense from "./IncomeExpense";

const ExpenseTracker = () => {

  const [listData, setListData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addListData = (uname, uamount) => {

    if (parseInt(uamount) >= 0) {
      setIncome(parseInt(income) + parseInt(uamount));
    } else {
      setExpense(parseInt(expense) + parseInt(uamount));
    }

    setTotalAmount(parseInt(totalAmount) + parseInt(uamount));

    setListData((prevList) => {
      return [
        ...prevList,
        {
          text: uname,
          amount: uamount,
          id: Math.floor(Math.random()),
        },
      ];
    });
  };
  
  const makeListEmpty=()=>{
    setListData([]);
    setIncome(0);
    setExpense(0);
    setTotalAmount(0);
  }

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="contianer">
        <Balance total={totalAmount} />
        <IncomeExpense income={income} expense={expense} />
        <History listData={listData} onDeleteAll={makeListEmpty} />
        <AddTransaction onAddData={addListData} />
      </div>
    </>
  );
};

export default ExpenseTracker;
