import React from "react";

import "./ExpenseTracker.css";

const History = (props) => {
  
 
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {props.listData.map((list) => (
          <li key={list.id} className={list.amount < 0 ? "minus" : "plus"}>
            {list.text}{" "}
            <span>
              {list.amount < 0 ? "-" : "+"}
              {Math.abs(list.amount)}
            </span>
          </li>
        ))}
      </ul>
      {props.listData.length>0&&
        <button className="btn" type="submit" onClick={props.onDeleteAll}>
          Reset
        </button>}
    </>
  );
};

export default History;
