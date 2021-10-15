import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import "./NExpenses.css";

const ExpenseItem = (props) => {
  const usedAmount = props.amount;
  return (
    <li>
      {usedAmount < 0 && (
        <Card className="expense-item__neg">
          <ExpenseDate date={props.date} />
          <div className="expense-item__neg__ndescription">
            <h2>{props.title}</h2>
            <div className="expense-item__neg__nprice">${usedAmount}</div>
          </div>
          <div className="expense-item__neg__ncategory">{props.category}</div>
        </Card>
      )}
      {usedAmount > 0 && (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${usedAmount}</div>
          </div>
          <div className="expense-item__category">{props.category}</div>
        </Card>
      )}
    </li>
  );
};

export default ExpenseItem;
