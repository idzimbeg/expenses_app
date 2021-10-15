import React, { useState } from "react";

import "./ExpenseForm.css";
// import EarningsForm from "../NewEarnings/EarningsForm";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      category: enteredCategory,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredCategory("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder=" - or +"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <select
            value={props.enteredCategory}
            onChange={categoryChangeHandler}
          >
            <option value="Apartment">Apartment</option>
            <option value="Car">Car</option>
            <option value="Groceries">Groceries</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <div>
          {enteredAmount < 0 && <button type="submit">Add Expense</button>}
          {enteredAmount > 0 && <button type="submit">Add Earnings</button>}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
