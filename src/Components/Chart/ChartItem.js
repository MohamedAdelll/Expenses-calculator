import "./ChartItem.css";
function ChartItem(props) {
  const { total, month, currMonthVal } = props;
  const height = (currMonthVal / total) * 100;
  const heightStyle = `${height ? height : 0}%`;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightStyle }}></div>
      </div>
      <div className="chart-bar__label">{month}</div>
    </div>
  );
}
export default ChartItem;
