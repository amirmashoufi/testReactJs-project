import React from 'react'

import ExpenseItem from ".ExpenseItem/"
import "./Expenses.css"
import Card from '../component/UI/Card'

function Expensess(props) {
    return (
        <div className="exxpenses">
    <ExpenseItem
    title={props.items[0].title}
     amount={props.items[0].amount}
      date={props.items[0].date}
      />
    <ExpenseItem
    title={props.items[1].title}
     amount={props.items[1].amount}
      date={props.items[1].date}
      />
    <ExpenseItem
    title={props.items[2].title}
     amount={props.items[2].amount}
      date={props.items[2].date}
      />
        </div>
    )
}
export default Expensess;