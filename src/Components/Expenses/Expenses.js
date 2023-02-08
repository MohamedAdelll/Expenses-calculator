import { useState } from "react";
import "./ExpenseFilter.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ChartContainer from "../Chart/ChartContainer";
function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2022");
  function handleFilterChange(selected) {
    setFilterValue(selected);
  }
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterValue
  );
  return (
    <Card className="expenses">
      <ChartContainer expenses={filteredExpenses} />
      <ExpenseFilter
        selected={filterValue}
        getFilterValue={handleFilterChange}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
