import React, { useState } from 'react'
import Expensess from './component/Expenses/Expenses'
import NewExpense from './component/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id : 'e1',
    title : 'Toilet Paper',
  amount : 144 ,
   date : new Date(2021, 4, 14),
}, 

  {id : 'e2',
    title : 'Hand Watch',
  amount : 274 ,
   date : new Date(2022, 5, 17) 
},

{id : 'e3',
  title : 'monitor',
amount : 450.2 ,
 date : new Date(2022, 6, 19)
}
];

const App = () => {
  // start ex
const [count, setcount] = useState(0)

const [textColor, setTextColor] = useState('green')



const ChangeeColor = () => {
  setTextColor(textColor==='green' ? 'blue' : 'green')
}


// end ex
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
   setExpenses((prevExpenses) => {
return [expense, ...prevExpenses]
   });
  };
  // return React.createElement(
  //   'div',
  //    {},
  //   React.createElement('h2', {}, 'lets get start'),
  //   React.createElement(Expensess, { items: expenses})
  // );
  
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
<Expensess items={expenses} />

<button onClick={() => {setcount(count +1)}}>increat</button>
<button onClick={() => {setcount(count -1)}}>decreas</button>
<button onClick={() => {setcount(0)}}>set to 0</button>
<h1>{count}</h1>
<br></br>
<br></br>
<h2 style={{color : textColor}}>amir hossein</h2>
<button onClick={ChangeeColor} >ChangeColor</button>
<br></br>

   </div>


  );
}


export default App;
   