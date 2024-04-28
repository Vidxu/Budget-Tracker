import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { PieChart, Pie, ResponsiveContainer } from "recharts";


function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}


function Report() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc + item, 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1;
  const savings = income - expense;

  const data = [
    { name: "Expenses", value: expense },
    { name: "Savings", value: savings }
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <text x={ex} y={ey} dy={8} textAnchor={textAnchor} fill="#FFFF">{`${payload.name}: ${value}`}</text>
    );
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const COLORS = {
    income: "#aa7dce",
    expenses: "#301934",
    savings: "#7851a9"
  };

  return (
    <>
      <h2>Financial Report</h2>
      <br /><br />
      <div className="holder">
        <div className="cards" style={{ backgroundColor: COLORS.income }}>
          <h5>INCOME</h5>
          {moneyFormatter(income)}
          <br />
        </div>
        <div className="cards" style={{ backgroundColor: COLORS.expenses }}>
          <h5>EXPENSES</h5>
          {moneyFormatter(expense)}
          <br />
          <p className="percent">{expense*100/income}%</p>
        </div>
        <div className="cards" style={{ backgroundColor: COLORS.savings }}>
          <h5>SAVINGS</h5>
          {moneyFormatter(savings)}
          <br />
          <p className="percent">{savings*100/income}%</p>
        </div>
        
      </div>
      <br /><br /><br /><br />
      
    <ResponsiveContainer width="38%" height="40%" className="pie" >
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#f7f0f5"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
    </>
  );
}

export default Report;
