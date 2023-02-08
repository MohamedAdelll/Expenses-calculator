import "./ChartContainer.css";
import ChartItem from "./ChartItem";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  // Using the browser's default locale.
  return date.toLocaleString("en-US", { month: "long" });
}
function ChartContainer(props) {
  const monthsTotal = props.expenses.reduce(
    (accumulator, expense) => {
      const month = expense.date.toLocaleString("en-US", { month: "long" });
      if (!accumulator[month]) accumulator[month] = expense.amount;
      else accumulator[month] += expense.amount;
      accumulator.total += expense.amount;
      return accumulator;
    },
    { total: 0 }
  );
  const { total } = monthsTotal;
  const chartItemArray = Array.from(Array(12).keys()).map((monthNumber) => {
    const monthName = getMonthName(monthNumber);
    let currMonthValue = monthsTotal[monthName] ? monthsTotal[monthName] : 0;
    return (
      <ChartItem
        total={total}
        key={monthNumber}
        month={monthName}
        currMonthVal={currMonthValue}
      ></ChartItem>
    );
  });
  return <div className="chart">{chartItemArray}</div>;
}
export default ChartContainer;
