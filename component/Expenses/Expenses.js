import React, { useState } from 'react'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpenssChart'
import "./Expenses.css"
import Card from '../UI/Card'



const Expensess = (props) => {
  const [filteredYear, setFilterYear] = useState('2020')




  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });



  return (
    <div>
      <Card className="exxpenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  );
};
export default Expensess;