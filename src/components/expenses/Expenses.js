import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses({ expenses }) {
	const [filterYear, setFilterYear] = useState('2022');
	const filteredExpensesByYear = expenses.filter(
		(exp) => exp.date.getFullYear().toString() === filterYear
	);
//console.log(filteredExpensesByYear);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				filterYear={filterYear}
				onFilterByYear={(enteredYear) => setFilterYear(enteredYear)}
			/>
			<ExpensesChart expenses={filteredExpensesByYear}/>
			<ExpensesList items={filteredExpensesByYear} />
			{/* 	{getExpensesJSXContent()} */}
		</Card>
	);
}

export default Expenses;
