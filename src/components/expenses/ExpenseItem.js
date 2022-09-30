import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Input from '../UI/Input';
import './ExpenseItem.css';

function ExpenseItem({date, title, amount, className}) {
  const [ newTitle, setNewTitle ] = useState(title);

  function setInputHandler(input){
    setNewTitle(input);
  }

	return (
		<li>
      <Card className='expense-item'>
        <ExpenseDate date={date}/>
        <div className='expense-item__description'>
          <h2>{newTitle}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
            <Input setInput={setInputHandler}/>
      </Card>
    </li>
	);
}

export default ExpenseItem;
