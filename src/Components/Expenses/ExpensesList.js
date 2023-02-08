import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.expenses.length) {
    return props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        className="expense-item"
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } else return <h2>No items for this filter.</h2>;
}
export default ExpensesList;
