import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData, closeForm }) {
	/* Using multiple useState() instead which is fine here too
  const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState(''); */
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});

	// == Use "prevState" and a callback to ensure snapshot of previous state is most recent. React schedules state changes, so it is possible that by using "userInput" instead it may not be the most recent snapshot of state.
	function titleChangeHandler(e) {
		setUserInput((prevState) => ({ ...prevState, title: e.target.value }));
	}

	function amountChangeHandler(e) {
		setUserInput((prevState) => ({ ...prevState, amount: e.target.value }));
	}

	function dateChangeHandler(e) {
		setUserInput((prevState) => ({
			...userInput,
			date: new Date(e.target.value),
		}));
	}

	function submitHandler(e) {
		e.preventDefault();

		onSaveExpenseData(userInput);
		setUserInput({ title: '', amount: '', date: '' }); // reset form fields
	  closeForm();
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							onChange={titleChangeHandler}
							value={userInput.title}
							placeholder='title'
							required
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							onChange={amountChangeHandler}
							value={userInput.amount}
							placeholder='amount'
							required
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							min='2019-01-01'
							max='2022-12-31'
							onChange={dateChangeHandler}
							required
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button id='cancel' type='submit' onClick={closeForm}>
						Cancel
					</button>
					<button id='add-expense' type='submit'>
						Add Expense
					</button>
				</div>
			</form>
		</div>
	);
}

export default ExpenseForm;
