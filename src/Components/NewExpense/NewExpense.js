import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function handleSavedFormData(data) {
    props.onAddExpense(data);
  }
  return (
    <div className="new-expense">
      <ExpenseForm getSavedFormData={handleSavedFormData}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
