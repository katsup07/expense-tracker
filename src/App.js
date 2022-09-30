import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

import React, { useState } from 'react';

function App() {
	const INITIAL_EXPENSES = [
		{
			id: '1',
			date: new Date(2020, 2, 28),
			amount: 300,
			title: 'Nintendo Switch',
		},
		{ id: '2', date: new Date(2021, 4, 30), amount: 10, title: 'Book' },
		{ id: '3', date: new Date(2022, 5, 21), amount: 250000, title: 'Ferrari' },
	];

	const [idCount, setIdCount] = useState(4);
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	function saveExpenseHandler(enteredData) {
		console.log('handling submit...', enteredData);
		enteredData.id = idCount;
		setIdCount((prevExpenses) => prevExpenses + 1);
		setExpenses((prevExpenses) => [enteredData, ...prevExpenses]);
	}

	return (
		<div>
			<NewExpense onSaveExpenseData={saveExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
