import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const initialState = {
    enteredDate: "",
    enteredAmount: "",
    enteredTitle: "",
  };
  const [inputStatesObj, setInputStatesObj] = useState(initialState);

  function titleChangeHandler(e) {
    setInputStatesObj((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  }

  function amountChangeHandler(e) {
    setInputStatesObj((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  }

  function dateChangeHandler(e) {
    setInputStatesObj((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    let {
      enteredDate: date,
      enteredAmount: amount,
      enteredTitle: title,
    } = inputStatesObj;
    props.getSavedFormData({
      date: new Date(date),
      amount,
      title,
      id: Math.random().toString(),
    });
    setInputStatesObj(initialState);
  }
  return (
    <form onSubmit={handleFormSubmission}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputStatesObj.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputStatesObj.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputStatesObj.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
