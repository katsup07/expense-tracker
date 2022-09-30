import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ items }) {

	if (items.length === 0) {
		return (
			<h2 className='expenses-list__fallback'>
				Found no expenses for this year.
			</h2>
		);
	}

  // else
	return (
		<ul className='expenses-list'>
			{items.map((exp) => (
				<ExpenseItem
					key={exp.id}
					date={exp.date}
					amount={exp.amount}
					title={exp.title}
				/>
			))}
		</ul>
	);
}

export default ExpensesList;
